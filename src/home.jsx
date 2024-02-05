import React, { useState, useEffect } from 'react';
import Services from './skill';
import Nav from './Nav';

function Home() {


    const roles = ["WEB developer", "UI/UX designer", "Mern stack Developer"];


    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000);


        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
        <Nav />
        <div className='body'>
            <div className="container flex flex-col items-center justify-center bg-cover bg-center h-screen bg-gray-50">
                <h2 className="text-center mt-10 text-cyan-700 text-2xl sm:text-5xl md:text-3xl font-marhey">
                    <strong>Hey! I AM</strong>
                </h2>
                <h1 className="text-center text-black text-4xl sm:text-5xl md:text-6xl mb-10 font-bungee">
                    Riswana Latheef
                </h1>
                <h1 className="text-center text-black text-4xl sm:text-5xl md:text-3xl">
                    I'm a <span className="text-cyan-700 text-5xl" style={{ opacity: 5, transition: 'opacity 5s' }}>{roles[currentRoleIndex]}</span>
                </h1>
            </div>





            <div className=" flex flex-col md:flex-row bg-white">
                <img src="/ftcok2.jpg" className="hidden md:block w-96 mb-32 ml-56" />

                <div className="w-full md:w-1/3  md:p-10">
                    <h1 className="text-3xl md:text-5xl font-mono mb-4 md:mb-9 font-semibold text-cyan-700 " id='about'>
                        ABOUT ME
                    </h1>
                    <p className="mb-4 text-gray-500">I am a recent plus two student with a keen interest in IT. Having completed a Mern Stack Developer course, I am eager to contribute to the field of web development.
                        I am seeking a challenging role where I can apply my skills, learn, and grow both personally and professionally.
                    </p>
                    <h3 className="font-serif">
                        Name: <span className="text-gray-400 block md:inline  md:pl-20">Riswana Latheef</span>
                    </h3>
                    <h3 className="font-serif">
                        Date of Birth: <span className="text-gray-400 block md:inline  ">
                            15 October 2004
                        </span>
                        
                    </h3>
                    <h3 className="font-serif">
                        Email:  <span className="text-gray-400 block md:inline  md:pl-20">
                            riswanalathu15@gmail.com
                        </span>
                       
                    </h3>
                    <h3 className="font-serif">
                        Phone: <span className="text-gray-400 block md:inline  md:pl-20">
                            +91 8921315605
                        </span>
                        
                    </h3>

                    <button className="w-full md:w-32 mt-4 md:mt-8 bg-cyan-700 h-11 text-white font-caprasimo border-none border-4">
                        <a href="/riswana(4).pdf" download="Riswana_Resume.pdf" className='no-underline text-white'>  Download CV</a>
                    </button>
                </div>
            </div>




            <div className="flex flex-wrap justify-center items-center overflow-x-auto bg-white">
                <img src="/mongodb.jpeg" className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 mb-4 mx-2" alt="MongoDB" />
                <img src="/nodexpress.jpg" className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 mb-4 mx-2" alt="Node.js & Express" />
                <img src="/react.png" className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 mb-4 mx-2" alt="React" />
                <img src="/html.jpeg" className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 mb-4 mx-2" alt="HTML" />
                <img src="/css.jpeg" className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 mb-4 mx-2" alt="CSS" />
                <img src="/js.jpeg" className="w-24 sm:w-32 md:w-40 lg:w-20 xl:w-28 mb-4 mx-2" alt="JavaScript" />
            </div>
            <Services />





            <div className="text-center bg-gray-50">
                <h1 className="mt-8 md:mt-24 lg:mt-48 font-caprasimo text-3xl md:text-4xl lg:text-5xl text-cyan-700" id='services'>
                    Services
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-mono text-gray-500 mx-4 md:mx-16 lg:mx-56">
                    Services are the major component and somehow influenced by the service motives of any business.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-50">
                <div className="bg-white p-6 rounded-md shadow-md">
                    <h6 className="text-xl font-bold mb-2">UI/UX Design</h6>
                    <p className="text-gray-500">Web designers craft the overall vision and plan for website layouts, mobile first, posters, branding.</p>
                </div>

                <div className="bg-white p-6 rounded-md shadow-md mt-4 md:mt-0">
                    <h6 className="text-xl font-bold mb-2">Front-end</h6>
                    <p className="text-gray-500">Modern and mobile-ready websites that will help you reach all of your marketing goals.</p>
                </div>

                <div className="bg-white p-6 rounded-md shadow-md mt-4 lg:mt-0">
                    <h6 className="text-xl font-bold mb-2">Back-end</h6>
                    <p className="text-gray-500">UI/UX focuses on the user, frontend focuses on the settings of the user, and backend focuses on the data.</p>
                </div>
            </div>


            <div className="text-center ">
                <h1 className="mt-8 md:mt-24 lg:mt-48 font-caprasimo text-3xl md:text-4xl lg:text-5xl text-cyan-700" id='contact'>
                    Contact Me
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-mono text-gray-500 mx-4 md:mx-16 lg:mx-56">
                    When you change a contact,that contact change you everywhere.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 p-8">
                <div className="text-center  shadow-gray-400 w-64 bg-white p-6 rounded-md shadow-md">
                    <span className="material-symbols-outlined text-5xl text-cyan-700 bg-blue-100 rounded-full inline-block p-4 mb-4">
                        Home
                    </span>
                    <p className="font-bold text-lg">Address</p>
                    <p>Kaloor (H), P.O Kundaliyur, Engandiyur, Thrissur, Kerala</p>
                </div>

                <div className="text-center shadow-gray-400 w-64 bg-white p-6 rounded-md shadow-md">
                    <span className="material-symbols-outlined text-5xl text-cyan-700 bg-blue-100 rounded-full inline-block p-4 mb-4">
                        Call
                    </span>
                    <p className="font-bold text-lg">Contact Number</p>
                    <p>+91 8921315605</p>
                </div>

                <div className="text-center shadow-gray-400 w-64 bg-white p-6 rounded-md shadow-md">
                    <span className="material-symbols-outlined text-5xl text-cyan-700 bg-blue-100 rounded-full inline-block p-4 mb-4">
                        Mail
                    </span>
                    <p className="font-bold text-lg">Email Address</p>
                    <p>riswanalathu15@gmail.com</p>
                </div>

                <div className="text-center shadow-gray-400 w-64 bg-white p-6 rounded-md shadow-md">
                    <i className="bi bi-github text-5xl text-cyan-700 bg-blue-100 rounded-full inline-block p-4 mb-4">

                    </i>
                    <p className="font-bold text-lg">Website</p>
                    <p>username:RiswanaR</p>
                </div>
            </div>


            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <img src="/ftcok2.jpg" className="md:w-96 w-full mb-8 md:mb-0 rounded-md shadow-lg object-cover object-center" alt="Your Image Description" />

                <div className="max-w-md bg-transparent p-6 rounded-md w-96 h-96 mb-36">
                    <form className="grid grid-cols-1 gap-8">
                        <div>
                            <input type="text" id="username" name="username" placeholder="Your Name" className="w-full p-3 border-none shadow-md rounded h-9 text-sm font-medium font-sans" />
                        </div>

                        <div>
                            <input type="email" id="email" name="email" placeholder="Email address" className="w-full p-3 border-none shadow-md rounded h-9 text-sm font-medium font-sans" />
                        </div>

                        <div>
                            <input type="text" id="sub" name="sub" placeholder="subject" className="w-full p-3 border-none shadow-md rounded h-9 text-sm font-medium font-sans" />
                        </div>

                        <div>
                            <textarea id="message" name="message" placeholder="Message" rows="4" cols="12" className="w-full p-3 border-none shadow-md rounded h-14 text-sm font-sans"></textarea>
                        </div>

                        <div>
                            <button className="w-full bg-cyan-700 text-white py-3 px-4 rounded border-none h-14 font-semibold text-1xl ">
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>


            </div>







        </div>
        </>
    )
}
export default Home;