import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";

export default function AdminView() {
    const [advertisements, setAdvertisements] = useState([]);

    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAdvertisements();
    }, []);

    const fetchAdvertisements = async () => {
        try {
            const response = await fetch(`https://back-revista-web.onrender.com/advertising/publicity`);
            if (response.ok) {
                const data = await response.json();
                console.log(data.data)
                setAdvertisements(data.data);
            } else {
                throw new Error("Error al obtener publicidades");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDeleteAdvertisement = async (advertisementId) => {
        try {
            const response = await fetch(`https://back-revista-web.onrender.com/advertising/delete/publicity/${advertisementId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Actualizar el estado para reflejar la eliminación del anuncio
                setAdvertisements(advertisements.filter(ad => ad.id !== advertisementId));
            } else {
                throw new Error("Error al eliminar el anuncio");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <main className="xl:w-full xl:h-max xl:flex xl:justify-center xl:items-center xl:flex-col">
                <NavBar />
                <section className="flex justify-center items-center flex-col p-4 gap-8 md:flex-row md:flex-wrap xl:w-4/6 xl:overflow-x-hidden xl:ml-10">
                    {advertisements.map((advertisement, index) => (
                        <article key={index} className="w-full h-max md:w-72 md:h-44 xl:w-82 xl:h-44 flex flex-col justufy-center item-center">
                            <img src={`https://back-revista-web.onrender.com/advertising/${advertisement.img}`} alt={`Advertisement ${index}`} className="w-full h-full" />
                            <button onClick={() => handleDeleteAdvertisement(advertisement.id)} className="w-20 h-8 bg-red-700">ELIMINAR</button>
                        </article>
                    ))}
                </section>
            </main>
        </>
    );
}
