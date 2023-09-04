import Link from 'next/link'

export default function LoginPage () {
  return (
    <>
      <form>
        <label>
          Usuario
          <input type="text" name="username" />
        </label>
        <label>
          Contraseña
          <input type="password" name="password" />
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