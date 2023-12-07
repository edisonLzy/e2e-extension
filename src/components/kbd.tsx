import { ComponentProps } from "react";
import cls from 'classnames';

type KbdProps = ComponentProps<'kbd'>

export function Kbd(props: KbdProps){
    return <kbd {...props} className={cls(props.className,'px-1.5 py-1 cursor-pointer rounded-md shadow-sm border-slate-300 border border-solid text-gray-800 text-xs')}/>
}