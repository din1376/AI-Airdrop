// pages/index.tsx
import Head from "next/head"
import EligibilityChecker from "../../components/EligibilityChecker"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Airdrop Eligibility Checker</title>
        <meta
          name="description"
          content="Check your eligibility for the token airdrop."
        />
      </Head>
      <main>
        <EligibilityChecker />
      </main>
    </div>
  )
}

export default Home
