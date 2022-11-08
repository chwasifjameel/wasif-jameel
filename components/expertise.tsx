import Image from 'next/image';

const Expertise = () => {
  return (
    <section className="Section3  bg-[#EDF1FD] py-12" id="expertise">
      <div className="flex flex-col justify-center items-center">
        <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
          Expertise Area
        </p>
        <p className="text-[12px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
          I love developing web-based projects but I&apos;m not limited to that.
          I do Android and iOS app development as well.
        </p>
      </div>
      <div className="py-8 flex justify-center flex-col sm:flex-row flex-wrap items-center sm:items-start">
        <div className="Card1 cursor-pointer my-2">
          <p className="flex flex-col items-center py-6 px-4 w-[300px] bg-[#F4F7FF] text-[#737998] rounded border border-gray-200 shadow-md hover:bg-white  hover:text-black hover:scale-[1.1] ease-in duration-100">
            <Image
              alt="laptop"
              src="/laptop.svg"
              width="0"
              height="0"
              sizes="100vw"
              quality={100}
              className="w-[30px] h-8 my-3"
            />
            <p className="mb-2 text-lg text-center  tracking-wide">
              Full Stack Web Development
            </p>
            <p className="text-[14px]  text-center py-4">
              Have been part of 100+ projects in my professional career.
            </p>
          </p>
        </div>
        <div className="Card1 cursor-pointer my-2 sm:mx-6">
          <p className="flex flex-col items-center py-6 px-4 w-[300px] bg-[#F4F7FF] text-[#737998] rounded border border-gray-200 shadow-md hover:bg-white  hover:text-black hover:scale-[1.1] ease-in duration-100">
            <Image
              alt="mobile"
              src="/mobile.svg"
              width="0"
              height="0"
              sizes="100vw"
              quality={100}
              className="w-[30px] h-8 my-3"
            />
            <p className="mb-2 text-lg text-center  tracking-wide">
              App Development
            </p>
            <p className="text-[14px] ] text-center py-4">
              I develop both Android & iOS in React Native.
            </p>
          </p>
        </div>
        <div className="Card1 cursor-pointer my-2">
          <p className="flex flex-col items-center py-6 px-4 w-[300px] bg-[#F4F7FF] text-[#737998] rounded border border-gray-200 shadow-md hover:bg-white  hover:text-black hover:scale-[1.1] ease-in duration-100">
            <Image
              alt="people"
              src="/people.svg"
              width="0"
              height="0"
              sizes="100vw"
              quality={100}
              className="w-[30px] h-8 my-3"
            />
            <p className="mb-2 text-lg text-center tracking-wide">
              Consultancy
            </p>
            <p className="text-[14px]  text-center py-4">
              I help you find the best solution that can save you time and
              money.
            </p>
          </p>
        </div>
      </div>
      <div className="flex justify-center pb-11">
        <Image
          alt="more"
          src="/more.svg"
          width="0"
          height="0"
          sizes="100vw"
          quality={100}
          className="w-[30px] h-8 "
        />
      </div>
    </section>
  );
};

export default Expertise;
