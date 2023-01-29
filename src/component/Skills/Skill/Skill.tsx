import React, {forwardRef, useState} from 'react';
import HeroiconsOutlineArrowRight from "../../../common/assets/icons/HeroiconsOutlineArrowRight";
import { motion } from 'framer-motion';
import {viewportSettingsType} from "../../../common/tools/types";
import {viewportDelayDeterminate} from "../../../common/tools/viewportDelayDeterminate";
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    icon: React.ReactNode
    description: string
    link: string
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

const Skill = forwardRef(({title, icon, description, link}: SkillPropsType, ref:any) => {

    const viewportSettings: viewportSettingsType = {
        'default': 0.2,
        'less1612': 0.2,
        'less1288': 0.1,
        'less966': 0.05,
        'less644': 0.9
    }

    const [over, setOver] = useState(false)

    const onMouseOverHandler = () => {
        setOver(true)
    }
    const onMouseLeave = () => {
        setOver(false)
    }
    const onReadMoreClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        window.open(link)
    }

    if (document.documentElement.clientWidth > 700){
        return (
            <motion.div initial='hidden' whileInView='visible' viewport={{amount:viewportDelayDeterminate(document.documentElement.clientWidth, viewportSettings), once: true}}
                        variants={imageAnimation} transition={{duration:1.5}} ref={ref}
                        className=' relative flex flex-col w-[270px] items-center justify-start h-[450px] bg-background-white rounded-2xl mb-[50px] mx-[20px]'>
                <div className='w-[90px] h-[90px] mt-[20px]'>{icon}</div>
                <h3 className='text-[24px] mt-[10px] mb-[20px]'>{title}</h3>
                <span className='text-[15px] mb-[15px] font-light px-[20px] font-description text-center text-justify'>{description}</span>
                <div className='absolute bottom-0 flex justify-between text-[14px] font-light border-t-[1px] border-background-gray-light w-full rounded-b-2xl
            px-[25px] h-[40px] pt-[8px] duration-700 hover:bg-black  hover:text-white' onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeave} onClick={onReadMoreClickHandler}>
                    READ MORE
                    <HeroiconsOutlineArrowRight color={over ? 'white' : 'black'}/>
                </div>
            </motion.div>
        );
    } else {
        return (
            <motion.div initial='hidden' whileInView='visible' viewport={{amount:viewportDelayDeterminate(document.documentElement.clientWidth, viewportSettings), once: true}}
                        variants={imageAnimation} transition={{duration:1.5}} ref={ref} className={s.skillContainerMobile}
                        >
                <div className={`${s.skillBlockMobile} ${over ? s.mobileActive : ''}`}
                     onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeave}>
                    <div className={`w-[90px] h-[90px] duration-1000 ${over ? 'opacity-0' : ''}`}>{icon}</div>
                    <div className={`${s.mobileLink} ${over ? s.linkActive : ''}`} onClick={over ? onReadMoreClickHandler : undefined}>read more</div>
                </div>

            </motion.div>
        )
    }

});

export default Skill;


export const MSkill = motion(Skill)