import React, { useEffect, useState } from 'react';
//import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { deletGituserAsync,listGituserAsync} from '../redux/actions/actionEdit';
import { LisitImg, Table22,TableInfo22, TableTd, TitleTable55 } from '../styled/StyledComponents';
import EditNew from './EditarNew';


const ListEdit = () => {
    const nombre= useSelector(state => state.login);


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
                            
                                <TableTd>{p.name}</TableTd>
                                <TableTd>{p.lastname}</TableTd>
                                <TableTd>{p.email}</TableTd>
                                <TableTd>{p.phone}</TableTd>
                                <TableTd>{p.gituser}</TableTd>
                                <TableTd>{p.idcard}</TableTd>
                                <TableTd>{p.date}</TableTd>
                                <TableTd><LisitImg src={p.foto} alt="" /></TableTd>
                                <TableTd>
                                    <br />
                                    <button type="button" className="btn btn-danger" onClick={() => dispatch(deletGituserAsync(p.idcard))}
                                    >Borrar</button>
                                    <br /><br />

                                    <button type="button" className="btn btn-success"
                                        onClick={() => editar(p)}
                                    >Editar</button><br /><br />

                                    <button type="button" className="btn btn-warning"
                                    >Detalle</button></TableTd><br />
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