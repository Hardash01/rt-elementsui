import Layout from "@/layout/Layout"

export default function Form() {

    return(
        <Layout pagina="Form">
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
    titulo: "Form",
    descripcion: "El componente Form es un elemento esencial en el desarrollo de aplicaciones web y móviles que permite a los usuarios ingresar datos y enviar información a través de la interfaz de usuario. Estos formularios son fundamentales para la interacción y la recopilación de datos en una amplia variedad de contextos, desde el registro de usuarios hasta la realización de compras en línea."
}