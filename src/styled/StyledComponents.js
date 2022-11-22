import styled from 'styled-components';
//contenedor total login
export const Firstdiv= styled.div`
padding-top:2.5rem;
height:655px;
width:1280px;
box-sizing: border-box;
background-image: url("https://res.cloudinary.com/felixces/image/upload/v1661610913/Retogithub/fondo8_j9xsia.jpg");
background-repeat:no-repeat;
background-size:cover;
align-items:center;
justify-content: center;
position: relative;
`
//icono github
export const IconGit=styled.img`
position:absolute;
width:80px;
height:80px;
left:5rem;
border-radius:50%;
`
//frase introductoria
export const Frase=styled.h2`
position:absolute;
width:280px;
height:1.25rem;
top:8.125rem;
left:5rem;
color:white;
font-size:20px;
font-weight:1.8px;
`
//contenedor del login
export const Seconddiv= styled.div`
height:520px;
width:25rem;
margin:auto;
box-sizing: border-box;
background-image: url("https://res.cloudinary.com/felixces/image/upload/v1661709843/Retogithub/fondo21_vloiql.jpg");
background-repeat:no-repeat;
background-size:cover;
background-color:transparent;
border-radius:1.875rem;
`

//formulario
export const FormAll=styled.form`
display:flex;
flex-direction:column;
align-items:center;
row-gap:0.9375rem;

`
//titulo inicio sesion
export const TitleMain=styled.h1`
color:white;
margin-top:1.25rem;
font-weight:1.8px;
font-size:36px;
`
export const LabeName=styled.label`
color:whitesmoke;
font-size:1.25rem;
font-weight:bolder;
`
export const FormIn=styled.input`
height:2.1875rem;
width: 16.25rem;
padding-left:0.625rem;
margin-bottom:0.5rem;
border-radius: 0.875rem;
margin-left:0.9063rem;  
border: 1px solid rgba(100, 100, 100, 0.5);
`
//botones contenedor
export const BotonAll=styled.div`
width:18.125rem;
height:5rem;
display:flex;
flex-direction:row;
justify-content:space-around;
margin-top:1.125rem;
`

//imagenes boton ggogle login
export const BotonImg=styled.img`
width:4.375rem;
height:4.375rem;
border-radius:50%;
background-color:transparent;
margin-left:-0.875rem;
margin-top:-7px;
transition:0.2s linear;
cursor:pointer;
:hover{
    transform:scale(1.1, 1.1); 
}
`
//botones GOOGLE Y LOG IN
export const Boton=styled.button`
width:3.4375rem;
height:3.4375rem;
border-radius:50%;
background-color:transparent;
object-fit:cover;
z-index:20;
cursor:pointer;
border:none;
`
//img face
export const FaceImg=styled.img`
width:5rem;
height:3.125rem;
background-color:transparent;
object-fit:cover;
margin-left:-1.25rem;
transition:0.2s linear;
cursor:pointer;
:hover{
    transform:scale(1.1, 1.1); 
}
`

//BOTON FACE
export const BotonF=styled.button`
width:3.4375rem;
height:3.4375rem;
background-color:transparent;
border-radius:50%;
z-index:20;
cursor:pointer;
border:none;
transition:0.2s linear;

:hover{
    transform:scale(1.1, 1.1); 
}
`
//boton y texto registrate
export const BotonR35=styled.button`
width:18.125rem;
height:1.875rem;
z-index:20;
background-color:transparent;
border:none;
text-decoration:none;
border-style:none;
cursor:pointer;
transition: linear 0.3s;

:hover{
    transform:scale(1.05, 1.05); 
    border-radius: 25px;
    background-color:  #001a57;
    
}
`

//titulo registrar
export const LettersR=styled.p`
color :white;
width:17.5rem;
height:1.25rem;
font-size:19px;
justify-content:center;
text-align:center;
margin-top:0px;
font-weight:bold;


`




