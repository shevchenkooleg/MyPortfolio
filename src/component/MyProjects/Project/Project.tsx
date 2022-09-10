import { motion } from 'framer-motion';
import React, {useState} from 'react';
import {ProjectType} from "../../../App";

type ProjectPropsType = ProjectType

const imageAnimation = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: {
        y:0,
        opacity: 1
    }
}

const Project = ({title, preview, description, link}: ProjectPropsType) => {

    const [over, setOver] = useState(false)

    const onMouseOverHandler = () => {
        setOver(true)
    }
    const onMouseLeave = () => {
        setOver(false)
    }



    return (
        <motion.div
            initial='hidden' whileInView='visible' viewport={{amount:0.2, once: true}}
            variants={imageAnimation} transition={{duration:1.5}}
            className='flex flex-col w-[400px] items-center justify-start min-h-[300px] bg-background-white rounded-2xl mb-[50px]'>
            <motion.h3 className='text-[24px] my-[10px] mt-[50px]'>{title}</motion.h3>
            <div className='w-[80%] mt-[20px] mb-[30px]'>
                <img src={preview} alt=""/>
                {/*<a className={s.btn} href="#0"><img src={preview} alt=""/></a>*/}
            </div>

            <span className='text-[15px] mb-[15px] font-light px-[20px] font-description text-center'>{description}</span>
        </motion.div>
    );
};

export default Project;