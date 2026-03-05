# 🏛️ Project 24 — AI-Driven Smart Heritage Site Preservation & Monitoring System

**Intelligent Cultural Heritage Intelligence Platform Using AI and IoT for Conservation and Risk Detection**

---

## 📌 Project Overview

This project designs a smart heritage monitoring system that tracks environmental and structural conditions of monuments and artifacts to predict deterioration and vandalism risks using AI-based models. The platform provides real-time dashboards for conservation authorities, enabling data-driven preservation planning.

| Field | Details |
|---|---|
| **Industry** | Archaeological Organizations, Government Heritage Bodies, Cultural Preservation Firms |
| **Category** | AI + IoT + Cloud Platform |
| **Team Size** | 3 Members (Equal Contribution) |
| **Duration** | 4 Months / 16 Weeks |

---

## 🎯 Objectives

- Monitor environmental impact on heritage structures via IoT sensor networks
- Predict deterioration and vandalism risks using AI/ML models
- Generate real-time conservation alerts through multi-channel pipelines
- Visualize site health analytics through an interactive conservation dashboard
- Support preservation planning with documentation and strategy reports

---

## ⚙️ System Requirements

- Environmental and structural sensing IoT system
- AI-based risk assessment engine
- Cloud-based conservation dashboard
- Alert and reporting system
- Secure and scalable architecture

---

## 🏆 Expected Outcomes

| Outcome | Lead |
|---|---|
| Functional AI-powered heritage preservation system | All Three Members |
| Conservation analytics dashboard | Shraddha Singh |
| Risk prediction performance report | Anishka Jain + Shraddha Singh |
| Cultural preservation strategy document | Shraddha Singh |
| Alert and reporting system | Bhoomika Agarwal |
| Secure and scalable cloud architecture | Bhoomika Agarwal |

---

## 👥 Team & Workload Division

### 🔹 Anishka Jain — IoT System Architect & AI/ML Engineer
**Contribution: 33.3% | Module: IoT Sensing Layer + AI Risk Engine**

Anishka owns the hardware and intelligence layer of the system — the sensors that collect data and the AI models that interpret it.

**Core Responsibilities:**

| Task | Description |
|---|---|
| **IoT Architecture Design** | Design complete sensor network topology. Select sensors: DHT22 (temperature/humidity), MQ-series (air quality), accelerometers (vibration), UV sensors, crack displacement sensors. Define MQTT/CoAP protocols and edge preprocessing pipelines. |
| **Sensor Hardware Setup** | Configure Raspberry Pi / Arduino IoT nodes. Program firmware in MicroPython/C++. Implement edge-level noise filtering, data normalization, and local buffering. Set up LoRaWAN/Wi-Fi for remote connectivity. |
| **Data Preprocessing Pipeline** | Build data ingestion pipelines from IoT nodes to cloud. Handle missing values, outliers, and time-series alignment. Create feature engineering scripts for deterioration-relevant features. |
| **AI Deterioration Model** | Develop and train supervised ML models — Random Forest, LSTM, XGBoost — to predict stone/wood/metal deterioration from environmental history. Target: AUC > 0.88. |
| **Vandalism Risk Detection** | Build anomaly detection module using Isolation Forest to flag unusual activity: unauthorized access, sudden structural shocks, night-time vibration anomalies. |
| **Model Evaluation** | Conduct cross-validation, confusion matrix analysis, feature importance ranking. Generate Risk Prediction Performance Report with AUC, precision, recall, and F1-score. |
| **Cloud Integration** | Collaborate with Bhoomika to ensure IoT streams are ingested via AWS IoT Core. Expose trained model as REST API endpoint for backend and dashboard consumption. |

**Key Deliverables:**
- ✅ IoT Sensor Network Architecture Diagram
- ✅ Configured sensor nodes with firmware code
- ✅ Data preprocessing & feature engineering scripts
- ✅ Trained AI deterioration prediction model
- ✅ Vandalism anomaly detection module
- ✅ Risk Prediction Performance Report
- ✅ Model training notebooks & evaluation metrics
- ✅ REST API endpoint for AI predictions

**Technologies & Tools:**
`Python 3.x` `TensorFlow/Keras` `Scikit-learn` `XGBoost` `MQTT/CoAP` `Raspberry Pi 4` `Arduino` `LoRaWAN` `AWS IoT Core` `Edge AI`

