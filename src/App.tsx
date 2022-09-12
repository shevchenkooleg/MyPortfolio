import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Intro from "./component/Intro/Intro";
import Skills from "./component/Skills/Skills";
import MyProjects from './component/MyProjects/MyProjects'
import CatchMeHere from "./component/JobOffer/CatchMeHere";
import ContactMe from "./component/Contacts/ContactMe";
import Footer from "./component/Footer/Footer";
import {BrowserRouter} from 'react-router-dom';
import {catchWays, contacts, projects, skills} from './common/assets/data/dataSet';


function App() {

    const [scroll, setScroll] = React.useState(0);
    console.log(scroll)
    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        window.scrollTo(0, 0);
    };

    const scrollHeaderHandler = () => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        });
    }

    const scrollSkillsHandler = () => {
        const skillsBlock = document.getElementById('projects')
        const skillsBlockTopCoordPosition = skillsBlock && skillsBlock.getBoundingClientRect().top + window.pageYOffset
        skillsBlockTopCoordPosition && window.scrollTo({
            left: 0,
            top: skillsBlockTopCoordPosition,
            behavior: "smooth",
        })
    }

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <BrowserRouter>
            <div className="App">
                <div className='h-screen'>
                    <Header scrollPosition={scroll} scrollCallback={scrollSkillsHandler}/>
                    <Intro/>
                </div>
                <div id='skills' className='min-h-[80vh]'>
                    <Skills skills={skills}/>
                </div>
                <div id='projects' className='min-h-[50vh]'>
                    <MyProjects projects={projects}/>
                </div>
                <div id='catchMe' className='min-h-[30vh]'>
                    <CatchMeHere catchWays={catchWays}/>
                </div>
                <div className='min-h-[80%]'>
                    <ContactMe contacts={contacts}/>
                </div>
                <div className='h-auto'>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
