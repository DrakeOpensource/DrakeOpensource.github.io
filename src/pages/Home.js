import React from 'react';
// Page imports
import Header from './Header';
import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Skills from './Skills';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Landing />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;