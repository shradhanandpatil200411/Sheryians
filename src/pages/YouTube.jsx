import React from "react";

function YouTube() {
  return (
    <>
      <section className='relative flex flex-col items-center justify-between pt-20'>
        <div className='rounded-full w-56 shadow-primary shadow-2xl h-20 bg-primary absolute left-[75%] opacity-40 blur-3xl'></div>
        <div className='text-center'>
          <h1 className='text-[2.5rem] py-10 px-10 leading-10 font-[neueRegular]'>
            We do whatever it takes to help you <br />
            <span className='text-primary'>understand the concepts</span>
          </h1>
        </div>
        <div>
          <iframe
            width='960'
            height='500'
            src='https://www.youtube.com/embed/60SRAWmMXyc?si=-UhA7dDjkx0QTVkK'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen></iframe>
        </div>
        <div className='pt-12'>
          <button className='px-10 py-2 bg-primary text-black font-[helveticaMedium] text-xl rounded-lg'>
            Explore free learning
          </button>
        </div>
      </section>
    </>
  );
}

export default YouTube;
