import React from 'react';
import s from './JobOffer.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {MyUniversalButton} from "../../common/universalComponent/MyUniversalButton";

const JobOffer = () => {
    return (
        <div className={s.jobOfferBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <h2 className={s.title}>Hire Me</h2>
                <span>'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'</span>
                <div className={s.contacts}>
                    <div>+22 12345 678 9012</div>
                    <div>information@example.com</div>
                    <div>KarimEzZat.me</div>
                </div>
                <MyUniversalButton title={'Hire Me'} callback={()=>{}}/>
            </div>

        </div>
    );
};

export default JobOffer;