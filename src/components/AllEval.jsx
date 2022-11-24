import React, { useEffect} from 'react';


//import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { evalGituserAsync,listGituserAsync} from '../redux/actions/actionEdit';
import { LisitImg, Table22,TableInfo72,TableTd22,TableTd223,TitleMainTh,TitleMainTr,TitleTable57, TitleTable87 } from '../styled/StyledComponents';
import NavBarUser from '../components/home/NavbarUser'
//import { useNavigate } from 'react-router-dom';
import { keepNameAsyncEval, listEvaluatorAsync } from '../redux/actions/actionLogPhone';
import PiePage from './home/PiePage';




const AllEval = () => {
    const nombre= useSelector(state => state.keepName);
    //console.log(nombre)
  

    const dispatch = useDispatch()
   // const navigation =useNavigate();

    const showEvaluators= useSelector(state => state.allEvaluators.seeAll)
 
    //para accionar las acciones ya que no resiven parametros y para algunas veces retear el anterio dato
    useEffect(() => {
        dispatch(listGituserAsync()); 
        dispatch(listEvaluatorAsync())
        dispatch(evalGituserAsync())
        dispatch(keepNameAsyncEval())
    }, [dispatch])
    return (
        <>
       
        <TableInfo72>
        <NavBarUser/>
            <>
              <TitleTable87>
{nombre.keepName} these are all the evaluators who are registered</TitleTable87>
            </>
            <Table22>
                <thead>
                <TitleMainTr>
        <TitleMainTh>Name and last name</TitleMainTh>
        <TitleMainTh>Email</TitleMainTh>
        <TitleMainTh>Age</TitleMainTh>
        <TitleMainTh>Phone</TitleMainTh>
        <TitleMainTh>Photo</TitleMainTh>
        <TitleMainTh>Stadist</TitleMainTh>
      </TitleMainTr>
                </thead>
                <tbody>
                    {
                        showEvaluators?.map((eva, idx) => (
                            <tr key={idx}>
                            
                                <TableTd22>{eva?.nombre}</TableTd22>
                                <TableTd22>{eva?.email}</TableTd22>
                                <TableTd22>{eva?.pass}</TableTd22>
                                <TableTd22>{eva?.phone}</TableTd22>
                                <TableTd223><LisitImg src={eva?.foto} alt="" /></TableTd223>
                                <TableTd22>{eva?.phone}</TableTd22>
                             
                               

                            </tr>
                        ))
                    }

                </tbody>
            </Table22>


        </TableInfo72>
        <PiePage/>
        </>
    );
};

export default AllEval;