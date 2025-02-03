import React from 'react';
import Banner from '../../componentes/Banner';
import Categorys from './Categorys';
import SpecialDishes from './SpecialDishes';
import Testimonials from './Testimonials';
import OurServices from './OurServices';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categorys></Categorys>
      <SpecialDishes></SpecialDishes>
      <Testimonials></Testimonials>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;