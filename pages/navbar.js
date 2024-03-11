import Layout from "@/layout/Layout"

export default function Navbar() {

    return(
        <Layout pagina="Navbar">
            <h2 className=" text-white text-4xl font-extrabold">Componentes de <span className="text-textotitulo">{`${dataPage.titulo}`}</span>{' '} - React y TailwindCss</h2>
            <p className="text-white [text-wrap:pretty] w-4/5 mt-3">{`${dataPage.descripcion}`}</p>

            <section className="h-52 flex items-center justify-center text-white text-3xl font-bold">
                <p className="bg-black p-6 rounded-lg bg-opacity-30">Proximamente...</p>
            </section>
        </Layout>
    )
}

const dataPage = {
    id: 1,
    titulo: "Navbar",
    descripcion: "Es una parte esencial de la mayoría de las interfaces de usuario en aplicaciones web y móviles. Se trata de una barra de navegación que generalmente se encuentra en la parte superior de la página y proporciona acceso rápido a las diferentes secciones o funcionalidades de la aplicación."
}