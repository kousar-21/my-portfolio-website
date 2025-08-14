import React, { useEffect, useState } from "react";
import projectsData from "./projects.json";
import { Link } from "react-router";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <div id="Projects">
            <section className="py-16 relative min-h-[calc(100vh-80px)]">
                {/* Galaxy Animation */}
                <div className="absolute inset-0 -z-10 bg-black">
                    <div className="galaxy-animation"></div>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">My Projects</h2>
                    <p className="text-gray-400 mt-2">Some of my favorite works</p>
                </div>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                        >
                            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    View More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
