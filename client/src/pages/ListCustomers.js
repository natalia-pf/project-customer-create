import React, { useEffect, useState } from 'react';
import axios from "axios";
import Icon from '../components/Icon';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Table from '../components/Table';
import NewCustomer from "../components/NewCustomer";
import Modal from "../components/Modal";

const ListCostumers = ({ }) => {
    const [showCreateCustomerModal, setShowCreateCustomerModal] = useState(false);
    const [showList, setShowList] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        listCustomers()
    }, []);

    function listCustomers() {
        setShowList([])
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/customer/read`).then(res => setList(res.data || []))
    }

    function deleteCustomer(id) {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/customer/delete`, { data: { _id: id } }).then(res => listCustomers())
    }

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
        {
            Label: "Deletar",
            CellStyle: { textAlign: "center" },
            ExecFunction: (item) => <Icon icon="delete" onClick={() => deleteCustomer(item._id)} />
        },
    ];

    return (
        <div className='body flex direction-column align-center'>
            {showCreateCustomerModal && <Modal
                title="Novo Cliente"
                onClose={() => setShowCreateCustomerModal(false)}
                component={
                    <NewCustomer
                        onCreate={() => {
                            setShowCreateCustomerModal(false);
                            listCustomers()
                        }}
                    />
                }
            />}

            <header className='header flex align-center direction-row'>
                <span style={{ marginLeft: 20 }}>Goalfy</span>
                <div className='divisor-y' />
                <Icon icon="open_in_new" color="#7F23F7" />
                <span style={{ fontWeight: 500 }}>Registro de Clientes</span>
            </header>

            <div className='divisor-x' />
            <div className='list-customers flex align-center'>
                <Button onClick={() => setShowCreateCustomerModal(true)} label="Novo Registro" icon="add_circle" />
                <TextInput label="Novo Registro" icon="search" hideLabel onChange={(e) => {
                    setShowList(list.filter(item => item.Name.includes(e.target.value)))
                }} />
            </div>
            <Table columns={columns} list={showList.length ? showList : list} />

        </div>
    )
}

export default ListCostumers