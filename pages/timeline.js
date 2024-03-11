import Layout from "@/layout/Layout"

export default function Timeline() {

    return(
        <Layout pagina="Timeline">
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
    titulo: "Timeline",
    descripcion: "Es una herramienta visual que muestra una secuencia cronológica de eventos o actividades. Es comúnmente utilizado en aplicaciones web y móviles para representar historias, hitos, eventos de proyectos, noticias, y otros tipos de información que están relacionados con el tiempo."
}