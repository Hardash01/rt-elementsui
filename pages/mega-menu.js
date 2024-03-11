import Layout from "@/layout/Layout"

export default function Megamenu() {

    return(
        <Layout pagina="Mega Menu">
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
    titulo: "Mega Menu",
    descripcion: "Es una versión expandida y mejorada de un menú desplegable convencional. Proporciona una forma eficiente de mostrar una gran cantidad de opciones de navegación, contenido o funcionalidades adicionales en una estructura jerárquica y organizada."
}