//CONTENEDOR PRINCIPAL REGISTRO
export const Firstdiv2= styled.div`
height:655px;
width:1250px;
box-sizing: border-box;
background-image: url("https://res.cloudinary.com/felixces/image/upload/v1661610913/Retogithub/fondo8_j9xsia.jpg");
background-repeat:no-repeat;
background-size:cover;
align-items:center;
justify-content: center;
position: relative;

`
//contenedor del registro
export const Seconddiv2= styled.div`
position:absolute;
height:auto;
width:25rem;
top:50px;
left:400px;
box-sizing: border-box;
background-image: url("https://res.cloudinary.com/felixces/image/upload/v1662591043/Retogithub/oto4_ptw4jf.jpg");
background-repeat:no-repeat;
background-size:cover;
background-color: yellowgreen;
border-radius:1.875rem;
`
//formulario reegistro
export const FormAll2=styled.form`
display:flex;
flex-direction:column;
align-items:center;
row-gap:10px;

`
//titulo registro
export const TitleMain2=styled.h1`
color:whitesmoke;
margin-top:60px;
font-size:30px;
font-weight:1.8px;
`
export const LabeName2=styled.label`
color:whitesmoke;
font-size:1.25rem;
font-weight:bolder;
margin-top:-36px;
`
export const FormIn2=styled.input`
height:30px;
width: 260px;
padding-left:0.625rem;
margin-bottom:32px;
border-radius: 0.875rem;
margin-left:0.9063rem;  
border: 1.5px solid rgba(100, 100, 100, 0.5);
`
export const RegisterButton=styled.button`
width:150px;
height:40px;
margin-top:10px;
margin-bottom:40px;
border-radius:30px;
background-color:#929292;
//background:radial-gradient(circle at 50% -20.71%, #695e80 0, #403864 50%, #0f1749 100%);
z-index:20;
transition:0.4s;
cursor:pointer;
:hover{
    transform:scale(1.05, 1.05); 
    color:darkblue;
    //background-color:  rgba(162, 195, 252, 1);
    background-color:#7f7f7f;
}

`
export const LettersR2=styled.p`
color :black;
width:80px;
height:20px;
font-size:1.0625rem;
margin-top: 3px;
margin-left:24px;
font-weight:bold;

`
export const ButLogin=styled.button`
position:absolute;
top:-70px;
left:-20px;
width:50px;
height:50px;
border-radius:50%;
transition:0.5s;
:hover{
    transform:scale(1.02, 1.02); 
    
    
}
`
export const LoginConte=styled.div`
background-color:transparent;
width: 60px;
height:60px;
position:absolute;
left:760px;
bottom: 0px;
border-radius:50%;

`
export const IconGit2=styled.img`
position:absolute;
width:6.25rem;
height:6.25rem;
left:5rem;
top:60px;
border-radius:50%;
`
export const Frase2=styled.h2`
position:absolute;
width:300px;
height:1.25rem;
top:170px;
left:5rem;
color:white;
font-size:20px;
font-weight:1.8px;
`
//landing
export const Firstdiv3= styled.div`
height:655px;
width:1280px;
box-sizing: border-box;
background-image: url("https://res.cloudinary.com/felixces/image/upload/v1661691382/Retogithub/metal3_abta2f.jpg");
background-repeat:no-repeat;
background-size:cover;
align-items:center;
justify-content: center;
position:relative;

`
export const Mediumdiv= styled.div`
position:absolute;
width: 250px;
height:250px;
top:130px;
left:500px;
animation: rotation 5s infinite linear;
@keyframes rotation {
    from{transform: rotate3d(0, 500, 0, 360deg);}
}
`
export const ImgLand=styled.img`
width:230px;
height:230px;
`
//TITLE LANDING
export const TitleLand=styled.h1`
position:absolute;
color:whitesmoke;
position:absolute;
top:430px;
left:157px;
font-size:30px;

`
//registracion telefono
export const Firstdiv4= styled.div`
height:655px;
width:1280px;
box-sizing: border-box;
background-image: url("https://res.cloudinary.com/felixces/image/upload/v1661709975/Retogithub/fondo22_zheuk7.jpg");
background-size:cover;
align-items:center;
justify-content: center;
position: relative;
`
export const Seconddiv3= styled.div`
height:75%;
width:25rem;
left:460px;
box-sizing: border-box;
background-image: url("https://res.cloudinary.com/felixces/image/upload/v1661642403/Retogithub/fondo12_v3bwzv.jpg");
background-repeat:no-repeat;
background-size:cover;
background-color: yellowgreen;
border-radius:1.875rem;
position:absolute;
top:100px;
`
export const ButLoNext=styled.button`
position:absolute;
left:-175px;
bottom:110px;
width:150px;
height:40px;
border-radius:20px;
transition:0.5s;
background:radial-gradient(circle at 50% -20.71%, #695e80 0, #403864 50%, #0f1749 100%);
:hover{
    transform:scale(1.05, 1.05); 
    
    background-color:  rgba(162, 195, 252, 1);
}
`
export const LettersR3=styled.p`
color :whitesmoke;
width:80px;
height:20px;
font-size:1.0625rem;
font-weight:bold;
position:absolute;
bottom:-5px;
left:25px;
`





