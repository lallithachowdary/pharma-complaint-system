from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..database import get_db
from ..schemas import ComplaintCreate
from .. import crud

router = APIRouter(
    prefix="/complaints",
    tags=["Complaints"]
)

@router.post("/")
def create_complaint(
    complaint: ComplaintCreate,
    db: Session = Depends(get_db)
):
    return crud.create_complaint(db, complaint)

@router.get("/")
def get_all_complaints(
    db: Session = Depends(get_db)
):
    return crud.get_all_complaints(db)