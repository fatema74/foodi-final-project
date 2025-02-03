import React, { useEffect, useState } from 'react';
import Cards from '../../componentes/Cards';
import { FaFilter } from 'react-icons/fa';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItem, setFilteredItem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);


  
    // loading data
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/menu");
          const data = await response.json();
          setMenu(data);
          setFilteredItem(data);
        } catch (error) {
          console.log('Error fetching data', error);
        }
      };
      fetchData();
    }, []);

    // filtering data based on category 
    const filterItems = (category) => {
      const filtered = category === 'all' ? menu : menu.filter((item) => item.category === category);
      setFilteredItem(filtered);
      setSelectedCategory(category);
      setCurrentPage(1);
    };

    // show all data funtion
    const showAll = () => {
      setFilteredItem(menu);
      setSelectedCategory('all');
      setCurrentPage(1);
    };

    // sorting based on a-z z-a low-high pricing
    const handleSortChange = (option) => {
      setSortOption(option);
      let sortedItems = [...filteredItem];
      switch (option) {
        case 'A-Z':
          sortedItems.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'Z-A':
          sortedItems.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case 'low-to-high':
          sortedItems.sort((a, b) => a.price - b.price);
          break;
        case 'high-to-low':
          sortedItems.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }
      setFilteredItem(sortedItems);
      setCurrentPage(1);
    };

    // pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItem.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <div>
      {/*menu banner */}
      <div className="section-container bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100%">
      <div className="py-48 text-center">

        {/* text */}
        <div className="space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights Of Delectable{' '}
            <span className="text-green">Food</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="bg-green px-8 btn rounded-full py-3 font-semibold text-white">
            Order Now
          </button>
        </div>
        
      </div>
    </div>

    {/* menu shop section */}
    <div className='section-container'>
      {/* filtering and sorting */}
        <div className='flex flex-col md:justify-between md:flex-row flex-wrap items-center mb-8 space-y-3'>
          {/* all category btns */}
          <div className='flex flex-row flex-wrap justify-start md:items-center md:gap-8 gap-4'>
            <button onClick={showAll}
            className={selectedCategory === "all" ? "active" : ""}
            >All</button>
            <button onClick={()=>filterItems('salad')}
            className={selectedCategory === "salad" ? "active" : ""}
            >Salad</button>
            <button onClick={()=>filterItems('pizza')}
              className={selectedCategory === "pizza" ? "active" : ""}
              >Pizza</button>
            <button onClick={()=>filterItems('soup')}
            className={selectedCategory === "soup" ? "active" : ""}
              >Soups</button>
            <button onClick={()=>filterItems('dessert')}
              className={selectedCategory === "dessert" ? "active" : ""}>Desserts</button>
            <button onClick={()=>filterItems('drinks')}
              className={selectedCategory === "drinks" ? "active" : ""}>Drinks</button>
          </div>
          {/* sorting base filtering */}
          <div className='flex justify-end rounded-sm'>
            <div className='bg-black p-2'>
              <FaFilter className='h-4 w-4 text-white'></FaFilter>
            </div>
            {/* sorting options */}
            <select
            name='sort' id='sort' onChange={(e)=>handleSortChange(e.target.value)} value={sortOption} className='bg-black text-white px-2 py-1 rounded-sm'
            >
              <option value='default'>Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
        {/* products card */}
        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
          {currentItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
    </div>

    {/* pagination section */}
    <div className='flex justify-center mt-8'>
      {
        Array.from({length: Math.ceil(filteredItem.length / itemsPerPage)}).map((_, index)=>(
          <button key={index + 1}
          onClick={()=>paginate(index + 1)} className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-green text-white" : "bg-gray-200"}`}>
            {
              index + 1
            }
          </button>
        ))
      }
    </div>

    </div>
  );
};

export default Menu;