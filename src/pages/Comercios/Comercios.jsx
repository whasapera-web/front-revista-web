import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";

export default function Comercios({categoriId}) {
    const [advertisements, setAdvertisements] = useState([]);

    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAdvertisements();
    }, [categoriId]);

    const fetchAdvertisements = async () => {
        try {
            const response = await fetch(`https://back-revista-web.onrender.com/advertising/publicity/${categoriId}`);


            if (response.ok) {
                const data = await response.json();
                setAdvertisements(data.data);
            } else {
                throw new Error("Error al obtener publicidades");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <main className="xl:w-full xl:h-max xl:flex xl:justify-center xl:items-center xl:flex-col">
                <NavBar />
                <section className="flex justify-center items-center flex-col p-4 gap-8 md:flex-row md:flex-wrap xl:w-4/6 xl:overflow-x-hidden xl:ml-10 xl:gap-16">
                    {advertisements.map((advertisement, index) => (
                        <article key={index} className="w-full h-max md:w-72 md:h-44 xl:w-82 xl:h-44">
                            <img src={`http://localhost:3000/advertising/${advertisement.img}`} alt={`Advertisement ${index}`} className="w-full h-full" />
                        </article>
                    ))}
                </section>
            </main>
        </>
    );
}
