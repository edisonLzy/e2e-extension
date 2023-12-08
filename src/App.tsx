import { useState, KeyboardEvent } from 'react';
import { Command } from 'cmdk'
import { Kbd } from './components/kbd';
import { useOpen } from './hooks/useOpen';
import { useTestGroups } from './hooks/useTestGroups'
import { GroupItem } from './components/group-item';
import { CaseItem } from './components/case-item';
import type { Group } from './types';
import './App.css';

export default function App() {

  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [inputValue, setInputValue] = useState('')

  const [open, { toggle }] = useOpen();
  const [groups, { openInEditor }] = useTestGroups();

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && e.currentTarget.value === '') {
      e.stopPropagation()
      e.preventDefault()
      setSelectedGroup(null);
    }
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={toggle}
      loop
    >
      <header className='flex items-center divider-bottom  px-4 h-[56px]'>
        <label htmlFor="search-input" className='w-6 h-6 text-gray-400 mr-3 i-ic-sharp-search' />
        <Command.Input
          autoFocus
          className='flex-1 text-gray-800 placeholder-gray-400'
          id="search-input"
          placeholder="Find Test Case..."
          value={inputValue}
          onValueChange={setInputValue}
          onKeyDown={handleInputKeyDown}
        />
      </header>

      <main className='px-4 py-2'>
        <Command.List >
          
          {
            selectedGroup ?
              <Command.Group heading='TODO Cases'>
                {selectedGroup.todoCases.map(testCase =>
                  <CaseItem
                    key={testCase.id}
                    testCase={testCase}
                    onSelect={() => openInEditor(testCase)}
                  />)}
              </Command.Group> :
              <Command.Group heading="Groups">
                {groups.map(group =>
                  <GroupItem
                    onSelect={() => {
                      setInputValue('');
                      setSelectedGroup(group);
                    }}
                    key={group.name} group={group}></GroupItem>)}
              </Command.Group>
          }
          <Command.Empty> No results found. </Command.Empty>
        </Command.List>
      </main>

      <footer className='flex flex-wrap gap-1 items-center py-2.5 px-4 text-xs divider-top'>
        <Kbd tip='to select'> Enter </Kbd>
        <Kbd> ⬆ </Kbd>
        <Kbd tip='to navigate'> ⬇ </Kbd>
        <Kbd tip='to close'> ESC </Kbd>
      </footer>

    </Command.Dialog>
  )
}

