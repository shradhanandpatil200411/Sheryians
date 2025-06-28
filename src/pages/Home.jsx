import React from "react";

function Home() {
  return (
    <div className='w-full h-full '>
      <section className='flex flex-col  mx-auto py-5 items-center w-10/12 '>
        <div className='relative w-full text-center '>
          <h1 className='text-[5rem] leading-[4.5rem]'>
            We only <span className='text-primary'>teach</span>
            <br /> what we are really <br />
            really <span className='font-[juanaExtraLight]'>good</span> at.
          </h1>
          <p className='absolute w-52 text-left right-0 text-xs'>
            Get ready to{" "}
            <span className='text-primary'>accelerate your career</span> with
            customized courses and leave your mark in tech industry
          </p>
        </div>
        <div>
          <button className='px-10 py-2 mt-14 text-xl bg-primary text-black rounded-lg font-[helveticaMedium]'>
            Check Courses-Make an Impact
          </button>
        </div>
        <div className='flex mt-20 justify-between w-1/2'>
          <div className='text-center'>
            <h1 className='font-bold text-2xl'>25K+</h1>
            <h2 className='text-lg'>Students taught</h2>
          </div>
          <div className='text-center'>
            <h1 className='font-bold text-2xl'>20K+</h1>
            <h2 className='text-lg'>Inductors</h2>
          </div>
          <div className='text-center'>
            <h1 className='font-bold text-2xl'>536K+</h1>
            <h2 className='text-lg'>Youtube Subs.</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
