const News = () => {
  return (
    <section className="Section8 lg:relative">
      <div className="flex flex-col justify-center items-center pb-16">
        <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
          Latest News
        </p>
        <p className="text-[13px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est,
          eaque repudiandae quaerat sunt voluptate harum distinctio fbg turnt sb
          gulte.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 items-center justify-center flex-wrap my-2 lg:pb-52 pb-20">
        <div className="Card1 cursor-pointer my-2">
          <div className="flex justify-center relative">
            <div className=" shadow-lg bg-white max-w-[350px] ">
              <img className="" src="/blog1.jpg" alt="" />

              <div className="p-6">
                <p className="text-gray-600 text-[12px] pb-2 flex w-full justify-around pl-5">
                  <span>By: Ozlan</span>
                  <span>3 Comments</span>
                  <span>1k likes</span>
                </p>
                <p className="text-gray-700 text-2xl mb-4 py-6 font-montserrat">
                  Design is not Just Look Woow, Its means...
                </p>
                <div className="flex items-center justify-start pb-8">
                  <span className="text-gray-500 mt-[-12px]">____</span>
                  &nbsp;&nbsp;
                  <span className=" text-gray-500 -tracking-wide leading-3 text-[12px] font-sans">
                    Read More
                  </span>
                </div>
                <button
                  type="button"
                  className="absolute top-[40%] left-[-20px] -rotate-90 inline-block px-2.5 py-2.5 font-body bg-[#3E4356] text-white font-medium text-xs leading-tight uppercase   transition duration-150 ease-in-out">
                  May 28, 2018
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Card1 cursor-pointer my-2">
          <div className="flex justify-center relative">
            <div className=" shadow-lg bg-white max-w-[350px] ">
              <img className="" src="/blog2.jpg" alt="" />

              <div className="p-6">
                <p className="text-gray-600 text-[12px] pb-2 flex w-full justify-around pl-5">
                  <span>By: Ozlan</span>
                  <span>3 Comments</span>
                  <span>1k likes</span>
                </p>
                <p className="text-gray-700 text-2xl mb-4 py-6 font-montserrat">
                  Design is not Just Look Woow, Its means...
                </p>
                <div className="flex items-center justify-start pb-8">
                  <span className="text-gray-500 mt-[-12px]">____</span>
                  &nbsp;&nbsp;
                  <span className=" text-gray-500 -tracking-wide leading-3 text-[12px] font-sans">
                    Read More
                  </span>
                </div>
                <button
                  type="button"
                  className="absolute top-[40%] left-[-20px] -rotate-90 inline-block px-2.5 py-2.5 font-body bg-[#3E4356] text-white font-medium text-xs leading-tight uppercase   transition duration-150 ease-in-out">
                  May 28, 2018
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Card1 cursor-pointer my-2">
          <div className="flex justify-center relative">
            <div className=" shadow-lg bg-white max-w-[350px] ">
              <img className="" src="/blog3.jpg" alt="" />

              <div className="p-6">
                <p className="text-gray-600 text-[12px] pb-2 flex w-full justify-around pl-5">
                  <span>By: Ozlan</span>
                  <span>3 Comments</span>
                  <span>1k likes</span>
                </p>
                <p className="text-gray-700 text-2xl mb-4 py-6 font-montserrat">
                  Design is not Just Look Woow, Its means...
                </p>
                <div className="flex items-center justify-start pb-8">
                  <span className="text-gray-500 mt-[-12px]">____</span>
                  &nbsp;&nbsp;
                  <span className=" text-gray-500 -tracking-wide leading-3 text-[12px] font-sans">
                    Read More
                  </span>
                </div>
                <button
                  type="button"
                  className="absolute top-[40%] left-[-20px] -rotate-90 inline-block px-2.5 py-2.5 font-body bg-[#3E4356] text-white font-medium text-xs leading-tight uppercase   transition duration-150 ease-in-out">
                  May 28, 2018
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start xl:justify-around items-center flex-col lg:flex-row lg:pb-[50px] pb-12 px-4">
        <div className="font-mono text-2xl text-[#868CA5]  w-full md:w-1/2 lg:w-[40%] px-4">
          Let’s make something new, different and more meaningful or make thing
          more visual or Conceptual ?{' '}
          <span className="text-black">Just Say Hello !</span>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default News;
