import Layout from "@/layout/Layout"

export default function Clipboard() {

    return(
        <Layout pagina="Clipboard">
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
    titulo: "Clipboard",
    descripcion: "Es una herramienta que permite a los usuarios copiar contenido seleccionado a su portapapeles para luego pegarlo en otro lugar. Este componente es especialmente útil en aplicaciones web donde se necesita compartir o utilizar información de manera rápida y eficiente."
}