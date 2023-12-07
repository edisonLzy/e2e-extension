import { useState } from 'react';
import { Command } from 'cmdk'
import { SearchInput } from './components/search-input';
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

  return (
    <Command.Dialog
      open={open}
      onOpenChange={toggle}
      loop
    >

      <header className='flex divider-bottom items-center px-4 h-[56px]'>
        <SearchInput
          value={inputValue}
          onChange={setInputValue}
          onBackspace={() => {
            setSelectedGroup(null)
          }}
        />
      </header>

      <main className='px-4 py-2'>
        <Command.Empty> No results found. </Command.Empty>
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

