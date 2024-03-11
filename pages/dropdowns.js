import Layout from "@/layout/Layout"

export default function Dropdowns() {

    return(
        <Layout pagina="Dropdowns">
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
    titulo: "Dropdowns",
    descripcion: "Es una interfaz de usuario que permite a los usuarios seleccionar una opción de una lista desplegable de elementos. Este componente es ampliamente utilizado en aplicaciones web y móviles para proporcionar a los usuarios una forma conveniente de elegir entre múltiples opciones sin ocupar demasiado espacio en la pantalla."
}