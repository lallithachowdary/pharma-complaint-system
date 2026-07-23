import os
import json

from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def extract_complaint_details(text):

    prompt = f"""
You are an expert Pharmaceutical Complaint AI.

Extract the complaint into JSON.

Return ONLY JSON.

{{
"complaint_source":"",
"customer_name":"",
"product_name":"",
"product_strength":"",
"batch_number":"",
"manufacturing_date":"",
"expiry_date":"",
"quantity_affected":"",
"complaint_type":"",
"complaint_date":"",
"description":"",
"severity":"",
"priority":""
}}

Complaint:

{text}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0
    )

    answer = response.choices[0].message.content

    answer = answer.replace("```json", "")
    answer = answer.replace("```", "")
    answer = answer.strip()

    return json.loads(answer)