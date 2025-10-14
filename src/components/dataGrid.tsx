import React from 'react'
import EmptyState from './emptyGrid'
import CricketerCard from './cricketerCard'
interface DataGridProps {
    cricketersList: string[]
}

const DataGrid = React.memo(({ cricketersList }: DataGridProps) => {
    if (!cricketersList.length) {
        return <EmptyState />
    }

    return (
        <div
            className='mt-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5  2xl:grid-cols-6 gap-4 justify-items-center items-center p-1'
            role='list'
            aria-label={`${cricketersList.length} cricketers found`}
        >
            {cricketersList.map((cricketer) => (
                <CricketerCard key={cricketer} name={cricketer} />
            ))}
        </div>
    )
})

DataGrid.displayName = 'DataGrid'

export default DataGrid
