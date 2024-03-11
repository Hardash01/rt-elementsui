'use client'
import { useState } from "react"
import { usePathname } from "next/navigation"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Layout({ children, pagina }) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
          <Head>
              <title>RT ElementsUI - {pagina}</title>
              <meta name="description" content="React y Tailwind Components" />
          </Head>
          <div className="flex flex-col">
            <aside
              className={`border-r border-bordes p-5 fixed top-0 left-0 z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0 overflow-y-auto ${
                isMenuOpen ? 'block' : 'hidden md:block'
              }`}>
              <div>
                <div>
                  <div className="grid place-content-center pb-8">
                    <Link legacyBehavior href='/'>
                      <a>
                        <Image
                          width={500}
                          height={73}
                          src="/logo.webp"
                          alt="imagen logotipo"
                        />
                      </a>
                    </Link>
                  </div>
                  <nav>
                    <ul className="flex flex-col gap-y-1">
                        {enlaces.map(enlace => (
                          <li key={enlace.id}>
                            <Link 
                              legacyBehavior
                              href={enlace.link}
                            >
                              <a
                                className={`text-[#bebebe] flex rounded hover:text-white text-sm py-1 px-5 hover:bg-[#6d6c77] hover:bg-opacity-20 border border-opacity-0 border-white hover:border-opacity-20 transition-colors ${
                                  pathname === enlace.link ? 'text-white bg-[#6d6c77] bg-opacity-20 border border-white border-opacity-20' : ''
                                }`}
                              >
                                {enlace.name}
                              </a>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </aside>
            <main className="p-4 ml-52">
              <div className="md:p-10 p-2">{children}</div>
            </main>
            <button
              className="md:hidden fixed z-10 top-2 right-2 bg-gray-200 rounded p-2"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </>
    )
}

const enlaces = [
  {
    id:1,
    name: "Accordion",
    link: "/accordion"
  },
  {
    id:2,
    name: "Avatar",
    link: "/avatar"
  },
  {
    id:3,
    name: "Button",
    link: "/button"
  },
  {
    id:4,
    name: "Card",
    link: "/card"
  },
  {
    id:5,
    name: "Carousel",
    link: "/carousel"
  },
  {
    id:6,
    name: "Clipboard",
    link: "/clipboard"
  },
  {
    id:7,
    name: "Drawer",
    link: "/drawer"
  },
  {
    id:8,
    name: "Dropdowns",
    link: "/dropdowns"
  },
  {
    id:9,
    name: "Footer",
    link: "/footer"
  },
  {
    id:10,
    name: "Form",
    link: "/form"
  },
  {
    id:11,
    name: "Galery",
    link: "/galery"
  },
  {
    id:12,
    name: "Mega Menu",
    link: "/mega-menu"
  },
  {
    id:13,
    name: "Modal",
    link: "/modal"
  },
  {
    id:14,
    name: "Navbar",
    link: "/navbar"
  },
  {
    id:15,
    name: "Popover",
    link: "/popover"
  },
  {
    id:16,
    name: "Progress",
    link: "/progress"
  },
  {
    id:17,
    name: "Sidebar",
    link: "/sidebar"
  },
  {
    id:18,
    name: "Tables",
    link: "/tables"
  },
  {
    id:19,
    name: "Timeline",
    link: "/timeline"
  }
]