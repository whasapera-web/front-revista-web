import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";

export default function UploadAdvesting() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://back-revista-web.onrender.com/advertising/categorys');
      if (response.ok) {
        const data = await response.json();
        setCategories(data.data); // Asigna las categorías obtenidas del servidor al estado
      } else {
        setError('Error al obtener categorías');
      }
    } catch (error) {
      setError('Error al obtener categorías');
    }
  };

  const handleChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
      const objectUrl = URL.createObjectURL(selectedImage);
      setPreviewImage(objectUrl);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('category_id', selectedCategory); // Agrega la categoría seleccionada al FormData

      const response = await fetch('https://back-revista-web.onrender.com/advertising/addAdvertising', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        window.location.pathname = "/login";
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
          <h1 className="text-3xl mb-4">Carga una publicidad</h1>
          <input 
            type="file" 
            name="image" 
            accept="image/*" 
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full h-auto mb-4"
            />
          )}
          <select 
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="" className="bg-black">Selecciona una categoría</option>
            {categories.map(category => (
              <option key={category.id} value={category.id} className="bg-black">{category.name}</option>
            ))}
          </select>
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
