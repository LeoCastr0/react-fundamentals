import React from 'react';

export const DirectChild = props => {
    return (
        <div>
            <span>{props.name} </span>
            <span><strong>{props.age} </strong></span>
            <span>{props.isGeek ? "true" : "false" }</span>
        </div>
    )
}