import { Command } from 'cmdk';
import type { Case } from '../types';
import type { ComponentProps } from 'react';

interface CaseItemProps extends ComponentProps<typeof Command.Item> {
    testCase: Case
}

export function CaseItem(props: CaseItemProps) {
    const { testCase, ...itemProps } = props;
    const { id } = testCase

    return <Command.Item
        {...itemProps}
        value={id}
    >
        {/* display id */}
        <span className='text-sm font-medium'>
            {id}
        </span>
    </Command.Item>
}