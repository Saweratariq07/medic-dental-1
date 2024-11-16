import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/about/Header';
import Footer from './components/footer/Footer';
import Nav from './components/home/Nav';
import Rights from './components/patient/Rights';
import Statements from './components/state/Statements';

import './input.css';
import Hours from "./components/hours/Hours";
import Doctor from "./components/doctors/Doctor";
import Contact from "./components/contact/Contact";
import Privacy from "./components/privacy/Privacy";

import FeesSection from "./components/fees/FeesSection";
import Service from "./components/service/Service";
import Appointment from "./components/appoin/Appoinment";
import Links from "./components/links/Links";
// import Links from "./components/links/Links";

import Inform from "./components/info/Inform";
import Women from "./components/women/Women";
import Cookie from "./components/cookie/Cookie";
import Terms from "./components/terms/Terms";
import Main from "./components/main/Main";
import Meen from "./components/meen/Meen";

import Servs from "./components/servs/Servs";
import Dentalss from "./components/dent/Dentalss";
import Heeder from "./components/navbar/Heeder";
import Doctors from "./components/doctor/Doctors";
import Appoin from "./components/appoinment/Appoin";
import Open from "./components/open/Open";

function App() {
  return (
    <div className='container-fluid'>

      {/* <Nav /> */}
      <Routes>
 <Route path="/" element={<Header />} />
 <Route path="/state" element={<Statements />} />
 <Route path="/main" element={<Main />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/patient" element={<Rights />} />
 <Route path="/hours" element={<Hours />} />
 <Route path="/servs" element={<Servs />} />
 <Route path="/dent" element={<Dentalss />} />
 {/* <Route path="/dental" element={<Dental />} /> */}
 <Route path="/privacyPolicy" element={<Privacy />} />
 <Route path="/fees" element={<FeesSection />} />
 <Route path="/appoin" element={<Appointment />} />
 <Route path="/service" element={<Service />} />
 <Route path="/links" element={<Links />} />
 <Route path="/meen" element={<Meen />} />
 <Route path="/info" element={<Inform />} />
 {/* <Route path="/women" element={<Women />} /> */}
 <Route path="/cookie" element={<Cookie />} />
 <Route path="/terms" element={<Terms />} />

 <Route path="/doctors" element={<Doctor />} />


 {/* for dental links */}
 <Route path="/doctor" element={<Doctors />} />
 <Route path="/appoinment" element={<Appoin />} />
 <Route path="/navbar" element={<Heeder />} />
 <Route path="/open" element={<Open />} />
 <Route path="/doctor" element={<Doctors />} />
 <Route path="/doctor" element={<Doctors />} />
 <Route path="/doctor" element={<Doctors />} />
 <Route path="/doctor" element={<Doctors />} />
 <Route path="/doctor" element={<Doctors />} />
 <Route path="/doctor" element={<Doctors />} />
 
 {/* <Route path="/doctor" element={<Doctors />} /> */}
 {/* <Route path="/doctor" element={<Doctors />} /> */}


 </Routes>
 <Footer />
    </div>
  );
}

export default App;
