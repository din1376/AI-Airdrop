# **AI-Powered Token Airdrop on Starknet**

A production-ready decentralized application (dApp) for managing token airdrops using AI to determine user eligibility. Built on Starknet with a modern Next.js frontend.

---

## **Features**

1. **Wallet Connection**: Allows users to connect their Starknet wallet.
2. **Eligibility Check**: Uses AI to analyze wallet activity and determine eligibility.
3. **Claim Tokens**: Eligible users can claim their airdrop tokens securely.
4. **Scalable Architecture**: Modular structure with a modern `src` folder setup for easy maintenance.

---

## **Tech Stack**

### **Frontend**

- **Next.js** (App Directory)
- **TypeScript**
- **Tailwind CSS**

### **Backend**

- **FastAPI** (Python-based API)
- **Machine Learning**: `scikit-learn` for AI eligibility prediction

### **Smart Contract**

- **Cairo** (Starknet)

---

## **Project Structure**

```plaintext
frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Global layout for the app
│   │   ├── page.tsx            # Homepage
│   │   │
│   │   │
│   │   │
│   ├── components/
│   │   ├── WalletConnector.tsx # Wallet connection logic
│   │   ├── EligibilityCheck.tsx# Check eligibility form
│   │   ├── ClaimAirdrop.tsx    # Claim airdrop form
│   ├── styles/
│   │   ├── globals.css         # Global CSS with Tailwind
│
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Frontend dependencies
```

---

## **Setup and Installation**

### **Prerequisites**

- Node.js (v18+)
- Python (v3.10+)
- Starknet Wallet (e.g., Argent X)
- Cairo CLI for Starknet

### **1. Clone the Repository**

```bash
git clone https://github.com/din1376/AI-Airdrop.git
cd Ai-Airdrop
```

### **2. Install Dependencies**

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
pip install -r requirements.txt
```

---

## **Running the Application**

### **1. Start the Frontend**

```bash
cd frontend
npm run dev
```

### **2. Start the Backend**

```bash
cd backend
uvicorn main:app --reload
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:8000`.

---

## **AI Model Training**

1. **Prepare the Dataset**:
   - Include wallet activity (transactions, contracts, balances) and eligibility labels.
2. **Train the Model**:
   ```bash
   python train_model.py
   ```
3. **Save the Model**:
   - The trained model is saved as `eligibility_model.pkl` for backend inference.

---

## **Smart Contract**

### **File**: `EligibilityContract.cairo`

Deploy the contract using Starknet CLI:

```bash
starknet-compile EligibilityContract.cairo --output EligibilityContract.json --abi EligibilityContract_abi.json
starknet deploy --contract EligibilityContract.json
```

The contract manages:

- **Eligibility Storage**: Tracks user eligibility status.
- **Token Claims**: Handles token transfer logic for eligible users.

---

## **Environment Variables**

Create `.env` files for sensitive configuration.

### **Frontend (`.env.local`)**

```plaintext
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### **Backend (`.env`)**

```plaintext
MODEL_PATH=./eligibility_model.pkl
CONTRACT_ADDRESS=0xYourContractAddress
```

---

## **Deployment**

### **Frontend**

1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Deploy to your preferred hosting (e.g., Vercel, Netlify).

### **Backend**

1. Use a production-ready ASGI server like `gunicorn`:
   ```bash
   gunicorn main:app -k uvicorn.workers.UvicornWorker
   ```
2. Deploy on a cloud platform (e.g., AWS, DigitalOcean).

### **Smart Contract**

Deploy on Starknet Mainnet:

```bash
starknet deploy --network alpha-mainnet --contract EligibilityContract.json
```

---

## **License**

This project is licensed under the MIT License. See `LICENSE` for more details.
