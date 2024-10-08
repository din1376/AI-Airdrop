# POC of AI-Powered Token Airdrop Selector

This project is an AI-powered application designed to determine user eligibility for a token airdrop based on on-chain transaction data. Built using Next.js and TypeScript for the frontend, and Starknet with Cairo for the smart contract, this application allows users to check their eligibility and claim tokens.

## Features

- **Check Airdrop Eligibility**: Users can input their wallet addresses to check if they are eligible for the token airdrop based on transaction history.
- **Claim Airdrop**: Eligible users can claim their tokens directly through the application.
- **AI Integration**: Uses K-means clustering to analyze user transaction data and determine eligibility.

## Tech Stack

- **Frontend**: Next.js, TypeScript, React
- **Smart Contract**: Starknet, Cairo
- **AI**: Python, Scikit-learn (K-means clustering)
- **Data Storage**: CSV for mock user data

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- Python (v3.6 or higher)

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/din1376/AI-Airdrop.git
   cd airdrop-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the `EligibilityChecker.tsx` component with your contract address and ABI.

### AI Component Setup

1. Set up a virtual environment:
   ```bash
   python -m venv airdrop-selector
   cd airdrop-selector
   source bin/activate  # On Windows, use "Scripts\activate"
   ```

2. Install required libraries:
   ```bash
   pip install pandas scikit-learn
   ```

3. Place the `user_data.csv` file in the same directory as your AI script.

4. Run the AI script:
   ```bash
   python airdrop_selector.py
   ```

## Running the Application

1. Start the Next.js development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter your wallet address to check eligibility and claim tokens if eligible.

## Mock Data

The project includes a mock dataset located in `user_data.csv`. This dataset contains randomly generated wallet addresses, transaction counts, and total values for testing purposes.
