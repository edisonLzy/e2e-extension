import { Command } from 'cmdk';
import type { Group } from '../types';
import type { ComponentProps } from 'react';

interface GroupItemProps extends ComponentProps<typeof Command.Item> {
    group: Group
}

export function GroupItem(props: GroupItemProps) {

    const { group, ...itemProps } = props;
    const { name, todoCases, totalCases } = group

    const todoCount = todoCases.length;
    const totalCount = totalCases.length;

    return <Command.Item
        {...itemProps}
        value={name}
    >
        {/* display name */}
        <span className='text-sm font-medium'>
            {name}
        </span>
        {/* display todoCount / totalCount */}
        <span className='text-xs text-gray-400 ml-auto'>
            {todoCount} / {totalCount}
        </span>
    </Command.Item>
}