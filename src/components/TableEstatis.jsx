import React from "react";
import {
  BotonTorta,

  TableTorta,

  TitleTorta,
  TitleTorta1,
  Torta1,
  Torta2,
  Torta3,
  Torta4,
  Torta5,
  Torta6,
  Torta7,
  TortaName3,
  TortaName5,
  TortaNames,
  TotaImg1,
} from "../styled/StyledComponents";

import PiePage from "../components/home/PiePage";
import NavBarEsta from "./home/NavBarEsta";

import { Doughnut, Pie } from "react-chartjs-2";





const TableEstatis = () => {
 

  

      
  
    
  


  return (
    <>
      <TableTorta>
        <NavBarEsta />
        <>
          <TitleTorta>Evaluator {} Check all stadististic</TitleTorta>
        </>
        <Torta1>

            
            <Torta2>
            <TitleTorta1>ACTIONS</TitleTorta1>
            <BotonTorta><TortaNames>User Data</TortaNames></BotonTorta>
            <BotonTorta><TortaNames>Check State</TortaNames></BotonTorta>
            <BotonTorta><TortaNames>Repositories</TortaNames></BotonTorta>
            <BotonTorta><TortaNames>check times</TortaNames></BotonTorta>
            </Torta2>
          
        
            <Torta3>
               <TortaName3>Felix Cespedes Valencia</TortaName3>
            </Torta3>

         
            <Torta4>
    
      

            </Torta4>






            <Torta5>
            <TortaName3> ESTADO: COMPLETED</TortaName3> 
            </Torta5>

            <Torta6>
              <TotaImg1 src="https://res.cloudinary.com/felixces/image/upload/v1668890749/Retogithub/logo_retocar_copia_oibp2j.png" alt="" />
            </Torta6>


            <Torta7>
            <TortaName5><strong>Eval name :</strong> Felix Cespedes</TortaName5>
            <TortaName5><strong>Age :</strong> 54</TortaName5>
            <TortaName5><strong>Birth day :</strong> Abril 14th</TortaName5>
            <TortaName5><strong>Creation Date :</strong> 25/04/2022 </TortaName5>
            </Torta7>




        </Torta1>



      </TableTorta>
      <PiePage />
    </>
  );
};

export default TableEstatis;
