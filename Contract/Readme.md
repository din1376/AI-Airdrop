## Compile and deploy

1. Compile the contract:

```bash
starknet-compile EligibilityContract.cairo --output EligibilityContract.json --abi EligibilityContract_abi.json

```

2. Deploy the contract:

```bash
starknet deploy --contract EligibilityContract.json
```

P.S: Also audit the contract once
