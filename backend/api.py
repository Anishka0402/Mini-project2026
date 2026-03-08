from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session
from database import get_db, Reading

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class SensorDataRequest(BaseModel):
    monument: str
    timestamp: str
    temperature: float
    humidity: float
    air_pollution: float
    vibration: float
    crack_width: float


@app.post("/sensor-data")
def create_sensor_data(data: SensorDataRequest, db: Session = Depends(get_db)):
    reading = Reading(
        monument=data.monument,
        timestamp=data.timestamp,
        temperature=data.temperature,
        humidity=data.humidity,
        air_pollution=data.air_pollution,
        vibration=data.vibration,
        crack_width=data.crack_width,
    )
    db.add(reading)
    db.commit()
    return {"status": "ok", "message": "Data saved successfully"}


@app.get("/latest")
def get_latest_readings(db: Session = Depends(get_db)):
    from sqlalchemy import func
    
    subquery = (
        db.query(Reading.monument, func.max(Reading.id).label("max_id"))
        .group_by(Reading.monument)
        .subquery()
    )
    
    readings = (
        db.query(Reading)
        .join(subquery, Reading.id == subquery.c.max_id)
        .all()
    )
    
    return [
        {
            "id": r.id,
            "monument": r.monument,
            "timestamp": r.timestamp,
            "temperature": r.temperature,
            "humidity": r.humidity,
            "air_pollution": r.air_pollution,
            "vibration": r.vibration,
            "crack_width": r.crack_width,
        }
        for r in readings
    ]


@app.get("/readings/{monument}")
def get_monument_readings(monument: str, db: Session = Depends(get_db)):
    readings = (
        db.query(Reading)
        .filter(Reading.monument == monument)
        .order_by(Reading.id.desc())
        .limit(50)
        .all()
    )
    
    return [
        {
            "id": r.id,
            "monument": r.monument,
            "timestamp": r.timestamp,
            "temperature": r.temperature,
            "humidity": r.humidity,
            "air_pollution": r.air_pollution,
            "vibration": r.vibration,
            "crack_width": r.crack_width,
        }
        for r in readings
    ]
