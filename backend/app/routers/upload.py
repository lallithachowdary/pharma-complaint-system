from fastapi import APIRouter, UploadFile, File, HTTPException
from pypdf import PdfReader
import tempfile
import os

from app.ai.llm import extract_complaint_details

router = APIRouter(
    prefix="/upload",
    tags=["Upload"]
)


@router.post("/")
async def upload_pdf(file: UploadFile = File(...)):
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp:
            temp.write(await file.read())
            temp_path = temp.name

        reader = PdfReader(temp_path)

        text = ""

        for page in reader.pages:
            page_text = page.extract_text()

            if page_text:
                text += page_text + "\n"

        os.remove(temp_path)

        if text == "":
            raise HTTPException(
                status_code=400,
                detail="No text found."
            )

        result = extract_complaint_details(text)

        return result

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )