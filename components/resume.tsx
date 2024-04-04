import Image from 'next/image';

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
          <div className="cursor-pointer my-2 w-4/5">
            <span className="flex flex-col items-start py-6 px-4 mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                Sept 2023 - present
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                Lead Full Stack Engineer
              </p>
              <ul className="font-light text-sm list-disc list-inside my-2">
                <li>
                  Revamped coding infrastructure to support the transition of
                  the existing system into a SaaS model, leading to an increase
                  in user interest.
                </li>
                <li>
                  Developed and implemented a comprehensive API strategy,
                  opening up public-facing APIs to external developers and
                  enabling the creation of new applications on top of the
                  existing system, resulting in a 50% increase in third-party
                  app integrations.
                </li>
                <li>
                  Automated the organization&apos;s onboarding process, reducing
                  the time it takes to become fully operational from 6 months to
                  just 1 week, leading to an 80% decrease in onboarding costs.
                </li>
              </ul>
              <p className="text-sm my-3">
                <b>Skills: </b> React Native, React, Node.js, Typescript,
                Python, MongoDB, PostgreSQL, TailwindCSS, AWS (EC2, Lambda
                functions, elastic beanstalk, CI/CD, S3), Chai, Unit Testing,
                Jira, Github, Github Copilot, Neo4j, Docker
              </p>
              <p className="text-base text-start text-black opacity-[0.5]">
                BTLR
              </p>
            </span>
          </div>

          <div className="cursor-pointer my-2 w-4/5">
            <span className="flex flex-col items-start py-6 px-4 mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                Jan 2023 - Sept 2023
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                Senior Full Stack Engineer
              </p>
              <ul className="font-light text-sm list-disc list-inside my-2">
                <li>
                  Researched and selected the optimal technology stack for core
                  application development, resulting in a 30% increase in
                  overall system performance metrics.
                </li>
                <li>
                  Established comprehensive coding standards and guidelines for
                  peer programmers, resulting in a 15% decrease in code errors
                  and a 20% increase in code efficiency.
                </li>
                <li>
                  Built code pipelines to automate deployments on EC2, S3,
                  Elastic Beanstalks, and Lambda functions.
                </li>
                <li>
                  Scaled the applications to handle millions of users by
                  transitioning from macro services to microservices for better
                  scalability.
                </li>
              </ul>
              <p className="text-sm my-3">
                <b>Skills: </b> React Native, React, Node.js, Typescript,
                MongoDB, PostgreSQL, TailwindCSS, AWS (EC2, Lambda functions,
                elastic beanstalk, CI/CD, Code commit, S3), Chai, Unit Testing,
                Trello, Github, Github Copilot, OpenAI,
              </p>
              <p className="text-base text-start text-black opacity-[0.5]">
                BTLR
              </p>
            </span>
          </div>

          <div className="cursor-pointer my-2 w-4/5">
            <span className="flex flex-col items-start py-6 px-4 mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                Feb 2018 - Nov 2022
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                Senior Full Stack Developer
              </p>
              <ul className="font-light text-sm list-disc list-inside my-2">
                <li>
                  Developed and maintained web solutions that contributed to
                  scaling the business to a million dollars in revenue from a
                  hundred thousand, focusing on enhancing user experience and
                  reliability.
                </li>
                <li>
                  Implemented advanced tracking methods for user behavior,
                  affiliate marketing, retargeting, Google Analytics, and
                  pixel-based tracking, resulting in a 40% increase in website
                  traffic and a 15% improvement in conversion rates.
                </li>
                <li>
                  Created visually appealing and dynamic web applications that
                  adhere to industry standards, leading to a 20% increase in
                  customer engagement and satisfaction.
                </li>
                <li>
                  Implemented a system to automate software testing procedures,
                  resulting in a 30% increase in productivity and a 50%
                  reduction in time spent on manual testing.
                </li>
              </ul>
              <p className="text-sm my-3">
                <b>Skills: </b> React.js, Node.js, Gatsby, Next.js, TypeScript,
                JavaScript, TailwindCSS, RedTrack, Google Services, Facebook
                Pixel
              </p>

              <p className="text-[12px] text-start text-black opacity-[0.5]">
                Intermedia Marketing Group
              </p>
            </span>
          </div>
          <div className="cursor-pointer my-2 w-4/5">
            <span className="flex flex-col items-start py-6 px-4 mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                Jul 2020 - Jan 2021
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                Senior Full Stack Developer
              </p>
              <ul className="font-light text-sm list-disc list-inside my-2">
                <li>
                  Streamlined deployment process by creating automated build
                  scripts for TestFlights and Android Builds, reducing review
                  time by 50%.
                </li>
                <li>
                  Facilitated cross-functional collaboration with business,
                  design, backend, and management teams to maintain project
                  flow, resulting in on-time delivery of both mobile
                  applications to the App Store / Play Store.
                </li>
                <li>
                  Utilized DevOps practices to increase stability and ensure
                  seamless version control for both mobile applications,
                  resulting in a 75% decrease in deployment errors.
                </li>
                <li>
                  Collaborated with different teams including business, design,
                  backend, and management to ensure the smooth flow of the
                  project.
                </li>
              </ul>
              <p className="text-sm my-3">
                <b>Skills: </b> React-Native, Node.js, React.js, Socket.io,
                Python, PubNub, Google Cloud Messaging, OAuth, Facebook SDK
              </p>
              <p className="text-[12px] text-start text-black opacity-[0.5]">
                Crowdbotics
              </p>
            </span>
          </div>

          <div className="cursor-pointer my-2 w-4/5">
            <span className="flex flex-col items-start py-6 px-4 mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                Jun 2018 - Nov 2018
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                Software Engineer
              </p>
              <ul className="font-light text-sm list-disc list-inside my-2">
                <li>
                  Coordinated with senior leadership to develop a comprehensive
                  roadmap for the Telemedicine application project, resulting in
                  a successful launch.
                </li>
                <li>
                  Oversaw and facilitated over 100 pull requests and code
                  reviews to ensure high-quality code standards were met by all
                  team members, leading to a decrease in bugs by 15%.
                </li>
                <li>
                  Served as the primary liaison between cross-functional teams,
                  ensuring seamless communication and collaboration throughout
                  the development process of the Telemedicine application,
                  resulting in an on-time delivery of the project.
                </li>
              </ul>
              <p className="text-sm my-3">
                <b>Skills: </b> Angular, Node.js, React.js, TypeScript, MySQL,
                CI/CD, Socket.io, Cron Jobs.
              </p>
              <p className="text-[12px] text-start text-black opacity-[0.5]">
                CareCloud
              </p>
            </span>
          </div>

          <div className="cursor-pointer my-2 w-4/5">
            <span className="flex flex-col items-start py-6 px-4 mx-auto bg-[#EDF1FD] text-[#737998] border border-gray-200 shadow-md  hover:scale-[1.1] ease-in duration-100">
              <p className="text-[10px] text-start text-black opacity-[0.5]">
                Jul 2015 - Sep 2015
              </p>
              <p className="my-1 pt-2 text-lg text-start text-black  tracking-wide opacity-[0.8]">
                Jr. Developer
              </p>
              <ul className="font-light text-sm list-disc list-inside my-2">
                <li>
                  Developed and implemented a suite of small utility software
                  solutions to streamline internal processes, resulting in a 20%
                  increase in efficiency.
                </li>
                <li>
                  Acquired proficiency in new technologies such as Python,
                  JavaScript, and SQL to enhance programming skills and
                  contribute to innovative projects.
                </li>
                <li>
                  Collaborated with cross-functional teams to identify logical
                  tasks within the company&apos;s workflow, successfully
                  resolving complex challenges and improving overall
                  productivity.
                </li>
              </ul>
              <p className="text-sm my-3">
                <b>Skills: </b> Angular, Node.js, React.js, TypeScript, MySQL,
                Python, MongoDB
              </p>
              <p className="text-[12px] text-start text-black opacity-[0.5]">
                Bitsol Technologies
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
