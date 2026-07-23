from sqlalchemy.orm import Session
from app import models, schemas


def create_complaint(db: Session, complaint: schemas.ComplaintCreate):
    db_complaint = models.Complaint(
        complaint_source=complaint.complaint_source,
        customer_name=complaint.customer_name,
        product_name=complaint.product_name,
        product_strength=complaint.product_strength,
        batch_number=complaint.batch_number,
        manufacturing_date=complaint.manufacturing_date,
        expiry_date=complaint.expiry_date,
        quantity_affected=complaint.quantity_affected,
        complaint_type=complaint.complaint_type,
        complaint_date=complaint.complaint_date,
        description=complaint.description,
        severity=complaint.severity,
        priority=complaint.priority,
    )

    db.add(db_complaint)
    db.commit()
    db.refresh(db_complaint)

    return db_complaint


def get_all_complaints(db: Session):
    return db.query(models.Complaint).all()


def get_complaint(db: Session, complaint_id: int):
    return (
        db.query(models.Complaint)
        .filter(models.Complaint.id == complaint_id)
        .first()
    )


def update_complaint(
    db: Session,
    complaint_id: int,
    complaint: schemas.ComplaintCreate,
):
    db_complaint = get_complaint(db, complaint_id)

    if not db_complaint:
        return None

    db_complaint.complaint_source = complaint.complaint_source
    db_complaint.customer_name = complaint.customer_name
    db_complaint.product_name = complaint.product_name
    db_complaint.product_strength = complaint.product_strength
    db_complaint.batch_number = complaint.batch_number
    db_complaint.manufacturing_date = complaint.manufacturing_date
    db_complaint.expiry_date = complaint.expiry_date
    db_complaint.quantity_affected = complaint.quantity_affected
    db_complaint.complaint_type = complaint.complaint_type
    db_complaint.complaint_date = complaint.complaint_date
    db_complaint.description = complaint.description
    db_complaint.severity = complaint.severity
    db_complaint.priority = complaint.priority

    db.commit()
    db.refresh(db_complaint)

    return db_complaint


def delete_complaint(db: Session, complaint_id: int):
    db_complaint = get_complaint(db, complaint_id)

    if not db_complaint:
        return None

    db.delete(db_complaint)
    db.commit()

    return {"message": "Complaint deleted successfully"}