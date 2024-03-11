import Layout from "@/layout/Layout"

export default function Progress() {

    return(
        <Layout pagina="Progress">
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
    titulo: "Progress",
    descripcion: "Es una representación visual de la progresión o avance de una tarea o proceso en una aplicación. Se utiliza para indicar visualmente al usuario el estado de completitud de una acción o proceso en curso."
}