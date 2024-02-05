import React from "react";
import SeeMore from "./more";

function Services() {


  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 bg-gray-50 text-cyan-700 p-4 md:p-8 md:sticky top-0 sticky sticky-div">
        <a className="no-underline" href="#education">
          <h4 className="mb-4 text-center font-semibold text-2xl text-cyan-700">Education</h4>
        </a>
        <a className="no-underline" href="#skills">
          <h4 className="mb-4 text-center font-semibold text-2xl text-cyan-700">Skills</h4>
        </a>
        <a className="no-underline" href="#experience">
          <h4 className="mb-4 text-center font-semibold text-2xl text-cyan-700" id="projects">Projects</h4>
        </a>
      </div>

      <div className="flex-grow p-4 md:p-8 bg-gray-100 overflow-y-auto">
        <div className="mb-8 scroll-section" id="education">
          <h1 className="mt-8 md:mt-24 lg:mt-48 font-caprasimo text-3xl md:text-4xl lg:text-5xl text-cyan-700 " id="education">Education</h1>
          <div className="shadow-gray-400 bg-white p-6 rounded-md">
            <div className="flex flex-col md:flex-row items-center mb-4">
              <span className="material-symbols-outlined text-4xl text-cyan-700 bg-blue-100 rounded-full inline-block p-4 mb-4 md:mr-4 md:mb-0">school</span>
              <div>
                <p className="text-2xl text-cyan-700 font-bold">2021-2023</p>
                <h3 className="text-2xl font-semibold">Plus Two in Computer Science</h3>
                <h4 className="text-xl">SNGSHSS, Karamuck, Kandassankadavu, Thrissur</h4>
                <p className="mt-4 text-gray-700">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 scroll-section" id="skills">
          <h1 className="font-caprasimo text-3xl md:text-4xl lg:text-5xl text-cyan-700 text-center" id="skills">Skills</h1>
          <div className="max-w-lg mx-auto bg-white p-8 rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[{ title: "HTML", percentage: 90 }, { title: "CSS", percentage: 85 }, { title: "JavaScript", percentage: 80 }, { title: "React", percentage: 90 }, { title: "MongoDB", percentage: 80 }, { title: "C", percentage: 80 }].map((skill, index) => (
                <div key={index} className="border p-4 rounded">
                  <h2 className="text-lg font-semibold mb-2">{skill.title}</h2>
                  <div className="flex items-center">
                    <div className="flex-grow bg-gray-200 h-4 rounded-full">
                      <div className={`h-full bg-cyan-700 rounded-full w-${skill.percentage / 10 * 4}`}></div>
                    </div>
                    <span className="ml-2">{skill.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="scroll-section" id="experience">
          <h1 className="mt-8 md:mt-24 lg:mt-48 font-caprasimo text-3xl md:text-4xl lg:text-5xl text-cyan-700 text-center" id="experience">Projects</h1>
          <div className="flex-container mt-12">
          <a href="https://github.com/RiswanaR"> 
          <div className="card">
              <div className="pic">
                <img src="/pic.jpg" alt="FILM" />
                <div className="overlay">
                  <p className="text-p text-white ">E-commerce</p>
                </div>
              </div>
           </div></a>

            <a href="https://github.com/RiswanaR"><div className="card">
              <div className="pic">
                <img src="/blogs.jpeg" alt="FASHION" />
                <div className="overlay">
                  <p className="text-p text-white">Blog</p>
                </div>
              </div>
            </div></a>

            <a href="https://github.com/RiswanaR"><div className="card">
              <div className="pic">
                <img src="/book.jpg" alt="FASHION" className="image-1"/>
                <div className="overlay">
                  <p className="text-p text-white">Blog</p>
                </div>
              </div>
            </div></a>
            <div>
            <a href="/SeeMore"><button className="bg-cyan-700 text-white w-40 h-9 border-none rounded font-bungee">See More</button></a>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Services;
