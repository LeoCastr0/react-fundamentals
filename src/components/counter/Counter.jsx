import React from 'react';
import "./Counter.css"
import {Display} from './Display.jsx'
import {Buttons} from "./Buttons.jsx";
import {StepForm} from "./StepForm.jsx";

class Counter extends React.Component {

    state = {
        number: this.props.initialNumber || 0,
        step: this.props.initialStep || 0
    }


    inc = () => {
        this.setState({
            number: this.state.number + this.state.step
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        })
    }

    setStep = (newStep) => {
        this.setState({
            step: Number(newStep)
        })
    }

    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <Display number={this.state.number} />
                <StepForm value={this.state.step} setStep={this.setStep} />
                <Buttons setInc={this.inc} setDec={this.dec}/>
            </div>
        )
    }
}

export default Counter;