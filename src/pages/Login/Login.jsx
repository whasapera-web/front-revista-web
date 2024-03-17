import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { useUserContext } from "../../context/UserContext";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const { updateUser } = useUserContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Limpiar el error correspondiente cuando se modifica el campo
        setErrors({
            ...errors,
            [name]: null,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                const userToken = data.data;

                // Decodificar el token manualmente
                const [header, payload, signature] = userToken.split('.');
                const decodedPayload = JSON.parse(atob(payload));
                console.log(decodedPayload);

                // Actualizar el contexto de usuario
                updateUser(decodedPayload);

                window.location.href = "/CargarPublicidad"
            } else {
                const errorData = await response.json();

                if (errorData && errorData.errors) {
                    setErrors(errorData.errors);
                } else {
                    console.log("Error en la solicitud");
                }
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    return (
        <>
            <main className="xl:w-full xl:h-max xl:flex xl:justify-center xl:items-center xl:flex-col">
                <NavBar />
                <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
                    <h1 className="text-3xl mb-4">Inicia Sesión</h1>
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                    {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                    {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password}</p>}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </main>
        </>
    );
}