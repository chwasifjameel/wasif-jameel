import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-[#EDF1FD] flex flex-col ">
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
            <h1 className="font-montserrat text-[50px]">
              I&apos;m <span className="text-[#717895]"> Wasif </span> Jameel
            </h1>
            <p className="capitalize text-[12px] w-[75%]">
              this is{' '}
              <span className="text-[#787D9A] font-semibold">
                {' '}
                Wasif jameel{' '}
              </span>{' '}
              Full Stack Developer, Writer, and IT Consultant working around the
              globe. Helping develop solutions that refine processes, save time
              and resources.
            </p>
            <div className="bg-[#424657] text-white px-6 py-2 text-[12px] cursor-pointer lg:mt-16 mt-4 hover:bg-[#2f313d] hover:ease-linear hover:duration-100">
              <a className="" href="mailto:wasif.jameel1@gmail.com">
                CONTACT ME
              </a>
            </div>
            <span className="flex pt-5 ">
              <a
                href="https://www.linkedin.com/in/chwasifjameel"
                target="__blank"
                className="cursor-pointer mr-6 rounded rounded-full relative">
                <Image
                  src="/linkedin.svg"
                  alt="linkedin"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="http://twitter.com/chwasifjameel"
                target="__blank"
                className="cursor-pointer mr-6 rounded rounded-full relative">
                <Image
                  src="/twitter.svg"
                  alt="twitter"
                  width={20}
                  height={20}
                />
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
        </div>

        <div className="flex items-end lg:ml-[-25%] 2xl:ml-[-15%] relative">
          <Image
            src="/wasif-jameel-main.png"
            blurDataURL="/wasif-jameel-main.png"
            alt="Wasif Jameel"
            width="600"
            height="917"
            quality={100}
            placeholder="blur"
          />
          <p className="absolute flex items-center rotate-90 right-[-50px] top-[70%] font-semibold">
            SCROLL DOWN &nbsp;{' '}
            <span>
              <Image
                src="/arrow-right.svg"
                alt="Wasif Jameel"
                width="30"
                height="30"
              />
            </span>{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
