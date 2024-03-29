import Image from 'next/image';

const Resume = () => {
  return (
    <section className="Section5  bg-[#F8F9FE] py-12" id="resume">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-montserrat text-5xl pt-11 pb-6 text-[#3E4356]">
          Resume
        </h1>
        <p className="text-[13px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
          Here is a bit about my educational and acadamic background.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start md:space-x-10">
        <div className="py-8 flex justify-center flex-col flex-wrap items-center sm:items-start">
          <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356] flex items-center justify-center w-full">
            <Image src="/crown.svg" alt="crown" width={20} height={20} />
            &nbsp; Education
          </p>
          <div className="cursor-pointer my-2 w-96">
            <span className="flex flex-col items-start py-6 px-4 sm:w-[400px] w-[80%] mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                September 2014 - December 2018
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                BS (Computer Science)
              </p>
              <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                I took courses regarding programming fundamentals, data
                structures, Object-oriented programming and software
                development.
              </p>
              <p className="text-[12px] text-start text-black opacity-[0.5]">
                COMSATS University, Islamabad
              </p>
            </span>
          </div>
          <div className="cursor-pointer my-2 w-96">
            <span className="flex flex-col items-start py-6 px-4 sm:w-[400px] w-[80%] mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                January 2012 - December 2014
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                F.Sc.
              </p>
              <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                My majors were Mathematics, Physics, Chemistry.
              </p>
              <p className="text-[12px] text-start text-black opacity-[0.5]">
                Govt. Zamindar Post Graduate College, Gujrat
              </p>
            </span>
          </div>
          <div className="cursor-pointer my-2 w-96">
            <span className="flex flex-col items-start py-6 px-4 sm:w-[400px] w-[80%] mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                January 2010 - December 2012
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                Higher School Certificate in Science
              </p>
              <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                I took Mathematics, Physics, Chemistry as my major subjects.
              </p>
              <p className="text-[12px] text-start text-black opacity-[0.5]">
                Govt. Comprehensive High School, Gujrat
              </p>
            </span>
          </div>
        </div>

        <div className="py-8 flex justify-center flex-col items-center sm:items-start ml-0">
          <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356] flex items-center justify-center w-full">
            <span>
              <Image
                src="/briefcase.svg"
                alt="briefcase"
                width={20}
                height={20}
              />
            </span>
            &nbsp; Experience
          </p>
          <div className="cursor-pointer my-2 w-96">
            <span className="flex flex-col items-start py-6 px-4 sm:w-[400px] w-[80%] mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                February 2018 - Present
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                Full Stack Developer
              </p>
              <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                Developed many complex web applications having marketing
                software and tracking involved. The technology stack mainly
                spanned React, Node, Gatsby, Tailwind, and Bootstrap.
              </p>
              <p className="text-[12px] text-start text-black opacity-[0.5]">
                Intermedia Marketing Group
              </p>
            </span>
          </div>
          <div className="cursor-pointer my-2 w-96">
            <span className="flex flex-col items-start py-6 px-4 sm:w-[400px] w-[80%] mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                December 2018 - Present
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                Software Engineer
              </p>
              <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                Completed numerous projects working as a freelancer on Upwork.
                Worked with React.js, React Native, Node.js, Next.js, Gatsby,
                Strapi, and many other tools.
              </p>
              <p className="text-[12px] text-start text-black opacity-[0.5]">
                freelancer at Upwork
              </p>
            </span>
          </div>
          <div className="cursor-pointer my-2 w-96">
            <span className="flex flex-col items-start py-6 px-4 sm:w-[400px] w-[80%] mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                July 2020 - January, 2021
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                Software Engineer
              </p>
              <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                Worked on both React.js for web development and React Native for
                app development. Also explored PubNub, Material UI, firebase,
                and social media app development.
              </p>
              <p className="text-[12px] text-start text-black opacity-[0.5]">
                Crowdbotics
              </p>
            </span>
          </div>
          <div className="cursor-pointer my-2 w-96">
            <span className="flex flex-col items-start py-6 px-4 sm:w-[400px] w-[80%] mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                July 2018 - November 2018
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                Software Engineer
              </p>
              <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                Worked on the production of a new product managing the product
                <br />
                Owned the responsibility of leading the development team
              </p>
              <p className="text-[12px] text-start text-black opacity-[0.5]">
                MTBC (now CareCloud)
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
