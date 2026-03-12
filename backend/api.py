from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session
from backend.database import get_db, Reading
import joblib
import numpy as np

app = FastAPI()

# Load AI models at startup
rf_model = joblib.load("ai_models/rf_model.pkl")
iso_model = joblib.load("ai_models/iso_model.pkl")

RISK_LABELS = {0: "Low", 1: "Medium", 2: "High"}

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
    # Prepare features for AI models
    features = np.array([[data.temperature, data.humidity, data.air_pollution, 
                          data.vibration, data.crack_width]])
    
    # Predict risk level using Random Forest
    risk_level = int(rf_model.predict(features)[0])
    
    # Detect anomaly using Isolation Forest (-1=anomaly, 1=normal)
    anomaly = int(iso_model.predict(features)[0])
    
    # Calculate Site Health Index (SHI)
    environmental_score = max(0, 100 - (data.air_pollution / 4) - abs(data.temperature - 25))
    structural_score = max(0, 100 - (data.crack_width * 20) - (data.vibration * 10))
    ai_score = 100 - (risk_level * 33)
    shi = round((environmental_score * 0.3) + (structural_score * 0.4) + (ai_score * 0.3), 2)
    
    # Determine alert level
    if risk_level == 2 or anomaly == -1:
        alert_level = "Critical"
    elif risk_level == 1:
        alert_level = "Warning"
    else:
        alert_level = "Normal"
    
    # Save reading with AI results
    reading = Reading(
        monument=data.monument,
        timestamp=data.timestamp,
        temperature=data.temperature,
        humidity=data.humidity,
        air_pollution=data.air_pollution,
        vibration=data.vibration,
        crack_width=data.crack_width,
        risk_level=risk_level,
        anomaly=anomaly,
        shi=shi,
    )
    db.add(reading)
    db.commit()
    
    return {
        "status": "ok",
        "message": "Data saved successfully",
        "risk_level": RISK_LABELS[risk_level],
        "anomaly": "Anomaly Detected" if anomaly == -1 else "Normal",
        "shi": shi,
        "alert_level": alert_level,
    }


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
            "risk_level": r.risk_level,
            "anomaly": r.anomaly,
            "shi": r.shi,
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
            "risk_level": r.risk_level,
            "anomaly": r.anomaly,
            "shi": r.shi,
        }
        for r in readings
    ]
