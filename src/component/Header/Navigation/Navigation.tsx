import React from 'react';
import s from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={s.navigation}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">My Portfolio</a>
            <a href="">Contact Me</a>
        </div>
    );
};

export default Navigation;