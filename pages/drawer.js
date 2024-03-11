import Layout from "@/layout/Layout"

export default function Drawer() {

    return(
        <Layout pagina="Drawer">
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
    titulo: "Drawer",
    descripcion: "Es una interfaz de usuario que proporciona un panel deslizable desde el borde de la pantalla, generalmente desde el lateral, que contiene opciones de navegación, controles u otra información relevante para el usuario. Este componente es comúnmente utilizado en aplicaciones web y móviles para mostrar menús de navegación, paneles de configuración, filtros de búsqueda o cualquier otra funcionalidad que necesite estar fuera de la vista principal pero accesible con un gesto o clic."
}