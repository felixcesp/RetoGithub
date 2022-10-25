import React, { useEffect, useState } from "react";
import Navbar from "../components/home/NavBar";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsSearch } from "react-icons/bs";
import {
  InsearchR,
  LapaSearch,
  PaginationConte,
  ReposTitleMain,
  Table2,
  TableInfo,
  TableTd,
} from "../styled/StyledComponents";
//import { useSelector } from 'react-redux';
import axios from "axios";
import { useSelector } from "react-redux";

function Repos() {
  //todos los repos llegan al setrepo desde la peticion y se guardan en repos en un array
  const [repos, setRepos] = useState([]);
  //con este estado sabemos los repos de la pagina actual son 5 por defecto pagina 1, es decir la posicion del array o indice DE 5 ELEMNTOS
  const [currentPage, setCurrentPage] = useState([]);
  //con este estado sabemos la pagina en que esta el usuario en la paginacion por defecto pagina 1
  const [currentPagination, setCurrentPagination] = useState(1);
  //con este estado sabemos cuantas paginas tienen todos los repos del usuario Y ME LA DA LA FORMULA DEL USEEFFECT
  const [pageNumber, setPageNumber] = useState(0);
  //este es para el filtro de busqueda que va a usar el evento onchange
  const [filterRepos, setFilterRepos] = useState([]);
  //con esta constante sanbemos cual es el usuario git que escribieron en el formulario y busque en el get los repos
  const gitUser = useSelector((state) => state.gitUser.gitName);

  //recarga tabla con un nuevo nuemro de pagina actual, aca resive la pagina del paginador en el xml y con esta hace la
  //formula para que de el segmento del array correspondiente
  const paginationCurrentPage = (newPage) => {
    setCurrentPagination(newPage);
    //antes del filtro esta es la formula
    //setCurrentPage(repos.slice((currentPagination*5)-5, currentPagination*5 ))
    //formula del filtro
    setCurrentPage(
      filterRepos.slice(currentPagination * 5 - 5, currentPagination * 5)
    );
  };
  //estas son para la flecha de anterior usamos la pagina que nos da el paginador y le restamos a este valor numero
  const paginationCurrentPrev = () => {
    let newPage = currentPagination - 1;
    if (newPage >= 1) {
      paginationCurrentPage(newPage);
    }
  };
  //esta es para la flecha de next, y usa el valor total de paginas para no pasarse de ella
  const paginationCurrentNext = () => {
    let newPage = currentPagination + 1;
    if (newPage <= pageNumber) {
      paginationCurrentPage(newPage);
    }
  };

  useEffect(() => {
    //ESTA ES LA PETICION ANTERIOR HACE LO MISMO QUE LA NUEVA QUE SIGUE
    // fetch(`https:api.github.com/users/${gitUser}/repos?per_page=100`)
    let api = axios.create({
      baseURL: `https:api.github.com/users/${gitUser}/repos?per_page=100`,
    });
    api.get().then((resp) => {
   /* fetch(`https:api.github.com/users/${gitUser}/repos?per_page=100`)
    .then((obtenido)=>obtenido.json())
    .then(resp=>{*/
      //GUARDO EN LA CONSTANTE DATA LO QUE ME TRAE LA URL MAXIJMO 100 ELEMNTOS O REPOS
      let data = resp.data;
      //aca le enviamos al esstado de las paginas el numero de paginas
      setPageNumber(Math.ceil(data.length / 5));
      setRepos(data);
      setFilterRepos(data);
      //le pongo el limite del subarray de la pagina actual los repos de esta pagina son 5 calculo
      //se calcula la posicion del array o indice depnediendo de la pagina
      setCurrentPage(
        data.slice(currentPagination * 5 - 5, currentPagination * 5)
      );
    });
  
    //llamo a todas las variables que se deben recargar
  }, [
    setRepos,
    gitUser,
    setCurrentPage,
    currentPagination,
    setPageNumber,
    setFilterRepos,
  ]);


  //********************************************************************** */
  const searching = (event) => {
    let userSearch = event.target.value;
    if (userSearch.length >= 3) {
      let temporal = repos.filter((element) => {
        return element.name.includes(userSearch);
      });
      console.log(temporal);
      setFilterRepos([...temporal]);
      setCurrentPagination(1);
    } else {
      setFilterRepos([...repos]);
    }
    setPageNumber(Math.ceil(filterRepos.length / 5));
    setCurrentPage(
      filterRepos.slice(currentPagination * 5 - 5, currentPagination * 5)
    );
  };



  //******************************************************************************** */
  //funciones para estadisticas
  const forStadistic = () => {
    let reposStore= repos.length
    localStorage.setItem('allrepos', JSON.stringify(reposStore));
    let pagesStore= pageNumber
    localStorage.setItem('allpages', JSON.stringify(pagesStore));
    let paginationStore= currentPagination
    localStorage.setItem('realPage', JSON.stringify(paginationStore));
  }
  forStadistic()

  return (
    <>
      <TableInfo>
        <Navbar />
        <ReposTitleMain>Repositorios de {gitUser}</ReposTitleMain>
        <InsearchR type="text" name="search" onChange={searching} />
        <LapaSearch>
          <BsSearch  />
        </LapaSearch>

        <Table2>
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Nombre repo</th>
              <th>Descripcion</th>
              <th>Url git</th>
              <th>Branch</th>
              <th>Lenguaje</th>
            </tr>
          </thead>
          <tbody>
            {currentPage.map(
              (
                { name, description, html_url, default_branch, language },
                idx
              ) => (
                <tr key={idx}>
                  <TableTd>{name}</TableTd>
                  <TableTd>{description}</TableTd>
                  <TableTd>{html_url}</TableTd>
                  <TableTd>{default_branch}</TableTd>
                  <TableTd>{language}</TableTd>
                </tr>
              )
            )}
          </tbody>
        </Table2>
      </TableInfo>

   

     <PaginationConte>
        <Pagination size="lg" onChange={forStadistic}>
          <Pagination.Prev onClick={paginationCurrentPrev} />
          {[...Array(pageNumber)].map((_, i) => {
            return (
              <Pagination.Item
                onClick={() => {
                  paginationCurrentPage(i + 1); ;
                }}
                active={currentPagination === i + 1 ? true : false}  
              >
                {i + 1}
              </Pagination.Item>
            );
          })}

          <Pagination.Next onClick={paginationCurrentNext} />
        </Pagination>
      </PaginationConte>
     
    </>
  );
}

export default Repos;
