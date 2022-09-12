import React from 'react';
import { ContactType } from '../../../common/assets/data/dataSet';

type ContactPropsType = ContactType


const Contact = ({title, logo, value}: ContactPropsType) => {
    return (
        <div className='flex'>
            <div className='flex w-[30px] items-center'>{logo}</div>
            <div className='flex flex-col pl-[20px]'>
                <div className='text-[20px]'>{title}</div>
                <div className='text-[20px]'>{value}</div>
            </div>
        </div>
    );
};

export default Contact;