import logo from './logo.svg';
import './App.css';
import CreateAccount from './pages/CreateAccount/CreateAccount'
import DeclineSign from './pages/Decline_Sign/DeclineSign';
import LoginCreate from './pages/LoginCreate/LoginCreate';
import AddUser from './pages/AddUser/AddUser';
import ListOfUsers from './pages/ListOfUsers/ListOfUsers';
import ReactDOM from "react-dom";
import { Route, BrowserRouter,Routes } from "react-router-dom";
function App() {
  return (
    <>
     {/* <LoginCreate/> */}
     {/* <CreateAccount/> */}
     {/* <ListOfUsers/> */}
     {/* <DeclineSign/> */}
     {/* <AddUser/> */}

      <BrowserRouter>
        <Routes>
          <Route path="receivedDocuments" element={<ListOfUsers/>}/>
          <Route path="sendDocuments" element={<ListOfUsers/>}/>
          <Route path="createUsers" element={<CreateAccount/>}/>
          <Route path="listOfUser" element={<ListOfUsers/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
