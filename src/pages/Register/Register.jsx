import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { useUserContext } from "../../context/UserContext";

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Limpiar errores al cambiar los datos del formulario
    setErrors({
      ...errors,
      [e.target.name]: null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Si la respuesta es exitosa, redirigir a la página de inicio de sesión
        window.location.pathname = "/login";
      } else {
        // Si la respuesta no es exitosa, manejar errores
        const errorData = await response.json();
        if (errorData && errorData.errors) {
          // Establecer los errores recibidos del servidor
          setErrors(errorData.errors);
        } else {
          console.error('Error en la solicitud');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <main className="xl:w-full xl:h-max xl:flex xl:justify-center xl:items-center xl:flex-col">
        <NavBar />
        <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
          <h1 className="text-3xl mb-4">Regístrate</h1>
          <input 
            type="email" 
            name="email" 
            placeholder="Correo Electrónico" 
            value={formData.email} 
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.msg}</p>}
          <input 
            type="password" 
            name="password" 
            placeholder="Contraseña" 
            value={formData.password} 
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.msg}</p>}
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            Registrarse
          </button>
        </form>
      </main>
    </>
  );
}
