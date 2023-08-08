export default function DashboardPage ({ params }) {
  return (
    <>
      <h1>Dashboard page 🤔</h1>
      <p>{params.username}</p>
    </>
  )
}