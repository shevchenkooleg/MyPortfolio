import React from 'react';
import Skill from "./Skill/Skill";
import {SkillType} from "../../App";
import { motion } from 'framer-motion';

type SkillsPropsType = {
    skills: Array<SkillType>
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


const Skills = (props: SkillsPropsType) => {
    return (
        <motion.section
            initial='hidden' whileInView='visible' viewport={{amount:0.2, once: true}}
            className='bg-background-gray h-[100%] flex justify-center items-center'>
            <div className='flex flex-col w-[90%] h-full justify-start items-center'>
                <motion.h2 variants={textAnimation} transition={{duration:1.5}} className='text-[35px] pt-[100px] font-light place-self-start'>SKILLS</motion.h2>
                <div className='flex w-full h-full flex-wrap justify-around items-start border-b-[1px] border-black pt-[50px] pb-[50px]'>
                    {
                        props.skills.map((el, key)=> {return <Skill
                            key={key} title={el.title}
                            icon={el.icon}
                            description={el.description} />})
                    }
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;