import React from 'react';
import Icon from './Icon';

const TextInput = ({
    label = 'Campo de Texto',
    widthValue = 210,
    placeHolder = "Digite aqui...",
    onChange = () => { },
    type = 'text',
    icon = "edit",
    hideLabel = false,
}) => {
    return <div className='text-input flex direction-column'>
        {!hideLabel && <span>{label}</span>}
        <div
            className='input-text-main flex-justify-align-center'
            style={{ width: widthValue }}
        >
            <Icon color={"#949FA6"} icon={icon} />
            <input
                type={type}
                placeholder={placeHolder}
                onChange={(res) => onChange(res)}
                className='input-default'
            />
        </div>
    </div>
}

export default TextInput;