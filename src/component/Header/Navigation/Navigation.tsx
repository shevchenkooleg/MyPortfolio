import {motion} from 'framer-motion';
import React, {forwardRef} from 'react';
import { blockId } from '../../../App';

type NavigationPropsType = {
    scrollCallback: (id:string) => void
    scrollPosition: number
}

const Navigation: React.FC<NavigationPropsType> = forwardRef(({scrollCallback, scrollPosition}, ref: any) => {

    const scrollHandler = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        scrollCallback(id)
    }

    return (
        <div className='w-full flex justify-center items-center'>
            <div ref={ref} className='flex justify-between w-[450px]'>
                <a href="" onClick={(e)=>scrollHandler(e, blockId.intro)}>MAIN</a>
                <a href="" onClick={(e)=>scrollHandler(e, blockId.skills)}>SKILLS</a>
                <a href="" onClick={(e)=>scrollHandler(e, blockId.myProjects)}>PORTFOLIO</a>
                <a href="" onClick={(e)=>scrollHandler(e, blockId.catchME)}>CONTACT ME</a>
            </div>
            <div className={`fixed justify-center items-center duration-300 z-20 flex top-0 w-full h-[60px] bg-gradient-to-b from-background-gray to-background-gray-gradient
             + ${scrollPosition >= 100 ? 'opacity-1 duration-1000': 'opacity-0 top-[-100px]'}`}>
                <div className='w-[450px] flex justify-between items-center '>
                    <a href="" onClick={(e)=>scrollHandler(e, blockId.intro)}>MAIN</a>
                    <a href="" onClick={(e)=>scrollHandler(e, blockId.skills)}>SKILLS</a>
                    <a href="" onClick={(e)=>scrollHandler(e, blockId.myProjects)}>PORTFOLIO</a>
                    <a href="" onClick={(e)=>scrollHandler(e, blockId.catchME)}>CONTACT ME</a>
                </div>

            </div>
        </div>

    );
});

export const MNavigation = motion(Navigation);

export default Navigation;