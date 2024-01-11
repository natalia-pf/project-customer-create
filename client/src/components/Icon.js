import React from 'react';

const Icon = ({ icon, color, size, style, onClick }) => {
    return (
        <div
            class="material-icons"
            onClick={onClick}
            style={{ color: color, fontSize: size, cursor: onClick ? "pointer" : "auto", ...style }}>
            {icon}
        </div>
    )
}

export default Icon