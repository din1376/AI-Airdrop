import requests

def fetch_wallet_data(wallet_address):
    # Replace with actual Voyager or subgraph API
    response = requests.get(f"https://voyager.online/api/wallet/{wallet_address}")
    if response.status_code == 200:
        data = response.json()
        return {
            "transactions": data.get("total_transactions", 0),
            "unique_contracts": len(set(tx["contract_address"] for tx in data.get("transactions", []))),
            "token_balance": data.get("token_balance", 0),
        }
    return {"transactions": 0, "unique_contracts": 0, "token_balance": 0}

wallets = ["0x123...", "0x456...", "0x789..."]
dataset = [fetch_wallet_data(wallet) for wallet in wallets]
df = pd.DataFrame(dataset)
df["eligibility"] = [1, 0, 1]  # Add labels manually or use predefined logic
df.to_csv("real_data.csv", index=False)
