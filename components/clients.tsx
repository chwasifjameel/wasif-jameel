import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import Image from 'next/image';

const Clients = () => {
  return (
    <section className="pb-4 md:pb-48">
      <div className="flex flex-col justify-center items-center pb-16">
        <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
          My Valuable Clients
        </p>
        <p className="text-[13px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
          These are some of the most noticeable clients I have worked with.
        </p>
      </div>

      <div>
        <div className="2xl:mx-auto 2xl:container flex justify-center">
          <div className="2xl:px-20 px-6 pt-6 md:py-6 w-full lg:w-4/5">
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
                  <Slide className="px-2" index={0}>
                    <Image
                      width={300}
                      height={300}
                      src="/intermedia-marketing.png"
                      alt="intermedia marketing"
                    />
                  </Slide>
                  <Slide className="px-2" index={1}>
                    <Image
                      width={300}
                      height={300}
                      src="/smart-tipz-logo.png"
                      alt="smart tipz"
                    />
                  </Slide>
                  <Slide className="px-2" index={2}>
                    <Image
                      width={300}
                      height={300}
                      src="/windswept.png"
                      alt="windswept"
                    />
                  </Slide>
                  <Slide className="px-2" index={3}>
                    <Image
                      width={300}
                      height={300}
                      src="/crowdbotics.png"
                      alt="crowdbotics"
                    />
                  </Slide>
                  <Slide className="px-2" index={4}>
                    <Image
                      width={300}
                      height={300}
                      src="/2marketing.png"
                      alt="2marketing"
                    />
                  </Slide>
                  <Slide className="px-2" index={5}>
                    <Image
                      width={300}
                      height={300}
                      src="/gulf-academy.png"
                      alt="gulf academy"
                    />
                  </Slide>
                  <Slide className="px-2" index={6}>
                    <Image
                      width={300}
                      height={300}
                      src="/happy-credit.webp"
                      alt="happy-credit"
                    />
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
                  <Slide className="carousel__inner-slideLarge px-5" index={0}>
                    <Image
                      width={300}
                      height={300}
                      src="/intermedia-marketing.png"
                      alt="intermedia marketing"
                    />
                  </Slide>
                  <Slide className="carousel__inner-slideLarge px-5" index={1}>
                    <Image
                      width={300}
                      height={300}
                      src="/smart-tipz-logo.png"
                      alt="smart tipz"
                    />
                  </Slide>
                  <Slide className="carousel__inner-slideLarge px-5" index={2}>
                    <Image
                      width={300}
                      height={300}
                      src="/windswept.png"
                      alt="windswept"
                    />
                  </Slide>
                  <Slide className="carousel__inner-slideLarge px-5" index={3}>
                    <Image
                      width={300}
                      height={300}
                      src="/crowdbotics.png"
                      alt="crowdbotics"
                    />
                  </Slide>
                  <Slide className="carousel__inner-slideLarge px-5" index={4}>
                    <Image
                      width={300}
                      height={300}
                      src="/2marketing.png"
                      alt="2marketing"
                    />
                  </Slide>
                  <Slide className="carousel__inner-slideLarge px-5" index={5}>
                    <Image
                      width={300}
                      height={300}
                      src="/gulf-academy.png"
                      alt="gulf academy"
                    />
                  </Slide>
                  <Slide className="carousel__inner-slideLarge px-5" index={6}>
                    <Image
                      width={300}
                      height={300}
                      src="/happy-credit.webp"
                      alt="happy-credit"
                    />
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
