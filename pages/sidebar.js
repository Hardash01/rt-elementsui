import Layout from "@/layout/Layout"

export default function Sidebar() {

    return(
        <Layout pagina="Sidebar">
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
    titulo: "Sidebar",
    descripcion: "Es un elemento de la interfaz de usuario que se encuentra en un lateral de la pantalla y que se utiliza para mostrar opciones de navegación, herramientas o información adicional de una aplicación."
}