//tabla contenedor
export const TableInfo=styled.div`
height:550px;
width:auto;
background-color:whitesmoke;
box-sizing: border-box;
text-align:center;

`
export const Table2=styled.table`
color:black;
margin:auto;
width:90%;
height:auto;
font-size:18px;
border: solid 1px black;
border-collapse: collapse;
background-color:#9f90ea;

`
export const TableTd=styled.td`
border: solid 1px black;
text-align:center;
`
export const TableTh=styled.td`
border: solid 1px black;
text-align:center;
height:40px;
`
export const TableT25=styled.td`
border: solid 1px black;
text-align:center;
height:40px;
cursor: pointer;
`

//botones imagenes
export const ImgTables= styled.button`
background-color:lightblue;
margin-top:5px;
border:none;
width:30px;
border-radius:50%;
height:30px;
cursor: pointer;
:hover{
    transform:scale(1.1, 1.1);   
    background-color:  rgba(162, 195, 252, 1);
}
`
export const ImgTables2= styled.button`
background-color:#ff4040;
border:none;
margin-top:5px;
margin-bottom:5px;
width:30px;
border-radius:50%;
height:30px;
cursor: pointer;
:hover{
    transform:scale(1.1, 1.1);   
    background-color:  rgba(162, 195, 252, 1);
}
`




export const RegisterButton2=styled.button`
width:250px;
height:40px;
margin-top:-200px;
margin-left:680px;
border-radius:30px;
background:radial-gradient(circle at 50% -20.71%, #695e80 0, #403864 50%, #0f1749 100%);
z-index:20;
transition:0.4s;

:hover{
    transform:scale(1.1, 1.1); 
   
    background-color:  rgba(162, 195, 252, 1);
}`
export const Cambio=styled.h2`
color:white;
margin-top:5px;
`
export const RegisterButton3=styled.button`
width:250px;
height:40px;
margin-top:00px;
margin-left:500px;
border-radius:30px;
background:radial-gradient(circle at 50% -20.71%, #695e80 0, #403864 50%, #0f1749 100%);
z-index:20;
transition:0.4s;

:hover{
    transform:scale(1.1, 1.1); 
   
    background-color:  rgba(162, 195, 252, 1);
}`
export const Cambio2=styled.h2`
color:white;
margin-top:5px;
`








//formulario para llenar datos de la tabla
export const Firstdiv5= styled.div`
height:655px;
width:1250px;
box-sizing: border-box;
background-image: url("https://res.cloudinary.com/felixces/image/upload/v1661610913/Retogithub/fondo8_j9xsia.jpg");
background-repeat:no-repeat;
background-size:cover;
align-items:center;
justify-content: center;
position: relative;

`
//div interno del fromulario
export const Seconddiv6= styled.div`
position:absolute;
height:450px;
width:1100px;
top:115px;
left:80px;
box-sizing: border-box;
background-image: url("https://res.cloudinary.com/felixces/image/upload/v1662591043/Retogithub/oto4_ptw4jf.jpg");
background-repeat:no-repeat;
background-size:cover;
background-color: yellowgreen;
border-radius:1.875rem;

`
//icono github
export const IconGit5=styled.img`
position:absolute;
width:70px;
height:70px;
left:5rem;
top:10px;
border-radius:50%;
`
//encabezado
export const Frase6=styled.h2`
position:absolute;
width:auto;
height:1.25rem;
top:20px;
left:330px;
color:white;
font-size:35px;
font-weight:1.8px;
`
//formulario horizontal
export const FormAllH=styled.form`
display:grid;
grid-template-columns:repeat(4, 270px);
column-gap:20px;
margin-top:50px;
`
//inputs 
export const FormIn6=styled.input`
height:35px;
width: 260px;
padding-left:10px;
margin-bottom:45px;
margin-top:5px;
border-radius: 14px;
margin-left:-160px;  
border: 1px solid rgba(100, 100, 100, 0.5);
`
export const LabeName6=styled.label`
color:whitesmoke;
font-size:20px;
font-weight:bolder;
margin-top:-30px;
margin-left:200px;
background-color:transparent;
width:180px;
`
export const TitleMain6=styled.h1`
width:auto;
color:whitesmoke;
margin-top:5px;
text-align:center;
font-weight:lighter;
`
export const RegisterButton6=styled.button`
width:120px;
height:40px;
margin-top:5px;
margin-left:138px;
border-radius:30px;
background-color:#929292;
//background:radial-gradient(circle at 50% -20.71%, #695e80 0, #403864 50%, #0f1749 100%);
z-index:20;
transition:0.4s;
cursor:pointer;
border:1.5px solid #1c0d02;

:disabled{
opacity:0.7; 
pointer-events: none;
border:none;
  
}
:hover{
    transform:scale(1.05, 1.05); 
    color:darkblue;
    background-color:#7f7f7f;
}`
export const RegisterButton7=styled.button`
width:120px;
height:40px;
margin-top:5px;
margin-left:-14px;
border-radius:30px;
background-color:#929292;
//background:radial-gradient(circle at 50% -20.71%, #695e80 0, #403864 50%, #0f1749 100%);
z-index:20;
transition:0.4s;
cursor:pointer;
border:1.5px solid #1c0d02;

:disabled{
opacity:0.7; 
pointer-events: none;
border:none;
};
:hover{
    transform:scale(1.05, 1.05); 
    color:darkblue;
    //background-color:  rgba(162, 195, 252, 1);
    background-color:#7f7f7f;
}`


