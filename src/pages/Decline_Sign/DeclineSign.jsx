import React from 'react'
import './DeclineSign.css'

export default function DeclineSign() {
  return (
    <div className='Decline container'>

        <div className="doc">
            <img src="https://signaturely.com/wp-content/uploads/2020/06/marketing_agreement_template1.jpg" alt="" />
        
     
        </div>
        <div className="btns">
            <button className='decline-btn'>Decline</button>
            <button className='accept-btn'>Accept</button>
        </div>
        <div className="reason">
            <textarea name="" id="" cols="70" rows="8" placeholder='Reason for Decline'></textarea>
        </div>
        <div className="main-btns">
            <button className='cancel-btn'>Cancel</button>
            <button className='decline-btn'>Decline</button>
        </div>

    </div>
  )
}
