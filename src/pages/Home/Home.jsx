import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
export default function Home() {

    return (
        <>
            <main className="xl:w-full xl:h-max xl:justify-center xl:items-center xl:flex-col xl:hidden">
                <NavBar />
                <section className="relative xl:w-3/6 xl:h-screen p-2 md:p-16 xl:p-2 le:p-6">
                    {/* <article className="relative w-full h-max flex flex-row p-4 justify-center items-start">
                        <img src="/logo/muñeca.png" alt="logo-revista-web" className="w-28 md:w-40 xl:w-36" />
                        <div className="flex flex-col justify-center items-center gap-20 mt-2">
                            <div>
                                <h1 className="stroke-white text-2xl md:text-6xl text-center">
                                    REVISTA VIRTUAL <br /> <span className="text-verFont">WHATSAPPERA</span>
                                </h1>
                                <p className="hidden xl:block text-black xl:text-xs">
                                    PRIMERA REVISTA VIRTUAL QUE SE DISTRIBUYE GRACIAS A UN MENSAJE DE WHATSAPP
                                </p>
                            </div>
                            <div>
                                <h2 className="text-center stroke-white text-base scale-125 md:text-4xl xl:text-4xl rotate-00">PUBLICIDADES <br /> NICOLEÑAS Y DE LA ZONA</h2>
                            </div>
                        </div>
                    </article> */}
                    <article className="absolute backgroud h-2vh w-full flex flex-row p-4 justify-center items-end gap-12 xl:mt-8">
                        <div className="w-full flex flex-col justify-start items-start gap-2 mb-10 le:mb-5">
                            <div className="flex gap-1 items-center justify-center">
                                <div className="h-4 w-4 md:h-10 md:w-10 xl:w-6 xl:h-6 border-2 rounded-full bg-green-500"> </div>
                                <a href="https://www.facebook.com/profile.php?id=100063715656346" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl md:text-2xl text-black xl:text-xl">FARMACIAS</a>
                            </div>
                            <div className="flex gap-1 items-center justify-center">
                                <div className="h-4 w-4 md:h-10 md:w-10 xl:w-6 xl:h-6 border-2 rounded-full bg-blue-400"> </div>
                                <a href="https://www.e-evhsa.com.ar/Horarios" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl text-black md:text-2xl xl:text-xl">COLECTIVOS</a>
                            </div>
                            <div className="flex gap-1 items-center justify-center">
                                <div className="h-4 w-4 md:h-10 md:w-10 xl:w-6 xl:h-6 border-2 rounded-full bg-orange-300"> </div>
                                <a href="https://www.sannicolasciudad.gob.ar/noticias" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl text-black md:text-2xl xl:text-xl">NOTICIAS</a>
                            </div>
                            <div className="flex items-center justify-center gap-1">
                                <div className="h-4 w-6 md:h-10 md:w-10 xl:w-6 xl:h-6 border-2 rounded-full bg-red-600 mb-8"> </div>
                                <a href="https://www.sannicolasciudad.gob.ar/" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl text-black md:text-2xl xl:text-xl">TRÁMITES MUNICIPALES</a>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2 mb-10">
                            <div className="flex gap-1 items-center justify-center">
                                <div className="h-4 w-4 md:h-10 md:w-10 xl:w-6 xl:h-6 border-2 rounded-full bg-red-500"> </div>
                                <a href="https://www.clarin.com/loterias-y-quinielas" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl text-black md:text-2xl xl:text-xl">LOTERIAS</a>
                            </div>
                            <div className="flex items-center gap-1 justify-center">
                                <div className="h-4 w-4 border-2 md:h-10 xl:w-6 xl:h-6 md:w-10 rounded-full bg-yellow-300"> </div>
                                <a href="https://myradioenvivo.ar/fm-vida?gad_source=1&gclid=CjwKCAiA6KWvBhAREiwAFPZM7jsnPEcw4eWgVF68wG7DDUyMlBSD95SoKkns_HNTe01WPoZO6Ry-VhoCBQ8QAvD_BwE" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl text-black md:text-2xl xl:text-xl">RADIO</a>
                            </div>
                            <div className="flex items-center gap-1 justify-center">
                                <div className="h-4 w-4 border-2 md:h-10 xl:w-6 xl:h-6 md:w-10 rounded-full bg-blue-600"> </div>
                                <a href="https://www.accuweather.com/es/ar/san-nicol%C3%A1s-de-los-arroyos/2917/hourly-weather-forecast/2917" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl text-black md:text-2xl xl:text-xl">CLIMA</a>
                            </div>
                            <div className="flex gap-1 items-center justify-center">
                                <div className="h-4 w-6 le:w-4 le:mb-0 md:h-10 md:w-10 xl:w-6 xl:h-6 border-2 rounded-full bg-pink-500 mb-8"> </div>
                                <a href="https://www.argentina.gob.ar/servicio/solicitar-turnos-en-anses" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl text-black md:text-2xl xl:text-xl">TURNOS ANSES</a>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <main className="xl:w-full xl:h-max xl:flex xl:justify-center xl:items-center xl:flex-col">
                <NavBar />
                <section className="relative xl:w-3/6 xl:h-screen p-2 md:p-16 xl:p-2 le:p-6 xl:ml-8">
                    {/* <article className="relative w-full h-max flex flex-row p-4 justify-center items-start">
                        <img src="/logo/muñeca.png" alt="logo-revista-web" className="w-28 md:w-40 xl:w-36" />
                        <div className="flex flex-col justify-center items-center gap-20 mt-2">
                            <div>
                                <h1 className="stroke-white text-2xl md:text-6xl text-center">
                                    REVISTA VIRTUAL <br /> <span className="text-verFont">WHATSAPPERA</span>
                                </h1>
                                <p className="hidden xl:block text-black xl:text-xs">
                                    PRIMERA REVISTA VIRTUAL QUE SE DISTRIBUYE GRACIAS A UN MENSAJE DE WHATSAPP
                                </p>
                            </div>
                            <div>
                                <h2 className="text-center stroke-white text-base scale-125 md:text-4xl xl:text-4xl rotate-00">PUBLICIDADES <br /> NICOLEÑAS Y DE LA ZONA</h2>
                            </div>
                        </div>
                    </article> */}
                    <article className="absolute backgroud-destock h-2vh w-full flex flex-row p-4 justify-center items-end gap-12 xl:mt-8">
                        <div className="w-full flex flex-col justify-start items-start gap-2 mb-10 le:mb-5 xl:ml-20 xl:mb-10">
                            <div className="flex gap-1 items-center justify-center">
                                <div className="h-4 w-4 md:h-10 md:w-10 xl:w-6 xl:h-6 border-2 rounded-full bg-green-500"> </div>
                                <a href="https://www.facebook.com/profile.php?id=100063715656346" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl md:text-2xl text-black xl:text-xl">FARMACIAS</a>
                            </div>
                            <div className="flex gap-1 items-center justify-center">
                                <div className="h-4 w-4 md:h-10 md:w-10 xl:w-6 xl:h-6 border-2 rounded-full bg-blue-400"> </div>
                                <a href="https://www.e-evhsa.com.ar/Horarios" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl text-black md:text-2xl xl:text-xl">COLECTIVOS</a>
                            </div>
                            <div className="flex gap-1 items-center justify-center">
                                <div className="h-4 w-4 md:h-10 md:w-10 xl:w-6 xl:h-6 border-2 rounded-full bg-orange-300"> </div>
                                <a href="https://www.sannicolasciudad.gob.ar/noticias" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl text-black md:text-2xl xl:text-xl">NOTICIAS</a>
                            </div>
                            <div className="flex items-center justify-center gap-1">
                                <div className="h-4 w-6 md:h-10 xl:m-0 md:w-10 xl:w-6 xl:h-6 border-2 rounded-full bg-red-600 mb-8"> </div>
                                <a href="https://www.sannicolasciudad.gob.ar/" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl text-black md:text-2xl xl:text-xl">TRÁMITES MUNICIPALES</a>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2 mb-10">
                            <div className="flex gap-1 items-center justify-center">
                                <div className="h-4 w-4 md:h-10 md:w-10 xl:w-6 xl:h-6 border-2 rounded-full bg-red-500"> </div>
                                <a href="https://www.clarin.com/loterias-y-quinielas" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl text-black md:text-2xl xl:text-xl">LOTERIAS</a>
                            </div>
                            <div className="flex items-center gap-1 justify-center">
                                <div className="h-4 w-4 border-2 md:h-10 xl:w-6 xl:h-6 md:w-10 rounded-full bg-yellow-300"> </div>
                                <a href="https://myradioenvivo.ar/fm-vida?gad_source=1&gclid=CjwKCAiA6KWvBhAREiwAFPZM7jsnPEcw4eWgVF68wG7DDUyMlBSD95SoKkns_HNTe01WPoZO6Ry-VhoCBQ8QAvD_BwE" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl text-black md:text-2xl xl:text-xl">RADIO</a>
                            </div>
                            <div className="flex items-center gap-1 justify-center">
                                <div className="h-4 w-4 border-2 md:h-10 xl:w-6 xl:h-6 md:w-10 rounded-full bg-blue-600"> </div>
                                <a href="https://www.accuweather.com/es/ar/san-nicol%C3%A1s-de-los-arroyos/2917/hourly-weather-forecast/2917" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl text-black md:text-2xl xl:text-xl">CLIMA</a>
                            </div>
                            <div className="flex gap-1 items-center justify-center">
                                <div className="h-4 w-6 le:w-4 le:mb-0 md:h-10 md:w-10 xl:w-6 xl:h-6 border-2 rounded-full bg-pink-500 mb-8"> </div>
                                <a href="https://www.argentina.gob.ar/servicio/solicitar-turnos-en-anses" target="_blank" rel="noopener noreferrer" className="stroke-black text-xl text-black md:text-2xl xl:text-xl">TURNOS ANSES</a>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}