import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';

const Navigation = forwardRef(({}, ref:any) => {
    return (
        <div ref={ref} className='flex justify-between w-[450px]'>
            <a href="">MAIN</a>
            <a href="">SKILLS</a>
            <a href="">PORTFOLIO</a>
            <a href="">CONTACT ME</a>
        </div>
    );
});

export const MNavigation = motion(Navigation);

export default Navigation;