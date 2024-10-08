import pandas as pd
from sklearn.cluster import KMeans

# Load data
data = pd.read_csv('user_data.csv')  # Make sure the CSV is in the same folder

# Select features for clustering
X = data[['transaction_count', 'total_value']]

# K-means clustering
kmeans = KMeans(n_clusters=2, random_state=0).fit(X)
data['group'] = kmeans.labels_

# Let's assume users in group 0 are eligible
eligible_users = data[data['group'] == 0]['wallet_address'].tolist()

# Save eligible users to a file
with open('eligible_users.txt', 'w') as f:
    for user in eligible_users:
        f.write(f"{user}\n")

print("Eligible users saved to eligible_users.txt")
