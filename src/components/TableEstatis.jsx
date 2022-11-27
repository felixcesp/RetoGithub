import React, { Component }  from "react";
import {
  BotonTorta,
  TableInfo52,
  TableInfo72,
  TableInfo720,
  TableTorta,
  TitleTable57,
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
  TortaNames,
} from "../styled/StyledComponents";
import NavBarUser from "../components/home/NavbarUser";
import PiePage from "../components/home/PiePage";
import NavBarEsta from "./home/NavBarEsta";
import { Chart } from "chart.js";





const TableEstatis = () => {
  new Chart(document.querySelector(".pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});




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

             <div>
            <canvas className="pie-chart" width="800" height="450"></canvas>

            </div>



            <Torta4>
			
		

		
	    

            </Torta4>






            <Torta5>footer</Torta5>
            <Torta6>foto</Torta6>
            <Torta7>referencias</Torta7>




        </Torta1>



      </TableTorta>
      <PiePage />
    </>
  );
};

export default TableEstatis;
