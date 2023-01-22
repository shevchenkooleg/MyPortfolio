import React, {ButtonHTMLAttributes, DetailedHTMLProps, forwardRef} from 'react';
import scrollHandler from "../tools/scrollHandler";
import {blockId} from "../../App";
import {motion} from "framer-motion";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type UniversalButtonPropsType = DefaultButtonPropsType & {
    title: string
    scrollCallback: (id: string) => void
    ref: any
}

const UniversalButton: React.FC<UniversalButtonPropsType> = forwardRef(({title, scrollCallback}, ref: any) => {

    return (
            <button ref={ref}
                className="btn btn-outline bg-background-gray text-black hover:bg-background-gray hover:border-black active:bg-background-gray-gradient ml-[30px]"
                onClick={(e) => scrollHandler(e, blockId.feedbackForm, scrollCallback)}
            >{title}</button>
    );
});

export const MUniversalButton = motion(UniversalButton)