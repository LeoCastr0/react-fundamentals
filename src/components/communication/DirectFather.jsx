import React from 'react';
import {DirectChild} from './DirectChild';

export const DirectFather = props => {
    return (
        <div>
            <DirectChild name="Junior" age={20} isGeek={true}></DirectChild>
            <DirectChild name="Gabriel" age={17} isGeek={false}></DirectChild>
        </div>
    )
}