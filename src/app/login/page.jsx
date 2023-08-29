'use client'
import { useForm } from '@/hooks/useForm'
import { useUser } from '@/store/useUser'
import Link from 'next/link'

export default function LoginPage() {
  const { login } = useUser()
  const [formLoginValues, handleLoginInputChange] = useForm({
    username: "",
    password: "",
  })
  const { username, password } = formLoginValues

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      username,
      password
    }
    login(body)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario
          <input type="text" name="username" value={username} onChange={handleLoginInputChange} />
        </label>
        <label>
          Contraseña
          <input type="password" name="password" value={password} onChange={handleLoginInputChange} />
        </label>
        <button>Login</button>
        <Link href={'/sign-up'}>Registrarse</Link>
      </form>
      <section>
        <p>video</p>
      </section>
    </>
  )
}