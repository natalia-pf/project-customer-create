import React from 'react';

const Icon = ({ icon, color, size }) => {
    return (
        <div
            class="material-icons"
            style={{ color: color, fontSize: size }}>
            {icon}
        </div>
    )
}

export default Icon