const Testimonials = () => {
  return (
    <section className="Section6 pt-12 md:pb-28 pb-12">
      <div className="flex flex-col justify-center items-center">
        <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
          Testimonials
        </p>
        <p className="text-[13px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est,
          eaque repudiandae quaerat sunt voluptate harum distinctio fbg turnt sb
          gulte.
        </p>
      </div>

      <div className="py-8 flex justify-center flex-col sm:flex-row flex-wrap items-center sm:items-start gap-y-8 sm:gap-y-0 sm:gap-x-8">
        <div className="Card1 cursor-pointer my-2">
          <p className="flex flex-col items-center py-6 px-4 w-[300px] bg-[#EDF1FD] text-[#737998] rounded border border-gray-200 shadow-md hover:bg-white  hover:text-black hover:scale-[1.1] ease-in duration-100">
            <div className="w-full flex flex-col items-center justify-center gap-8 pb-2">
              <div className="h-12 flex justify-end items-end w-full opacity-[0.6]">
                <img src="quote-right.svg" className="h-[100%]" alt="" />
              </div>
              <p className="font-[16px] italic font-serif">
                &quot;Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500s&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="rounded-full w-16 h-16 bg-black overflow-hidden">
                  <img src="/person.png" alt="imgs" />
                </div>
                <div className="flex flex-col tracking-wider">
                  <label className="text-gray-600  font-light">
                    Garry Toris
                  </label>
                  <label className="text-gray-400 font-light text-sm">
                    CEO at Marvel Theme
                  </label>
                </div>
              </div>
            </div>
          </p>
        </div>
        <div className="Card1 cursor-pointer my-2">
          <p className="flex flex-col items-center py-6 px-4 w-[300px] bg-[#EDF1FD] text-[#737998] rounded border border-gray-200 shadow-md hover:bg-white  hover:text-black hover:scale-[1.1] ease-in duration-100">
            <div className="w-full flex flex-col items-center justify-center gap-8 pb-2">
              <div className="h-12 flex justify-end items-end w-full opacity-[0.6]">
                <img src="quote-right.svg" className="h-[100%]" alt="" />
              </div>
              <p className="font-[16px] italic font-serif">
                &quot;Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500s&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="rounded-full w-16 h-16 bg-black overflow-hidden">
                  <img src="/about.jpg" alt="imgs" />
                </div>
                <div className="flex flex-col tracking-wider">
                  <label className="text-gray-600  font-light">
                    Jacob Reid
                  </label>
                  <label className="text-gray-400 font-light text-sm">
                    Photographer
                  </label>
                </div>
              </div>
            </div>
          </p>
        </div>
        <div className="Card1 cursor-pointer my-2">
          <p className="flex flex-col items-center py-6 px-4 w-[300px] bg-[#EDF1FD] text-[#737998] rounded border border-gray-200 shadow-md hover:bg-white  hover:text-black hover:scale-[1.1] ease-in duration-100">
            <div className="w-full flex flex-col items-center justify-center gap-8 pb-2">
              <div className="h-12 flex justify-end items-end w-full opacity-[0.6]">
                <img src="quote-right.svg" className="h-[100%]" alt="" />
              </div>
              <p className="font-[16px] italic font-serif">
                &quot;Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500s&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="rounded-full w-16 h-16 bg-black overflow-hidden">
                  <img src="/laptop.jpg" alt="imgs" />
                </div>
                <div className="flex flex-col tracking-wider">
                  <label className="text-gray-600  font-light">
                    Diana Austin
                  </label>
                  <label className="text-gray-400 font-light text-sm">
                    CEO at Jems
                  </label>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
