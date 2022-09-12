import {motion} from 'framer-motion';
import React from 'react';
import Navigation from "./Navigation/Navigation";

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
                        className='flex justify-center text-[18px] items-center h-[10%] bg-background-gray'>
            <motion.div variants={textAnimation} transition={{duration: 1.5}}
                        className='w-[90%] h-[100%] items-center flex justify-center border-b-[1px] border-black'>
                <Navigation scrollPosition={scrollPosition} scrollCallback={scrollCallback}/>
            </motion.div>
        </motion.section>
    );
};

export default Header;