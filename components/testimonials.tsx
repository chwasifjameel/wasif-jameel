import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="Section6 pt-12 md:pb-28 pb-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-montserrat text-5xl pt-11 pb-6 text-[#3E4356]">
          Testimonials
        </h1>
        <p className="text-[13px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
          Here is what my most recent clients want to say about my me.
        </p>
      </div>

      <div className="py-8 flex justify-center flex-col sm:flex-row flex-wrap items-center sm:items-start gap-y-4 sm:gap-y-0 sm:gap-x-8">
        <div className="cursor-pointer my-2">
          <div className="h-[470px] flex flex-col justify-between items-center py-6 px-4 w-[300px] bg-[#EDF1FD] text-[#737998] rounded border border-gray-200 shadow-md hover:bg-white  hover:text-black hover:scale-[1.1] ease-in duration-100">
            <div className="h-12 flex justify-end items-end w-full opacity-[0.6]">
              <Image
                src="/quote-right.svg"
                alt="quote right"
                width={50}
                height={50}
              />
            </div>
            <p className="font-[16px] italic font-serif">
              &quot;This was a long-termed project with Wasif, we had a lot of
              meetings back and forth about the implementations and it all
              worked very well. <br /> Even with tight deadlines and meetings in
              the evening hours - Wasif was flexible and met all of our
              requirements.&quot;
            </p>
            <div className="flex items-end">
              <div className="flex flex-col tracking-wider">
                <label className="text-gray-600  font-light">
                  Magnus Ejlskov
                </label>
                <label className="text-gray-400 font-light text-sm">
                  Creator of ejlskov.design
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer my-2">
          <div className="h-[470px] flex flex-col justify-between items-center py-6 px-4 w-[300px] bg-[#EDF1FD] text-[#737998] rounded border border-gray-200 shadow-md hover:bg-white  hover:text-black hover:scale-[1.1] ease-in duration-100">
            <div className="h-12 flex justify-end items-end w-full opacity-[0.6]">
              <Image
                src="/quote-right.svg"
                alt="quote right"
                width={50}
                height={50}
              />
            </div>
            <p className="font-[16px] italic font-serif">
              &quot;Simply put: Wasif is absolutely one of the best web
              developers I know. Without a doubt. He not only writes beautiful
              code, but he also does research, spends time understanding and
              editing where needed and is really communicative, and is updating
              me regularly. <br /> Just hire him and you&apos;ll agree!&quot;
            </p>
            <div className="flex items-end">
              <div className="flex flex-col tracking-wider">
                <label className="text-gray-600  font-light">Anna Rose</label>
                <label className="text-gray-400 font-light text-sm">
                  Crowdbotics
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer my-2">
          <div className="h-[470px] flex flex-col justify-between items-center py-6 px-4 w-[300px] bg-[#EDF1FD] text-[#737998] rounded border border-gray-200 shadow-md hover:bg-white  hover:text-black hover:scale-[1.1] ease-in duration-100">
            <div className="h-12 flex justify-end items-end w-full opacity-[0.6]">
              <Image
                src="/quote-right.svg"
                alt="quote right"
                width={50}
                height={50}
              />
            </div>
            <p className="font-[16px] italic font-serif">
              &quot;Very satisfied with the end product and interaction! Will
              surely continue collaboration with Wasif and his professional
              team. One of the best providers I worked with&quot;
            </p>
            <div className="flex items-end">
              <div className="flex flex-col tracking-wider">
                <label className="text-gray-600  font-light">
                  Alfred Carmin
                </label>
                <label className="text-gray-400 font-light text-sm">
                  Owner of Alfred Carmin
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
