import "../styles/globals.css"

export const metadata = {
  title: "AI-Powered Token Airdrop",
  description: "Secure, AI-powered token distribution on Starknet.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  )
}
