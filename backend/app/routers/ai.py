from fastapi import APIRouter
from app.ai.llm import extract_complaint_details

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)

@router.post("/extract")
def extract(data: dict):
    text = data.get("text", "")

    result = extract_complaint_details(text)

    return result