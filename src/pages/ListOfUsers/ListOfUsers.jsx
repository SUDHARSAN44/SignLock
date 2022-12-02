import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import './ListOfUsers.css'


export default function ListOfUsers() {
  return (
    <div className="page">
        <Navbar/>
    <div className='body'>
    <SideBar/>
    <div className="list-of-user">
        <h4 className='mb-4'>List of users (3)</h4>
    
        
        <div className="card-group list-of-users">
            <div className="card">
                <div className="row card-row" >
                    <div className="col-sm-1 profile-img">
                        <img className='prof-img' src="http://static.moviecrow.com/gallery/20220922/205680-Thunivu%20Second%20Look.jpg" alt="" />
                    </div>
                    <div className="col-sm-7 details row pl-4">
                        <div className="col name">
                            Ajith Kumar
                        </div>
                        <div className="form-name">
                            Movie Agreement
                        </div>
                        <div className="date-time">
                            28/08/2022 11:30 pm
                        </div>
                    </div>
                    <div className="col-sm-2 on-off-btn">
                    <label class="switch"><input type="checkbox" id="togBtn"/><div class="slider round" ><span class="on"></span><span class="off"></span></div></label>
                    </div>  
                </div>
            </div>




            <div className="card">
                <div className="row card-row" >
                    <div className="col-sm-1 profile-img">
                        <img className='prof-img' src="http://static.moviecrow.com/gallery/20220922/205680-Thunivu%20Second%20Look.jpg" alt="" />
                    </div>
                    <div className="col-sm-7 details row pl-4">
                        <div className="col name">
                            Ajith Kumar
                        </div>
                        <div className="form-name">
                            Movie Agreement
                        </div>
                        <div className="date-time">
                            28/08/2022 11:30 pm
                        </div>
                    </div>
                    <div className="col-sm-2 on-off-btn">
                    <label class="switch"><input type="checkbox" id="togBtn"/><div class="slider round" ><span class="on"></span><span class="off"></span></div></label>
                    </div>  
                </div>
            </div>




            <div className="card">
                <div className="row card-row" >
                    <div className="col-sm-1 profile-img">
                        <img className='prof-img' src="http://static.moviecrow.com/gallery/20220922/205680-Thunivu%20Second%20Look.jpg" alt="" />
                    </div>
                    <div className="col-sm-7 details row pl-4">
                        <div className="col name">
                            Ajith Kumar
                        </div>
                        <div className="form-name">
                            Movie Agreement
                        </div>
                        <div className="date-time">
                            28/08/2022 11:30 pm
                        </div>
                    </div>
                    <div className="col-sm-2 on-off-btn">
                    <label class="switch"><input type="checkbox" id="togBtn"/><div class="slider round" ><span class="on"></span><span class="off"></span></div></label>
                    </div>  
                </div>
            </div>
        </div>
    </div>  
    </div>
    </div>
  )
}
