const Hero = () => {
  return (
    <section className="HeroSection min-h-screen bg-[#EDF1FD] flex flex-col ">
      <div className="flex-1 flex justify-center md:justify-between px-4 sm:px-12 md:px-32 pt-5 flex-col lg:flex-row">
        <div className="flex items-center justify-center flex-col">
          <div className="heroText   flex items-start justify-center flex-col">
            <div className="flex items-center justify-center">
              <span className="text-gray-500 mt-[-12px]">____</span>
              &nbsp;&nbsp;&nbsp;
              <span className="font-sans font-medium text-gray-600 -tracking-wide leading-3 text-[14px]">
                HELLO
              </span>
            </div>
            <p className="font-montserrat text-[50px]">
              I&apos;m <span className="text-[#717895]"> Wasif </span> Jameel
            </p>
            <p className="capitalize text-[12px] w-[75%]">
              this is{' '}
              <span className="text-[#787D9A] font-semibold">
                {' '}
                Wasif jameel{' '}
              </span>{' '}
              Full Stack Developer, Writer, IT Consultant working around the
              globe. Helping develop solution that can save you millons.
            </p>
            <div className="bg-[#424657] text-white px-6 py-2 text-[12px] cursor-pointer lg:mt-16 mt-4 hover:bg-[#2f313d] hover:ease-linear hover:duration-100">
              <span className="">CONTACT ME</span>
            </div>
            <span className="flex pt-5 ">
              <a
                href="https://www.linkedin.com/in/chwasifjameel/"
                target="__blank">
                <img
                  src="/linkedin.svg"
                  className="mr-2 pb-6 blur-[0.5px] cursor-pointer"
                  alt="icon"
                  width={17}
                  height={17}
                />
              </a>
              <a href="http://twitter.com/chwasifjameel" target="__blank">
                <img
                  src="/twitter.svg"
                  className="mx-2 pb-6 blur-[0.5px] cursor-pointer"
                  alt="icon"
                />
              </a>

              <a href="http://instagram.com/chwasifjameel" target="__blank">
                <img
                  src="/instagram.svg"
                  className="mx-2 pb-6 blur-[0.5px] cursor-pointer"
                  alt="icon"
                />
              </a>
            </span>
          </div>
        </div>

        <div className="heroImage lg:ml-[-25%] 2xl:ml-[-15%] relative">
          <img
            src="/wasif-jameel-main.webp"
            className="h-[100%] lg:w-[600px]"
            alt="person"
          />
          <p className="absolute flex items-center rotate-90 right-[-50px] top-[70%] font-semibold">
            SCROLL DOWN &nbsp;{' '}
            <span>
              <img src="/arrow-right.svg" className="" alt="icon" />
            </span>{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
