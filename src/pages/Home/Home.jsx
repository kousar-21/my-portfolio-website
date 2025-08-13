import React from 'react';
import Animation from '../../component/Animation/Animation';
import Hero from '../../component/Hero/Hero';
import About from '../../component/About/About';
import Skills from '../../component/Skills/Skills';
import Projects from '../../component/Projects/Projects';
import Contact from '../../component/Contact/Contact';

const Home = () => {
    return (

        <div>
            <Animation>
                <Hero></Hero>
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
            </Animation>
        </div>

    );
};

export default Home;