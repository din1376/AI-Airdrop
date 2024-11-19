import { useState } from "react"
import axios from "axios"

export default function EligibilityCheck() {
  const [address, setAddress] = useState<string>("")
  const [eligible, setEligible] = useState<boolean | null>(null)

  const checkEligibility = async () => {
    const response = await axios.get(`/api/eligibility/${address}`)
    setEligible(response.data.eligible)
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
        className="bg-green-500 text-white px-4 py-2 rounded ml-2"
        onClick={checkEligibility}
      >
        Check Eligibility
      </button>
      {eligible !== null && (
        <p className="mt-2">
          {eligible ? "You are eligible!" : "You are not eligible."}
        </p>
      )}
    </div>
  )
}
