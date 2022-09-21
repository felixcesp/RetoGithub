import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import { useDispatch } from 'react-redux';

import useForm from '../hooks/useForm';

import { editGituserAsync} from '../redux/actions/actionEdit';

const EditNew = ({datos, setModal}) => {
   

    const dispatch = useDispatch()
//--------------Manejo del Modal--------------------//
//para el activar el modal
    const [show, setShow] = useState(true);

    //viene de react-boostrap y es para cerrar
    const handleClose = () => setShow(false);
   

//-------------------Manejo del formulario para editar---------------------------//
const [formValue, handleInputChange ]= useForm({
    name: datos.name,
    lastname: datos.lastname,
    email: datos.email,
    phone: datos.phone,
    gituser: datos.gituser,
    idcard: datos.idcard,
    date: datos.date,
    foto: datos.foto,


  
})

const {name, lastname, email, phone, gituser, idcard, date, foto}=formValue

const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(formValue)
    dispatch(editGituserAsync(idcard, formValue))
    handleClose()
   
}

    return (
        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Planta</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={handleSubmit} margin={50}>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name user</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Edit name" value={name} onChange={handleInputChange} />

                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" name="lastname" placeholder="Edit lastname" value={lastname} onChange={handleInputChange} />

                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Edit email" value={email} onChange={handleInputChange} />

                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" name="phone" placeholder="edit your phone" value={phone} onChange={handleInputChange} />

                    <Form.Label>Gituser</Form.Label>
                    <Form.Control  type="text" name="gituser" placeholder="no editable" value={gituser} onChange={handleInputChange} />

                    <Form.Label>identification number</Form.Label>
                    <Form.Control type="text" name="precio" placeholder="no editable" value={idcard} onChange={handleInputChange} />
                    
                    <Form.Label>Birthday date</Form.Label>
                    <Form.Control type="date" name="date" placeholder="edit date" value={date} onChange={handleInputChange} />
                    
                    <Form.Label>foto</Form.Label>
                    <Form.Control type="image" name="foto" placeholder="no editable" value={foto} onChange={handleInputChange} />
                    
                



                </Form.Group>

                <Button type="submit" >
                 Editar
                </Button>
             
            </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                     
                    </Modal.Footer>
                </Modal>
            </>




        </div>
    );
};

export default EditNew;