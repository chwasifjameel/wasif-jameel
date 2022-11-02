import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

const Clients = () => {
  return (
    <section className="Section6 pb-48">
      <div className="flex flex-col justify-center items-center pb-16">
        <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
          My Valuable Clients
        </p>
        <p className="text-[13px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est,
          eaque repudiandae quaerat sunt voluptate harum distinctio fbg turnt sb
          gulte.
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
              naturalSlideHeight={0}>
              <div className="js-flickity flex justify-center items-center">
                <Slider>
                  <Slide className="px-8" index={0}>
                    <img
                      src="/intermedia-marketing.png"
                      alt="intermedia marketing"
                    />
                  </Slide>
                  <Slide className=" px-8" index={1}>
                    <img src="/smart-tipz-logo.svg" alt="smart tipz" />
                  </Slide>
                  <Slide className=" px-8" index={2}>
                    <img src="/windswept.png" alt="windswept" />
                  </Slide>
                  <Slide className=" px-8" index={3}>
                    <img src="/crowdbotics.png" alt="crowdbotics" />
                  </Slide>
                  <Slide className=" px-8" index={4}>
                    <img src="/2marketing.svg" alt="2marketing" />
                  </Slide>
                  <Slide className=" px-8" index={5}>
                    <img src="/gulf-academy.png" alt="gulf academy" />
                  </Slide>
                  <Slide className=" px-8" index={6}>
                    <img src="/happy-credit.webp" alt="happy-credit" />
                  </Slide>
                  <Slide className=" px-8" index={7}>
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
              naturalSlideHeight={0}>
              <div className="js-flickity flex justify-center items-center">
                <Slider className="carousel__sliderLarge">
                  <Slide className="carousel__inner-slideLarge" index={0}>
                    <img
                      src="/intermedia-marketing.png"
                      alt="intermedia marketing"
                    />
                  </Slide>
                  <Slide className="carousel__inner-slideLarge px-2" index={1}>
                    <img src="/smart-tipz-logo.svg" alt="smart tipz" />
                  </Slide>
                  <Slide className="carousel__inner-slideLarge px-2" index={2}>
                    <img src="/windswept.png" alt="windswept" />
                  </Slide>
                  <Slide className="carousel__inner-slideLarge px-2" index={3}>
                    <img src="/crowdbotics.png" alt="crowdbotics" />
                  </Slide>
                  <Slide className="carousel__inner-slideLarge px-2" index={4}>
                    <img src="/2marketing.svg" alt="2marketing" />
                  </Slide>
                  <Slide className="carousel__inner-slideLarge px-2" index={5}>
                    <img src="/gulf-academy.png" alt="gulf academy" />
                  </Slide>
                  <Slide className="carousel__inner-slideLarge px-2" index={6}>
                    <img src="/happy-credit.webp" alt="happy-credit" />
                  </Slide>
                  <Slide className="carousel__inner-slideLarge px-2" index={7}>
                    <img src="/4.png" alt="" />
                  </Slide>
                </Slider>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
