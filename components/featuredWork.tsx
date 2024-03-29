import Image from 'next/image';

const featuredWorkData = [
  {
    image: '/smart-tipz-website.png',
    title: 'Smart Tipz',
    description: `Smart Tipz is a social media platform developed in Next.js.
    It lets user post content and earns from it. Technically it has Next.js, some microservices are done in Nodejs. TailwindCSS was used to style and PostgreSQL was the primary database.`,
  },
  {
    image: '/logrocket.png',
    title: 'LogRocket',
    description: `LogRocket is developed in Next.js.
     I had the pleasure develop this project using Next.js with static site generator functionality.
     A blog is also integrated with a CMS. Designing was done in TailwindCSS.`,
  },
  {
    image: '/gulf-academy-website.png',
    title: 'The Gulf Academy',
    description: `The Gulf Academy is a marketplace for students and teachers. Students can ask students and teachers answers. Students pay to buy answers. 
    React.js, Node.js, MongoDB, SCSS, and sockets were used.`,
  },
  {
    image: '/plural.png',
    title: 'Plural',
    description: `Plural is developed in Next.js. I had the pleasure to do develop this project in Next.js with static site generator functionality. 
    Designing was done in TailwindCSS.`,
  },
  {
    image: '/windswep-dashboard.png',
    title: 'Windswpet Marketing',
    description: `Windswpet Marketing is a React and Node.js based SaaS for the company. 
    Vendors used to manage all employees and orders at one stop. It was then integrated with workbooks.`,
  },
  {
    image: '/usaveservices.png',
    title: 'U Save Services',
    description: `U Save Services is a React/Gatsby website with template-based pages using Gatsby-node. 
    It was many marketing and tracking software integrated.`,
  },
  {
    image: '/total-reviews.png',
    title: 'Total Reviews',
    description: `Total Reviews SaaS is used to manage negative reviews for businesses. 
    It was developed in React and Node.js. PostgreSQL was used to store data.`,
  },
  {
    image: '/your-repair-experts-website.png',
    title: 'Your Repair Experts',
    description: `Your Repair Experts is a React/Gatsby website with template-based pages using Gatsby-node. 
    It was many marketing and tracking software integrated.`,
  },
  {
    image: '/2marketing-website.png',
    title: '2Marketing',
    description: `2Marketing is a React/Gatsby website. The website is static and designed using CSS. 
    It has many small animations and SVGs.`,
  },
  {
    image: '/law-on-demand.png',
    title: 'Law on Demands',
    description: `The Mobile app is developed in React Native having API in Nodejs. MongoDB was the right choice for the data strcuture.
    Chat, Sockets, and enhanced search is part of it.`,
  },
  {
    image: '/vision-platform.png',
    title: 'Vision Platform',
    description: `The purpose of this app was to help users monitor what are the stats and usability report of their hardware systems.
    The Mobile app is developed in React Native. MongoDB was the right choice for the data strcuture.
    Sockets, IoT, and real time data gathering was also part of it.`,
  },
  {
    image: '/yumani.png',
    title: 'Yumani',
    description: `This React Native mobile app was built to enable students of Canada to work on small tasks and earn from it. 
    The users can assign their tedious tasks to someone and save time for themselves.`,
  },
];
const FeaturedWork = () => {
  return (
    <section className="Section4 py-12" id="featured-work">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356]">
          Featured Works
        </h1>
        <p className="text-[12px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
          Some of the most amazing projects I have worked were based on
          React.js, Node.js, Next.js, MongoDB, PostgreSQL, Tailwind, Bootstrap,
          AWS, Heroku and SCSS.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="mx-2 md:mx-5">
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {featuredWorkData.map(({ image, title, description }, index) => (
              <div
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                key={index}>
                <div className="flex-shrink-0">
                  <Image
                    className="h-48 w-full object-cover"
                    src={image}
                    alt={image}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    {/* <a href="#" className="mt-2 block"> */}
                    <p className="text-xl font-semibold text-gray-900">
                      {title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {description}
                    </p>
                    {/* </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
