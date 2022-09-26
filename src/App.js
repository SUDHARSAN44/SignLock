import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import SideBar from "./components/SideBar";
import DocView2 from "./components/DocView2";
import DocView from "./components/DocView";
import TempSelect from "./components/TempSelect";
import TempSelect2 from "./components/TempSelect2";
import TempSelect3 from "./components/TempSelect3";
import UserForm from "./UserForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/DocView"
          element={
            <div>
              <NavBar />
              <div className="main">
                <SideBar />
                <DocView />
              </div>
            </div>
          }
        />
        <Route
          path="/DocView2"
          element={
            <div>
              <NavBar />
              <div className="main">
                <SideBar />
                <DocView2 />
              </div>
            </div>
          }
        />
        <Route
          path="/TempSelect"
          element={
            <div>
              <NavBar />
              <div className="main">
                <SideBar />
                <TempSelect />
              </div>
            </div>
          }
        />
        <Route
          path="/TempSelect2"
          element={
            <div>
              <NavBar />
              <div className="main">
                <SideBar />
                <TempSelect2 />
              </div>
            </div>
          }
        />
        <Route
          path="/TempSelect3"
          element={
            <div>
              <NavBar />
              <div className="main">
                <SideBar />
                <TempSelect3 />
              </div>
            </div>
          }
        />
        <Route
          path="/UserForm"
          element={
            <div>
              <NavBar />
              <div className="main">
                <SideBar />
                <UserForm />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
