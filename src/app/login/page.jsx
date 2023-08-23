import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <form className="max-w-sm mx-auto p-4 border rounded-md shadow-md">
        <label className="block mb-2">
          Usuario
          <input type="text" name="username" className="w-full px-2 py-1 border rounded" />
        </label>
        <label className="block mb-2">
          Contraseña
          <input type="password" name="password" className="w-full px-2 py-1 border rounded" />
        </label>
        <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
          Login
        </button>
        <Link href={'/sign-up'}>Registrarse</Link>
      </form>
      <section>
        <p>video</p>
      </section>
    </>
  );
}
