import React from 'react';
import {ContactType} from "../../../App";
import s from './Contact.module.css'

type ContactPropsType = ContactType


const Contact = ({title, logo, value}: ContactPropsType) => {
    return (
        <div className={s.contactContainer}>
            <div className={s.logo}>{logo}</div>
            <div className={s.contact}>
                <div>{title}</div>
                <div>{value}</div>
            </div>
        </div>
    );
};

export default Contact;