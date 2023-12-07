import { Command } from 'cmdk'
import { SearchInput } from './components/search-input';
import { EscButton } from './components/esc-button';
import { useOpen } from './hooks/useOpen';
import './App.css';

export default function App() {

  const [open, { toggle, close }] = useOpen();

  return (
    <Command.Dialog
      open={open}
      onOpenChange={toggle}
    >

      <header className='flex divider-bottom items-center px-4 h-[56px]'>
        <SearchInput />
        <EscButton className='ml-4' onClick={close} />
      </header>

      <main className='px-4'>
        <Command.Empty> No results found. </Command.Empty>
        <Command.List>
          <Command.Item value="Button">
            Button
          </Command.Item>
          <Command.Item value="Input">
            Input
          </Command.Item>
          <Command.Item value="Radio">
            Radio
          </Command.Item>
        </Command.List>
      </main>

      <footer className='px-4'>
         asdasd
      </footer>

    </Command.Dialog>
  )
}

