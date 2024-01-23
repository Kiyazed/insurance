import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Landing from "./pages/Landingpage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Form from "./pages/Form";
import Footer from "./component/Footer";
import Life from "./pages/lifeInsurance/Life";
import LifePolicy from "./pages/lifeInsurance/LifePolicy";
import LifePayment from "./pages/lifeInsurance/LifePayment";
import Success from "./pages/lifeInsurance/Success";
import Certificate from "./pages/lifeInsurance/Certificate";




function App() {
  return (
    <div className="">
      
      <BrowserRouter>

       <Navbar/>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/start" element={<Login/>} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/life" element={<Life/>} />
          <Route path="/policy" element={<LifePolicy/>} />
          <Route path="/lifepayment" element={<LifePayment/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/certificate" element={<Certificate/>} />
       
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
