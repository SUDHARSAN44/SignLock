import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { auth, signInWithGoogle } from '../../firebase/firebase';
import img from '../../images/createAccount.jpg'; 
import logo from '../../images/singlock.png'
import './SIgnIn.css'

import {
  Box,
  Button,
  Toast,
  Container,
  Text,
  TextField,
  Heading,
} from 'gestalt';
import 'gestalt/dist/gestalt.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  return (
    <div>
        <div className='container-fluid logo' >
      <img src={logo} alt=""  />
    </div>


    <div class="row justify-content-center align-items-center g-2">
      <div class="col-sm-6 create-img">
      <img src={img} alt="" />
      </div>
 
      <div class="col create-form  p-0">
        
  
            <Button onClick={signInWithGoogle} text="Sign in with Google" color="red" inline />
    
      </div>
    </div>
     
    </div>
  );
};
export default SignIn;
