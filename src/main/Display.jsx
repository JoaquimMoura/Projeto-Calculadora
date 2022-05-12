import { Component } from 'react';
import './Display.css'

const Display = (prosps) => {

    return (
        <div className='display'>{prosps.value}</div>
    );
}


export default Display;