**Timeline:**
```
Weeks 1–3   → Sensor Setup
Weeks 4–6   → Data Pipeline
Weeks 7–11  → Model Training
Weeks 12–14 → Integration
Weeks 15–16 → Evaluation
```

---

### 🔹 Bhoomika Agarwal — Cloud Architect & Backend API Developer
**Contribution: 33.3% | Module: Cloud Infrastructure + Backend API + Alert System**

Bhoomika owns the backbone of the system — the cloud infrastructure that stores and processes all data, the REST APIs that connect every component, and the alert pipeline that notifies authorities of risks.

**Core Responsibilities:**

| Task | Description |
|---|---|
| **Cloud Architecture Design** | Design and deploy secure, scalable cloud architecture on AWS. Set up VPCs, IAM roles, auto-scaling groups, and load balancers. Services: AWS IoT Core, RDS PostgreSQL, TimescaleDB, S3, Lambda. |
| **Database Schema & Management** | Design relational schema for sensor readings, site metadata, AI predictions, alert logs, and user accounts. Implement TimescaleDB for time-series storage. Set up automated backups, read replicas, and partitioning. |
| **RESTful API Development** | Build comprehensive FastAPI/Node.js REST API with endpoints for sensor ingestion, AI result retrieval, alert management, user auth, site management, and report generation. Full OpenAPI/Swagger documentation. |
| **Real-time Alert System** | Build event-driven alert pipeline using Apache Kafka / AWS SNS+SQS. Trigger multi-channel notifications: email (AWS SES), SMS (Twilio), push, and in-app alerts. Four severity levels: Low, Medium, High, Critical. |
| **Security & Authentication** | Implement JWT-based authentication and Role-Based Access Control (RBAC). Set up HTTPS/TLS, API rate limiting, SQL injection prevention, input validation, and audit logging. Full OWASP Top 10 compliance. |
| **Data Pipeline Orchestration** | Set up Apache Airflow / AWS Step Functions for daily batch jobs: model retraining triggers, automated report generation, data archival, and DB maintenance. Monitor with CloudWatch. |
| **Integration & Load Testing** | Integrate Anishka's AI API into the backend pipeline. Provide stable, documented endpoints to Shraddha. Write integration and load tests using Locust — target: 500+ concurrent IoT device connections. |

**Key Deliverables:**
- ✅ Cloud architecture diagram (AWS/Azure)
- ✅ Database schema — ER diagram + migrations
- ✅ REST API with full Swagger documentation
- ✅ Real-time multi-channel alert system
- ✅ JWT authentication + RBAC system
- ✅ CI/CD pipeline (GitHub Actions)
- ✅ Load testing report (500+ connections)
- ✅ Security audit & compliance report

**Technologies & Tools:**
`AWS (IoT Core, RDS, S3, Lambda, SNS)` `FastAPI` `Node.js` `PostgreSQL` `TimescaleDB` `Apache Kafka` `Docker` `Kubernetes (EKS)` `Redis` `GitHub Actions` `Locust` `JWT/RBAC`

**Timeline:**
```
Weeks 1–3   → Architecture
Weeks 4–7   → DB & API
Weeks 8–10  → Alert System
Weeks 11–13 → Security/CI
Weeks 14–16 → Testing
```

---

### 🔹 Shraddha Singh — Frontend Developer & Documentation Lead
**Contribution: 33.4% | Module: Dashboard + Documentation + QA + Project Coordination**

Shraddha owns the face of the system — the conservation dashboard that makes data visible and actionable, the full technical documentation suite, all QA testing, and overall project coordination.

**Core Responsibilities:**

