import React, { useEffect, useState } from 'react';
import { BsWindowSidebar } from 'react-icons/bs';
//import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletGituserAsync,listGituserAsync} from '../redux/actions/actionEdit';
import { CrudBoton, CrudBoton1, CrudBoton2, LisitImg, Table22,TableInfo22, TableTd22,TableTd223, TitleTable55 } from '../styled/StyledComponents';
import EditNew from './EditarNew';


const ListEdit = () => {
    const nombre= useSelector(state => state.login);
    const navigation = useNavigate;
  


    const dispatch = useDispatch()
    //manejo el estado del modal activo o no
    const [modal, setModal] = useState(false);
    //manejar para enviar los datos
    const [datos, setDatos] = useState([]);

    const { showUsers } = useSelector(store => store.newGitUser)
    console.log(showUsers)

    useEffect(() => {
        dispatch(listGituserAsync()); //
    }, [dispatch])

    const editar = (gitdata) => {
        setModal(true)
        setDatos(gitdata) 
        
       
    }


    return (
        <>
        <TableInfo22>
            <>
              <TitleTable55>Bienvenido   {nombre.nombre} </TitleTable55>
            </>
            <Table22>
                <thead>
                <tr>
        <th>Name</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Github user</th>
        <th>Id card</th>
        <th>Birthdate</th>
        <th>Photo</th>
      </tr>
                </thead>
                <tbody>
                    {
                        showUsers.map((p, index) => (
                            <tr key={index}>
                            
                                <TableTd22>{p.name}</TableTd22>
                                <TableTd22>{p.lastname}</TableTd22>
                                <TableTd22>{p.email}</TableTd22>
                                <TableTd22>{p.phone}</TableTd22>
                                <TableTd22>{p.gituser}</TableTd22>
                                <TableTd22>{p.idcard}</TableTd22>
                                <TableTd22>{p.date}</TableTd22>
                                <TableTd223><LisitImg src={p.foto} alt="" /></TableTd223>
                                <TableTd223>
                                    <br />
                                    <CrudBoton type="button" onClick={() => dispatch(deletGituserAsync(p.idcard))}
                                    >Borrar</CrudBoton>
                                    <br /><br />

                                    <CrudBoton1 type="button"
                                        onClick={() => editar(p)}
                                    >Editar</CrudBoton1><br /><br />

                                    <CrudBoton2 type="button"
                                    >Detalle</CrudBoton2></TableTd223><br />
                            </tr>
                        ))
                    }

                </tbody>
            </Table22>





            {
                modal === true ? <EditNew datos={datos} setModal={setModal} /> : ''
            }

        </TableInfo22>
        </>
    );
};

export default ListEdit;