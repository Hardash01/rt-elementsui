import Layout from "@/layout/Layout"

export default function Accordion() {

    return(
        <Layout pagina="Accordion">
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
    titulo: "Accordion",
    descripcion: "Son elementos de interfaz de usuario utilizados comúnmente en páginas web para organizar y presentar información de manera compacta y accesible. Consisten en una serie de secciones plegables que, al hacer clic en su título, revelan su contenido de manera expandible y contraíble."
}