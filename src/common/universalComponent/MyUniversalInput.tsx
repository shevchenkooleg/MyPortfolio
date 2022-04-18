import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react';
import s from './MyUniversalInput.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type MyUniversalInputPropsType = DefaultInputPropsType & {
    value: string
    callback: (e: ChangeEvent<HTMLInputElement>) => void
    onEnter?: () => void
    red?: boolean
    placeholder?: string
    edit?: ()=>void
    className?: string
}

export const MyUniversalInput = (props: MyUniversalInputPropsType) => {

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        props.onKeyPress && props.onKeyPress(e);
        props.onEnter && e.key === 'Enter' && props.onEnter()
    }

    const resultInputClassName = () => {
        return (props.red ? s.error : (props.className ? props.className : ''))
    }

    return (
        <input autoFocus={props.edit?true:false} placeholder={props.placeholder} className={resultInputClassName()}
               value={props.value} onChange={props.callback} onKeyPress={onKeyPressCallback} onBlur={props.edit}/>
    );
};