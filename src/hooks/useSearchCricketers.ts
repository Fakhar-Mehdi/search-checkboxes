import React, { useCallback, useState } from 'react'
import { debounce } from '../utils/helper'
import { DEBOUNCE_DELAY, MAX_TAGS } from '../constants'

const useSearchCricketers = (cricketers: string[]) => {
    const [cricketersList, setCricketersList] = useState(cricketers)
    const [checkboxList, setCheckboxList] = useState(['all'])
    const [currentSearch, setCurrentSearch] = useState('')
    const [searchList, setSearchList] = useState<string[]>([])

    const filterCricketers = useCallback(
        (searchBarValue: string, searchItems: string[]) => {
            if (searchItems.includes('all')) return cricketers

            const newSearchItems = [...searchItems]
            if (searchBarValue) newSearchItems.push(searchBarValue)
            if (!newSearchItems.length) return cricketers

            let newCricketersList: string[] = cricketers.filter((c) =>
                newSearchItems.every((i) =>
                    c.toLowerCase().includes(i.toLowerCase())
                )
            )

            return newCricketersList
        },
        [cricketers]
    )

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value === '' && currentSearch !== '') {
                if (checkboxList.includes(currentSearch)) return

                let newCheckboxList = [...checkboxList, currentSearch]
                if (newCheckboxList.length >= MAX_TAGS)
                    newCheckboxList = newCheckboxList.filter(
                        (_, idx) => idx !== 1
                    )

                setCheckboxList(newCheckboxList)
            }

            const newCricketersList = filterCricketers(
                e.target.value,
                searchList
            )
            setCricketersList(newCricketersList)
            setCurrentSearch(e.target.value)
        },
        [currentSearch, checkboxList, searchList, filterCricketers]
    )

    const handleCheckbox = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            let newSearchList = []
            const { checked, value } = e.currentTarget

            if (checked) newSearchList = [...searchList, value]
            else newSearchList = searchList.filter((item) => item !== value)
            const newCricketersList = filterCricketers(
                currentSearch,
                newSearchList
            )
            setCricketersList(newCricketersList)
            setSearchList(newSearchList)
        },
        [currentSearch, searchList, filterCricketers]
    )

    return {
        handleSearch: debounce(handleSearch, DEBOUNCE_DELAY),
        checkboxList,
        handleCheckbox,
        cricketersList,
    }
}

export default useSearchCricketers
