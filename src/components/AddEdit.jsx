import {useDispatch, useSelector} from 'react-redux'
import { FileUpload } from '../../src/helpers/FileUpload';
import useForm from '../hooks/useForm';
import { Firstdiv5, FormAllH, FormIn6,Frase6, IconGit5, LabeName6, RegisterButton60, Seconddiv6, TitleMain6 } from '../styled/StyledComponents';
import '../styled/main.css'
import { FormControl } from 'react-bootstrap';
import { addGituserAsync } from '../redux/actions/actionEdit';

import { useNavigate } from 'react-router-dom';



const AddEdit = () => {
    const navigation =useNavigate();

    const dispatch = useDispatch();
   const usuarioName= useSelector(state => state.login);



    const [formValue, handleInputChange, reset]= useForm({
        name: '',
        lastname:'',
        email: '',
        phone: '',
        gituser:'',
        idcard: '',
        date:'',
        foto: '',
    

    })


    const {name, lastname, email, phone, gituser, idcard, date}=formValue

     const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(addGituserAsync(formValue))
        if(formValue){    
            navigation('/editar')
           
        }
        reset()   
    }
    

    const handleFileChange =(e)=>{
        const file= e.target.files[0]
        //llamar a mi configuracion con cloudinary
        //le voy a enviar loq ue tengo en file
        FileUpload(file)
        .then(resp =>{
            formValue.foto =resp
            console.log(resp)
        })
        .catch(error =>{
            console.warn(error)
        }) 
    }
  
    return (

     <>
      <Firstdiv5>
      <IconGit5 src="https://res.cloudinary.com/felixces/image/upload/v1661614263/Retogithub/icono2_ubwqaw.png" alt="" />
        <Frase6>{usuarioName.nombre}&nbsp;&nbsp; fill the blanks with the git user info</Frase6>
        <Seconddiv6>

        <TitleMain6>Git user information</TitleMain6>



             <FormAllH  onSubmit={handleSubmit} margin={50}>




             
                    <LabeName6>Your name</LabeName6>
                    <FormIn6 required type="text" name="name" placeholder="Enter name" value={name} onChange={handleInputChange} />

                    <LabeName6>Last name</LabeName6>
                    <FormIn6 required type="text" name="lastname" placeholder="Enter last name" value={lastname} onChange={handleInputChange} />

                    <LabeName6>Email address</LabeName6>
                    <FormIn6 type="email" name="email" placeholder="name@enlace" value={email} onChange={handleInputChange} />

                    <LabeName6>Phone</LabeName6>
                    <FormIn6  type="tel" name="phone" placeholder="your phone" value={phone} onChange={handleInputChange} />

                    <LabeName6>Git user</LabeName6>
                    <FormIn6 required type="text" name="gituser" placeholder="your github user" value={gituser} onChange={handleInputChange} />
                    
                    <LabeName6>Id card</LabeName6>
                    <FormIn6 required type="text" name="idcard" placeholder="your identification number" value={idcard} onChange={handleInputChange} />
                    
                    <LabeName6>birthday date</LabeName6>
                    <FormIn6 type="date" name="date" placeholder="your birth date" value={date} onChange={handleInputChange} />

                    
                     <LabeName6>Foto o avatar</LabeName6>
                    <FormControl className="custom-file-input" type="file" name="foto"  onChange={handleFileChange} />
                    
                
                

                <RegisterButton60 type="submit" >
                  Save
                </RegisterButton60>



                
             
            </FormAllH >
        







            </Seconddiv6>

        </Firstdiv5>

        </>
    );
};

export default AddEdit;