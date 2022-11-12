import YouTube from 'react-youtube';

const News = () => {
  return (
    <section className="Section8 lg:relative">
      <div className="flex flex-col justify-center items-center pb-16">
        <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
          Video Testimonials
        </p>
        <p className="text-[13px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
          Here is what my top clients have to say about me.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap my-2">
        <div className="p-6">
          <YouTube
            className="mb-4"
            opts={{
              height: '450',
              width: 'auto',
            }}
            videoId="JJIlOoLNDIM"
          />
        </div>
        <div className="p-6">
          <YouTube
            className="mb-4"
            opts={{
              height: '450',
              width: 'auto',
            }}
            videoId="04U80oJT1iI"
          />
        </div>
      </div>
    </section>
  );
};

export default News;
