import React from 'react'
import bg from '../../images/e-signature-illustration.jpg'
import './AddUser.css'

export default function AddUser() {

  return (
    <>
        <div className="row add-user">
            <div className="col-sm-4 add-user-c1">
                <h2>Add User</h2>
                <form action="" >
                <div className="row container-fluid name w-100">
                <div class="form-floating col-sm-6">
                <input type="text" class="form-control" id="floatingInput" placeholder=' '/>
                <label for="floatingInput">First name</label>
                </div>
                <div class="form-floating col-sm-6">
                <input type="text" class="form-control" placeholder=' ' />
                <label for="floatingPassword">Last name</label>
                </div>
                </div>

                <div class="form-floating mb-3">
                <input type="text" class="form-control" placeholder=' ' />
                <label for="floatingPassword">Designation</label>
                </div>
                <div class="form-floating mb-3">
                <input type="number" class="form-control" placeholder=' ' />
                <label for="floatingPassword">Contact number</label>
                </div>
                <div class="form-floating mb-3">
                <input type="email" class="form-control" placeholder=' ' />
                <label for="floatingPassword">Email ID</label>
                </div>
                <div class="form-floating mb-3">
                <input type="text" class="form-control" placeholder=' ' />
                <label for="floatingPassword">Employee ID</label>
                </div>


                <div class="form-floating mb-3">
                <select class="form-select" id='floatingPassword' aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
                {/* <label for="floatingPassword">Department</label> */}
                </div>


                <div class="form-floating mb-3">
                <input type="text" class="form-control" placeholder=' ' />
                <label for="floatingPassword">Employee ID</label>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  DI agree to receive marking communications from Sing Lock
                </label>
              </div>

                <div className="button"></div>
                <button className='create-btn'>Create</button>
                </form>
            </div>
            
            <div className="col-sm-8 bg-img">
                <img src={bg} alt="" />
            </div>
        </div>
    </>
    
  )
}
