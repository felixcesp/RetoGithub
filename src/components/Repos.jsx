import React, { useEffect, useState } from 'react'
import  Navbar  from '../components/home/NavBar'
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

import {PaginationConte, Table2, TableInfo, TableTd } from '../styled/StyledComponents'
//import { useSelector } from 'react-redux';
import axios from 'axios';

function Repos() {
    const [repos, setRepos] = useState([]);
   const [currentPage, setCurrentPage] = useState([]);
   const [currentPagination, setCurrentPagination] = useState(1);
   const [pageNumber, setPageNumber] = useState(0)
   //este es para el filtro
   const [filterRepos,setFilterRepos] = useState([]);

    //const gitUser = useSelector( state => state.gitUser.gitName);
    const gitUser= "felixcesp"
//recarga tabla con un nuevo nuemro de pagina actual
    const paginationCurrentPage= (newPage)=>{
        setCurrentPagination(newPage)
        setCurrentPage(filterRepos.slice((currentPagination*5)-5, currentPagination*5 ))
    }
    const paginationCurrentPrev = ()=>{
        let newPage = currentPagination - 1;
        if (newPage >=1){
            paginationCurrentPage(newPage);
        }
    }

   const paginationCurrentNext = ()=>{
   
    let newPage = currentPagination + 1;
    if (newPage <= pageNumber ){
        paginationCurrentPage(newPage);
       
    }
}

    
    useEffect(() => {
      let api= axios.create(
        {baseURL:`https:api.github.com/users/${gitUser}/repos?per_page=100` }
      )
        api.get()
        .then(resp=>{
          let data=resp.data
            setPageNumber(Math.ceil(data.length / 5))
            setRepos(data);
            setFilterRepos(data)
            setCurrentPage(data.slice((currentPagination*5)-5, currentPagination*5 ))
        })
        
    }, [setRepos, gitUser, setCurrentPage, currentPagination, setPageNumber, setFilterRepos])


  //********************************************************************** */
  const searching = (event)=>{
  
    let userSearch= event.target.value;
    
    if(userSearch.length >= 3 ){
     let temporal = repos.filter((element)=>{
        return  element.name.includes(userSearch)
        
        })
        console.log(temporal)
      setFilterRepos([...temporal])
      setCurrentPagination(1);
    }else{
      
      setFilterRepos([...repos]);
    }
    
    setPageNumber(Math.ceil(filterRepos.length / 5));
    setCurrentPage(filterRepos.slice((currentPagination*5)-5, currentPagination*5 ))

  }








  return (
    <>
 
    <TableInfo>
   <Navbar/> 
      <h1>Repositorios de {gitUser}</h1>
      
      
      <input type='text' name='search' onChange={searching}/>
   
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
        
   {
        
      currentPage.map( ({ name, description, html_url, default_branch, language }, idx) => (
        <tr key={ idx }>
          <TableTd>{ name }</TableTd>
          <TableTd>{ description }</TableTd>
          <TableTd>{ html_url }</TableTd>
          <TableTd>{ default_branch }</TableTd>
          <TableTd>{ language }</TableTd>       
        </tr>
      ))
      
        }  
    </tbody>
  </Table2>
  
</TableInfo>


<PaginationConte>
  


  
   <Pagination size='lg'>
    <Pagination.Prev onClick={paginationCurrentPrev}/>
    {
    [...Array(pageNumber)].map(( _ , i) => {
      return  <Pagination.Item onClick={()=>{paginationCurrentPage(i+1)}} active={currentPagination===i+1?true:false}>{i+1}</Pagination.Item> 
    })
                
    }
    
    <Pagination.Next onClick={paginationCurrentNext}/>
    
  </Pagination>  
  </PaginationConte>    
</>
  )
}

export default Repos