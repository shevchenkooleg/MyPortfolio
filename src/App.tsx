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
import { useBeforeunload } from 'react-beforeunload';


export enum blockId {
    intro = 'intro',
    skills = 'skills',
    myProjects = 'projects',
    catchME = 'catchMe',
}

function App() {


    const [scroll, setScroll] = React.useState(0);
    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useBeforeunload(() => {
        window.scrollTo(0,0)
    });

    const universalScrollHandler = (id: string) => {
        if (id === blockId.intro) {
            window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth",
            });
        } else {
            const targetBlock = document.getElementById(id)
            const targetBlockTopCoordPosition = targetBlock && targetBlock.getBoundingClientRect().top + window.pageYOffset
            targetBlockTopCoordPosition && window.scrollTo({
                left: 0,
                top: targetBlockTopCoordPosition,
                behavior: "smooth",
            })
        }
    }

    React.useEffect(() => {
        // window.scrollTo(0,0);
        window.addEventListener("scroll", handleScroll);
        // window.scrollTo(0,0);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <BrowserRouter>
            <div className="App">
                <div id={blockId.intro} className='h-screen'>
                    <Header scrollPosition={scroll} scrollCallback={universalScrollHandler}/>
                    <Intro/>
                </div>
                <div id={blockId.skills} className='min-h-[80vh]'>
                    <Skills skills={skills}/>
                </div>
                <div id={blockId.myProjects} className='min-h-[50vh]'>
                    <MyProjects projects={projects}/>
                </div>
                <div id={blockId.catchME} className='min-h-[30vh]'>
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
