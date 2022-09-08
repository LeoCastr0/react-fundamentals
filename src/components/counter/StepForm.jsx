import React from 'react';

export const StepForm = props => {
    return (
        <div>
            <label htmlFor="step-input">Step: </label>
            <input id="step-input" type="number" value={props.step} onChange={e => props.setStep(+e.target.value)}/>
        </div>
    )
}