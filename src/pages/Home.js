import Landing from '../components/Landing.js';
import Skills from '../components/Skills.js';
import Projects from '../components/Projects.js';
import Education from '../components/Education.js';
import Footer from '../components/Footer.js';

import useTitle from '../page_title.js';

function Home({theme}) {
    useTitle('Konstantinos Melissaratos');

    return (
        <div style={{marginTop: '-90px'}}>
            <Landing/>
            <Skills/>
            <Projects theme={theme}/>
            <Education theme={theme}/>
            <Footer theme={theme}/>
        </div>
    );
};

export default Home;
