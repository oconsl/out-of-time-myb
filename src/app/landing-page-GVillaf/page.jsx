import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/reloj-op1.png";
import logoImage from "@/assets/OIG.png";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import ReviewCard from "@/components/ReviewCard";
import Head from "next/head";
import avatar1 from "@/assets/avatar1.webp";
import avatar2 from "@/assets/avatar2.webp";
import avatar3 from "@/assets/avatar3.webp";
import screensh from "@/assets/screensh.webp";
import screensh2 from "@/assets/screensh2.webp";

const REVIEW_INFO = [
  {
    id: "review-1",
    title: "Mariana Pérez - Diseñadora Gráfica",
    content:
      "Esta herramienta ha mejorado drásticamente mi flujo de trabajo. ¡Totalmente recomendado!",
    avatar: avatar1,
  },
  {
    id: "review-2",
    title: "Luisa Fernanda - Estudiante",
    content:
      "No sé cómo trabajaba sin esto antes. ¡Gracias por ofrecer algo tan increíble!",
    avatar: avatar2,
  },
  {
    id: "review-3",
    title: "Alejandro Gómez - Emprendedor",
    content:
      "Con esta aplicación, he logrado organizar mejor mis días y optimizar mi tiempo. Es una inversión que vale la pena para cualquier profesional que busque eficiencia.",
    avatar: avatar3,
  },
];

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Head>
        <title>Out of time</title>
      </Head>

      {/* Navbar */}
      <nav className="px-6 py-4 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Image src={logoImage} alt="Logo img" width={100} />
          </div>
          <div className="space-x-4">
            <Link href="#">
              <span className="text-white hover:underline">Pricing</span>
            </Link>
            <Link href="#">
              <span className="text-white hover:underline">About</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="container mx-auto flex items-center justify-between h-full">
          <div className="w-1/2 space-y-8">
            <h1 className="text-5xl font-extrabold">
              Una gran herramienta para mejorar tu productividad
            </h1>
            <p>
              Hemos diseñado una aplicación esencial para la gestión del tiempo.
              Con una interfaz intuitiva y sencilla, te ayuda a organizar tu día
              a día, priorizar tareas y maximizar tu productividad.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 hover:shadow-md text-white px-5 py-2 rounded-lg">
                Comenzar
              </button>
              <button className="text-blue-600 hover:text-blue-700 px-5 py-2 border border-blue-600 hover:border-blue-700 rounded-lg">
                Conocé más
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Al registrarte, aceptas los Términos de Servicio.
            </p>
          </div>

          <div className="w-1/2 relative h-[100vh]">
            <Image
              src={heroImage}
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0"
            />
          </div>
        </div>
      </main>
      <ThemeSwitcher />
      <section className="flex justify-center items-center p-4  bg-black/30 w-full">
        <div className="w-full lg:w-1/2 p-4 mx-auto">
          <Image
            src={screensh}
            alt="Interfaz de Out of Time en monitor"
            // width={500}
            // height={500}
          />
        </div>
        <div className="w-full lg:w-1/2 p-4 mx-auto">
          <h2 className="text-xl font-bold mb-4">Eficiencia Visualizada</h2>
          <p>
            Sumérgete en nuestra intuitiva y atractiva interfaz, donde cada
            temporizador se presenta con claridad y precisión. "Out of Time" es
            una combinación de diseño y funcionalidad, ideal para quienes buscan
            controlar su tiempo al detalle.
          </p>
        </div>
      </section>
      <section className="flex justify-center flex-row-reverse items-center p-4 py-8 bg-black/30 w-full">
        <div className="w-full lg:w-1/2 p-4 mx-auto">
          <Image
            src={screensh2}
            alt="Diseño detallado de Out of Time"
            // width={500}
            // height={500}
          />
        </div>
        <div className="w-full lg:w-1/2 p-4 mx-auto">
          <h2 className="text-xl font-bold mb-4">Análisis Detallado</h2>
          <p>
            Con "Out of Time", no solo controlas tu tiempo, sino que también lo
            analizas. Nuestros gráficos y métricas te ofrecen una visión
            profunda de cómo distribuyes tu tiempo, permitiéndote hacer ajustes
            y mejorar tu productividad.
          </p>
        </div>
      </section>

      <section className="py-12 text-center rounded-lg shadow-xl p-4 mx-6 mt-6 backdrop-blur-md bg-black/30 my-5">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Lo que nuestros usuarios dicen
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Descubre las opiniones de quienes ya han probado nuestra app.
        </p>
        <div className="flex justify-center flex-wrap">
          {REVIEW_INFO.map(({ title, content, id, avatar }) => (
            <ReviewCard
              key={id}
              title={title}
              content={content}
              avatar={avatar}
            />
          ))}
        </div>
      </section>
      <footer className="bg-black/50 py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-xl font-bold mb-4 text-white">Out of Time</h2>
                <p className="mb-6 text-gray-300">Controla y analiza tu tiempo con precisión.</p>
                <div className="flex justify-center space-x-8">
                    <a href="#" className="text-gray-300 hover:text-white">Inicio</a>
                    <a href="#" className="text-gray-300 hover:text-white">Características</a>
                    <a href="#" className="text-gray-300 hover:text-white">Contacto</a>
                    <a href="#" className="text-gray-300 hover:text-white">Ayuda</a>
                </div>
                <div className="mt-6 text-gray-400">
                    <p>hecho con ❤️ y mucho cariño por la comunidad de Out of Time</p>
                </div>
            </div>
        </footer>
    </div>
  );
}
