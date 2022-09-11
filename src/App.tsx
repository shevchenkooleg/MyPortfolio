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
import TypeScriptIcon from "./common/assets/icons/TypeScriptIcon";
import HTMLIcon from "./common/assets/icons/HTMLIcon";
import ReactIcon from "./common/assets/icons/ReactIcon";
import JSIcon from "./common/assets/icons/JSIcon";
import socialImg from '../src/common/assets/images/sochial-network.jpeg'
import todoImg from '../src/common/assets/images/todo_image.jpeg'
import cardImg from '../src/common/assets/images/cards-app.jpeg'
import ReduxIcon from "./common/assets/icons/ReduxIcon";
import CSSIcon from "./common/assets/icons/CSSIcon";
import RouterIcon from "./common/assets/icons/RouterIcon";
import SCSSIcon from "./common/assets/icons/SCSSIcon";
import NextJSIcon from "./common/assets/icons/NextJSIcon";
import DockerIcon from "./common/assets/icons/DockerIcon";
import TailWIndCSS from "./common/assets/icons/TailWIndCSS";
import PostmanIcon from "./common/assets/icons/PostmanIcon";
import FormikIcon from "./common/assets/icons/FormikIcon";


export type ProjectType = {
    title: string
    preview: any
    description: string
    link: string
}
export type SkillType = {
    title: string
    icon: React.ReactNode
    description: string
}
export type ContactType = {
    title: string
    logo: string
    value: string
}
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const todoImage = todoImg
const cardImage = cardImg
const socialNetworkImage = socialImg


const skillDescription = {
    'JS': 'Programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. ' +
        'As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.',
    'React': 'Free and open-source front-end JavaScript library for building user interfaces based on UI components. ' +
        'It is maintained by Meta and a community of individual developers and companies.',
    'Redux': 'Open-source JavaScript library for managing and centralizing application state. It is most commonly used with ' +
        'libraries such as React or Angular for building user interfaces. Similar to Facebook\'s Flux architecture, it was created by Dan Abramov and Andrew Clark.',
    'HTML5': 'Markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final ' +
        'major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.',
    'CSS3': 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup ' +
        'language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
    'TypeScript': 'Free and open source programming language developed and maintained by Microsoft. It is a strict' +
        ' syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of ' +
        'large applications and transpiles to JavaScript.',
    'SASS': 'Stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions,' +
        ' and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.',
    'RRD': 'Collection of React components, hooks and utilities that make it easy to build multi-page applications with React. ' +
        'This reference contains the function signatures and return types of the various interfaces in React Router.',
    'Postman': 'API platform for developers to design, build, test and iterate their APIs. As of April 2022, Postman ' +
        'reports having more than 20 million registered users and 75,000 open APIs, which it says constitutes the world\'s largest public API hub.',
    'Formik': 'The world\'s most popular open source form library for React and React Native.',
    'NextJS': 'Open-source web development framework created by Vercel enabling React-based web applications with server-side rendering' +
        ' and generating static websites.',
    'Docker': 'A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
    'TailwindCSS': 'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
}

const skills: Array<SkillType> = [
    {title: 'JS', icon: <JSIcon/>, description: skillDescription.JS},
    {title: 'React', icon: <ReactIcon/>, description: skillDescription.React},
    {title: 'Next.js', icon: <NextJSIcon/>, description: skillDescription.NextJS},
    {title: 'Redux', icon: <ReduxIcon/>, description: skillDescription.Redux},
    {title: 'TypeScript', icon: <TypeScriptIcon/>, description: skillDescription.TypeScript},
    {title: 'HTMl5', icon: <HTMLIcon/>, description: skillDescription.HTML5},
    {title: 'CSS3', icon: <CSSIcon/>, description: skillDescription.CSS3},
    {title: 'SCSS/SASS', icon: <SCSSIcon/>, description: skillDescription.SASS},
    {title: 'RRD', icon: <RouterIcon/>, description: skillDescription.RRD},
    // {title: 'Postman', icon: <PostmanIcon/>, description: skillDescription.Postman},
    {title: 'Formik', icon: <FormikIcon/>, description: skillDescription.Formik},
    {title: 'Docker', icon: <DockerIcon/>, description: skillDescription.Docker},
    {title: 'TailwindCSS', icon: <TailWIndCSS/>, description: skillDescription.TailwindCSS},


]


const projects: Array<ProjectType> = [
    {title: 'SOCIAL NETWORK', preview: socialNetworkImage, description: description, link: ''},
    {title: 'TODO LIST', preview: todoImage, description: description, link: ''},
    {title: 'MEMO CARDS', preview: cardImage, description: description, link: ''},
]
const catchWays: Array<ContactType> = [
    {
        title: 'PHONE NUMBER:',
        logo: 'https://wordpress.zcube.in/subhan/wp-content/uploads/2022/04/f-phone-call.png',
        value: '+7 938 294-64-54'
    },
    {
        title: 'MY LOCATION:',
        logo: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://wordpress.zcube.in/subhan/wp-content/uploads/2022/04/f-location.png',
        value: 'Sochi, Krasnodar region, Russia'
    },
    {
        title: 'EMAIL ADDRESS:',
        logo: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://wordpress.zcube.in/subhan/wp-content/uploads/2022/04/f-email.png',
        value: 'shevchenko.oleg.87@gmail.com'
    },
    {
        title: 'SOCIAL NETWORK:',
        logo: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://wordpress.zcube.in/subhan/wp-content/uploads/2022/04/social-net-icon.png',
        value: '@Oleg_Sh_87'
    },
]
const contacts: Array<ContactType> = [
    {title: 'Email:', logo: 'logo', value: 'shevchenko.oleg.87@gmail.com'},
    {title: 'Phone:', logo: 'logo', value: '+7 938 294-64-54'},
    {title: 'Telegram:', logo: 'logo', value: '@Oleg_Sh_87'},
]


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='h-screen'>
                    <Header/>
                    <Intro/>
                </div>
                <div className='min-h-[80vh]'>
                    <Skills skills={skills}/>
                </div>
                <div className='min-h-[50vh]'>
                    <MyProjects projects={projects}/>
                </div>
                <div className='min-h-[30vh]'>
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
