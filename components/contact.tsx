import Image from 'next/image';

const Contact = () => {
  return (
    <section
      className="Section9 bg-[#F8F9FE] py-32 flex flex-col md:flex-row justify-start xl:justify-between px-8 relative"
      id="contact">
      <div>
        <div className="flex items-center justify-start pb-8">
          <span className="text-gray-500 mt-[-12px]">____</span>
          &nbsp;&nbsp;
          <span className=" text-gray-500 -tracking-wide leading-3 text-[20px] font-mono">
            wasif.jameel1@gmail.com
          </span>
        </div>
        <span className="flex ">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/chwasifjameel"
            target="__blank"
            className="cursor-pointer mr-6 rounded rounded-full relative">
            <Image src="/linkedin.svg" alt="linkedin" width={20} height={20} />
          </a>
          <a
            href="http://twitter.com/chwasifjameel"
            target="__blank"
            className="cursor-pointer mr-6 rounded rounded-full relative">
            <Image src="/twitter.svg" alt="twitter" width={20} height={20} />
          </a>
          <a
            href="http://instagram.com/chwasifjameel"
            target="__blank"
            className="cursor-pointer rounded rounded-full relative">
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={19}
              height={19}
            />
          </a>
        </span>
      </div>
      <div className="hidden md:block" />
      <form className="w-full sm:w-[450px] px-6 py-8 shadow-2xl bg-white mt-12 lg:mt-0 md:absolute right-[10%] top-[-70%]">
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
      </form>
    </section>
  );
};

export default Contact;
