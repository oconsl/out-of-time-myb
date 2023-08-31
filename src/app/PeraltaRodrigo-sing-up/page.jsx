import Image from "next/image"
import watchImage from '@/assets/reloj-op1.png'
import bgImage from '@/assets/bgRegister.png'

const INPUTS = [
  { type: "email", name: "Email", example:"example@gmail.com" },
  { type: "text", name: "Username", example:"example123" },
  { type: "password", name: "Password", example:"******" },
  { type: "password", name: "Confirm Password", example:"******", id: "password-confirm" },
];

export const metadata = {title:"Register"}

export default function SingUpPage() {
 
    
  return (
    <main className="h-screen bg-[#242839] realtive text-center lg:text-left">
      <section className="absolute right-0 left-0 top-28 p-4 lg:bg-[#242839]  lg:bg-opacity-30 rounded-lg lg:ml-6 lg:w-1/3">
      <h1 className="text-white text-3xl text-center font-bold mb-4">Sign Up</h1>
      <form className="flex flex-col items-center justify-center">
        {INPUTS.map((input) =>{
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
      <section className="hidden lg:block">
      <Image
        src={watchImage}
        alt="Out of time"
        className="w-full h-screen object-cover"
      />  
      </section>
      <section className="block lg:hidden mr-0">
      <Image
        src={bgImage}
        alt="Out of time"
        className="w-full h-screen object-cover "
        
      />  
      </section>
    </main>
  );
}

         