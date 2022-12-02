import React from 'react'
import logo from '../../images/singlock.png'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './CreateAccount.css'
import img from '../../images/createAccount.jpg'; 

export default function AddUser() {
  return (
    <>
    <div className='container-fluid logo' >
      <img src={logo} alt=""  />
    </div>

    <div class="row justify-content-center align-items-center g-2">
      <div class="col-sm-6 create-img">
      <img src={img} alt="" />
      </div>
 
      <div class="col create-form  p-0">
        
        
        <form action=""  method="post">
        {/* <h3>Company Details</h3> */}

          <div className="form-floating mb-3">
            {/* <label for="floatingInputValue">Company Name</label> */}
            <input class="form-control" type="text" name="name" placeholder='Company Name' id="floatingInputValue" />
          </div>

          <div className="form-floating mb-3">
          {/* <label for="floatingInputValue">Location</label> */}
          <input class="form-control" type="text" name="location" placeholder='Location' id="floatingInputValue" />
          </div>

          <div className="form-floating mb-3">
          {/* <label for="email">Email</label> */}
          <input class="form-control" type="text" name="email" placeholder='Email id' id="email" />
          </div>

          <div className="form-floating mb-3">
          <label for="contact"></label>
          <input class="form-control" type="text" name="contact" placeholder='Contact number' id="contact" />
          </div>

          <div className="form-floating mb-3">
          <label for="cinno"></label>
          <input class="form-control" type="text" name="cinno" placeholder='Company CINNO' id="cinno" />
          </div>

          <div className="form-floating mb-3">
          <label for="number_of_employee"></label>
          <input class="form-control" type="text" name="number_of_employee" placeholder='Number of Employee' id="number_of_employee" />
          </div>

          <div className="form-floating mb-3">
          <label for="authorize_person"></label>
          <input class="form-control" type="text" name="authorize_person" placeholder='Authorize Person' id="authorize_person" />
          </div>

          <div className="form-floating mb-3">
          <label for="authorize_person_designation"></label>
          <input class="form-control" type="text" name="authorize_person_designation" placeholder='Authorize Person Designation' id="authorize_person_designation" />
          </div>

          <div className=" mb-3">
          <div className="agree"><input type="checkbox" class="form-check-input" name="agree" id="form-check-input" /> <label id='agree form-check-input' >I agree to receive marking communications from Sing Lock</label></div>
          </div>
          <br />
          <div className="but col-md-12 text-center">
          <button type="submit" className='create-button'>Create</button>
          </div>

        </form>
      </div>
    </div>
    </>
  )
}
