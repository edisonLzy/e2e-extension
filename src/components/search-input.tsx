import { Command } from 'cmdk'

interface SearchInputProps {
    onBackspace: () => void
    value: string
    onChange: (value: string) => void
}

export function SearchInput(props: SearchInputProps) {

    const { onBackspace,value,onChange } = props;

    return <div className='flex-1 flex items-center'>
        <label htmlFor="search-input" className='w-6 h-6 text-gray-400 mr-3 i-ic-sharp-search' />
        <Command.Input
            autoFocus
            className='flex-1 text-gray-800 placeholder-gray-400'
            id="search-input"
            placeholder="Find Test Case..."
            value={value}
            onValueChange={onChange}
            onKeyDown={
                // handle backspace
                (e) => {
                    if (e.key === 'Backspace' && e.currentTarget.value === '') {
                        e.stopPropagation()
                        e.preventDefault()
                        onBackspace()
                    }
                }
            }
        />
    </div>
}