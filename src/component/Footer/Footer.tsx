import React from 'react';
import s from './Footer.module.css'
import instagramLogo from '../../common/assets/icons/instagram.png'
import telegramLogo from '../../common/assets/icons/telegram.png'
import facebookLogo from '../../common/assets/icons/facebook.png'
import linkedInLogo from '../../common/assets/icons/linkedin.png'
import copyright from '../../common/assets/icons/copyright.png'
const Footer = () => {
    return (
        <div className='flex justify-center text-[18px] items-center h-[15%] bg-background-gray'>
            <div className='w-[90%] h-[100%] items-center flex flex-col justify-between'>
                <h2 className='mt-[10px]'>Shevchenko Oleg</h2>
                <div className={s.social}>
                    <a href="#0"><img src={instagramLogo} alt="instagram" width={'30px'} height={'30px'}/></a>
                    <a href="#0"><img src={telegramLogo} alt="telegram" width={'30px'} height={'30px'}/></a>
                    <a href="#0"><img src={facebookLogo} alt="facebook" width={'30px'} height={'30px'}/></a>
                    <a href="#0"><img src={linkedInLogo} alt="linkedIn" width={'30px'} height={'30px'}/></a>
                </div>
                <span className='text-[10px] mb-[10px]'><img src={copyright} alt="copyright" width={'12px'} height={'12px'}/> 2022. ALL RIGHT RESERVED.</span>
            </div>


        </div>
    );
};

export default Footer;