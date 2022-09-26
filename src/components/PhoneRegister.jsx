import { useDispatch} from "react-redux";
import { Link} from "react-router-dom";
import useForm from "../hooks/useForm";
import { actionStatePhoneAsync } from "../redux/actions/actionStatePhone";
import {
  ButLoNext,
  Firstdiv4,
  FormAll2,
  FormIn2,
  Frase2,
  IconGit2,
  LabeName2,
  LettersR2,
  LettersR3,
  LoginConte,
  RegisterButton,
  Seconddiv3,
  TitleMain2,
} from "../styled/StyledComponents";

export default function PhoneRegister() {
    const dispatch = useDispatch();

 
  const [formValue, handleInputChange, reset] = useForm({
    phone: "",
  });


  const { phone } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formValue)
   dispatch(actionStatePhoneAsync(phone));
    reset();
  };
  return (
    <Firstdiv4>
      <IconGit2
        src="https://res.cloudinary.com/felixces/image/upload/v1661614263/Retogithub/icono2_ubwqaw.png"
        alt=""
      />
      <Frase2>
        evaluator If you have an account enter your phone number, in other hand click next
      </Frase2>
      <Seconddiv3>
        <FormAll2 onSubmit={handleSubmit}>
          <TitleMain2>Evaluator phone login</TitleMain2>
          <hr />
          <LabeName2>Phone</LabeName2>
          <FormIn2
            type="tel"
            name="phone"
            value={formValue.phone}
            onChange={handleInputChange}
          />

          <RegisterButton type="submit">
            <LettersR2 /* onClick={() =>veryTel(formValue.phone) }*/>Login</LettersR2>
          </RegisterButton>
        </FormAll2>
      </Seconddiv3>
      <LoginConte>
        <ButLoNext>
          <Link to="/pag1">
            <LettersR3>Next</LettersR3>
          </Link>
        </ButLoNext>
      </LoginConte>
    </Firstdiv4>
  );
}
