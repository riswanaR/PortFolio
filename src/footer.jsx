import React from "react";

function Footer() {
    return (
        <footer className="bg-black text-white py-8 px-4 md:px-8 lg:px-16 flex flex-wrap justify-around">
            <div className="mb-6 md:w-1/4 lg:w-1/5">
                <h5 className="text-lg font-bold mb-4">About</h5>
                <p className="text-sm">
                    I am a recent plus two Student with a keen interest in IT. Having completed a Mern Stack Developer course, I am eager to contribute to the field of web development. I am seeking a challenging role where I can apply my skills, learn, and grow both personally and professionally.
                </p>
                <div className="flex mt-4">
                    <i className="bi bi-twitter mr-3"></i>
                    <i className="bi bi-instagram mr-3"></i>
                    <a href="https://github.com/RiswanaR" className="no-underline"><i className="bi bi-github no-underline"></i></a>
                </div>
            </div>
            <div className="mb-6 md:w-1/4 lg:w-1/5">
                <h5 className="text-lg font-bold mb-4">Links</h5>
                <ul className="list-none pl-0">
                    <li className="flex items-center mb-2">
                        <i className="bi bi-arrow-right mr-2"></i>
                        <p>Home</p>
                    </li>
                    <li className="flex items-center mb-2">
                        <i className="bi bi-arrow-right mr-2"></i>
                        <p>About</p>
                    </li>
                    <li className="flex items-center mb-2">
                        <i className="bi bi-arrow-right mr-2"></i>
                        <p>Projects</p>
                    </li>
                    <li className="flex items-center mb-2">
                        <i className="bi bi-arrow-right mr-2"></i>
                        <p>Contact</p>
                    </li>
                </ul>
            </div>
            <div className="mb-6 md:w-1/4 lg:w-1/5">
                <h5 className="text-lg font-bold mb-4">Services</h5>
                <p>UI/UX Design</p>
                <p>Front-end</p>
                <p>Back-end</p>
            </div>

            <div className="mb-6 md:w-1/4 lg:w-1/5 text-white">
                <h5 className="text-lg font-bold mb-4">Have a Question?</h5>

                <div className="flex items-center mb-2">
                    <i className="bi bi-geo-alt-fill  mr-2"></i>
                    <p className="text-sm">Address</p>
                </div>

                <div className="flex items-center mb-2">
                    <i className="bi bi-telephone-fill  mr-2"></i>
                    <p className="text-sm">+91 8921 315 605</p>
                </div>

                <div className="flex items-center mb-2">
                    <i className="bi bi-envelope  mr-2"></i>
                    <p className="text-sm">riswanalathu15@gmail.com</p>
                </div>
            </div>

            <div className="text-sm md:w-full lg:w-2/3 text-center">
                <p>Copyright © 2024 All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
