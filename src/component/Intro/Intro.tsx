import {motion} from 'framer-motion';
import React from 'react';
import mainPic from '../../common/assets/images/main-page-4.png'
import s from './Intro.module.css'


const textAnimation = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1
    },
}

const imageAnimation = {
    hidden: (custom:number) =>({
        x:50*custom,
        opacity: 0,
    }),
    visible: {
        x:0,
        opacity: 1
    }
}


const Intro = () => {


    return (

        <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}
                        className={s.container}>

            <motion.div className={s.round}
                        variants={imageAnimation} transition={{duration:1.5}} custom={-1}>
            </motion.div>

            <div className={s.main}>
                <div className={s.text}>
                    <motion.p variants={textAnimation} transition={{duration:1.5}}>HI!</motion.p>
                    <motion.h1 variants={textAnimation} transition={{duration:1.5}}>I AM OLEG SHEVCHENKO</motion.h1>
                    <motion.p variants={textAnimation} transition={{duration:1.5}}>A FRONT-END DEVELOPER</motion.p>
                </div>
                <div className={s.pictureBlock}>
                    <motion.img className={s.photo} src={mainPic} alt="avatar"
                                variants={imageAnimation} transition={{duration:1.5}} custom={1}/>
                </div>
            </div>
        </motion.section>
    );
};

export default Intro;