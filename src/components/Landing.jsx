import { useNavigate } from "react-router-dom"
import { Firstdiv3, ImgLand, Mediumdiv, TitleLand } from "../styled/StyledComponents"

const Landing=()=>{
const navigation = useNavigate()

  setTimeout(() => navigation('/landhome'), 6000)

  return (
    < Firstdiv3>
    <Mediumdiv>
        <ImgLand src="https://res.cloudinary.com/felixces/image/upload/v1661562718/Retogithub/github_mytbht.png" alt="" />
      
        </Mediumdiv>
        <TitleLand>WELCOME TO A NEW EXPERIENCIE WELCOME TO GITHUB FRIENDSHIP</TitleLand>
    </ Firstdiv3>
    
  )
}
export default Landing