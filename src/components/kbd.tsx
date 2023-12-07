import type { ComponentProps, ReactNode } from "react";

type KbdProps = ComponentProps<'kbd'> & {
    tip?: ReactNode
}

export function Kbd(props: KbdProps) {

    const { tip } = props

    return <>
        <kbd {...props} className={'px-1 py-0.5 font-thin border border-gray border-solid rounded text-gray-600'} />
        {/* render tip */}
        {tip && <span className='text-xs text-gray-400'>{tip}</span>}
    </>
}