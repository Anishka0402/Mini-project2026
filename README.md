🏛️ AI-Driven Smart Heritage Site Preservation & Monitoring System
Intelligent Cultural Heritage Monitoring Platform using AI and IoT
---

📌 Project Overview

Heritage monuments are continuously affected by environmental conditions, pollution, climate change, and human activity. Traditional preservation methods rely heavily on manual inspections, which are time-consuming and often detect damage too late.

This project introduces a Smart Heritage Monitoring System that uses IoT-based environmental sensing, cloud data storage, and AI-driven risk prediction to monitor monument health in real time.

The system collects environmental and structural data, analyzes it using machine learning models, and displays insights through an interactive monitoring dashboard. It also generates alerts when potential risks are detected.

The goal is to support predictive conservation and enable authorities to take preventive action before serious damage occurs.

🌍 Industry Relevance

This system can support organizations such as:

Archaeological Survey Departments

Cultural Heritage Preservation Agencies

UNESCO Heritage Conservation Programs

Government Smart City Initiatives

Research institutions studying monument preservation

🎯 Project Objectives

• Monitor environmental conditions affecting heritage structures
• Predict deterioration risks using machine learning models
• Detect abnormal activity that could indicate vandalism
• Generate alerts for conservation authorities
• Provide an interactive dashboard for heritage monitoring
• Support data-driven preservation planning

⚙️ Key System Features
📡 Environmental Monitoring (IoT Simulation)

Environmental sensors collect data about monument surroundings.

Measured parameters include:

Temperature

Humidity

Air Pollution Level

Structural Vibration

Crack Width (simulated)

Since physical hardware deployment may not be available, sensor data is simulated using Python scripts, representing IoT device behavior.

🧠 AI-Based Risk Prediction

Machine learning models analyze environmental and structural conditions to estimate deterioration risk.

Models used:

Random Forest → Predict deterioration risk level

Isolation Forest → Detect abnormal activity patterns

Example prediction output:

Risk Level: Medium
Prediction Confidence: 0.87
📊 Monitoring Dashboard

A real-time dashboard displays system analytics for conservation authorities.

Dashboard capabilities:

Live sensor readings

Environmental trends over time

Risk prediction indicators

Site Health Index visualization

Alert notifications

The dashboard is built using Streamlit for quick and interactive visualization.

🚨 Alert System

The system automatically generates alerts when risk thresholds are exceeded.

Example alerts:

Alert Level	Meaning
Low	Minor environmental variation
Medium	Possible deterioration risk
High	Structural anomaly detected
Critical	Immediate intervention required

Alerts appear on the dashboard and can optionally trigger email notifications.

🧠 Site Health Index (SHI)

The Site Health Index (SHI) summarizes the overall health of a monument.

SHI = (Environmental Score × 0.3)
    + (Structural Score × 0.4)
    + (AI Risk Score × 0.3)

Example output:

Site Health Index: 82%
Status: Stable

This metric helps conservation teams compare health across multiple heritage sites.

🏗️ System Architecture
IoT Sensor Simulation
       │
       ▼
FastAPI Backend (Data Ingestion API)
       │
       ▼
SQLite Database (Sensor Data Storage)
       │
       ▼
AI Risk Prediction Engine
(Random Forest + Isolation Forest)
       │
       ▼
Alert Detection Logic
       │
       ▼
Streamlit Dashboard
(Real-Time Monitoring & Visualization)
👥 Team Members & Work Division

The project is developed by three members with equal contribution (~33% each).

Each member is responsible for a different layer of the system.

👩‍💻 Anishka Jain
IoT Simulation & AI Model Developer

Module: IoT Data Generation + Machine Learning

Responsibilities

Design environmental sensor simulation

Generate synthetic sensor data for testing

Build preprocessing pipeline for sensor data

Train machine learning models for risk prediction

Implement anomaly detection model

Evaluate model performance (accuracy, precision, recall)

Provide AI prediction endpoint for backend integration

Deliverables

✔ Sensor simulation scripts
✔ Data preprocessing pipeline
✔ Trained AI models
✔ Model evaluation report

👩‍💻 Bhoomika Agarwal
Backend & Cloud System Developer

Module: Backend APIs + Database + Alert System

Responsibilities

Design system backend architecture

Build REST APIs using FastAPI

Implement sensor data ingestion endpoints

Design and manage SQLite database

Integrate AI prediction model with backend

Implement alert generation logic

Provide API endpoints for dashboard access

Deliverables

✔ Backend REST API
✔ Database schema design
✔ AI integration with backend
✔ Alert detection system

👩‍💻 Shraddha Singh
Dashboard Developer & Documentation Lead

Module: Visualization Dashboard + Documentation

Responsibilities

Design monitoring dashboard layout

Build dashboard using Streamlit

Implement charts and visual analytics

Display AI risk predictions and alerts

Implement Site Health Index visualization

Prepare system documentation and user manual

Deliverables

✔ Interactive monitoring dashboard
✔ Data visualization components
✔ System documentation

🛠️ Technology Stack

To ensure efficient development within the project timeline, the system uses a minimal yet powerful technology stack.

IoT Layer

Python Sensor Simulation

REST API communication

AI / Machine Learning

Python

Pandas

Scikit-learn

Random Forest

Isolation Forest

Backend

FastAPI

Python

REST API architecture

Database

SQLite

Dashboard

Streamlit

Plotly / Matplotlib for visualization

Development Tools

Git & GitHub

VS Code

📁 Project Structure
heritage-ai-system
│
├── iot
│   └── sensor_simulator.py
│
├── ai_models
│   ├── train_model.py
│   └── risk_prediction.py
│
├── backend
│   └── api.py
│
├── dashboard
│   └── app.py
│
├── data
│   └── sensor_data.csv
│
└── docs
    └── architecture.md
🚀 Installation
Clone Repository
git clone https://github.com/your-repo/heritage-ai-system.git
cd heritage-ai-system
Install Dependencies
pip install -r requirements.txt
Run Backend Server
uvicorn backend.api:app --reload
Run Dashboard
streamlit run dashboard/app.py
📊 Expected Outcomes

• Functional AI-powered heritage monitoring system
• Real-time monitoring dashboard
• Deterioration risk prediction model
• Alert detection system
• Heritage site health analytics

⭐ Future Enhancements

Computer vision based crack detection

Drone-based monument inspection

Satellite environmental monitoring

Multi-site heritage monitoring platform

📜 License

This project is released under the MIT License.
