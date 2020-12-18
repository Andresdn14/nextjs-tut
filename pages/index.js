import Link from "next/Link";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link href='/users'>
        Go to Users
      </Link>
      <br/>
      <Link href='/user/Bret'>
        Go to Bret
      </Link>
    </div>
  )
}
