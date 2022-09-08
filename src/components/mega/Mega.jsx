import React, {useState} from 'react';
import './Mega.css'

export const Mega = props => {
    const [quantity, setQuantity] = useState(props.quantity)
    const [numbers, setNumbers] = useState('')

    function generateRandomNumberNotContained(max, min, array) {
        const random = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(random) ? generateRandomNumberNotContained(max, min, array) : random
    }

    function generateRandomNumber(quantity) {
        if(Number(quantity) <= 0) {
            return 'Invalid quantity!'
        }
        const result = Array(Number(quantity))
            .fill(0)
            .reduce((acc) => {
                const newNumber = generateRandomNumberNotContained(60, 1, acc)
                return [...acc, newNumber]
            }, [])
            .sort((a, b) => a - b)
        return result.join(' ')
    }
    const handleInputChange = (e) => {
        setQuantity(+e.target.value)
    }

    const handleButtonClick = (e) => {
        const newNumbers = generateRandomNumber(quantity)
        setNumbers(newNumbers)
    }

    return (
        <div>
            <h2>Mega Sena</h2>
            <div className="mega">
                <label htmlFor="quantity-input">Quantity: </label>
                <input
                    min="6"
                    max="15"
                    id="quantity-input"
                    type="number"
                    value={quantity}
                    onChange={handleInputChange}/>
            </div>
            <button onClick={handleButtonClick}>Generate</button>
            <p>The numbers are: {numbers}</p>
        </div>
    )
}
