import React from 'react';
import s from './MyProjects.module.css'
import {ProjectType} from "../../App";
import Project from "./Project/Project";
import styleContainer from '../../common/styles/Container.module.css'

export type MyProjectsPropsType = {
    projects: Array<ProjectType>
}


const MyProjects = (props: MyProjectsPropsType) => {
    return (
        <div className={s.myProjectsBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <h2 className={s.title}>My projects</h2>
                <div className={s.projects}>
                    {props.projects.map(el=>{
                        return <Project title={el.title} preview={el.preview} description={el.description} link={el.link}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default MyProjects;