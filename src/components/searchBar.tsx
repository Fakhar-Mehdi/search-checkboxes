import React from 'react'
import { debounce } from '../utils/helper'

interface SearchBarProps {
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({ handleSearch }: SearchBarProps) => {
    const debouncedHandleSearch = debounce(handleSearch, 500)

    return (
        <div className='col-span-full flex justify-center pt-8 fixed text-black sm:text-sm  md:text-2xl z-10 w-screen'>
            <input
                type='search'
                placeholder='Search'
                className='m-2 w-[70%] text-center rounded-[1rem] p-1 lg:p-2'
                onChange={debouncedHandleSearch}
            />
        </div>
    )
}

export default SearchBar
