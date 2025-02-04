import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import Swal from 'sweetalert2';

const Cards = ({ item }) => {
  const { name, image, price, recipe, _id } = item;

  const [isHeartFilter, setIsHeartFilter] = useState(false);

  const { user } = useContext(AuthContext);
  // console.log(user)

  const navigate = useNavigate();
  const location = useLocation();


  // add to cart btn
  const handleAddtoCart = item => {
    // console.log('btn is clicked', item)
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user.email,
      };
      // console.log(cartItem);
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Please Login?',
        text: "Without an account can't able to add products!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'signup now!',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/signup', { state: { from: location } });
        }
      });
    }
  };

  const handleHeartClick = () => {
    setIsHeartFilter(!isHeartFilter);
  };

  return (
    <div className="">
    
      <div className="card bg-base-100 shadow-xl relative">
        <div
          className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${
            isHeartFilter ? 'text-rose-500' : 'text-white'
          }`}
          onClick={handleHeartClick}
        >
          <FaHeart className="h-5 w-5 cursor-pointer"></FaHeart>
        </div>
        <Link to={`/menu/${item._id}`}>
          <figure>
            <img
              src={item.image}
              alt=""
              className="hover:scale-105 duration-200 transition-all md:h-72"
            />
          </figure>
        </Link>
        <div className="card-body">
          <Link to={`/menu/${item._id}`}>
            <h2 className="card-title">{item.name}</h2>
          </Link>
          <p>Description of the item</p>
          <div className="card-actions justify-between items-center mt-2">
            <h5 className="font-semibold">
              <span className="text-red text-sm">$</span>
              {item.price}
            </h5>
            <button
              className="btn bg-green"
              onClick={() => handleAddtoCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
