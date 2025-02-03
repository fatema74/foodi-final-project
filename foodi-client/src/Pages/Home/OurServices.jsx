import React from 'react';

const servicesList = [
  {
    id: 1,
    title: 'Catering',
    des: 'Delight your guests with our flavors and  presentation',
    img: '/images/home/services/icon1.png',
  },
  {
    id: 2,
    title: 'Fast delivery',
    des: 'We deliver your order promptly to your door',
    img: '/images/home/services/icon2.png',
  },

  {
    id: 3,
    title: 'Online Ordering',
    des: 'Explore menu & order with ease using our Online Ordering ',
    img: '/images/home/services/icon3.png',
  },
  {
    id: 4,
    title: 'Gift Cards',
    des: 'Give the gift of exceptional dining with Foodi Gift Cards',
    img: '/images/home/services/icon4.png',
  },
];

const OurServices = () => {
  return (
    <div className="section-container my-16 flex items-center">
      <div className="md:w-1/2">
        <div className="text-left">
          <p className="subTitle">section-container</p>
          <h2 className="title">Our Culinary Journey And Services</h2>
          <p className="my-5 text-secondary leading-[30px]">
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <button className="bg-green text-white rounded-full py-2 px-8 btn">
            Explore
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
        {
          servicesList.map((service) =>(
            <div key={service.id} className='shadow-md rounded-sm py-5 px-2 text-center space-y-2 cursor-pointer duration-200 transition-all hover:border-indigo-600 hover:border'>
              <img src={service.img} alt="" className='mx-auto'/>
              <h4 className='text-green font-semibold pt-3'>{service.title}</h4>
              <p className='text-[#90BD95] '>{service.des}</p>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  );
};

export default OurServices;
