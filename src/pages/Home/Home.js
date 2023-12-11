import React from 'react'
import Banner from '../../components/Banner/Banner'
import Brands from '../../components/Sliders/Brands'
import Categories from '../../components/Sliders/Categories'
import ProductCard from '../../components/Sliders/Popular'


const Home = () => {
  return (
    <>
      <Banner />
      <Brands />
      <Categories />
      <ProductCard/>
    </>
  )
}

export default Home
