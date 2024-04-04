import Image from 'next/image';

const experiences = [
  {
    title: 'Lead Full Stack Engineer',
    company: 'BTLR',
    date: 'Sept 2023 - present',
    achivements: [
      'Revamped coding infrastructure to facilitate the transition of the existing system into a SaaS model, leading to an increase in user interest.',
      'Formulated and executed an inclusive API plan, allowing external developers access to public APIs for building new applications, resulting in a 50% surge in third-party app connections.',
      "Automated the organization's onboarding procedures, slashing the time it takes to become fully operational from 6 months to just 1 week, reducing onboarding expenses by 80%.",
    ],
    skills:
      'React Native, React, Node.js, Typescript, Python, MongoDB, PostgreSQL, TailwindCSS, AWS (EC2, Lambda functions, elastic beanstalk, CI/CD, S3), Chai, Unit Testing, Jira, Github, Github Copilot, Neo4j, Docker',
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'BTLR',
    date: 'Jan 2023 - Sept 2023',
    achivements: [
      'Researched and selected the optimal technology stack for core application development, resulting in a 30% increase in overall system performance metrics.',
      'Established comprehensive coding standards and guidelines for peer programmers, resulting in a 15% decrease in code errors and a 20% increase in code efficiency.',
      'Built code pipelines to automate deployments on EC2, S3, Elastic Beanstalks, and Lambda functions, reducing deployment time by 50% and increasing deployment frequency by 30%.',
      'Scaled the applications to handle 1M+ of users by transitioning from macro services to microservices for better scalability',
    ],
    skills:
      'React Native, React, Node.js, Typescript, MongoDB, PostgreSQL, TailwindCSS, AWS (EC2, Lambda functions, elastic beanstalk, CI/CD, Code commit, S3), Chai, Unit Testing,  Trello, Github, Github Copilot, OpenAI',
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'Intermedia Marketing Group',
    date: 'Feb 2018 - Nov 2022',
    achivements: [
      'Developed and maintained web solutions, enhancing user experience and reliability to scale business revenue from $100K to over $1M.',
      'Implemented advanced tracking methods for user behavior, affiliate marketing, retargeting, Google Analytics, and pixel-based tracking, increasing website traffic by 40% and improving conversion rates by 15%',
      'Created visually appealing web applications meeting industry standards, boosting customer engagement and satisfaction by 20%.',
      'Automated software testing procedures, leading to a 30% productivity increase and 50% less time spent on manual testing.',
    ],
    skills:
      'React.js, Node.js, Gatsby, Next.js, TypeScript, JavaScript, TailwindCSS, RedTrack, Google Services, Facebook Pixel',
  },
  {
    title: 'Full Stack Developer',
    company: 'Crowdbotics',
    date: 'Jul 2020 - Jan 2021',
    achivements: [
      'Streamlined deployment process by automating build scripts for TestFlights and Android Builds, reducing review time by 50%.',
      'Facilitated cross-functional collaboration with business, design, backend, and management teams to ensure project flow, resulting in on-time delivery of both mobile applications to the App Store / Play Store.',
      'Implemented DevOps practices for enhanced stability and seamless version control, leading to a 75% reduction in deployment errors.',
    ],
    skills:
      'React-Native, Node.js, React.js, Socket.io, Python, PubNub, Google Cloud Messaging, OAuth, Facebook SDK',
  },
  {
    title: 'Software Engineer',
    company: 'CareCloud',
    date: 'Jun 2018 - Nov 2018',
    achivements: [
      'Coordinated with senior leadership to develop a comprehensive roadmap for the Telemedicine application, resulting in a successful launch.',
      'Managed and reviewed 100+ pull requests to enforce code quality standards, reducing bugs by 15%.',
      'Acted as the key connector between cross-functional teams, guaranteeing smooth communication and collaboration for the on-time delivery of the Telemedicine application project.',
    ],
    skills:
      'Angular, Node.js, React.js, TypeScript, MySQL, CI/CD, Socket.io, Cron Jobs.',
  },
  {
    title: 'Jr. Developer',
    company: 'Bitsol Technologies',
    date: 'Jul 2015 - Sep 2015',
    achivements: [
      'Developed and implemented a suite of small utility software solutions to streamline internal processes, resulting in a 20% increase in efficiency.',
      'Acquired proficiency in new technologies such as Python, JavaScript, and SQL to enhance programming skills and contribute to innovative projects.',
      "Collaborated with cross-functional teams to identify logical tasks within the company's workflow, successfully resolving complex challenges and improving overall productivity.",
    ],
    skills: 'Angular, Node.js, React.js, TypeScript, MySQL, Python, MongoDB',
  },
  {
    title: 'Self Employed Software Engineer',
    Copmany: 'Freelance',
    date: 'Jan 2016 - Present',
    achivements: [
      'Spearheaded project planning and technology decision-making for over 70 successful deployments, assisting 20 startups in entering the market and achieving success.',
      'Implemented agile methodologies and utilized React, Nodejs, Next.js, TypeScript, AWS, Docker, and CI/CD pipelines to streamline project deadlines and increase efficiency by 30%.',
      'Leveraged diverse industry experience to improve communication skills and foster teamwork within cross-functional teams, resulting in a 15% increase in project collaboration.',
    ],
    skills:
      'Angular, Node.js, React.js, React Native, Next.js TypeScript, MySQL, Python, MongoDB, Docker, AWS, Heroku, Vercel',
  },
];

