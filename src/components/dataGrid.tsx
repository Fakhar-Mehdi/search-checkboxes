import React from 'react'

interface DataGridProps {
    cricketersList: string[]
}

const EmptyState = React.memo(() => (
    <div 
        className='flex flex-col items-center justify-center py-12 px-4'
        role='status'
        aria-live='polite'
    >
        <div className='text-gray-600 text-xl mb-2'>🏏</div>
        <h3 className='text-2xl font-semibold text-gray-700 mb-1'>No Results Found</h3>
        <p className='text-gray-500 text-center max-w-md'>
            Try adjusting your search terms or filters to find what you're looking for.
        </p>
    </div>
))

EmptyState.displayName = 'EmptyState'

const CricketerCard = React.memo(({ name }: { name: string }) => (
    <div
        className='bg-gradient-to-br from-gray-800 to-black font-semibold p-6 m-2 rounded-lg shadow-lg shadow-gray-500/30 hover:shadow-2xl hover:shadow-gray-400/40 transition-all duration-300 h-32 w-64 flex justify-center items-center text-center transform hover:-translate-y-1'
        role='listitem'
        tabIndex={0}
    >
        <span className='text-lg leading-tight'>{name}</span>
    </div>
))

CricketerCard.displayName = 'CricketerCard'

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
