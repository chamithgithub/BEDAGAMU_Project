from fastapi import FastAPI, File, UploadFile,Request
from ml_model import detect
app = FastAPI()


@app.get("/backend")
def read_root():
    return {"Hello": "World"}

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile=File(...)):
    out_reponse = detect(file.file)    
    return {
        "objects":out_reponse
    }