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
      <div className="container mx-auto">{/* Portfolio */}</div>
    </section>
  );
};

export default FeaturedWork;
