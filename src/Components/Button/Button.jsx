import {useState, useEffect} from 'react';

import './style.scss';

const Button = ({
    color,
    isActive,
    value,
    click
}) => {

    return (
        <div>
            <button
                onClick={(e) => click(e)}
                value={value}
                className="colorButton" 
                style={{background: color}} 
                disabled={isActive}></button>
        </div>
        
    );
}
 
export default Button;