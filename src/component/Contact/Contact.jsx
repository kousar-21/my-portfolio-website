import React, { useRef } from "react";
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaPhone, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import Galaxy from "../../assets/Galaxy/Galaxy";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID", // from EmailJS
                "YOUR_TEMPLATE_ID", // from EmailJS
                form.current,
                "YOUR_PUBLIC_KEY" // from EmailJS
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    e.target.reset();
                },
                (error) => {
                    alert("Failed to send message. Please try again.");
                    console.error(error);
                }
            );
    };

    return (
        <div id="Contacts">
            <section className="relative bg-gray-800 text-white py-16 lg:min-h-[calc(100vh-80px)]">
                {/* Galaxy background */}
                <div className="absolute inset-0 z-0">
                    <Galaxy />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Contact <span className="text-primary">Me</span>
                    </h2>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

                        {/* Left - Contact Info */}
                        <div className="space-y-6 text-center md:text-left">
                            <h2 className="text-3xl font-bold">Get in Touch</h2>
                            <p className="text-gray-300">
                                I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>

                            <div className="space-y-2">
                                <p className="flex items-center justify-center md:justify-start gap-2">
                                    <FaEnvelope className="text-green-400" /> kousarahammed5@gmail.com
                                </p>
                                <p className="flex items-center justify-center md:justify-start gap-2">
                                    <FaWhatsapp className="text-green-400" /> +8801521514220
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center md:justify-start gap-4 mt-4">
                                <a
                                    href="https://www.facebook.com/kousar.ahammed.eshan"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 bg-gray-700 rounded-full hover:bg-green-500 transition-colors"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/md-kousar21/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 bg-gray-700 rounded-full hover:bg-green-500 transition-colors"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    href="https://github.com/kousar-21"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 bg-gray-700 rounded-full hover:bg-green-500 transition-colors"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </div>

                        {/* Right - Contact Form */}
                        <form
                            onSubmit={sendEmail}
                            className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto w-full"
                        >
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-300">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-gray-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-gray-300">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
