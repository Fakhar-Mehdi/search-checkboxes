interface SearchBarProps {
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({ handleSearch }: SearchBarProps) => {
    return (
        <div className='w-full col-span-full flex justify-center'>
            <input
                type='search'
                placeholder='Search'
                className='block w-full max-w-md p-4 m-2 rounded'
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar