import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Intro from "./component/Intro/Intro";
import Skills from "./component/Skills/Skills";
import MyProjects from './component/MyProjects/MyProjects'
import JobOffer from "./component/JobOffer/JobOffer";
import ContactMe from "./component/Contacts/ContactMe";
import Footer from "./component/Footer/Footer";
import {BrowserRouter} from 'react-router-dom';


export type ProjectType = {
    title: string
    preview: string
    description: string
    link:string
}
export type SkillType = {
    title: string
    icon: string
    description: string}
export type ContactType = {
    title: string
    logo: string
    value: string
}

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const skills: Array<SkillType> = [
    {title: 'JS', icon: 'JS_icon', description: description},
    {title: 'React', icon: 'React_icon', description: description},
    {title: 'HTML/CSS', icon: 'HTML_icon', description: description}]
const projects: Array<ProjectType> = [
    {title: 'Social network', preview: '', description: description, link: ''},
    {title: 'Todo List', preview: '', description: description, link: ''},
]
const contacts: Array<ContactType> = [
    {title: 'Email:', logo: 'logo', value: 'Your@gmail.com'},
    {title: 'Phone:', logo: 'logo', value: '111-2222-333'},
    {title: 'Skype:', logo: 'logo', value: 'Your Skype'},
]



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Intro/>
                <Skills skills={skills}/>
                <MyProjects projects={projects}/>
                <JobOffer/>
                <ContactMe contacts={contacts}/>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
