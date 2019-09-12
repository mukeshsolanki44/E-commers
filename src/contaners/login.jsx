import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
// import PrimarySearchAppBar from './nav'


const FormPage = () => {
  return (
      <div>              
  {/* <PrimarySearchAppBar path={this.props} myCart={this.state.myCart} /> */}
 
    <MDBContainer  style={{margin:"30px",}}  >  
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQed57KrGpNwT9_6T1CfcptxHLgOKJQC5eqH5TWZjsa01YUCyB)',
              width: '28rem',
              marginRight:"100px"
              
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>SIGN</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> UP</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
                label='Your email'
                group
                type='text'
                validate
                labelClass='white-text'
                />
              <MDBInput
                label='Your password'
                group
                type='password'
                validate
                labelClass='white-text'
              />
            
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                    >
                    Sign in
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Have an account?
                  <a href='#!' className='green-text ml-1 font-weight-bold'>
                    Log in
                  </a>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
   </div>
  );
};

export default FormPage;