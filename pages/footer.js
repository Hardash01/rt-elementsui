import Layout from "@/layout/Layout"

export default function Footer() {

    return(
        <Layout pagina="Footer">
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
    titulo: "Footer",
    descripcion: "Es una sección de la interfaz de usuario que se encuentra generalmente en la parte inferior de una página web. Su propósito principal es proporcionar información adicional, enlaces útiles, créditos o cualquier otro contenido relevante para el usuario."
}