import { motion } from 'framer-motion';
import React, {useState} from 'react';
import { ProjectType } from '../../../common/assets/data/dataSet';

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

const Project = ({title, preview, description, codeLink, pageLink}: ProjectPropsType) => {

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
            className='flex flex-col w-[400px]  min-h-[540px] bg-background-white rounded-2xl mb-[50px] relative'
            onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeave}>
            <div className='flex flex-col items-start ml-[20px] h-[90px]'>
                <div className='flex items-start text-[14px] mt-[20px] text-secondary-text-color'>Technologies:</div>
                <div className='flex justify-start text-[14px] text-secondary-text-color'>{description.technologies.join(', ').toUpperCase()}</div>
            </div>

            <div className='flex flex-col w-[400px] items-center justify-start'>
                <h3 className='text-[24px] my-[10px] mt-[10px]'>{title}</h3>
                <div className='w-[80%] mt-[20px] mb-[30px]'>
                    <img src={preview} alt=""/>
                </div>
            </div>
            <span className='text-[15px] mb-[15px] font-light px-[40px] font-description text-center text-justify'>{description.description}</span>
            <div className={`absolute bottom-0 flex justify-between items-center font-light border-t-[1px] border-background-gray-light w-full rounded-2xl
            px-[25px] h-full duration-700 ${over ? 'bg-black  text-white opacity-80': ''}`} onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeave}>
                <a href={codeLink} className={`${over ? 'text-white opacity-100 text-[30px] ml-[40px]': 'opacity-0'} hover:text-[33px] hover:underline duration-500` }>Code</a>
                <a href={pageLink} className={`${over ? 'text-white opacity-100 text-[30px] mr-[40px]': 'opacity-0'} hover:text-[33px] hover:underline duration-500`}>Page</a>
            </div>
        </motion.div>
    );
};

export default Project;