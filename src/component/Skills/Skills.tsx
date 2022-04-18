import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import {SkillType} from "../../App";

type SkillsPropsType = {
    skills: Array<SkillType>
}

const Skills = (props: SkillsPropsType) => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    {
                        props.skills.map(el=> {return <Skill title={el.title} icon={el.icon} description={el.description} />})
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;