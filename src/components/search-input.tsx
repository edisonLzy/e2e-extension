import { Command } from 'cmdk'

export function SearchInput() {

    return <form
        className='flex-1 flex items-center'
        onSubmit={e => {
            e.preventDefault()
        }}
    >
        <label htmlFor="search-input" className='w-6 h-6 text-gray-400 mr-3 i-ic-sharp-search' />
        <Command.Input
            autoFocus
            className='flex-1 text-gray-800 placeholder-gray-400'
            id="search-input"
            placeholder="Find Test Case..." />
    </form>
}