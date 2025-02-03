import React, { useContext} from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Modal from './Modal';
import { AuthContext } from '../contexts/AuthProvider';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {createUser} = useContext(AuthContext);

  // redirection to home page or specifig page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    createUser(email, password).then((result)=>{
      const user = result.user;
      alert('Account successfull');
      document.getElementById('my_modal_5').close();
      navigate(from, {replace: true})
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  }

  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
      <div className="modal-action mt-0 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
          method="dialog"
        >
          <h3 className="font-bold text-lg">Creat A Acount!</h3>
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              {...register('name')}
            />
          </div>

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

          {/* sign up */}
          <div className="form-control mt-3">
            <input
              type="submit"
              name=""
              id=""
              value="Signup"
              className="btn bg-green text-white"
            />
          </div>
          <p className="mt-2 text-center">
            Donot have an account ?{' '}
            <button
              onClick={() => document.getElementById('my_modal_5').showModal()}
              className="text-red ml-1 underline"
            >
              Login Now
            </button>{' '}
          </p>
          <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </Link>
        </form>

        {/* socil btn */}
        <div className="text-center space-x-3 mb-5">
          <button className="btn btn-circle hover:bg-green hover:text-white border-green">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white border-green">
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white border-green">
            <FaGithub />
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Signup;
