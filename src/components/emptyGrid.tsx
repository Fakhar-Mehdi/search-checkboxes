import React from 'react'

const EmptyState = React.memo(() => (
    <div
        className='flex flex-col items-center justify-center py-12 px-4'
        role='status'
        aria-live='polite'
    >
        <div className='text-gray-600 text-xl mb-2'>🏏</div>
        <h3 className='text-2xl font-semibold text-gray-700 mb-1'>
            No Results Found
        </h3>
        <p className='text-gray-500 text-center max-w-md'>
            Try adjusting your search terms or filters to find what you're
            looking for.
        </p>
    </div>
))

EmptyState.displayName = 'EmptyState'

export default EmptyState