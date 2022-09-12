import React from 'react';
import {MyUniversalButton} from "../../common/universalComponent/MyUniversalButton";
import { MContactCard } from "./ContactCard";
import { motion } from 'framer-motion';
import { ContactType } from '../../common/assets/data/dataSet';

type CatchMeHerePropsType = {
    catchWays: Array<ContactType>
}

const textAnimation = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1
    },
}

const imageAnimation = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: (custom: number)=>({
        y:0,
        opacity: 1,
        transition: {delay: 0.3*(custom),
            duration:2}
    })
}


const CatchMeHere: React.FC<CatchMeHerePropsType> = ({catchWays}) => {
    return (
        <motion.section
            initial='hidden' whileInView='visible' viewport={{amount:0.2, once: true}}
            className='bg-background-gray h-[100%] flex justify-center items-center'>
            <div className='flex flex-col w-[90%] h-full justify-start items-center'>
                <div className='flex pt-[100px] w-full justify-around'>
                    <motion.h2 variants={textAnimation} transition={{duration:1.5}} className='text-[30px]'>LET'S WORK TOGETHER ON YOUR NEXT PROJECT</motion.h2>
                    <MyUniversalButton title={'Hire Me'} callback={()=>{}}/>
                </div>
                <span>'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'</span>
                <div className='flex flex-wrap w-full h-full justify-around items-start border-b-[1px] border-black pt-[30px]'>
                    {catchWays.map((el,k)=><MContactCard variants={imageAnimation} transition={{duration:2}} custom={k}
                        key={k} title={el.title} logo={el.logo} value={el.value}/>)}
                </div>


            </div>

        </motion.section>
    );
};

export default CatchMeHere;