import WalletConnector from "../components/WalletConnector"
import EligibilityCheck from "../components/EligibilityCheck"
import ClaimAirdrop from "../components/ClaimAirdrop"

export default function HomePage() {
  return (
    <div className="w-full max-w-4xl p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        AI-Powered Token Airdrop
      </h1>
      <WalletConnector />
      <div className="mt-8">
        <EligibilityCheck />
      </div>
      <div className="mt-8">
        <ClaimAirdrop />
      </div>
    </div>
  )
}
