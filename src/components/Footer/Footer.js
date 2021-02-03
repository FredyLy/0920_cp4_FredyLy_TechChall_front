import React from 'react';
import { 
	MDBCol,
	MDBContainer,
	MDBRow,
	MDBFooter
} from "mdbreact";

import './Footer.css';

const Footer = () => {

	const socialNetwork = 
			<div>
				<i className="fa fa-home mr-3" /> FBimg
				<i className="fa fa-phone mr-3" /> TTimg
				<i className="fa fa-phone mr-3" /> VMimg
				<i className="fa fa-phone mr-3" /> FLKRimg
				<i className="fa fa-phone mr-3" /> FLKRimgRSSimg
		</div>;
	
  return (
		<MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
							This website is
            </h6>
            <p className="footer_para">
            	a remake of the Wild Code School Tech Challenge, <br /> 5 months after the 1st draft.
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />

          
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Social Network</h6>
						{ socialNetwork }
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol className="footer_text">
            <p className="text-center white-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              Fredy Ly
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
