import {motion} from 'framer-motion';
import React, {forwardRef} from 'react';

type NavigationPropsType = {
    scrollCallback: () => void
    scrollPosition: number
}

const Navigation: React.FC<NavigationPropsType> = forwardRef(({scrollCallback, scrollPosition}, ref: any) => {

    const mainButtonClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        scrollCallback()
    }

    return (
        <div>
            <div ref={ref} className={`${scrollPosition >= 100
                ? 'fixed justify-center items-center duration-300 z-20 flex ' +
                'justify-between top-0 w-[450px] h-[60px] bg-gradient-to-b from-background-gray to-background-gray-gradient'
                : 'flex justify-between w-[450px]'}`}>
                <a href="" onClick={mainButtonClickHandler}>MAIN</a>
                <a href="">SKILLS</a>
                <a href="">PORTFOLIO</a>
                <div>CONTACT ME</div>
            </div>
            <div>
                <a href="" onClick={mainButtonClickHandler}>MAIN</a>
                <a href="">SKILLS</a>
                <a href="">PORTFOLIO</a>
                <div>CONTACT ME</div>
            </div>
        </div>

    );
});

export const MNavigation = motion(Navigation);

export default Navigation;