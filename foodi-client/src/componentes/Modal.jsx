import React, { useContext, useState } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthProvider';

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signUpWithGmail, login} = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("")

  // redirection to home page or specifig page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password);
    login(email, password)
    .then((result) =>{
      const user = result.user;
      alert("This Login Successfull");
      document.getElementById('my_modal_5').close();
      navigate(from, {replace: true})
    })
    .catch((error)=>{
      const errorMessage = error.message;
      setErrorMessage("Provide a correct email and password")
    })
  }

  
  // google signin
  const handleGoogle = () =>{
    signUpWithGmail()
    .then((result)=>{
      const user = result.user;
      alert("Login successfull")
      navigate(from, {replace: true})
    })
    .catch((error) => console.log(error))
  }

  return (
    <div>
      {/* modal */}
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action mt-0 flex flex-col justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body"
              method="dialog"
            >
              <h3 className="font-bold text-lg">Please Login!</h3>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register('email')}
                />
              </div>

              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register('password')}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover mt-1">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* error  */}
              {
                errorMessage ? <p className='text-red text-xs italic'>{setErrorMessage}</p> : ""
              }
              
            {/* login */}
              <div className="form-control mt-3">
                <input
                  type="submit"
                  name=""
                  id=""
                  value="Login"
                  className="btn bg-green text-white"
                />
              </div>
              <p className="mt-2 text-center">
                Donot have an account ?{' '}
                <Link to="/signup" className="text-red ml-1 underline">
                  SignUp Now
                </Link>{' '}
              </p>
              <button
                htmlFor="my_modal_5"
                onClick={() => document.getElementById('my_modal_5').close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>

            {/* socil btn */}
            <div className="text-center space-x-3">
              <button className="btn btn-circle hover:bg-green hover:text-white border-green">
                <FaFacebookF />
              </button>
              <button className="btn btn-circle hover:bg-green hover:text-white border-green" onClick={handleGoogle}>
                <FaGoogle />
              </button>
              <button className="btn btn-circle hover:bg-green hover:text-white border-green">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
