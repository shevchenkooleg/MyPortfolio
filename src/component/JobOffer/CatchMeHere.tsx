import React from 'react';
import {MContactCard} from "./ContactCard";
import {motion} from 'framer-motion';
import {ContactType} from '../../common/assets/data/dataSet';
import s from './CatchMeHere.module.css'
import { MUniversalButton } from '../../common/universalComponent/UniversalButton';

type CatchMeHerePropsType = {
    catchWays: Array<ContactType>
    scrollCallback: (id:string) => void
}

const textAnimation = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.3 * (custom),
            duration: 2
        }
    })
}

const imageAnimation = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5 * (custom),
            duration: 1.5
        }
    })
}
const buttonAnimation = {
    hidden: {
        x: 50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1
    },
}


const CatchMeHere: React.FC<CatchMeHerePropsType> = ({catchWays, scrollCallback}) => {
    return (
        <motion.section
            initial='hidden' whileInView='visible' viewport={{amount: 0.2, once: true}}
            className={s.catchMEHereBlock}>
            <div className={s.container}>
                <div className={s.title}>
                    <motion.h2 variants={textAnimation} custom={1} className={s.titleText}>LET'S WORK
                        TOGETHER ON YOUR NEXT PROJECT
                    </motion.h2>
                    <div className={s.button}>
                        <MUniversalButton title={'Invite me for an interview'} scrollCallback={scrollCallback} variants={buttonAnimation} transition={{duration: 1.5}}/>
                    </div>
                </div>
                <motion.span variants={textAnimation} custom={4}>
                    If my skills and experience turned out to be interesting for you and you want to cooperate, please get in touch with me in any of the following ways or use the feedback form at the bottom of this page.
                </motion.span>
                <div
                    // className='flex flex-wrap w-full h-full justify-around items-start border-b-[1px] border-black pt-[30px]'>
                    className={s.contact}>
                    {catchWays.map((el, k) => <MContactCard variants={imageAnimation} transition={{duration: 2}}
                                                            custom={k}
                                                            key={k} title={el.title} logo={el.logo} value={el.value}/>)}
                </div>


            </div>

        </motion.section>
    );
};

export default CatchMeHere;