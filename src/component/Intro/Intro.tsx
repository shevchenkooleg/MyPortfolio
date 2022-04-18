import React from 'react';
import s from './Intro.module.css'
import styleContainer from '../../common/styles/Container.module.css'

const Intro = () => {
    return (
        <div className={s.intro}>
            <div className={styleContainer.container}>
                <div className={s.greeting}>
                    <span>Hi there</span>
                    <h1>I am Oleg Shevchenko</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>

        </div>
    );
};

export default Intro;