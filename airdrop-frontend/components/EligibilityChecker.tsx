// components/EligibilityChecker.tsx
import { useState } from "react"
import { Contract, Provider, uint256 } from "starknet"

const contractAddress = "<YOUR_CONTRACT_ADDRESS>" // Replace with your contract address
const contractAbi = "<YOUR_CONTRACT_ABI>" // Replace with your contract ABI

const EligibilityChecker = () => {
  const [walletAddress, setWalletAddress] = useState("")
  const [eligible, setEligible] = useState<boolean | null>(null)
  const [error, setError] = useState<string | null>(null)

  const checkEligibility = async () => {
    setEligible(null)
    setError(null)

    try {
      const provider = new Provider({ baseUrl: "https://alpha4.starknet.io" })
      const contract = new Contract(contractAbi, contractAddress, provider)

      // Call the is_eligible function from the contract
      const { eligible } = await contract.is_eligible(walletAddress)
      setEligible(eligible === 1)
    } catch (err) {
      setError("Error fetching eligibility: " + err.message)
    }
  }

  const claimAirdrop = async () => {
    setError(null)
    if (eligible) {
      try {
        const provider = new Provider({ baseUrl: "https://alpha4.starknet.io" })
        const contract = new Contract(contractAbi, contractAddress, provider)

        // Call the claim_airdrop function
        await contract.claim_airdrop()
        alert("Airdrop claimed successfully!")
      } catch (err) {
        setError("Error claiming airdrop: " + err.message)
      }
    } else {
      alert("You are not eligible for the airdrop.")
    }
  }

  return (
    <div>
      <h1>Check Airdrop Eligibility</h1>
      <input
        type="text"
        placeholder="Enter your wallet address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
      />
      <button onClick={checkEligibility}>Check Eligibility</button>
      {eligible !== null && (
        <div>
          {eligible ? (
            <p>You are eligible for the airdrop!</p>
          ) : (
            <p>You are not eligible.</p>
          )}
          {eligible && <button onClick={claimAirdrop}>Claim Airdrop</button>}
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  )
}

export default EligibilityChecker
