import React from 'react';
import { CDBFooter,CDBBox, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

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
            <CDBIcon fab icon="facebook-f" />
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