| Task | Description |
|---|---|
| **Dashboard UI/UX Design** | Design wireframes and high-fidelity Figma mockups for the cloud-based conservation dashboard. Multi-panel layout: sensor heatmaps, site health gauges, risk indicators, alert timelines, historical charts, GIS maps. WCAG 2.1 accessibility compliant. |
| **Frontend Development** | Implement full dashboard in React.js with TypeScript. Integrate with Bhoomika's REST API using Axios/React Query. Implement WebSocket for real-time updates. Use Redux Toolkit for state management. Build reusable component library in Storybook. |
| **Data Visualization & GIS** | Build interactive charts using Recharts and D3.js: temperature trends, vibration spectra, humidity heatmaps, AI risk time series, alert histograms. Integrate Leaflet.js / Mapbox GL for geographic heritage site mapping with risk overlays. |
| **Site Health Index (SHI)** | Develop composite SHI scoring system combining environmental sensor data, structural readings, and AI risk scores into a single 0–100% health percentage per site. Build cross-site comparison panels. |
| **QA Testing** | Write E2E test suites using Cypress for all dashboard workflows. Perform Jest unit testing for React components. Cross-browser testing: Chrome, Firefox, Safari, Edge. Full system integration testing with Anishka and Bhoomika. |
| **Technical Documentation** | Author complete system docs: System Architecture Document, API Usage Guide, IoT Setup Manual, User Manual, UML diagrams (class, sequence, deployment), and the Cultural Preservation Strategy Document. |
| **Project Coordination** | Maintain Gantt chart and track milestone completion. Facilitate weekly stand-ups. Prepare final presentation slides and demo video. Compile the Risk Prediction Performance Report. Ensure all deliverables are submission-ready by Week 16. |

**Key Deliverables:**
- ✅ Figma wireframes & UI/UX prototypes
- ✅ Functional conservation dashboard (React.js)
- ✅ GIS site maps with risk overlays
- ✅ Site Health Index (SHI) analytics module
- ✅ Cypress E2E test suite + Jest unit tests
- ✅ System Architecture Document (UML)
- ✅ Cultural Preservation Strategy Document
- ✅ User Manual for conservation authorities
- ✅ Final presentation deck & demo video

**Technologies & Tools:**
`React.js` `TypeScript` `Recharts` `D3.js` `Leaflet.js` `Mapbox GL` `Figma` `Tailwind CSS` `Redux Toolkit` `WebSocket` `Cypress` `Jest` `Storybook`

**Timeline:**
```
Weeks 1–3   → UI/UX Design
Weeks 4–7   → Core Dashboard
Weeks 8–10  → Charts & GIS
Weeks 11–14 → Testing & Docs
Weeks 15–16 → Final Polish
```

---

## 🔗 System Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                      HERITAGE MONITORING SYSTEM                   │
├──────────────────────────────────────────────────────────────────┤
│                                                                    │
│  [IoT Layer - Anishka]         [Cloud Layer - Bhoomika]           │
│  ┌─────────────────┐           ┌────────────────────────┐         │
│  │ DHT22 Sensors   │──MQTT──▶  │ AWS IoT Core           │         │
│  │ Accelerometers  │           │ RDS PostgreSQL          │         │
│  │ UV Sensors      │           │ TimescaleDB             │         │
│  │ Crack Sensors   │           │ S3 Storage              │         │
│  │ Air Quality     │           │ Lambda Functions        │         │
│  └────────┬────────┘           └──────────┬─────────────┘         │
│           │                               │                        │
│  ┌────────▼────────┐           ┌──────────▼─────────────┐         │
│  │ AI Risk Engine  │──REST──▶  │ FastAPI Backend         │         │
│  │ LSTM / XGBoost  │           │ Alert System (Kafka)    │         │
│  │ Isolation Forest│           │ JWT Auth / RBAC         │         │
│  └─────────────────┘           └──────────┬─────────────┘         │
│                                            │                       │
│                               ┌────────────▼─────────────┐        │
│                               │  Dashboard - Shraddha     │        │
│                               │  React.js + TypeScript    │        │
│                               │  GIS Maps + SHI Module    │        │
│                               │  Real-time WebSocket      │        │
│                               └──────────────────────────┘        │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🤝 Team Collaboration Matrix

| Integration Point | Anishka Jain | Bhoomika Agarwal | Shraddha Singh |
|---|---|---|---|
| **IoT Data to Cloud** | Provides MQTT data stream | Configures IoT Core intake | Monitors live in dashboard |
| **AI Predictions to API** | Exposes model as REST endpoint | Routes predictions to DB & alerts | Displays risk scores in UI |
| **Alert Trigger** | Sets risk thresholds in model | Sends via Kafka/SNS/Twilio | Shows alert timeline in UI |
| **System Testing** | Tests sensor + model accuracy | Tests API load and security | Tests full user workflows (E2E) |
| **Documentation** | IoT setup + AI technical specs | API guide + cloud architecture | User manual + strategy doc |
| **Final Demo** | Live sensor feed + model output | Cloud console + API demo | Full dashboard walkthrough |