const Resume = () => {
  return (
    <section className="Section5  bg-[#F8F9FE] py-12" id="resume">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-montserrat text-5xl pt-11 pb-6 text-[#3E4356]">
          Resume
        </h1>
        <p className="text-[13px] font-light  text-center w-[80%] md:w-[40%] text-[#7a7a7a]">
          Here is a bit about my educational and acadamic background.
        </p>
      </div>

      <div className="flex flex-col-reverse justify-center items-center lg:items-center md:space-x-10">
        <div className="py-8 flex justify-center flex-col flex-wrap items-center sm:items-start">
          <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356] flex items-center justify-center w-full">
            <Image src="/crown.svg" alt="crown" width={20} height={20} />
            &nbsp; Education
          </p>
          <div className="cursor-pointer my-2 w-96">
            <span className="flex flex-col items-start py-6 px-4 mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                September 2014 - December 2018
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                BS (Computer Science)
              </p>
              <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                I took courses regarding programming fundamentals, data
                structures, Object-oriented programming and software
                development.
              </p>
              <p className="text-[12px] text-start text-black opacity-[0.5]">
                COMSATS University
              </p>
            </span>
          </div>
          {/* <div className="cursor-pointer my-2 w-96">
            <span className="flex flex-col items-start py-6 px-4 mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                January 2012 - December 2014
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                F.Sc.
              </p>
              <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                My majors were Mathematics, Physics, Chemistry.
              </p>
              <p className="text-[12px] text-start text-black opacity-[0.5]">
                Govt. Zamindar Post Graduate College, Gujrat
              </p>
            </span>
          </div>
          <div className="cursor-pointer my-2 w-96">
            <span className="flex flex-col items-start py-6 px-4 mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                January 2010 - December 2012
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                Higher School Certificate in Science
              </p>
              <p className="text-[12px]  text-start pb-4 text-black opacity-[0.7]">
                I took Mathematics, Physics, Chemistry as my major subjects.
              </p>
              <p className="text-[12px] text-start text-black opacity-[0.5]">
                Govt. Comprehensive High School, Gujrat
              </p>
            </span>
          </div> */}
        </div>

        <div className="py-8 flex justify-center flex-col items-center sm:items-center ml-0 w-full">
          <p className="font-montserrat text-3xl pt-11 pb-6 text-[#3E4356] flex items-center justify-center w-full">
            <span>
              <Image
                src="/briefcase.svg"
                alt="briefcase"
                width={20}
                height={20}
              />
            </span>
            &nbsp; Experience
          </p>
          {experiences.map(
            (
              { achivements, company, date, skills, title },
              experienceIndex
            ) => (
              <div
                className="cursor-pointer my-2 w-4/5"
                key={`experience-${experienceIndex}`}>
                <span className="flex flex-col items-start py-6 px-4 mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
                  <p className="text-[10px] text-start text-black opacity-[0.5]">
                    {date}
                  </p>
                  <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                    {title}
                  </p>
                  <ul className="font-light text-sm list-disc list-inside my-2">
                    {achivements.map((achivement, achivementIndex) => (
                      <li
                        key={`experience-${experienceIndex}-achivement-${achivementIndex}`}>
                        {achivement}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm my-3">
                    <b>Skills: </b> {skills}
                  </p>
                  <p className="text-base text-start text-black opacity-[0.5]">
                    {company}
                  </p>
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
