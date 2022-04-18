import React from 'react';
import styleContainer from '../../common/styles/Container.module.css'
import s from './ContactMe.module.css'
import {MyUniversalInput} from "../../common/universalComponent/MyUniversalInput";
import {ContactType} from "../../App";
import Contact from "./Contact/Contact";
import {MyUniversalButton} from "../../common/universalComponent/MyUniversalButton";

type ContactMePropsType = {
    contacts: Array<ContactType>
}


const ContactMe = (props:ContactMePropsType) => {
    return (
        <div className={s.contactMeBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <h2 className={s.title}>Contact Me</h2>
                <div className={s.contacts}>
                    <div className={s.contactInfo}>
                        {props.contacts.map(el=>{
                            return <Contact title={el.title} logo={el.logo} value={el.value}/>
                        })}
                    </div>
                    <div className={s.contactForm}>
                        <div className={s.nameContainer}>
                            <form className={s.name} action="">
                                <MyUniversalInput className={s.nameInput} value={'Enter your name'} callback={()=>{}}/>
                                <MyUniversalInput className={s.nameInput} value={'Your email address'} callback={()=>{}}/>
                            </form>
                        </div>

                        <div className={s.formContainer}>
                            <form action=""><MyUniversalInput className={s.formTitle} value={'Enter the discussion title'} callback={()=>{}}/></form>
                            <form action=""><MyUniversalInput className={s.message} value={'Write your message'} callback={()=>{}}/></form>
                        </div>
                        <div className={s.btnContainer}>
                            <MyUniversalButton title={'Send message now'}callback={()=>{}}/>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactMe;