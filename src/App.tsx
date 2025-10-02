import React, { useState } from 'react'
import './App.css'
import { cricketers } from './data/cricketers'
import SearchBar from './components/searchBar'
import Filters from './components/filters'
import DataGrid from './components/dataGrid'

function App() {
    const [cricketersList, setCricketersList] = useState(cricketers)
    const [checkboxList, setCheckboxList] = useState(['all'])
    const [currentSearch, setCurrentSearch] = useState('')
    const [searchList, setSearchList] = useState<string[]>([])

    const filterCricketers = (
        searchBarValue: string,
        searchItems: string[]
    ) => {
        if (searchItems.includes('all')) return cricketers

        let newCricketersList = cricketers.filter((c) =>
            c.toLowerCase().includes(searchBarValue.toLowerCase())
        )

        for (let searchItem of searchItems) {
            newCricketersList = newCricketersList.filter((item) =>
                item.toLowerCase().includes(searchItem.toLowerCase())
            )
        }

        return newCricketersList
    }

	

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '' && currentSearch !== '') {
            if (checkboxList.includes(currentSearch)) return
            let newCheckboxList = [...checkboxList, currentSearch]
            if (newCheckboxList.length === 11)
                newCheckboxList = newCheckboxList.filter((_, idx) => idx !== 1)

            setCheckboxList(newCheckboxList)
        }

        const newCricketersList = filterCricketers(e.target.value, searchList)
        setCricketersList(newCricketersList)
        setCurrentSearch(e.target.value)
				}
	

    const handleCheckbox = (e: React.FormEvent<HTMLInputElement>) => {
        let newSearchList = []
        const { checked, value } = e.currentTarget

        if (checked) newSearchList = [...searchList, value]
        else newSearchList = searchList.filter((item) => item !== value)

        const newCricketersList = filterCricketers(currentSearch, newSearchList)
        setCricketersList(newCricketersList)
        setSearchList(newSearchList)
    }

    return (
        <div className='App bg-[#282c30] h-screen overflow-y-auto text-white'>
            <SearchBar handleSearch={handleSearch} />
            <Filters
                checkboxList={checkboxList}
                handleCheckbox={handleCheckbox}
            />
            <div className='sm:text-xl md:text-2xl lg:text-3xl font-bold sm:p-0 md:pb-2'>
                Total Cricketers: {cricketersList.length}
            </div>

            <DataGrid cricketersList={cricketersList} />
        </div>
    )
}

export default App
