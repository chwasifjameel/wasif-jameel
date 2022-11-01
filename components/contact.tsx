const Contact = () => {
  return (
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
          <img src="/vimeo.svg" className="mx-2 pb-6 blur-[0.5px]" alt="icon" />
        </span>
      </div>
      <div></div>
    </section>
  );
};

export default Contact;
