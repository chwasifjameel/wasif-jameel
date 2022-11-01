const AboutMe = () => {
  return (
    <section className="Section2 py-11">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center py-10">
        <div className="image h-[400px]">
          <img src="/jem2.png" className="h-[100%]" alt="" />
        </div>
        <div className="aboutMe w-[70%] md:w-[30%]  pt-10 md:pl-11">
          <div className="flex items-center justify-start ">
            <span className="text-gray-500 mt-[-12px]">____</span>
            &nbsp;&nbsp;&nbsp;
            <span className="font-montserrat text-gray-700 -tracking-wide leading-3 text-[26px]">
              About Me
            </span>
          </div>
          <p className="pt-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa fugit
            distinctio eveniet aliquid, delectus perferendis quisquam beatae
            nisi suscipit inventore officiis ducimus vel!
          </p>
          <p className="pt-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa fugit
            distinctio eveniet aliquid.
          </p>
          <div className="pt-8">
            <img src="/sign.png" className="h-[50px]" alt="" />
          </div>
          <div className="flex mt-2">
            <div className="bg-[#3E4356] text-white px-7 py-4 text-[12px] cursor-pointer w-fit hover:bg-[#2f313d] hover:ease-linear hover:duration-100">
              <span className="">HIRE ME</span>
            </div>
            &nbsp;
            <div className="bg-[#3E4356] text-white px-6 text-[12px] cursor-pointer w-fit hover:bg-[#2f313d] hover:ease-linear hover:duration-100">
              <span>
                <img src="/rightlong.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center py-12">
        <div className="flex w-[100%] flex-col justify-center items-center md:justify-start md:items-end ">
          <div className="md:w-[50%] w-[80%]">
            <div className="flex justify-between ">
              <p>UI UX DESIGN</p>
              <p>90%</p>
            </div>
            <div>
              <progress
                value="90"
                max="100"
                className="w-[100%] h-[5px] rounded-2xl bg-black"
              />
            </div>
          </div>
          <div className="md:w-[50%] w-[80%] relative">
            <div className="flex justify-between">
              <p>MARKETING</p>
              <p>97%</p>
            </div>
            <div>
              <progress
                value="97"
                max="100"
                className="w-[100%] h-[5px] rounded-2xl bg-black"
              />
            </div>
            <p className="absolute flex flex-row-reverse items-center justify-center -rotate-90 left-[-100px] bottom-[0%] md:bottom-[25%] font-bold font-montserrat">
              <p className="text-xl text-[#3E4455]">My Skills </p>&nbsp;&nbsp;{' '}
              <span className="mt-[-12px]">____</span>
            </p>
          </div>
        </div>
        <div className="flex w-[100%] flex-col justify-center items-center md:justify-start md:items-center">
          <div className="md:w-[50%] w-[80%]">
            <div className="flex justify-between">
              <p>WEB DEVELOPMENT</p>
              <p>95%</p>
            </div>
            <div>
              <progress
                value="95"
                max="100"
                className=" w-[100%] h-[5px] rounded-2xl bg-black"
              />
            </div>
          </div>
          <div className="md:w-[50%] w-[80%]">
            <div className="flex justify-between ">
              <p>SEO & Marketing</p>
              <p>92%</p>
            </div>
            <div>
              <progress
                value="92"
                max="100"
                className="w-[100%] h-[5px] rounded-2xl bg-black"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
