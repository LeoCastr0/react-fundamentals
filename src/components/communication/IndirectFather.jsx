import React, {useState} from 'react';
import {IndirectChild} from './IndirectChild';

export const IndirectFather = props => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [geek, setGeek] = useState(false)

    function provideInformation(name, age, geek) {
        setName(name)
        setAge(age)
        setGeek(geek)
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age}</strong> </span>
                <span>{geek ? 'True' : 'False'}</span>
            </div>

            <IndirectChild whenClicked={provideInformation} />
        </div>
    )
}