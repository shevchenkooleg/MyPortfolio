import {motion} from 'framer-motion';
import React from 'react';
import mainPic from '../../common/assets/images/main-page-3.png'


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
                        className='h-[90%] bg-background-gray flex justify-center'>

            <div className='flex w-[90%] h-full justify-around items-center border-b-[1px] border-black'>
                <div className='text-[55px] font-light'>
                    <motion.p variants={textAnimation} transition={{duration:1.5}}>HI!</motion.p>
                    <motion.h1 variants={textAnimation} transition={{duration:1.5}}>I AM OLEG SHEVCHENKO</motion.h1>
                    <motion.p variants={textAnimation} transition={{duration:1.5}}>A FRONT-END DEVELOPER</motion.p>
                </div>
                <div className='w-[52%] relative'>
                    <motion.img className='relative z-10' src={mainPic} alt="avatar"
                                variants={imageAnimation} transition={{duration:1.5}} custom={1}/>
                    <motion.div className='w-[67%] h-[67%] bg-main-circle rounded-full absolute left-[3%] top-[10%] z-[0]'
                                variants={imageAnimation} transition={{duration:1.5}} custom={-1}>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Intro;