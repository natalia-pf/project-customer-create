import React, { useState } from 'react';
import axios from "axios";
import TextInput from './TextInput';
import Button from './Button';
import Modal from './Modal';

const NewCustomer = ({ onCreate }) => {
    const [showError, setShowError] = useState("")
    const [newCustomer, setNewCustomer] = useState({
        Name: "",
        Email: "",
        PhoneNumber: "",
        DocumentNumber: "",
        Address: "",
    })

    function createCustomer() {
        return axios.post(`${process.env.REACT_APP_BACKEND_URL}/customer/create`, { Payload: newCustomer })
            .then(onCreate)
            .catch((err) => {
                setShowError(err?.response?.data?.message)
            })
    }

    return (
        <div style={{ width: 450, margin: "10px 0" }} className='flex-justify-align-center direction-column'>
            {showError.length > 0 && <Modal
                title="Erro"
                onClose={() => setShowError("")}
                component={<div className='error'>{showError}</div>}
            />}
            <TextInput
                widthValue={350}
                label="Nome do Cliente"
                onChange={(e) => setNewCustomer({ ...newCustomer, Name: e.target.value })}
            />
            <TextInput
                widthValue={350}
                label="Email"
                onChange={(e) => setNewCustomer({ ...newCustomer, Email: e.target.value })}
            />
            <TextInput
                widthValue={350}
                label="Telefone"
                onChange={(e) => setNewCustomer({ ...newCustomer, PhoneNumber: e.target.value })}
            />
            <TextInput
                widthValue={350}
                label="CNPJ"
                onChange={(e) => setNewCustomer({ ...newCustomer, DocumentNumber: e.target.value })}
            />
            <TextInput
                widthValue={350}
                label="Endereço"
                onChange={(e) => setNewCustomer({ ...newCustomer, Address: e.target.value })}
            />

            <Button label="Cadastrar" onClick={() => createCustomer()} />
        </div>
    )
}

export default NewCustomer