const FeaturedWork = () => {
  return (
    <section className="Section4 py-12" id="featured-work">
      <div className="flex flex-col justify-center items-center">
        <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
          Featured Works
        </p>
        <p className="text-[12px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est,
          eaque repudiandae quaerat sunt voluptate harum distinctio fbg turnt sb
          gulte.
        </p>
      </div>
      <div className="text-xs font-light flex justify-center pt-11 pb-4 flex-wrap">
        <span className="opacity-[0.8] ml-5 flex flex-col items-center cursor-pointer">
          All Work{' '}
          <span>
            <img src="/more-alt.svg" alt="" />
          </span>
        </span>
        <span className="opacity-[0.5] ml-5 cursor-pointer hover:opacity-[1]">
          Marketing
        </span>
        <span className="opacity-[0.5] ml-5 cursor-pointer hover:opacity-[1]">
          Design
        </span>
        <span className="opacity-[0.5] ml-5 cursor-pointer hover:opacity-[1]">
          Development
        </span>
        <span className="opacity-[0.5] ml-5 cursor-pointer hover:opacity-[1]">
          Illustration
        </span>
      </div>
      <div className="container mx-auto">
        <div className="grid-cols-3 p-10 md:p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-2">
          <div className="w-full rounded relative img1">
            <img src="/laptop.jpg" className="h-[100%]" alt="" />
            <div className="absolute h-full w-full bg-black opacity-[0.5] top-0 bottom-0 left-0 right-0 cursor-pointer hidden imgHover"></div>
          </div>
          <div className="w-full rounded relative img1">
            <img src="/hardware.jpg" alt="" className="h-full" />
            <div className="absolute h-full w-full bg-black opacity-[0.5] top-0 bottom-0 left-0 right-0 cursor-pointer hidden imgHover"></div>
          </div>
          <div className="w-full  rounded relative img1">
            <img src="/headphone.jpg" alt="" className="h-full" />
            <div className="absolute h-full w-full bg-black opacity-[0.5] top-0 bottom-0 left-0 right-0 cursor-pointer hidden imgHover"></div>
          </div>
          <div className="w-full rounded relative img1">
            <img src="/cup.jpg" alt="" className="h-full" />
            <div className="absolute h-full w-full bg-black opacity-[0.5] top-0 bottom-0 left-0 right-0 cursor-pointer hidden imgHover"></div>
          </div>
          <div className="w-full rounded relative img1">
            <img src="/shoes.jpg" alt="" className="h-full" />
            <div className="absolute h-full w-full bg-black opacity-[0.5] top-0 bottom-0 left-0 right-0 cursor-pointer hidden imgHover"></div>
          </div>
          <div className="w-full rounded relative img1">
            <img src="/cam.jpg" alt="" className="h-full" />
            <div className="absolute h-full w-full bg-black opacity-[0.5] top-0 bottom-0 left-0 right-0 cursor-pointer hidden imgHover"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
