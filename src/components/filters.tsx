import React, { FormEvent } from 'react'

interface FiltersProps {
    checkboxList: string[]
    handleCheckbox: (e: FormEvent<HTMLInputElement>) => void
}

const Filters = ({ checkboxList, handleCheckbox }: FiltersProps) => {
    return (
        <div className='flex justify-center items-center gap-4 mb-5 mt-[85px] md:mt-28 lg:mt-32'>
            {checkboxList.map((checkbox: string) => (
                <div key={checkbox}>
                    <label
                        htmlFor={checkbox}
                        className='sm:text-sm md:text-xl lg:text-2xl'
                    >
                        <input
                            type='checkbox'
                            onChange={handleCheckbox}
                            value={checkbox}
                            className='mr-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5'
                            id={checkbox}
                        />
                        {checkbox.charAt(0).toUpperCase() + checkbox.slice(1)}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default Filters
