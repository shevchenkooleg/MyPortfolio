import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    icon: string
    description: string
}

const Skill = ({title, icon, description}: SkillPropsType) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.icon}>{icon}</div>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

export default Skill;