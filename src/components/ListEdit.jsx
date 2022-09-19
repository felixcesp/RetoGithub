import React, { useEffect, useState } from 'react';
//import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { deletPlantaAsync, listPlantaAsync } from '../redux/actions/actionEdit';
import EditNew from './EditarNew';


const ListEdit = () => {
    const dispatch = useDispatch()
    //manejo el estado del modal activo o no
    const [modal, setModal] = useState(false);
    //manejar para enviar los datos
    const [datos, setDatos] = useState([]);

    const { plantas } = useSelector(store => store.newGitUser)
    console.log(plantas)

    useEffect(() => {
        dispatch(listPlantaAsync()); //
    }, [dispatch])

    const editar = (planta) => {
        setModal(true)
        setDatos(planta)
    }


    return (
        <div>
            <table className="table">
                <thead>
                </thead>
                <tbody>
                    {
                        plantas.map((p, index) => (
                            <tr key={index}>
                                <td width='15%'>
                               

                                </td>
                                <td>{p.nombre}</td>
                                <td>{p.precio}</td>
                                <td>
                                    <br />
                                    <button type="button" className="btn btn-danger" onClick={() => dispatch(deletPlantaAsync(p.codigo))}
                                    >Borrar</button>
                                    <br /><br />

                                    <button type="button" className="btn btn-success"
                                        onClick={() => editar(p)}
                                    >Editar</button><br /><br />

                                    <button type="button" className="btn btn-warning"
                                    >Detalle</button></td><br />
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            {
                modal === true ? <EditNew datos={datos} setModal={setModal} /> : ''
            }

        </div>
    );
};

export default ListEdit;