import {motion} from 'framer-motion';
import React from 'react';
import Navigation from "./Navigation/Navigation";
import s from './Header.module.css'

type HeaderPropsType = {
    scrollCallback: (id:string) => void
    scrollPosition: number
}

const textAnimation = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1
    },
}

const Header: React.FC<HeaderPropsType> = ({scrollCallback, scrollPosition}) => {
    return (
        <motion.section initial='hidden'
                        whileInView='visible'
                        viewport={{once: true}}
                        className={s.container}>
            <motion.div variants={textAnimation} transition={{duration: 1.5}}
                        className={s.header}>
                <Navigation scrollPosition={scrollPosition} scrollCallback={scrollCallback}/>
            </motion.div>
        </motion.section>
    );
};

export default Header;