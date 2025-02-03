import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const Profile = ({ user }) => {
  const {logOut} = useContext(AuthContext);
  // const navigate = useNavigate()

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res); // Logs the response to verify success.
        Swal.fire({
          icon: "success",
          title: "Logout Successful",
          text: "You have logged out successfully!",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
          toast: true,
          position: "top-right",
        });
        // navigate('/'); // Redirect to the homepage or login page.
      })
      .catch((error) => {
        console.error(error); // Log the error for debugging.
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: "Something went wrong while logging out. Please try again.",
          showConfirmButton: true,
        });
      });
  };
  


  return (
    <div>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {
                user.photoURL ? <img alt="photoURL" src={user.photoURL} /> : <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              }
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a href='/update-profile'>Profile</a>
            </li>
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>Setting</a>
            </li>
            <li>
              <button onClick={()=>handleLogOut()}>LogOut</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
