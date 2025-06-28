import React from "react";
import logo from "../img/Sheryians_logo.png";
import bell from "../img/svg/bell-white-svgrepo-com.svg";

function Navbar() {
  return (
    <>
      <div className='w-52 absolute h-56 bg-primary right-80 -top-48 rotate-45 blur-3xl rounded-xl opacity-40'></div>
      <div className='w-52 absolute h-56 bg-primary left-96 -top-28 shadow-2xl rotate-45 blur-3xl rounded-xl opacity-40'></div>
      <section className='flex justify-around py-4 z-10 opacity-70'>
        <div className='flex items-center'>
          <img className='w-7 h-10 mx-2' src={logo} alt='logo' />
          <p className='font-[neueRegular]'>Sheryians coding school</p>
        </div>
        <div>
          <ul className='flex gap-10 items-center '>
            <li className='font-extralight z-10  cursor-pointer hover:underline'>
              Home
            </li>
            <li className='font-extralight z-10 cursor-pointer hover:underline'>
              Courses
            </li>
            <li className='font-[neueRegular] z-10 cursor-pointer font-bold text-red-500 hover:underline animate-shake'>
              KODR
            </li>
            <li className='font-extralight z-10 cursor-pointer hover:underline'>
              Request Callback
            </li>
            <li className='font- z-10 cursor-pointer hover:underline'>
              Classrome
            </li>
            <li>
              <img className='w-5 h-10 text-white' src={bell} alt='bell' />
            </li>
            <li>
              <img src='/' alt='profile' />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Navbar;
