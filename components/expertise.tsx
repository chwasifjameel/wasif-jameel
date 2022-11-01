const Expertise = () => {
  return (
    <section className="Section3  bg-[#EDF1FD] py-12">
      <div className="flex flex-col justify-center items-center">
        <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
          Expertise Area
        </p>
        <p className="text-[12px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est,
          eaque repudiandae quaerat sunt voluptate harum distinctio fbg turnt sb
          gulte.
        </p>
      </div>
      <div className="py-8 flex justify-center flex-col sm:flex-row flex-wrap items-center sm:items-start">
        <div className="Card1 cursor-pointer my-2">
          <p className="flex flex-col items-center py-6 px-4 w-[300px] bg-[#F4F7FF] text-[#737998] rounded border border-gray-200 shadow-md hover:bg-white  hover:text-black hover:scale-[1.1] ease-in duration-100">
            <img src="/paint-bucket.svg" className="w-[30px] py-3" alt="" />

            <p className="mb-2 text-lg text-center  tracking-wide">
              UI UX DESIGN
            </p>
            <p className="text-[14px]  text-center py-4">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far.
            </p>
          </p>
        </div>
        <div className="Card1 cursor-pointer my-2 sm:mx-6">
          <p className="flex flex-col items-center py-6 px-4 w-[300px] bg-[#F4F7FF] text-[#737998] rounded border border-gray-200 shadow-md hover:bg-white  hover:text-black hover:scale-[1.1] ease-in duration-100">
            <img src="/dribbble.svg" className="w-[30px] py-3" alt="" />

            <p className="mb-2 text-lg text-center  tracking-wide">
              IOS APP DESIGN
            </p>
            <p className="text-[14px] ] text-center py-4">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far.
            </p>
          </p>
        </div>
        <div className="Card1 cursor-pointer my-2">
          <p className="flex flex-col items-center py-6 px-4 w-[300px] bg-[#F4F7FF] text-[#737998] rounded border border-gray-200 shadow-md hover:bg-white  hover:text-black hover:scale-[1.1] ease-in duration-100">
            <img src="/camera.svg" className="w-[30px] py-3" alt="" />

            <p className="mb-2 text-lg text-center tracking-wide">
              PHOTOGRAPHY
            </p>
            <p className="text-[14px]  text-center py-4">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far.
            </p>
          </p>
        </div>
      </div>
      <div className="flex justify-center pb-11">
        <img src="/more.svg" className="h-[30px]" alt="" />
      </div>
    </section>
  );
};

export default Expertise;
