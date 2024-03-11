import Layout from "@/layout/Layout"

export default function Carousel() {

    return(
        <Layout pagina="Carousel">
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
    titulo: "Carousel",
    descripcion: "Es una interfaz de usuario interactiva que permite a los usuarios desplazarse horizontalmente a través de una serie de elementos, como imágenes, contenido textual o cualquier otro tipo de contenido, de manera secuencial."
}