import React from "react";
import CourseCard from "../Components/CourseCard";
import companies from "../img/companies.png";
import { coursesData } from "../Constant/coursesData";

function Courses() {
  return (
    <>
      <section className='px-16 pt-20 relative  pb-10'>
        <div className='absolute -z-10 -left-[50%]  opacity-40 top-[30%]  w-[90%] h-[40%]  bg-gradient-to-r from-primary to-blackSecondary blur-3xl shadow-primary shadow-2xl'></div>
        <div className='w-full py-10'>
          <h1 className='text-4xl'>Courses Offered.</h1>
        </div>
        <div className='flex flex-wrap gap-5 '>
          {coursesData.map((card, i) => {
            return (
              <CourseCard
                key={i}
                img={card.img}
                headline={card.headline}
                live={card.live}
                isLive={card.isLive}
                lang={card.lang}
                discount={card.discount}
                price={card.price}
                notPrice={card.withoutDiscountPrice}
                off={card.off}
              />
            );
          })}
        </div>
        <div className='flex flex-col items-center mt-20'>
          <div className='w-9/12 text-center'>
            <h1 className='text-5xl'>
              Top <span className='text-primary'>companies</span> our students
              working with
            </h1>
          </div>
          <img src={companies} alt='companies' />
          <button className='bg-primary text-2xl px-6 py-2 text-black font-[helveticaMedium] rounded-lg  '>
            Explore Courses
          </button>
        </div>
      </section>
    </>
  );
}

export default Courses;
