import Layout from "@/layout/Layout"

export default function Popover() {

    return(
        <Layout pagina="Popover">
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
    titulo: "Popover",
    descripcion: "Es una pequeña ventana emergente que se muestra al hacer clic o pasar el cursor sobre un elemento específico en una interfaz de usuario. Este elemento emergente generalmente contiene información adicional, opciones de acción o detalles contextuales relacionados con el elemento activador."
}