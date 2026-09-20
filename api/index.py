import os

import resend
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)


class Contact(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(min_length=1, max_length=5000)


@app.get("/api/contact")
async def get_contact():
    return {"message": "Contact API is working"}


@app.post("/api/contact")
async def create_contact(contact: Contact):
    try:
        resend.api_key = os.environ["RESEND_API_KEY"]

        response = resend.Emails.send({
            "from": "onboarding@resend.dev",
            "to": "zidtimo@gmail.com",
            "subject": f"Portfolio contact from {contact.name}",
            "reply_to": str(contact.email),
            "text": (
                f"Name: {contact.name}\n"
                f"Email: {contact.email}\n\n"
                f"Message:\n{contact.message}"
            ),
        })

        print("RESEND RESPONSE:")
        print(response)

        return {
            "message": "Contact message sent successfully"
        }

    except Exception as error:
        print("RESEND ERROR:")
        print(error)

        raise HTTPException(
            status_code=500,
            detail="Unable to send contact message."
        )