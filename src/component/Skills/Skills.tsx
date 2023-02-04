import React from 'react';
import {MSkill} from "./Skill/Skill";
import { motion } from 'framer-motion';
import { SkillType } from '../../common/assets/data/dataSet';
import s from './Skills.module.css'
import {viewportDelayDeterminate} from '../../common/tools/viewportDelayDeterminate'
import { viewportSettingsType } from '../../common/tools/types';

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

const viewportSettings: viewportSettingsType = {
    'default': 0.2,
    'less1612': 0.1,
    'less1288': 0.1,
    'less966': 0.05,
    'less644': 0.15
}



const Skills = (props: SkillsPropsType) => {


    return (
        <motion.section
            initial='hidden' whileInView='visible' viewport={{amount: viewportDelayDeterminate(document.documentElement.clientWidth, viewportSettings), once: true}}
            className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <motion.h2 variants={textAnimation} transition={{duration:1.5}} className={s.title}>MY SKILLS</motion.h2>
                <div className={s.skill}>
                    {
                        props.skills.map((el, key)=> {return <MSkill
                            key={key} title={el.title}
                            icon={el.icon}
                            description={el.description}
                            link={el.link}
                            counter={key}/>})
                    }
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;