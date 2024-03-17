import React, { useState } from "react";
import NavBar from "../../components/NavBar";

export default function UploadCategory() {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = {
        name: name
      };

      const response = await fetch('https://back-revista-web.onrender.com/advertising/addCategory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      if (response.ok) {
        window.location.pathname = "/CargarCategoria";
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error en la solicitud');
      }
    } catch (error) {
      setError('Error al enviar la solicitud');
    }
  };

  return (
    <>
      <main className="xl:w-full xl:h-max xl:flex xl:justify-center xl:items-center xl:flex-col">
        <NavBar />
        <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
          <h1 className="text-3xl mb-4">Carga una Categoria</h1>
          <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Nombre"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            Cargar
          </button>
        </form>
      </main>
    </>
  );
}
