import React, {useState} from 'react';
import HeroiconsOutlineArrowRight from "../../../common/assets/icons/HeroiconsOutlineArrowRight";
import { motion } from 'framer-motion';

type SkillPropsType = {
    title: string
    icon: React.ReactNode
    description: string
}

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

const Skill = ({title, icon, description}: SkillPropsType) => {

    const [over, setOver] = useState(false)

    const onMouseOverHandler = () => {
        setOver(true)
    }
    const onMouseLeave = () => {
        setOver(false)
    }

    return (
        <motion.div initial='hidden' whileInView='visible' viewport={{amount:0.2, once: true}}
                    variants={imageAnimation} transition={{duration:1.5}}
                    className=' relative flex flex-col w-[250px] items-center justify-start h-[450px] bg-background-white rounded-2xl mb-[50px] mr-[20px]'>
            <div className='w-[90px] h-[90px] mt-[20px]'>{icon}</div>
            <h3 className='text-[24px] mt-[10px] mb-[20px]'>{title}</h3>
            <span className='text-[15px] mb-[15px] font-light px-[20px] font-description text-center'>{description}</span>
            <div className='absolute bottom-0 flex justify-between text-[14px] font-light border-t-[1px] border-background-gray-light w-full rounded-b-2xl
            px-[25px] h-[40px] pt-[8px] duration-700 hover:bg-black  hover:text-white' onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeave}>
                READ MORE
                <HeroiconsOutlineArrowRight color={over ? 'white' : 'black'}/>
            </div>
        </motion.div>
    );
};

export default Skill;


export const MSkill = motion(Skill)