import React, { useEffect } from 'react';
import { Router } from '@reach/router';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import AssignUsers from './components/AssignUsers';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Preparation from './components/Preparation';
import Sign from './components/Sign';
import View from './components/View';
import Header from './components/Header';
import PasswordReset from './components/PasswordReset/PasswordReset';
import Welcome from './components/Welcome';

import { auth, generateUserDocument } from './firebase/firebase';
import { setUser, selectUser } from './firebase/firebaseSlice';

import ProfilePage from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';
import PrepareDocument from './components/PrepareDocument/PrepareDocument';
import SignDocument from './components/SignDocument/SignDocument';
import ViewDocument from './components/ViewDocument/ViewDocument';
import SignList from './components/Lists/SignList';
import SignedList from './components/Lists/SignedList';


export default function Routing() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();
  
    useEffect(() => {
      auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const user = await generateUserDocument(userAuth);
          const { uid, displayName, email, photoURL } = user;
          dispatch(setUser({ uid, displayName, email, photoURL }));
        }
      });
    }, [dispatch]);



  return user ? (
    <div>
      <ProfilePage/>
      <div className="d-flex split">
        <SideBar/>
        <div className="second">
        <Router>
         <Welcome path="/" />
         <AssignUsers path="/assignUsers" />
         <Preparation path="/prepareDocument" />
         <Sign path="/signDocument" />
         <View path="/viewDocument" />
         <SignList path="/signList"/>
         <SignedList path="/signedList"/>
       </Router>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Header />
      {/* <Router>
        <SignIn path="/" />
        <SignUp path="signUp" />
        <PasswordReset path="passwordReset" />
      </Router> */}


      <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>} />
            </Routes>
        </BrowserRouter>


    </div>
  );
}
