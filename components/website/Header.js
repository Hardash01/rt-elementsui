import Image from "next/image";
import Link from "next/link";


export default function Header() {

    return(
        <nav className="fixed flex  top-0 z-50 max-w-screen-xl mx-auto w-4/6">
            <div className="flex items-center justify-between py-5 w-full">
                <div>
                    <Link legacyBehavior href='/'>
                        <a>
                            <Image src='/logo.webp' alt="logo RT ElementsUI" width={140} height={73} />
                        </a>
                    </Link>
                </div>
                <ul className="flex items-center gap-4">
                    <li>
                        <Link legacyBehavior href="https://x.com/edwinsantosdev">
                            <a target="_blank" rel="noopener">
                                <Image src="/assets/x.svg" alt="Logo de X" width={17} height={17} className="hover:scale-125 transition-transform duration-300"/>    
                            </a>
                        </Link>
                    </li>
                    <li>
                         <Link legacyBehavior href="https://x.com/edwinsantosdev">
                            <a className="hover:scale-105">
                                <Image src="/assets/github.svg" alt="Logo de X" width={20} height={20} className="hover:scale-125 transition-transform duration-300" />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

