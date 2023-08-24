import Link from "next/link";
import Image from 'next/image'
import logo from '@/assets/logo-op1.png'

export default function LoginPage() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">         
           <picture>            
            <Image src={logo} alt="Out of Time - Logo" height={'40'} />
           </picture>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User
              </label>
              <div className="mt-2">
                <input
                  id="user"
                  name="user"
                  type="text"
                  autoComplete="text"
                  placeholder="German Cano"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="German123"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              href="/sign-up"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign-Up
            </Link>
          </p>
        </div>
      </div>
      <div>
        <section className="flex w-full justify-center">
          <video width="640" height="360" controls>
            <source src="/src/assets/VideoEjemplo.mp4" type="video/mp4" />
            Tu navegador no admite el elemento de video.
          </video>
        </section>
      </div>
    </>
  );
}
