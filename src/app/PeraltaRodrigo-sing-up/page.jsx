import Image from "next/image"
import watchImage from '@/assets/reloj-op1.png'
import bgImage from '@/assets/bgRegister.png'
import RegisterForm from "@/components/RegisterForm";

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
      <RegisterForm inputs={INPUTS} />
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

         