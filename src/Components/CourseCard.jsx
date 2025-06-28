function CourseCard({
  img,
  headline,
  live,
  isLive,
  lang,
  discount,
  price,
  notPrice,
  off,
}) {
  return (
    <>
      <div className='w-[32%] h-screen rounded-xl font-[helveticaRegular]'>
        <div className='bg-blackSecondary h-[75%] rounded-b-2xl '>
          <div>
            <img className='rounded-t-3xl ' src={img} alt='thumb' />
          </div>
          <div className='px-4 py-2 h-[50%]  flex flex-col justify-between '>
            <div>
              <h1 className='text-2xl py-2'>{headline}</h1>
              <div className='flex gap-10 pb-10'>
                <button
                  className={`bg-secondary px-3 rounded py-0 ${
                    isLive ? "block" : "hidden"
                  }`}>
                  {live}
                </button>
                <button className='bg-blackGray px-3 rounded py-0'>
                  {lang}
                </button>
              </div>
            </div>
            <div>
              <p className='text-primary'>{discount}</p>
              <div className='flex gap-2 items-center'>
                <h1 className='text-2xl'>
                  ₹ {price} <span>(+ GST)</span>
                </h1>
                <h2 className='text-gray-500 line-through'>₹ {notPrice}</h2>
                <button className='px-2 py-0 bg-white text-black rounded'>
                  {off}% OFF
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className='w-full bg-primary px-3 py-2 mt-4 rounded-lg text-2xl text-black font-[helveticaBold]'>
          View Details
        </button>
      </div>
    </>
  );
}

export default CourseCard;
