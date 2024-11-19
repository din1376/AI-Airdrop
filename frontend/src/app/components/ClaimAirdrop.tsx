import axios from "axios"
import { useState } from "react"

export default function ClaimAirdrop() {
  const [address, setAddress] = useState<string>("")
  const [status, setStatus] = useState<string | null>(null)

  const claimAirdrop = async () => {
    const response = await axios.post("/api/claim", { address })
    setStatus(response.data.status)
  }

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Enter wallet address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border px-4 py-2 rounded"
      />
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded ml-2"
        onClick={claimAirdrop}
      >
        Claim Airdrop
      </button>
      {status && <p className="mt-2">{status}</p>}
    </div>
  )
}
