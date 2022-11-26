import React from "react";
import {
  TableInfo52,
  TitleTable57,
} from "../styled/StyledComponents";
import NavBarUser from "../components/home/NavbarUser";
import PiePage from "../components/home/PiePage";
import NavBarEsta from "./home/NavBarEsta";

const TableEstatis = () => {
  return (
    <>
      <TableInfo52>
        <NavBarEsta />
        <>
          <TitleTable57>Evaluator {} these are your users</TitleTable57>
        </>
        <div>

            
            <div>nombre</div>


            <div>estadisticas pricipal

             <div>botones</div>
             <div>cuerpo</div>
             <div>footer</div>
             <div>referencias</div>

            </div>


        </div>
      </TableInfo52>
      <PiePage />
    </>
  );
};

export default TableEstatis;
