import React from 'react';
import {ProjectType} from "../../../App";
import s from './Project.module.css'

type ProjectPropsType = ProjectType

const Project = ({title, preview, description, link}: ProjectPropsType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.preview}>
                <img src="" alt=""/>
                <a className={s.btn} href="#0">Look</a>
            </div>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

export default Project;