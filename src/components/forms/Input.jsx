import React, {useState} from 'react';
import './Input.css'

export const Input = props => {
    const [value, setValue] = useState('initial');

    function whenChanged(e) {
        setValue(e.target.value);
    }

    return (
        <div className="Input">
            <h2>{value}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <label htmlFor="controlled" id="controlled-label">Controlled</label>
                <input id="controlled" value={value} onChange={whenChanged} />
                <label htmlFor="readOnly" id="ready-only-label">Read Only</label>
                <input id="readOnly" value={value} readOnly />
                <label htmlFor="uncontrolled" id="uncontrolled-label">Uncontrolled</label>
                <input id="uncontrolled" value={undefined} />
            </div>

        </div>
    );
}