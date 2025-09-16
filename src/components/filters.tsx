import React, { FormEvent } from 'react'

interface FiltersProps {
    checkboxList: string[]
    handleCheckbox: (e: FormEvent<HTMLInputElement>) => void
}

const Filters = ({ checkboxList, handleCheckbox }: FiltersProps) => {
    return (
        <div className='flex justify-center items-center m-10' key='dfgdg'>
            {checkboxList.map((checkbox: string) => (
                <React.Fragment key={checkbox}>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        value={checkbox}
                    />
                    <label htmlFor={checkbox} className='m-2 mr-5 ml-1'>
                        {checkbox}
                    </label>
                </React.Fragment>
            ))}
        </div>
    )
}

export default Filters