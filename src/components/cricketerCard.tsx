import React from 'react'

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

export default CricketerCard