from fastapi import FASTAPI
import uvicorn

app = FastAPI()

@aap.get("/")
async def read_message():
    return {"message" : "Hello World"}