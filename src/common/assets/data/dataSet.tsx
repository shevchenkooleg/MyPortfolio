import React from "react";
import todoImg from "../images/todo_image.jpeg";
import cardImg from "../images/cards-app.jpeg";
import socialImg from "../images/sochial-network.jpeg";
import JSIcon from "../icons/JSIcon";
import ReactIcon from "../icons/ReactIcon";
import NextJSIcon from "../icons/NextJSIcon";
import ReduxIcon from "../icons/ReduxIcon";
import TypeScriptIcon from "../icons/TypeScriptIcon";
import HTMLIcon from "../icons/HTMLIcon";
import CSSIcon from "../icons/CSSIcon";
import SCSSIcon from "../icons/SCSSIcon";
import RouterIcon from "../icons/RouterIcon";
import FormikIcon from "../icons/FormikIcon";
import DockerIcon from "../icons/DockerIcon";
import TailWIndCSS from "../icons/TailWIndCSS";
import PostmanIcon from "../icons/PostmanIcon";

export type ProjectType = {
    title: string
    preview: any
    description: { description: string, technologies: string[] }
    codeLink: string
    pageLink: string
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
const projectDescription = {
    'socialNetwork': {
        description: "React SPA that implemented an unidirectional data flow (FLUX - architecture), fundamental " +
            "programming patterns such as modules, a subscriber-listener and built both on the legacy class and modern functional components",
        technologies: ['redux', 'typescript', 'axios', 'formik', 'react-router', 'thunk'],
    },
    'todoList': {
        description: "React SPA witch built using a modern approach to working with application states - the Redux-Toolkit" +
            " library, as well as implementing the ability to automatically test program code using the jest library",
        technologies: ['redux-toolkit', 'typescript', 'axios', 'jest', 'thunk', 'ant-design'],
    },
    'memoCards': {
        description: "React SPA for educational assistance that implemented TypeScript - static-typed language and using RestAPI, FLUX, Thunk technologies",
        technologies: ['redux','typescript', 'axios', 'formik', 'react-router', 'redux-thunk', 'material-ui'],
    },
}

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

export const skills: Array<SkillType> = [
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
];


export const projects: Array<ProjectType> = [
    {title: 'SOCIAL NETWORK', preview: socialNetworkImage, description: projectDescription.socialNetwork, codeLink: 'https://github.com/shevchenkooleg/way_of_the_samurai_form_js_to_ts.git', pageLink: ''},
    {title: 'TODO LIST', preview: todoImage, description: projectDescription.todoList, codeLink: 'https://github.com/shevchenkooleg/todo-toolkit.git', pageLink: ''},
    {title: 'MEMO CARDS', preview: cardImage, description: projectDescription.memoCards
        , codeLink: 'https://github.com/shevchenkooleg/friday-cards.git', pageLink: ''},
]
export const catchWays: Array<ContactType> = [
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
export const contacts: Array<ContactType> = [
    {title: 'Email:', logo: 'logo', value: 'shevchenko.oleg.87@gmail.com'},
    {title: 'Phone:', logo: 'logo', value: '+7 938 294-64-54'},
    {title: 'Telegram:', logo: 'logo', value: '@Oleg_Sh_87'},
]