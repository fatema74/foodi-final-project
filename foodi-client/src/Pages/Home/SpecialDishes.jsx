import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../componentes/Cards';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const simpleNextArrow = (props)=>{
  const {className, style, onclick}=props;
  return(
    <div className={className} style={{...style, display:'block', background: 'red'}} onclick={onclick}>NEXT</div>
  )
};

const simplePrevArrow = (props)=>{
  const {className, style, onclick}=props;
  return(
    <div className={className} style={{...style, display:'block', background: 'green'}} onclick={onclick}>BACK</div>
  )
}

const SpecialDishes = () => {

  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);

  useEffect(()=>{
    fetch('/menu.json')
    .then(res => res.json())
    .then(data =>{
      const spacials = data.filter((item) => item.category === 'popular')
      setRecipes(spacials)
    })
  },[])


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <simpleNextArrow></simpleNextArrow>,
    prevArrow: <simplePrevArrow></simplePrevArrow>
  };
  return (
    <div className='section-container my-20 relative'>
      <div>
      <p className='subTitle'>Special Dishes</p>
      <h2 className='title md:w-[600px]'>Standout Dishes From Our Menu</h2>
      </div>

    {/* arrow btn */}
      <div className='md:absolute right-3 top-20 md:mr-24'>
        <button onClick={()=> slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'>
          <FaAngleLeft className='w-8 h-8 p-1'></FaAngleLeft>
        </button>
        <button onClick={()=> slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5 bg-green'>
          <FaAngleRight className='w-8 h-8 p-1'></FaAngleRight>
        </button>
      </div>


      <Slider ref={slider} {...settings} className='overflow-hidden mt-10 space-x-5'>
        {
          recipes.map((item, i)=>(
            <div className='slick-slide'>
              <Cards key={i} item={item}></Cards>
            </div>
            
          ))
        }
      </Slider>
    </div>
  );
};

export default SpecialDishes;