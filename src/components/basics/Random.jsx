import React from 'react';

export const Random = ({min, max}) => {
    const getRandomValueBetweenTwoNumbers = (min, max) => {
        min = Math.ceil(min)
        max = Math.max(max)
        return Math.floor(Math.random() * (max - min) + min)
    }
    return (
        <>
            <p>Min value: {min}</p>
            <p>Max value: {max}</p>
            <p>This is a random value {getRandomValueBetweenTwoNumbers(min, max)}</p>
        </>
    )
}