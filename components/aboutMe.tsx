import Image from 'next/image';

const AboutMe = () => {
  return (
    <section className="container mx-auto py-11">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center py-10">
        <div className="image h-[400px]">
          <Image
            src="/wasif-jameel-secondry.png"
            width={411}
            height={400}
            alt="wasif jameel"
          />
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
            I&apos;m A Full Stack developer with more than 5 years of experience
            building solutions. I have worked with many remote companies ranging
            from startups to enterprises.
          </p>
          <p className="pt-8">
            I&apos;m concern about quality, reusability and most importantly{' '}
            <span className="text-[#787D9A] font-semibold">value</span> while
            developing anything.
          </p>

          <div className="flex pt-8 mt-2">
            <div className="bg-[#3E4356] text-white px-7 py-4 text-[12px] cursor-pointer w-fit hover:bg-[#2f313d] hover:ease-linear hover:duration-100">
              <span className="">HIRE ME</span>
            </div>
            &nbsp;
            <div className="flex items-center bg-[#3E4356] text-white px-6 text-[12px] cursor-pointer w-fit hover:bg-[#2f313d] hover:ease-linear hover:duration-100">
              <Image
                alt="rightlong"
                src="/rightlong.png"
                width="0"
                height="0"
                sizes="100vw"
                quality={100}
                className="w-full h-8"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center py-12">
        <div className="flex w-1/2 flex-col justify-center items-center md:justify-start md:items-end relative">
          <p className="flex flex-row-reverse items-center justify-start font-bold font-montserrat lg:-rotate-90 absolute left-0 top-[-30px] lg:top-[100px]">
            <p className="text-xl text-[#3E4455]">Technical Skills</p>
            &nbsp;&nbsp; <span className="mt-[-12px]">____</span>
          </p>
          <div className="w-[370px]">
            <div className="flex justify-between ">
              <p>React.js</p>
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
          <div className="w-[370px]">
            <div className="flex justify-between ">
              <p>Next.js</p>
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
          <div className="w-[370px]">
            <div className="flex justify-between ">
              <p>Version Control (Git, GitHub, GitLab)</p>
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
          <div className="w-[370px]">
            <div className="flex justify-between ">
              <p>React Native</p>
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
          <div className="w-[370px]">
            <div className="flex justify-between">
              <p>Node.js</p>
              <p>97%</p>
            </div>
            <div>
              <progress
                value="97"
                max="100"
                className="w-[100%] h-[5px] rounded-2xl bg-black"
              />
            </div>
          </div>
        </div>
        <div className="flex w-1/2 flex-col justify-center items-center md:justify-start md:items-center">
          <div className="w-[370px]">
            <div className="flex justify-between">
              <p>Databases (MongoDB, MySQL, posgreSQL)</p>
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
          <div className="w-[370px]">
            <div className="flex justify-between ">
              <p>Typescript</p>
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
          <div className="w-[370px]">
            <div className="flex justify-between ">
              <p>Gatsby.js</p>
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
          <div className="w-[370px]">
            <div className="flex justify-between ">
              <p>Styling (Bootstrap, TailwindCSS, CSS, SCSS)</p>
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
          <div className="w-[370px]">
            <div className="flex justify-between ">
              <p>Testing (Jest, Cypress)</p>
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
