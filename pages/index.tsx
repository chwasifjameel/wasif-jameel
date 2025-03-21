/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';

import 'pure-react-carousel/dist/react-carousel.es.css';

import Hero from '../components/hero';
import AboutMe from '../components/aboutMe';
import Expertise from '../components/expertise';
import FeaturedWork from '../components/featuredWork';
import Resume from '../components/resume';
import Testimonials from '../components/testimonials';
import Clients from '../components/clients';
import HireMe from '../components/hireMe';
import VideoTestimonials from '../components/videoTestimonials';
import Contact from '../components/contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Senior Full Stack Engineer | Wasif Jameel</title>
        <meta
          name="description"
          content="Senior Full Stack Engineer experienced in React.js, Node.js, Next.js, Typescript, and JavaScript. Passionate about AWS, Docker and DevOps"
        />
      </Head>

      <Hero />
      <AboutMe />
      <Expertise />
      <FeaturedWork />
      <Resume />
      <VideoTestimonials />
      <Testimonials />
      <HireMe />
      <Clients />
      <Contact />
    </div>
  );
}
