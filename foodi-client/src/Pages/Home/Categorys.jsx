import React from 'react';

const categoryItems= [
  {id: 1, title:"Main Dish", des:'(86 dishes)', img:'/images/home/category/img1.png'},
  {id: 2, title:"Break Fast", des:'(12 break fast)', img:'/images/home/category/img2.png'},
  {id: 3, title:"Dessert", des:'(48 dessert)', img:'/images/home/category/img3.png'},
  {id: 4, title:"Browse All", des:'(255 Items)', img:'/images/home/category/img4.png'}
]

const Categorys = () => {
  return (
    <div className='section-container py-16'>
      <div className='text-center'>
      <p className='subTitle'>Customer Favorites</p>
      <h2 className='title'>Popular Catagories</h2>
      </div>
      {/* category */}
      <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
        {
          categoryItems.map((items, i)=>(
            <div key={i} className='shadow-lg bg-white rounded-md py-6 px-5 w-64 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
              <div className='flex justify-center items-center w-full mx-auto'>
                <img src={items.img} alt="" className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28'/>
              </div>
              <div className='mt-5 space-y-1'>
                <h5>{items.title}</h5>
                <p>{items.des}</p>
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  );
};

export default Categorys;