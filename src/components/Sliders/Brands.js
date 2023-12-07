import React, { useState } from 'react'


const Brands = () => {
    const [Brands, setBrands] = useState([]);

  fetch("http://localhost:3005/Brands")
    .then((response) => response.json())
    .then((data) => setBrands(data));
  return (
    <>
      
    </>
  )
}

export default Brands
