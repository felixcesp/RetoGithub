import React from 'react';
import { CDBFooter,CDBBox, CDBBtn, CDBIcon} from 'cdbreact';

const PiePage = () => {
    return (
        <div>
          <CDBFooter className="shadow bg-black">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src="https://res.cloudinary.com/felixces/image/upload/v1668890749/Retogithub/logo_retocar_copia_oibp2j.png"
              width="50px"
            />
            <span className="ml-4 h5 mb-0 font-weight-bold text-white" >&#160;&#160;TecnoInstalaciones</span>
          </a>
          <small className="ml-2 text-white" >&#160;&#160; &copy; Felix Cespedes, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="primary" className="p-2" href='https://www.talentpitch.co/user/felix-cespedes' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
           </svg>
          </CDBBtn>
          <CDBBtn flat color="primary" className="mx-3 p-2" href='https://www.linkedin.com/in/felix-c-930614174/#' target='_blank'>
            <CDBIcon fab icon="linkedin" />
          </CDBBtn>
          <CDBBtn flat color="primary" className="p-2"  href='https://github.com/felixcesp/RetoGithub' target='_blank'>
            <CDBIcon fab icon="github" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
            
        </div>
    );
};

export default PiePage;