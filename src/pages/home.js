import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Landing from '../components/Landing.js';
import Skills from '../components/Skills.js';
import Projects from '../components/Projects.js';
import Education from '../components/Education.js';

import useTitle from '../page_title.js'; 

function Home() {
    useTitle("Konstantinos Melissaratos")

    const parallaxRef = useRef("parallax");

    return (
        <div>
            <Parallax ref={parallaxRef} pages={4} style={{ top: "0", left: "0"}}>
                <ParallaxLayer offset={0} speed={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Landing/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Skills/>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Projects/>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Education/>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default Home;