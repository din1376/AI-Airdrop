import pandas as pd
import numpy as np

# Generate mock data
np.random.seed(42)
data = {
    "transactions": np.random.randint(1, 50, 100),
    "unique_contracts": np.random.randint(1, 20, 100),
    "token_balance": np.random.randint(1, 1000, 100),
    "eligibility": np.random.choice([0, 1], 100, p=[0.6, 0.4])  # 40% eligible
}

df = pd.DataFrame(data)
df.to_csv("training_data.csv", index=False)
print("Training data saved to training_data.csv")