//botones extras de revicion
export const RegisterButton8=styled.button`
width:250px;
height:40px;
margin-top:0px;
margin-left:950px;
border-radius:30px;
background:radial-gradient(circle at 50% -20.71%, #695e80 0, #403864 50%, #0f1749 100%);
z-index:20;
transition:0.4s;

:hover{
    transform:scale(1.08, 1.08); 
   
    background-color:  rgba(162, 195, 252, 1);
}`

export const RegisterButton9=styled.button`
width:240px;
height:40px;
margin-top:25px;
margin-left:732px;
border-radius:30px;
background:radial-gradient(circle at 50% -20.71%, #695e80 0, #403864 50%, #0f1749 100%);
z-index:20;
transition:0.4s;

:hover{
    transform:scale(1.08, 1.08); 
   
    background-color:  rgba(162, 195, 252, 1);
}`

export const RegisterButton10=styled.button`
position:absolute;
width:250px;
height:40px;
top:470px;
left:130px;
border-radius:30px;
background:radial-gradient(circle at 50% -20.71%, #695e80 0, #403864 50%, #0f1749 100%);
z-index:20;
transition:0.4s;

:hover{
    transform:scale(1.08, 1.08); 
   
    background-color:  rgba(162, 195, 252, 1);
}`


export const Cambio9=styled.h2`
color:white;
margin-top:2px;
font-size:20px;
`

export const LettersR22=styled.p`
color :black;
width:80px;
height:20px;
font-size:1.0625rem;
margin-top: 3px;
margin-left:11px;
font-weight:bold;

`









//paginacion

export const PaginationConte= styled.div`
background:transparent;
display:flex;
justify-content:center;
`
//titulo tabla
//tabla titulo nueva edicion
export const TitleTable55= styled.h1`
margin-top:80px;
margin-bottom:30px;
`
export const InsearchR= styled.input`
margin-top:15px;
margin-bottom:25px;
`
export const LapaSearch= styled.div`
width:20px;
height:20px;
position:absolute;
left:704px;
top:275px;
background-color:transparent;
`

// componentes nuevos de editar
//input imagen
export const RegisterButton60=styled.button`
width:200px;
height:40px;
margin-top:-50px;
margin-left:452px;
border-radius:30px;
background-color:#929292;

//background:radial-gradient(circle at 50% -20.71%, #695e80 0, #403864 50%, #0f1749 100%);
z-index:20;
transition:0.4s;
cursor:pointer;
border:1.5px solid #1c0d02;
color:black;
font-weight:500;
font-size:20px;
padding-bottom:5px;

:hover{
    transform:scale(1.02, 1.02); 
    color:yellow;
    background-color:#7f7f7f;
    font-weight:400;
}`




//listar table 2
export const Table22=styled.table`
color:black;
margin:auto;
width:90%;
height:auto;
font-size:18px;
border: solid 1px black;
border-collapse: collapse;
background-color:#9f90ea;
margin-bottom:50px;
`
export const TableInfo22=styled.div`
height:auto;
width:1263px;
background-color:whitesmoke;
box-sizing: border-box;
text-align:center;
background-color:whitesmoke;

`
export const LisitImg=styled.img`
height:55px;
//width:55px;
border-radius:50%;

`
export const TableTd223=styled.td`
border: solid 1px black;
text-align:center;
position:relative;
width:auto;
height:50px;

`
export const TableTd22=styled.td`
border: solid 1px black;

position:relative;
width:auto;
height:20px;
`

