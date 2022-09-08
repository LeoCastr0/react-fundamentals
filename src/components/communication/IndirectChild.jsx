import React from 'react';

export const IndirectChild = props => {
    const min = 10
    const max = 70
    const generateAge = () => {
        return parseInt(Math.random() * (max - min)) + min
    }
    return (
        <div>
            <div>
                Child
            </div>
            <button onClick={(e) => props.whenClicked('Leonardo', generateAge(), true)}>Provide information</button>
        </div>
    )
}