import React, { useState } from 'react'
const MAX_TAGS = 10

const useSearchCricketers = (cricketers: string[]) => {
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
            if (newCheckboxList.length >= MAX_TAGS)
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
	
	return {
        handleSearch,
		checkboxList,
		handleCheckbox, 
								cricketersList
    }
}

export default useSearchCricketers
