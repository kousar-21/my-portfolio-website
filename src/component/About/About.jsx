import React from "react";
import Galaxy from "../../assets/Galaxy/Galaxy";
import myProfile from '../../assets/Images/my-profile.jpg'

const About = () => {
    return (
        <div>
            <div className="relative bg-gray-700 py-16 text-white">
                {/* Galaxy Animation Background */}
                <div className="absolute inset-0 -z-10">
                    <Galaxy />
                </div>

                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
                    {/* Left Side - Image */}
                    <div className="flex-shrink-0">
                        <img
                            src={myProfile} // replace with your image path
                            alt="Kousar Ahammed"
                            className="w-56 h-56 rounded-full border-4 border-purple-500 shadow-lg object-cover"
                        />
                    </div>

                    {/* Right Side - About Text */}
                    <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-4">About Me</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Hello! I'm <span className="text-purple-400 font-semibold">Kousar Ahammed</span>, a passionate
                            <span className="text-purple-400"> MERN Stack Developer</span> with a strong love for
                            creating beautiful and functional web applications. My programming journey started from a
                            deep curiosity about how websites work, which turned into a full-time passion.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I enjoy building responsive, user-friendly, and visually appealing websites using modern
                            technologies like <span className="text-purple-400">React</span>, <span className="text-purple-400">Node.js</span>,
                            and <span className="text-purple-400">MongoDB</span>. I’m always eager to learn new tools and
                            frameworks to make my work even better.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Outside of coding, I enjoy playing cricket, exploring new tech gadgets, and love  to
                            getting lost in a good book. My goal is to keep improving and work on projects that make
                            a real impact.
                        </p>
                        <p className="text-gray-300">
                            Let's create something amazing together 🚀
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
