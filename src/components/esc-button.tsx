import { ComponentProps } from "react";
import cls from 'classnames';

type EscButtonProps = ComponentProps<'kbd'>

export function EscButton(props: EscButtonProps){
    return <kbd {...props} className={cls(props.className,'px-1.5 py-1 cursor-pointer rounded-md shadow-sm border-slate-300 border border-solid text-gray-800 text-xs')}>
         ESC
    </kbd>
}