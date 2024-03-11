import Layout from "@/layout/Layout"

export default function Tables() {

    return(
        <Layout pagina="Tables">
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
    titulo: "Tables",
    descripcion: "Son elementos de la interfaz de usuario que se utilizan para mostrar datos tabulares de una manera estructurada y organizada. Estos componentes son fundamentales en muchas aplicaciones web y móviles para presentar información en forma de filas y columnas, lo que facilita la comprensión y el análisis de los datos por parte de los usuarios."
}