from sqlalchemy import Column, Integer, String, Text
from app.database import Base


class Complaint(Base):
    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)

    complaint_source = Column(String, nullable=True)
    customer_name = Column(String, nullable=True)

    product_name = Column(String, nullable=True)
    product_strength = Column(String, nullable=True)

    batch_number = Column(String, nullable=True)

    manufacturing_date = Column(String, nullable=True)
    expiry_date = Column(String, nullable=True)

    quantity_affected = Column(String, nullable=True)

    complaint_type = Column(String, nullable=True)
    complaint_date = Column(String, nullable=True)

    description = Column(Text, nullable=True)

    severity = Column(String, nullable=True)
    priority = Column(String, nullable=True)