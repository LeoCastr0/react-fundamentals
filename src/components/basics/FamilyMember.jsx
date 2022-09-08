import React from 'react';

export const FamilyMember = (props) => {
    return (
        <div>
            {props.name} <strong>{props.lastName}</strong>
        </div>
    )
}