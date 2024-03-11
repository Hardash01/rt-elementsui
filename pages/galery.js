import Layout from "@/layout/Layout"

export default function Galery() {

    return(
        <Layout pagina="Galery">
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
    titulo: "Galery",
    descripcion: "Es una interfaz de usuario que muestra una colección de imágenes o elementos multimedia de forma visualmente atractiva y organizada. Este componente es utilizado comúnmente en aplicaciones web y móviles para presentar una variedad de contenido, como fotos de productos, imágenes de portafolio, galerías de arte, entre otros."
}