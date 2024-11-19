from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np
from starknet_py.net.full_node_client import FullNodeClient
from starknet_py.contract import Contract

app = FastAPI()

# Load pre-trained AI model
model = joblib.load("models/eligibility_model.pkl")

# Starknet details
NODE_URL = "https://alpha4.starknet.io"
ELIGIBILITY_CONTRACT = "0x1234..."  # Replace with contract address
PRIVATE_KEY = "your_private_key"

class EligibilityRequest(BaseModel):
    address: str
    transactions: int
    unique_contracts: int
    token_balance: int

@app.post("/check-eligibility/")
async def check_eligibility(request: EligibilityRequest):
    features = np.array([[request.transactions, request.unique_contracts, request.token_balance]])
    eligibility = model.predict(features)[0]
    return {"address": request.address, "eligible": int(eligibility)}

@app.post("/set-eligibility/")
async def set_eligibility(request: EligibilityRequest):
    client = FullNodeClient(node_url=NODE_URL)
    contract = await Contract.from_address(ELIGIBILITY_CONTRACT, client)
    eligibility = model.predict(np.array([[request.transactions, request.unique_contracts, request.token_balance]]))[0]
    tx = await contract.functions["set_eligibility"].invoke(
        user=int(request.address, 16), eligible=eligibility, signer=PRIVATE_KEY
    )
    await tx.wait_for_acceptance()
    return {"tx_hash": tx.hash, "eligible": eligibility}
