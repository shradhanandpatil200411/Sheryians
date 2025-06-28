import React from "react";
import CourseCard from "../Components/CourseCard";
import companies from "../img/companies.png";
import { coursesData } from "../Constant/coursesData";

function Courses() {
  return (
    <>
      <section className='px-16 pt-20 relative border-b-[1px] pb-10 border-gray-500'>
        <div className='absolute -z-10 -left-[50%]  opacity-40 top-[40%]  w-[90%] h-[40%]  bg-gradient-to-r from-primary to-blackSecondary blur-3xl shadow-primary shadow-2xl'></div>
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
        <div className='flex flex-col items-center'>
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
