import React, { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="hidden md:flex items-center bg-white ">
        <h4 className="px-4 text-3xl text-black font-caprasimo  me-10">PORTFOLIO</h4>
        <ul className="flex md:flex-row lg:flex-row divide-x-8 text-2xl list-none text-end place-items-end mx-5 ms-96">
          <li className="px-4 text-xl text-gray-500 font-semibold">HOME</li>
         <a className="no-underline" href="#about"><li className="px-4 text-xl text-gray-500 font-semibold">ABOUT</li></a> 
         <a className="no-underline" href="#education"><li className="px-4 text-xl text-gray-500 font-semibold">RESUME</li></a> 
         <a className="no-underline" href="#services"><li className="px-4 text-xl text-gray-500 font-semibold">SERVICES</li></a> 
          <a className="no-underline" href="#projects"><li className="px-4 text-xl text-gray-500 font-semibold">PROJECTS</li></a>
         <a className="no-underline" href="#contact"><li className="px-4 text-xl text-gray-500 font-semibold">CONTACTS</li></a> 
        </ul>
      </div>
      <div className="md:hidden">
        <i className="bi bi-list-task text-6xl text-black" onClick={toggleMenu}></i>
        
        {isMenuOpen && (
          <ul className="flex flex-col divide-y-8 text-2xl list-none text-end place-items-end mx-5">
            <li className="py-2 px-4 text-black font-caprasimo">PORTFOLIO</li>
            <li className="py-2 px-4 text-gray-500 font-semibold ">HOME</li>
            <li className="py-2 px-4 text-gray-500 font-semibold">ABOUT</li>
            <li className="py-2 px-4 text-gray-500 font-semibold">RESUME</li>
            <li className="py-2 px-4 text-gray-500 font-semibold">BLOG</li>
            <li className="py-2 px-4 text-gray-500 font-semibold">PROJECTS</li>
            <li className="py-2 px-4 text-gray-500 font-semibold">CONTACTS</li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Nav;
