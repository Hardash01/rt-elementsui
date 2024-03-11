import Layout from "@/layout/Layout"

export default function Avatar() {

    return(
        <Layout pagina="Avatar">
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
    titulo: "Avatar",
    descripcion: "Es una representación visual de un usuario o entidad dentro de una interfaz de usuario. Generalmente consiste en una imagen pequeña, que puede ser una fotografía del usuario, un ícono personalizado o una imagen predeterminada, junto con un nombre o identificador."
}