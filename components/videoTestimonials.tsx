const News = () => {
  return (
    <section className="Section8 lg:relative">
      <div className="flex flex-col justify-center items-center pb-16">
        <h1 className="font-montserrat text-5xl pt-11 pb-6 text-[#3E4356]">
          Featured Clients
        </h1>
        <p className="text-[13px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
          Here is what my top clients have to say about me.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap my-2">
        <div className="p-6">
          <iframe
            data-cookieblock-src="https://www.youtube.com/embed/JJIlOoLNDIM"
            data-cookieconsent="marketing"
            width="auto"
            height="450"
            src="https://www.youtube.com/embed/JJIlOoLNDIM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="p-6">
          <iframe
            data-cookieblock-src="https://www.youtube.com/embed/JJIlOoLNDIM"
            data-cookieconsent="marketing"
            width="auto"
            height="450"
            src="https://www.youtube.com/embed/04U80oJT1iI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default News;
