import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import { IconBxsDashboard } from "@/components/website/icons";
import Header from "@/components/website/Header";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ['400', '700', '900']
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-5/6 mx-auto flex-col items-center p-24 ${inter.className}`}
    >
        <Header />
        <div className={`text-white text-center [text-wrap:balance] text-4xl font-extrabold ${montserrat.className}`}>
          <h1 className="bg-gradient-to-t from-[#e8e7ed] to-[#acaab4] bg-clip-text text-transparent">Catalogo De Componentes para Interfazces de Usuarios Con</h1>
          <span className="text-textotitulo"> React Y Tailwind CSS</span>
        </div>
        
        <p className="text-white mt-8 [text-wrap:balance] text-center">Explora una amplia gama de elementos de interfaz de usuario totalmente personalizables y listos para usar en tus proyectos de desarrollo web.</p>
        <div className="flex justify-center mt-8">
          <Link legacyBehavior href="/accordion">
            <a className="flex items-center gap-2 text-base font-normal py-2 px-5 border bg-[#5d42c9] transition-all duration-300 rounded border-opacity-15 text-white hover:scale-105 hover:shadow-[0_0_20px_3px_rgba(108,83,255,0.7)]">
              <IconBxsDashboard />
              Explorar Componentes
            </a>
          </Link>
        </div>

        <ul className="flex gap-5 mt-10">
          {tecnologias.map(tecnologia => (
            <li key={tecnologia.id}>
              <Image src={`/assets/${tecnologia.imagen}.svg`} alt={tecnologia.nombre} width={60} height={60} className="filter grayscale hover:grayscale-0 transition-all duration-300" />
            </li>
          ))}
        </ul>
    </main>
  );
}

const tecnologias = [
  {
    id: 1,
    nombre: "HTML",
    imagen: "html"
  },
  {
    id: 2,
    nombre: "TailwindCSS",
    imagen: "tailwind"
  },
  {
    id: 3,
    nombre: "JavaScript",
    imagen: "js",
  },
  {
    id: 4,
    nombre: "React",
    imagen: "react"
  }
]