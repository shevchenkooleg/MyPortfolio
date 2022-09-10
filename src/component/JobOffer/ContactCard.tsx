import { motion } from 'framer-motion';
import React, {forwardRef} from 'react';

type ContactCardPropsType = {
    title: string
    logo: string
    value: string
}

const ContactCard: React.FC<ContactCardPropsType> = forwardRef(({title, logo, value}, ref:any) => {
    return (
        <div ref={ref} className='flex flex-col w-[250px] items-center justify-start min-h-[250px] bg-background-white rounded-2xl mb-[50px]'>
            <div className='w-[70px] h-[70px] mt-[40px] mb-[10px]'><img src={logo} alt="logo"/></div>
            <h3 className='text-[24px] mt-[10px] mb-[20px]'>{title}</h3>
            <span className='text-[15px] mb-[15px] font-light px-[20px] font-description text-center'>{value}</span>
        </div>
    );
});

export default ContactCard;

export const MContactCard = motion(ContactCard)