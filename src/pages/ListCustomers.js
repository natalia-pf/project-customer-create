import axios from "axios";
import React, { useEffect, useState } from 'react';
import Icon from '../components/Icon';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Table from '../components/Table';
import enviroment from "./../enviroment.json";

const ListCostumers = ({ }) => {
    const [list, setList] = useState([]);

    useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/customer/read`).then(res => setList(res.data))
    }, []);

    const columns = [
        {
            Label: "Nome do Cliente",
            Property: "Name"
        },
        {
            Label: "Email",
            Property: "Email"
        },
        {
            Label: "Telefone",
            Property: "PhoneNumber"
        },
        {
            Label: "CNPJ",
            Property: "DocumentNumber"
        },
        {
            Label: "Endereço",
            Property: "Address"
        },
    ];

    return (
        <div className='body flex direction-column align-center'>
            <header className='header flex align-center direction-row'>
                <span style={{ marginLeft: 20 }}>Goalfy</span>
                <div className='divisor-y' />
                <Icon icon="open_in_new" color="#7F23F7" />
                <span style={{ fontWeight: 500 }}>Registro de Clientes</span>
            </header>

            <div className='divisor-x' />
            <div className='list-customers flex align-center'>
                <Button onClick={() => console.log(1)} label="Novo Registro" icon="add_circle" />
                <TextInput label="Novo Registro" icon="search" hideLabel />
            </div>
                <Table columns={columns} list={list} />
        </div>
    )
}

export default ListCostumers