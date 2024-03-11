import Layout from "@/layout/Layout"

export default function Modal() {

    return(
        <Layout pagina="Modal">
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
    titulo: "Modal",
    descripcion: "Es una ventana emergente que se superpone al contenido principal de una página web o aplicación móvil para mostrar información adicional, solicitar acciones específicas del usuario o proporcionar una experiencia de navegación contextual."
}