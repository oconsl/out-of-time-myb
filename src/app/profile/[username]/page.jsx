export default function ProfilePage ({ params }) {
  return (
    <>
      <h1>Profile page 🤔</h1>
      <p>{params.username}</p>
    </>
  )
}