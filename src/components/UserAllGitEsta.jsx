import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletGituserAsync, listGituserAsync } from "../redux/actions/actionEdit";
import { keepNameAsyncEval } from "../redux/actions/actionLogPhone";
import { actionRepoSync } from "../redux/actions/actionRepo";
import { ImgTables, ImgTables2, LisitImg, Table22, TableInfo22, TableT25, TableTd22, TableTd223, TableThn, TitleTable55 } from "../styled/StyledComponents";
import EditNew from "./EditarNew";

export default function UserAllGitEsta() {

    const nombre= useSelector(state => state.keepName);
    const dispatch = useDispatch()
    //manejo el estado del modal activo o no
    const [modal, setModal] = useState(false);
    //manejar para enviar los datos
    const [datos, setDatos] = useState([]);
    const navigation =useNavigate();
    const  showUsers  = useSelector(store => store.listaUsers.listUsers)

    useEffect(() => {
        dispatch(listGituserAsync()); 
        dispatch(keepNameAsyncEval());
    }, [dispatch])


    const editar = (gitdata) => {
        setModal(true)
        setDatos(gitdata) 
    }
    const getRepos=(gitUser )=>{
        dispatch(actionRepoSync(gitUser))
        navigation('/repos')   
      }
     
      const aluser=(gitUser )=>{
      //  dispatch(actionRepoSync(gitUser))
        navigation('/editar')   
      }
     

  return (
    <div>
      <TableInfo22>
        <>
          <TitleTable55>
            Evaluator {nombre.keepName} these all the register users
          </TitleTable55>
        </>
        <Table22>
          <thead>
            <tr>
              <th>GituserName</th>
              <th>Revition state</th>
              <th>Evaluator Name</th>
              <th>Global Stadestics</th>
              <th>Individual stadistic</th>
              <th>Repos number</th>
           
            </tr>
          </thead>
          <tbody>
            {showUsers?.map((p, index) => (
              <tr key={index}>
                <TableTd22>{p?.name}</TableTd22>
                <TableTd22>{p?.lastname}</TableTd22>
                <TableTd22>{p?.eval}</TableTd22>
                <TableTd22>{p?.phone}</TableTd22>
                <TableT25
                  onClick={() => {getRepos(p?.gituser); }}>{p?.gituser}
                </TableT25>
                <TableTd22  onClick={() => {aluser(); }}>{p?.idcard}</TableTd22>
                <TableTd22>{p?.date}</TableTd22>
                <TableTd223>
                  <LisitImg src={p.foto} alt="" />
                </TableTd223>

                <TableThn>
                  <ImgTables onClick={() => editar(p)}>
                    <AiOutlineEdit />
                  </ImgTables>
                  <br />
                  <ImgTables2
                    onClick={() => dispatch(deletGituserAsync(p.idcard))}
                  >
                    <BsFillTrashFill />
                  </ImgTables2>
                </TableThn>
              </tr>
            ))}
          </tbody>
        </Table22>

        {modal === true ? <EditNew datos={datos} setModal={setModal} /> : ""}
      </TableInfo22>
    </div>
  );
}
