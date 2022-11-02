import { Navbar } from 'flowbite-react';

const Footer = () => {
  return (
    <nav className=" border-gray-200 px-4 sm:px-4 pt-6 pb-2.5 rounded lg:px-10 bg-[#EDF1FD]">
      <Navbar className="navBg">
        <Navbar.Brand href="#">
          <div className="self-center text-4xl font-semibold whitespace-nowrap font-montserrat text-gray-700">
            Wasif
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <ul className="flex flex-col p-4 mt-4  rounded-lg  border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-">
            <li className="cursor-pointer">HOME</li>
            <li className="cursor-pointer">ABOUT</li>
            <li className="cursor-pointer">PORTFOLIO</li>
            <li className="cursor-pointer">SERVICES</li>
            <li className="cursor-pointer">RESUME</li>
            <li className="cursor-pointer">BLOG</li>
            <li className="cursor-pointer">CONTACT</li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Footer;
