import React from 'react';
import s from './Footer.module.css'
import copyright from '../../common/assets/icons/copyright.png'
import {socialCards} from "../../common/assets/data/dataSet";
import SocialCard from "./SocialCard";
const Footer = () => {



    return (
        <div className='flex justify-center text-[18px] items-center h-[15%] bg-background-gray'>
            <div className='w-[90%] h-[100%] items-center flex flex-col justify-between'>
                <h2 className='mt-[10px]'>Shevchenko Oleg</h2>
                <div className={s.social}>
                    {socialCards.map((el, key)=>{return (
                        <SocialCard key={key} card={el}/>
                    )})}
                </div>
                <span className='text-[10px] mb-[10px] flex justify-between'><img className='mr-[5px]' src={copyright} alt="copyright" width={'12px'} height={'12px'}/> 2022. ALL RIGHT RESERVED.</span>
            </div>


        </div>
    );
};

export default Footer;