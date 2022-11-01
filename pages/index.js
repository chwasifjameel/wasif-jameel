/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navbar } from "flowbite-react";

import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,900&family=Montserrat:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className="HeroSection min-h-screen bg-[#EDF1FD] flex flex-col ">
        <div className=" border-gray-200 px-4 sm:px-4 pt-6 pb-2.5 rounded lg:px-10 bg-[#EDF1FD]">
          <Navbar className="navBg">
            <Navbar.Brand href="#">
              <div className="self-center text-4xl font-semibold whitespace-nowrap font-montserrat text-gray-700">
                Ozlan
              </div>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <ul className="flex flex-col p-4 mt-4  rounded-lg  border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-">
                <li className="cursor-pointer">HOME</li>
                <li className="cursor-pointer">ABOUT</li>
                <li className="cursor-pointer">PORTFOLIO</li>
                <li className="cursor-pointer">SERVICES</li>
                <li className="cursor-pointer">RESUME</li>
                <li className="cursor-pointer">BLOG</li>
                <li className="cursor-pointer">CONTACT</li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="flex-1 flex justify-center px-5 pt-5 flex-col lg:flex-row">
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
                I&apos;m <span className="text-[#717895]"> Jems </span> Kemerun
              </p>
              <p className="capitalize text-[12px] w-[75%]">
                this is{" "}
                <span className="text-[#787D9A] font-semibold">
                  {" "}
                  jems Kemerun{" "}
                </span>{" "}
                visual designer, photographer,web developer and creative
                director located in united states, looking for working around
                the globe
              </p>
              <div className="bg-[#424657] text-white px-6 py-2 text-[12px] cursor-pointer lg:mt-16 mt-4 hover:bg-[#2f313d] hover:ease-linear hover:duration-100">
                <span className="">DOWNLOAD CV</span>
              </div>
              <span className="flex pt-5 ">
                <img
                  src="/instagram.svg"
                  className="mr-2 pb-6 blur-[0.5px] cursor-pointer"
                  alt="icon"
                />
                <img
                  src="/world.svg"
                  className="mx-2  pb-6 blur-[0.5px] cursor-pointer"
                  alt="icon"
                />
                <img
                  src="/tumblr.svg"
                  className="mx-2 pb-6 blur-[0.5px] cursor-pointer"
                  alt="icon"
                />
                <img
                  src="/twitter.svg"
                  className="mx-2 pb-6 blur-[0.5px] cursor-pointer"
                  alt="icon"
                />
                <img
                  src="/vimeo.svg"
                  className="mx-2 pb-6 blur-[0.5px] cursor-pointer"
                  alt="icon"
                />
              </span>
            </div>
          </div>

          <div className="heroImage lg:ml-[-25%] 2xl:ml-[-15%] relative">
            <img
              src="/jem1.png"
              className="h-[100%] lg:w-[600px]"
              alt="person"
            />
            <p className="absolute flex items-center rotate-90 right-[-50px] top-[70%] font-semibold">
              SCROLL DOWN &nbsp;{" "}
              <span>
                <img src="/arrow-right.svg" className="" alt="icon" />
              </span>{" "}
            </p>
          </div>
        </div>
      </section>

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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              fugit distinctio eveniet aliquid, delectus perferendis quisquam
              beatae nisi suscipit inventore officiis ducimus vel!
            </p>
            <p className="pt-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              fugit distinctio eveniet aliquid.
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
                <p className="text-xl text-[#3E4455]">My Skills </p>&nbsp;&nbsp;{" "}
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

      <section className="Section3  bg-[#EDF1FD] py-12">
        <div className="flex flex-col justify-center items-center">
          <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
            Expertise Area
          </p>
          <p className="text-[12px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            est, eaque repudiandae quaerat sunt voluptate harum distinctio fbg
            turnt sb gulte.
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
                Here are the biggest enterprise technology acquisitions of 2021
                so far.
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
                Here are the biggest enterprise technology acquisitions of 2021
                so far.
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
                Here are the biggest enterprise technology acquisitions of 2021
                so far.
              </p>
            </p>
          </div>
        </div>
        <div className="flex justify-center pb-11">
          <img src="/more.svg" className="h-[30px]" alt="" />
        </div>
      </section>

      <section className="Section4 py-12">
        <div className="flex flex-col justify-center items-center">
          <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
            Featured Works
          </p>
          <p className="text-[12px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            est, eaque repudiandae quaerat sunt voluptate harum distinctio fbg
            turnt sb gulte.
          </p>
        </div>
        <div className="text-xs font-light flex justify-center pt-11 pb-4 flex-wrap">
          <span className="opacity-[0.8] ml-5 flex flex-col items-center cursor-pointer">
            All Work{" "}
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

      <section className="Section5  bg-[#F8F9FE] py-12">
        <div className="flex flex-col justify-center items-center">
          <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
            Resume
          </p>
          <p className="text-[13px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            est, eaque repudiandae quaerat sunt voluptate harum distinctio fbg
            turnt sb gulte.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center md:space-x-10">
          <div className="py-8 flex justify-center flex-col flex-wrap items-center sm:items-start">
            <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356] flex items-center justify-center w-full">
              <span>
                <img src="/crown.svg" alt="" />
              </span>
              &nbsp; Education
            </p>
            <div className="Card1 cursor-pointer my-2">
              <p className="flex flex-col items-start py-6 px-4 sm:w-[400px] w-[80%] mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
                <p className="text-[10px]  text-start  text-black opacity-[0.5]">
                  March 2013 - Present
                </p>
                <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                  Diploma in Information Technology
                </p>
                <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem excepturi dicta cumque impedit sit enim.
                </p>
                <p className="text-[12px]  text-start  text-black opacity-[0.5]">
                  NortSouth University
                </p>
              </p>
            </div>
            <div className="Card1 cursor-pointer my-2">
              <p className="flex flex-col items-start py-6 px-4 sm:w-[400px] w-[80%] mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
                <p className="text-[10px]  text-start  text-black opacity-[0.5]">
                  March 2011 - 2014 December
                </p>
                <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                  Professional Web Design
                </p>
                <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem excepturi dicta cumque impedit sit enim.
                </p>
                <p className="text-[12px]  text-start  text-black opacity-[0.5]">
                  Florida University
                </p>
              </p>
            </div>
            <div className="Card1 cursor-pointer my-2">
              <p className="flex flex-col items-start py-6 px-4 sm:w-[400px] w-[80%] mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
                <p className="text-[10px]  text-start  text-black opacity-[0.5]">
                  March 2008 - 2010 December
                </p>
                <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                  Higher Secondary School Certificate
                </p>
                <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem excepturi dicta cumque impedit sit enim.
                </p>
                <p className="text-[12px]  text-start  text-black opacity-[0.5]">
                  University of California
                </p>
              </p>
            </div>
          </div>

          <div className="py-8 flex justify-center flex-col flex-wrap items-center sm:items-start">
            <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356] flex items-center justify-center w-full">
              <span>
                <img src="/briefcase.svg" alt="" />
              </span>
              &nbsp; Experience
            </p>
            <div className="Card1 cursor-pointer my-2">
              <p className="flex flex-col items-start py-6 px-4 sm:w-[400px] w-[80%] mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
                <p className="text-[10px]  text-start  text-black opacity-[0.5]">
                  March 2008 - 2010 December
                </p>
                <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                  Higher Secondary School Certificate
                </p>
                <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem excepturi dicta cumque impedit sit enim.
                </p>
                <p className="text-[12px]  text-start  text-black opacity-[0.5]">
                  University of California
                </p>
              </p>
            </div>
            <div className="Card1 cursor-pointer my-2">
              <p className="flex flex-col items-start py-6 px-4 sm:w-[400px] w-[80%] mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
                <p className="text-[10px]  text-start  text-black opacity-[0.5]">
                  March 2013 - Present
                </p>
                <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                  Diploma in Information Technology
                </p>
                <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem excepturi dicta cumque impedit sit enim.
                </p>
                <p className="text-[12px]  text-start  text-black opacity-[0.5]">
                  NortSouth University
                </p>
              </p>
            </div>
            <div className="Card1 cursor-pointer my-2">
              <p className="flex flex-col items-start py-6 px-4 sm:w-[400px] w-[80%] mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
                <p className="text-[10px]  text-start  text-black opacity-[0.5]">
                  March 2011 - 2014 December
                </p>
                <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                  Professional Web Design
                </p>
                <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem excepturi dicta cumque impedit sit enim.
                </p>
                <p className="text-[12px]  text-start  text-black opacity-[0.5]">
                  Florida University
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="Section6 pt-12 md:pb-28 pb-12">
        <div className="flex flex-col justify-center items-center">
          <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
            Testimonials
          </p>
          <p className="text-[13px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            est, eaque repudiandae quaerat sunt voluptate harum distinctio fbg
            turnt sb gulte.
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

      <section className="Section6">
        <div className="flex flex-col justify-center items-center pb-16">
          <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
            My Valuable Clients
          </p>
          <p className="text-[13px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            est, eaque repudiandae quaerat sunt voluptate harum distinctio fbg
            turnt sb gulte.
          </p>
        </div>

        <div>
          <div className="2xl:mx-auto 2xl:container flex justify-center">
            <div className="2xl:px-20 px-6 py-12 w-full lg:w-4/5">
              {/* Carousel for Small-Sized Screen */}
              <CarouselProvider
                className="relative block sm:hidden"
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={3}
                visibleSlides={1}
                step={1}
                infinite={true}
              >
                <div className="js-flickity flex justify-center items-center">
                  <Slider>
                    <Slide className="px-8" index={0}>
                      <img src="/index.png" alt="" />
                    </Slide>
                    <Slide className="px-8" index={1}>
                      <img src="/2.png" alt="" />
                    </Slide>
                    <Slide className="px-8" index={2}>
                      <img src="/3.png" alt="" />
                    </Slide>
                    <Slide className="px-8" index={3}>
                      <img src="/4.png" alt="" />
                    </Slide>
                    <Slide className="px-8" index={4}>
                      <img src="/index.png" alt="" />
                    </Slide>
                    <Slide className="px-8" index={5}>
                      <img src="/2.png" alt="" />
                    </Slide>
                    <Slide className="px-8" index={6}>
                      <img src="/3.png" alt="" />
                    </Slide>
                    <Slide className="px-8" index={7}>
                      <img src="/4.png" alt="" />
                    </Slide>
                  </Slider>
                </div>
              </CarouselProvider>

              {/* Carousel for Medium and Large-Sized Screen */}
              <CarouselProvider
                className="relative hidden sm:block"
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={3}
                visibleSlides={1}
                step={1}
                infinite={true}
                currentSlide={1}
              >
                <div className="js-flickity flex justify-center items-center">
                  <Slider className="carousel__sliderLarge">
                    <Slide
                      className="carousel__inner-slideLarge px-2"
                      index={0}
                    >
                      <img src="/index.png" alt="" />
                    </Slide>
                    <Slide
                      className="carousel__inner-slideLarge px-2"
                      index={1}
                    >
                      <img src="/2.png" alt="" />
                    </Slide>
                    <Slide
                      className="carousel__inner-slideLarge px-2"
                      index={2}
                    >
                      <img src="/3.png" alt="" />
                    </Slide>
                    <Slide
                      className="carousel__inner-slideLarge px-2"
                      index={3}
                    >
                      <img src="/4.png" alt="" />
                    </Slide>
                    <Slide
                      className="carousel__inner-slideLarge px-2"
                      index={4}
                    >
                      <img src="/index.png" alt="" />
                    </Slide>
                    <Slide
                      className="carousel__inner-slideLarge px-2"
                      index={5}
                    >
                      <img src="/2.png" alt="" />
                    </Slide>
                    <Slide
                      className="carousel__inner-slideLarge px-2"
                      index={6}
                    >
                      <img src="/3.png" alt="" />
                    </Slide>
                    <Slide
                      className="carousel__inner-slideLarge px-2"
                      index={7}
                    >
                      <img src="/4.png" alt="" />
                    </Slide>
                  </Slider>
                </div>
              </CarouselProvider>
            </div>
          </div>
        </div>
      </section>

      <section className="Section7 bg-[#F8F9FE] py-20">
        <p className="capitalize  text-xl text-center font-light opacity-[0.7]">
          Have any project in mind ?
        </p>
        <p className="capitalize  text-6xl text-center font-serif pt-12 pb-6">
          Just say hello !
        </p>
        <div className="w-full flex items-center justify-center pb-12">
          <div className="bg-[#3E4356] text-white px-7 py-4 text-[12px] cursor-pointer w-fit hover:animate-pulse hover:bg-[#2f313d]">
            <span className="">HIRE ME</span>
          </div>
        </div>
      </section>

      <section className="Section8 lg:relative">
        <div className="flex flex-col justify-center items-center pb-16">
          <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
            Latest News
          </p>
          <p className="text-[13px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            est, eaque repudiandae quaerat sunt voluptate harum distinctio fbg
            turnt sb gulte.
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
                    className="absolute top-[40%] left-[-20px] -rotate-90 inline-block px-2.5 py-2.5 font-body bg-[#3E4356] text-white font-medium text-xs leading-tight uppercase   transition duration-150 ease-in-out"
                  >
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
                    className="absolute top-[40%] left-[-20px] -rotate-90 inline-block px-2.5 py-2.5 font-body bg-[#3E4356] text-white font-medium text-xs leading-tight uppercase   transition duration-150 ease-in-out"
                  >
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
                    className="absolute top-[40%] left-[-20px] -rotate-90 inline-block px-2.5 py-2.5 font-body bg-[#3E4356] text-white font-medium text-xs leading-tight uppercase   transition duration-150 ease-in-out"
                  >
                    May 28, 2018
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start xl:justify-around items-center flex-col lg:flex-row lg:pb-[50px] pb-12 px-4">
          <div className="font-mono text-2xl text-[#868CA5]  w-full md:w-1/2 lg:w-[40%] px-4">
            Let’s make something new, different and more meaningful or make
            thing more visual or Conceptual ?{" "}
            <span className="text-black">Just Say Hello !</span>
          </div>
          <div className="Form w-full sm:w-[450px] px-6 py-8 shadow-2xl lg:absolute lg:-bottom-[18%] xl:-bottom-[20%] md:right-[8%] lg:right-[10%] 2xl:right-[15%] bg-white mt-12 lg:mt-0">
            <div className="flex items-center border-b border-gray-300 py-2 pt-12 bg-white">
              <input
                className="  border-none w-full text-[#868CA5] mr-3 py-1 px-2 leading-tight font-mono"
                type="text"
                placeholder="Your Name"
                aria-label="Full name"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2 pt-12 bg-white">
              <input
                className="  border-none w-full text-[#868CA5] mr-3 py-1 px-2 leading-tight font-mono"
                type="text"
                placeholder="Mail Address"
                aria-label="Full name"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2 pt-12 bg-white">
              <input
                className="  border-none w-full text-[#868CA5] mr-3 py-1 px-2 leading-tight font-mono"
                type="text"
                placeholder="Your Budget(Optional)"
                aria-label="Full name"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2 pt-12 bg-white">
              <input
                className="  border-none w-full text-[#868CA5] mr-3 py-1 px-2 leading-tight font-mono"
                type="text"
                placeholder="Project Description"
                aria-label="Full name"
              />
            </div>
            <div className="w-full flex items-center justify-end pb-12 pt-12 bg-white">
              <div className="bg-[#3E4356] text-white px-7 py-4 text-[12px] cursor-pointer w-fit hover:bg-[#2f313d] hover:ease-linear hover:duration-100">
                <span className="">HIRE ME</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      <section className="Section9 bg-[#F8F9FE] py-12 pb-12 flex justify-start xl:justify-around px-8">
        <div>
          <div className="flex items-center justify-start pb-8">
            <span className="text-gray-500 mt-[-12px]">____</span>
            &nbsp;&nbsp;
            <span className=" text-gray-500 -tracking-wide leading-3 text-[20px] font-mono">
              +066 778 998
            </span>
          </div>
          <div className="flex items-center justify-start pb-8">
            <span className="text-gray-500 mt-[-12px]">____</span>
            &nbsp;&nbsp;
            <span className=" text-gray-500 -tracking-wide leading-3 text-[20px] font-mono">
              your@mail.com
            </span>
          </div>
          <div className="flex items-center justify-start pb-8">
            <span className="text-gray-500 mt-[-12px]">____</span>
            &nbsp;&nbsp;
            <span className=" text-gray-500 -tracking-wide leading-3 text-[20px] font-mono">
              28 Green Tower, Street Name,
              <br />
              <br /> New York City, USA
            </span>
          </div>
          <span className="flex ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src="/instagram.svg"
              className="mr-2 pb-6 blur-[0.5px]"
              alt="icon"
            />
            <img
              src="/world.svg"
              className="mx-2  pb-6 blur-[0.5px]"
              alt="icon"
            />
            <img
              src="/tumblr.svg"
              className="mx-2 pb-6 blur-[0.5px]"
              alt="icon"
            />
            <img
              src="/twitter.svg"
              className="mx-2 pb-6 blur-[0.5px]"
              alt="icon"
            />
            <img
              src="/vimeo.svg"
              className="mx-2 pb-6 blur-[0.5px]"
              alt="icon"
            />
          </span>
        </div>
        <div></div>
      </section>

      <section className="Footer bg-white text-center">
        <p className="font-mono text-xl py-16 opacity-[0.7]">
          Copyright © 2018 Giant_Theme, All rights Reserved.
          <br />
          Created by Giant_Design
        </p>
      </section>
    </div>
  );
}
