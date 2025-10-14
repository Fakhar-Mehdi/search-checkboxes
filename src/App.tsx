import './App.css'
import { cricketers } from './data/cricketers'
import SearchBar from './components/searchBar'
import Filters from './components/filters'
import DataGrid from './components/dataGrid'
import useSearchCricketers from './hooks/useSearchCricketers'

function App() {

	
	const { handleSearch, checkboxList, handleCheckbox, cricketersList } = useSearchCricketers(cricketers)

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
