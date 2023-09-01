"use client"

export default function RegisterForm({inputs}) {
  return (
    <section className="absolute right-0 left-0 top-28 p-4 lg:bg-[#242839]  lg:bg-opacity-30 rounded-lg lg:ml-6 lg:w-1/3">
      <h1 className="text-white text-3xl text-center font-bold mb-4">Sign Up</h1>
      <form className="flex flex-col items-center justify-center">
        {inputs.map((input) =>{
            return(
                <div key={input.name} className="sm:w-3/4 md:w-1/2 lg:w-4/5">
                    <label htmlFor={input.type} className="block" >{input.name}</label>
                    <input type={input.type} id={input.id ? input.id : input.type} placeholder={input.example} className="rounded-md mb-4 text-gray-950 p-1 sm:w-3/4 lg:w-full" />
                </div>
            )
        })}
        <button className="bg-[#ba8d8a] hover:bg-[#cfb8b7] text-white p-2 rounded-md">
          Sign Up
        </button>
      </form>
      </section>
  )
}
