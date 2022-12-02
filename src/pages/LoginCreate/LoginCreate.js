import React from 'react'
import logo from '../../images/singlock.png'
import img from '../../images/electronic-signature-technology-operation-validation-digital-signing-electronic-documents-verification-virtual-agreement-confirmation-vector-isolated-concept-metaphor-illustration_335657-2787.jpg';
import './LoginCreate.css'

export default function LoginCreate() {
  return (
    <>

    <div className='container-fluid p-3 logo'>
      <img src={logo} alt=""  />
    </div>
    <div className="container-create row">
          <div className="col-sm-6 create">
            <div className="button mb-4">
              <button className='create-new-button'>Create New Account</button>
            </div>

            <div className="login text-center">
              <button className='login-btn' >Login</button>  
            </div>
          </div>
          <div className="background col-sm-6">
            <img src={img} alt="" />
          </div>
    </div>
    </>
    
  )
}
