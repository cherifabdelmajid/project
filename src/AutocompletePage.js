import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const FormPage3 = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            
            <label
              htmlFor="defaultFormCardNameEx"
              className="grey-text font-weight-light"
            >
              adresse de départ
            </label>
            <input
              type="text"
              id="defaultFormCardNameEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormCardEmailEx"
              className="grey-text font-weight-light"
            >
              adresse de la destination 
            </label>
            
            <input
              type="email"
              id="defaultFormCardEmailEx"
              className="form-control"
            />
            <label
              htmlFor="defaultFormCardEmailEx"
              className="grey-text font-weight-light"
            >
              adresse de la destination 
            </label>
            <input
              type="text"
              id="defaultFormCardNameEx"
              className="form-control"
            />

            <div className="text-center py-4 mt-3">
              <MDBBtn className="btn btn-outline-purple" type="submit">
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage3;