---

## 📅 16-Week Milestone Calendar

| Milestone | Target Week | Owner |
|---|---|---|
| IoT nodes operational and sending live sensor data | Week 4 | Anishka |
| Cloud infrastructure fully deployed on AWS | Week 4 | Bhoomika |
| End-to-end data pipeline: sensor to database working | Week 7 | Anishka + Bhoomika |
| AI deterioration model trained (AUC > 0.85) | Week 11 | Anishka |
| REST API complete with full Swagger documentation | Week 10 | Bhoomika |
| Multi-channel alert system live and tested | Week 11 | Bhoomika |
| Conservation Dashboard v1 launched with core panels | Week 11 | Shraddha |
| GIS site maps + Site Health Index analytics live | Week 13 | Shraddha |
| Full system integration testing complete | Week 14 | All Three Members |
| All documentation complete and reviewed | Week 15 | Shraddha (lead) |
| Risk Prediction Performance Report submitted | Week 15 | Anishka + Shraddha |
| Final demo recording and project submission | Week 16 | All Three Members |

---

## 🛠️ Full Tech Stack

| Layer | Technologies |
|---|---|
| **IoT / Hardware** | Raspberry Pi 4, Arduino, DHT22, MQ-series, LoRaWAN, MQTT, CoAP |
| **AI / ML** | Python, TensorFlow/Keras, Scikit-learn, XGBoost, LSTM, Isolation Forest |
| **Cloud** | AWS (IoT Core, RDS, S3, Lambda, SNS, SES), TimescaleDB, Redis |
| **Backend** | FastAPI, Node.js, PostgreSQL, Apache Kafka, Docker, Kubernetes |
| **Security** | JWT, RBAC, HTTPS/TLS, OWASP Top 10, GitHub Actions CI/CD |
| **Frontend** | React.js, TypeScript, Redux Toolkit, WebSocket, Axios |
| **Visualization** | Recharts, D3.js, Leaflet.js, Mapbox GL |
| **Testing** | Cypress, Jest, Locust, Storybook |
| **Design** | Figma, Tailwind CSS |

---

## 📁 Project Structure

```
heritage-ai-system/
├── iot/                        # Anishka — IoT Layer
│   ├── firmware/               # Raspberry Pi / Arduino firmware
│   ├── preprocessing/          # Feature engineering scripts
│   └── ai_models/              # Trained ML models + notebooks
│
├── backend/                    # Bhoomika — Cloud & API Layer
│   ├── api/                    # FastAPI REST endpoints
│   ├── db/                     # Schema migrations, TimescaleDB
│   ├── alerts/                 # Kafka/SNS alert pipeline
│   ├── auth/                   # JWT + RBAC system
│   └── infra/                  # AWS IaC, Docker, K8s configs
│
├── dashboard/                  # Shraddha — Frontend Layer
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   ├── pages/              # Dashboard panels
│   │   ├── charts/             # D3.js + Recharts visualizations
│   │   └── gis/                # Leaflet/Mapbox GIS maps
│   └── cypress/                # E2E test suites
│
└── docs/                       # Shraddha — Documentation
    ├── system-architecture.md
    ├── api-guide.md
    ├── iot-setup-manual.md
    ├── user-manual.md
    └── cultural-preservation-strategy.md
```

---

## 📊 Contribution Summary

| Member | Contribution | Module |
|---|---|---|
| **Anishka Jain** | 33.3% | IoT Sensing Layer + AI Risk Engine |
| **Bhoomika Agarwal** | 33.3% | Cloud Infrastructure + Backend API + Alert System |
| **Shraddha Singh** | 33.4% | Dashboard + Documentation + QA + Coordination |

> All three modules are tightly integrated and interdependent — the system cannot function without all three. Anishka's IoT sensors and AI models generate the intelligence. Bhoomika's cloud backend stores, processes, and distributes it securely. Shraddha's dashboard makes it visible and actionable for conservation authorities.

---

*Project 24 | AI-Driven Smart Heritage Site Preservation & Monitoring System | Team of 3 | 16 Weeks*
