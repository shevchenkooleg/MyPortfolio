import { motion } from 'framer-motion';
import React from 'react';
import { ProjectType } from '../../common/assets/data/dataSet';
import Project from "./Project/Project";


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
    return (
        <motion.section
            initial='hidden' whileInView='visible' viewport={{amount:0.2, once: true}}
            className='bg-background-gray h-[100%] flex justify-center items-center'>
            <div className='flex flex-col w-[90%] h-full justify-start items-center'>
                <motion.h2 variants={textAnimation} transition={{duration:1.5}} className='text-[35px] pt-[100px] font-light place-self-start'>MY PROJECTS</motion.h2>
                <div className='flex w-full h-full flex-wrap justify-around items-start border-b-[1px] border-black pt-[50px] pb-[50px]'>
                    {props.projects.map((el, key)=>{
                        return <Project
                            // variants={imageAnimation} transition={{duration:1.5}}
                            key={key}
                            title={el.title}
                            preview={el.preview}
                            description={el.description}
                            link={el.link}/>
                    })}
                </div>
            </div>
        </motion.section>
    );
};

export default MyProjects;