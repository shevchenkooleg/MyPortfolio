import { motion } from 'framer-motion';
import React from 'react';
import { ProjectType } from '../../common/assets/data/dataSet';
import Project from "./Project/Project";
import s from './MyProjects.module.css'


export type MyProjectsPropsType = {
    projects: Array<ProjectType>
}

const textAnimation = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1
    },
}


const MyProjects = (props: MyProjectsPropsType) => {

    const viewportDelayDeterminate = () => {
        if (document.documentElement.clientWidth > 1612) {
            return 0.2
        }
        if (document.documentElement.clientWidth < 1612 && document.documentElement.clientWidth > 1288) {
            return 0.2
        } else if (document.documentElement.clientWidth <= 1288 && document.documentElement.clientWidth > 966) {
            return 0.2
        } else if (document.documentElement.clientWidth <= 966 && document.documentElement.clientWidth > 644) {
            return 0.2
        } else {
            return 0.2
        }
    }

    return (
        <motion.section
            initial='hidden' whileInView='visible' viewport={{amount:viewportDelayDeterminate(), once: true}}
            className={s.myProjectsBlock}>
            <div className={s.container}>
                <motion.h2 variants={textAnimation} transition={{duration:1.5}} className={s.title}>MY PROJECTS</motion.h2>
                <div className={s.project}>
                    {props.projects.map((el, key)=>{
                        return <Project
                            // variants={imageAnimation} transition={{duration:1.5}}
                            key={key}
                            title={el.title}
                            preview={el.preview}
                            description={el.description}
                            codeLink={el.codeLink}
                            pageLink={el.pageLink}
                            tip={el.tip}
                        />
                    })}
                </div>
            </div>
        </motion.section>
    );
};

export default MyProjects;