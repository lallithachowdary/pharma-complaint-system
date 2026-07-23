from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

from app.routers import complaints
from app.routers import upload
from app.routers import ai

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Pharmaceutical Complaint System"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(complaints.router)
app.include_router(upload.router)
app.include_router(ai.router)


@app.get("/")
def home():
    return {
        "message": "Backend Running Successfully"
    }