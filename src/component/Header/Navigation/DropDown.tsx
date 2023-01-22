import React from 'react';
import MenuIcon from "../../../common/assets/icons/MenuIcon";
import {blockId} from "../../../App";
import scrollHandler from '../../../common/tools/scrollHandler';

type DropDownPropsType = {
    scrollCallback: (id:string)=>void
}

const DropDown: React.FC<DropDownPropsType> = ({scrollCallback}) => {


    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn bg-background-gray text-black rounded-full m-2 active:bg-background-gray hover:bg-background-gray">
                <MenuIcon/>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 bg-background-gray-gradient border-black rounded-box w-52">
                <li><a href="" onClick={(e)=>scrollHandler(e, blockId.intro, scrollCallback)} className='hover:bg-menu-hover-gray'>MAIN</a></li>
                <li><a href="" onClick={(e)=>scrollHandler(e, blockId.skills, scrollCallback)} className='hover:bg-menu-hover-gray'>SKILLS</a></li>
                <li><a href="" onClick={(e)=>scrollHandler(e, blockId.myProjects, scrollCallback)} className='hover:bg-menu-hover-gray'>PORTFOLIO</a></li>
                <li><a href="" onClick={(e)=>scrollHandler(e, blockId.catchME, scrollCallback)} className='hover:bg-menu-hover-gray'>CONTACT ME</a></li>
            </ul>
        </div>
    );
};

export default DropDown;