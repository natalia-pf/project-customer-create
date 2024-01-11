
import React from 'react';
import Icon from './Icon';

const Button = ({
    label = 'PlaceHolder',
    widthValue = 220,
    onClick = () => { },
    icon
}) => {
    return <div
        className='button flex-justify-align-center'
        onClick={onClick}
        style={{ width: widthValue }}
    >
        {icon && <Icon color="#FFFFFF" icon={icon} />}
        {label}
    </div>
}

export default Button;