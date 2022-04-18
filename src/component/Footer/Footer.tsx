import React from 'react';
import s from './Footer.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import instagramLogo from '../../common/icons/instagram.png'
import telegramLogo from '../../common/icons/telegram.png'
import facebookLogo from '../../common/icons/facebook.png'
import linkedInLogo from '../../common/icons/linkedin.png'
import copyright from '../../common/icons/copyright.png'
const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <h2>Shevchenko Oleg</h2>
                <div className={s.social}>
                    <a href="#0"><img src={instagramLogo} alt="instagram" width={'30px'} height={'30px'}/></a>
                    <a href="#0"><img src={telegramLogo} alt="telegram" width={'30px'} height={'30px'}/></a>
                    <a href="#0"><img src={facebookLogo} alt="facebook" width={'30px'} height={'30px'}/></a>
                    <a href="#0"><img src={linkedInLogo} alt="linkedIn" width={'30px'} height={'30px'}/></a>
                </div>
                <span className={s.copyright}><img src={copyright} alt="copyright" width={'12px'} height={'12px'}/> 2022. ALL RIGHT RESERVED.</span>
            </div>


        </div>
    );
};

export default Footer;