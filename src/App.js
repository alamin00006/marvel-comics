import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Navbar2 from "./components/Home/Navbar/Navbar2";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Navbar2></Navbar2>
      
      <Routes>
           
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signUp" element={<SignUp></SignUp>}></Route>
          <Route path="/signIn" element={<Login></Login>}></Route>
      </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