export const CrudBoton= styled.button`
position:absolute;
background-color:red;
border-radius:30px;
color:whitesmoke;
font-size:16px;
text-decoration:none;
border:none;
top:20px;
left:5px;
`
export const CrudBoton1= styled.button`
position:absolute;
top:58px;
left:5px;
background-color:green;
border-radius:30px;
color:whitesmoke;
font-size:16px;
text-decoration:none;
border:none;
margin-bottom:2px;

`
export const CrudBoton2= styled.button`
position:absolute;
top:95px;
left:5px;
background-color:yellow;
border-radius:30px;
color:black;
font-size:14px;
text-decoration:none;
border:none;

`
export const TableThn=styled.td`
border: solid 1px black;
height:auto;
`

//repos title
export const ReposTitleMain= styled.h1`
margin-top:80px;
margin-bottom:30px;

`


//home
export const Seconddiv33= styled.div`
height:50%;
width:250px;
left:20px;
box-sizing: border-box;
background-image: url("https://res.cloudinary.com/felixces/image/upload/v1661642403/Retogithub/fondo12_v3bwzv.jpg");
background-repeat:no-repeat;
background-size:cover;
background-color: yellowgreen;
border-radius:1.875rem;
border: inset 2px #B4789D;
  border-radius: 30px;
  box-shadow: 0px 5px 28px -4px #000000;
:hover{
    -webkit-transform:scale(1.06);
  transform:scale(1.06); 
  transition: 0.3s linear;
}
//position:absolute;
//top:200px;
`
export const Firstdiv44= styled.div`
height:560px;
width:100vw;
box-sizing: border-box;
background-image: url("https://res.cloudinary.com/felixces/image/upload/v1668793377/Retogithub/fondo30_wreuzb.jpg");
background-size:contain;
display:flex;
//padding-top:200px;
align-items: center;
//padding-bottom:50px;
justify-content:center;
flex-direction:row;
column-gap:40px;

//position: relative;
`
export const IconGit52=styled.img`
position:absolute;
width:6.25rem;
height:6.25rem;
left:5rem;
top:60px;
border-radius:50%;
`
export const Frase22=styled.h2`
position:absolute;
width:auto;
height:20px;
top:150px;
left:450px;
color:lightblue;
font-weight:bold;
font-size:25px;
font-weight:1.8px;
`
export const EvalOptions=styled.img`
width:70%;
height:60%;
margin-top:30px;
margin-left:35px;
border-radius:30px;
`
export const Frase10=styled.h2`
width:auto;
height:20px;
color:lightblue;
font-weight:bold;
font-size:20px;
font-weight:1.8px;
margin-left:28px;
margin-top:20px;

`
//carousel
export const Carrusel10=styled.div`
width:80%;
height:50%;
margin:auto;
padding:auto;
`
//div completo del carrosuel
export const CarruselIn=styled.div`
box-sizing: border-box;
background-image: url("https://res.cloudinary.com/felixces/image/upload/v1668793377/Retogithub/fondo30_wreuzb.jpg");
background-repeat:no-repeat;
background-size:cover;
background-color: yellowgreen;
//border-bottom:5px solid #1f104f;;
padding-bottom:40px;
`
/*export const Textoanimdo=styled.p`
  color:whitesmoke;
  font-size:20px;
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;


@keyframes slidein {
  from {
    margin-left: 100%;
    width: 100%
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
}
`*/
export const DivTexto=styled.div`
overflow:hidden;
width:50%;
height:60px;
margin:0px auto 30px auto;
padding-top:30px;
background-color:transparent;
`



//div videos
export const CineHomeIn=styled.div`
padding:20px auto;
box-sizing: border-box;
background-image: url("https://res.cloudinary.com/felixces/image/upload/v1668793377/Retogithub/fondo30_wreuzb.jpg");
background-repeat:no-repeat;
background-size:100% 100%;

`



export const CineHome=styled.div`
height:500px;
width:80.3%;
margin:auto;
box-sizing: border-box;
background-image: url("https://res.cloudinary.com/felixces/image/upload/v1669063303/Retogithub/cine2_zr1gb4.jpg");
background-repeat:no-repeat;
background-size: 100% 500px;
display:flex;
flex-direction:row;
`
//contenedores videos
export const VideoHome=styled.div`
//background-color:white;
height:200px;
width:auto;
//flex-direction:column;
padding-top:20px;
background-color:red;
 margin-top:15px;
 margin-left:50px;
 border-radius:10px;

`
export const VideoHome2=styled.div`
display:flex;
margin-top:60px;
margin-left:130px;
height:230px;
background-color:black;
width:75%;
border: 1px solid darkblue;
`
export const VideoHome3=styled.div`
background-color:blue;
`