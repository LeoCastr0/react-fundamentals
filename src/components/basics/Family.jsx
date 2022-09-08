import React, {cloneElement} from 'react';

export const Family = (props) => {
    return (
        <div>
            {props.children.map((child, index) => {
                return cloneElement(child, {...props, key: index})
            })}
        </div>
    )
}