import React from "react";
import NavBar from "../../components/NavBar";


export default function Contacto() {
    return (
        <>
            <main className="h-screen xl:w-full xl:h-max xl:flex xl:justify-center xl:items-center xl:flex-col">
                <NavBar />
                <div className="flex justify-center items-center w-full mt-6">
                    <section className="flex justify-center w-4/5 items-center flex-col p-4 gap-8 bg-contac rounded-3xl md:w-2/5 md:p-6 xl:w-1/4">
                        <article className="w-full h-full flex flex-col justify-center items-center">
                            <div className="flex justify-around items-center gap-4">
                                <img src="/logo/muñeca.png" alt="" className=" w-44" />
                                <div className="flex flex-col gap-4 items-center justify-center">
                                    <img src="/redes/wps.png" alt="" className="w-16" />
                                    <img src="/redes/facebook.png" alt="" className="w-16" />
                                    <img src="/redes/instagram.png" alt="" className="w-16" />
                                    <img src="/redes/email.png" alt="" className="w-16" />
                                </div>
                            </div>
                            <h1 className="text-4xl stroke-white-2">
                                CONTACTANOS
                            </h1>
                        </article>
                    </section>
                </div>
            </main>
        </>
    )
}