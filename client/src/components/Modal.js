import React from 'react';
import Icon from './Icon';

const Modal = ({ component, title = "title", onClose }) => {
    if (component) {
        return (
            <div className="modal-background flex-justify-align-center">
                <div className="modal-container">
                    <div className="modal-header flex justify-between align-center">
                        <span
                            className='modal-header-title flex-justify-align-center'
                        >
                            <Icon style={{ margin: 10 }} icon="open_in_new" color="#7F23F7" />
                            {title}
                        </span>
                        
                        <Icon 
                        style={{
                            margin: 20,
                            cursor: "pointer"
                        }}
                            icon="close"
                            onClick={() => onClose()}
                        />
                    </div>

                    <div className="divisor-x" />
                    {component}
                </div>
            </div>
        )
    }
}

export default Modal