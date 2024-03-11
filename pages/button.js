import Layout from "@/layout/Layout"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84 } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Button() {

    const codeString = `<button className="text-base font-normal py-2 px-5 border bg-[#5d42c9] transition-all duration-300 rounded border-opacity-15 text-white hover:scale-105 hover:shadow-[0_0_20px_3px_rgba(108,83,255,0.7)]">
    Button
</button>`

    return(
        <Layout pagina="Button">
            <h2 className=" text-white text-4xl font-extrabold">Componentes de <span className="text-textotitulo">{`${dataPage.titulo}`}</span>{' '} - React y TailwindCss</h2>
            <p className="text-white [text-wrap:pretty] w-4/5 mt-3">{`${dataPage.descripcion}`}</p>

            <section className="h-auto flex flex-col gap-5 items-center justify-center text-white text-3xl font-bold bg-gray-500 mt-10">
                <div>
                    <button className="text-base font-normal py-2 px-5 border bg-[#5d42c9] transition-all duration-300 rounded border-opacity-15 text-white hover:scale-105 hover:shadow-[0_0_20px_3px_rgba(108,83,255,0.7)]">
                        Button
                    </button>
                </div>
                <div className="max-w-3xl min-w-xl text-base font-normal barra overflow-hidden rounded-xl bg-gray-600">
                    <div className="flex justify-between items-center px-4 text-white">
                        <p>Codigo Ejemplo</p>
                        <button className="py-1 gap-1">
                            Copiar Codigo
                        </button>
                    </div>
                    <SyntaxHighlighter language="jsx" style={synthwave84} customStyle={{padding: "25px", margin: "0" }} wrapLongLines={true}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </section>
        </Layout>
    )
}

const dataPage = {
    id: 1,
    titulo: "Button",
    descripcion: "Es un elemento interactivo que se utiliza para activar una acción o llevar a cabo una operación específica dentro de una interfaz de usuario. Es un elemento fundamental en el diseño de cualquier aplicación web o móvil, ya que proporciona a los usuarios una forma clara y visualmente destacada de realizar acciones."
}
