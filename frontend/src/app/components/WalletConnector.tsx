import { useState } from "react"
import { connect } from "starknet"

export default function WalletConnector() {
  const [address, setAddress] = useState<string | null>(null)

  const connectWallet = async () => {
    const wallet = await connect()
    if (wallet) setAddress(wallet.selectedAddress)
  }

  return (
    <div>
      {address ? (
        <p>Connected: {address}</p>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  )
}
