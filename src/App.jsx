import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Advocacy from "./pages/Advocacy";
import Awareness from "./pages/Awareness";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Education from "./pages/Education";
import Gallery from "./pages/Gallery";
import Mission from "./pages/Mission";
import School from "./pages/School";
import Sponsor from "./pages/Sponsor";
import StakeHolder from "./pages/StakeHolder";
import Succes from "./pages/Succes";
import Teachers from "./pages/Teachers";
import Therapeutic from "./pages/Therapeutic";
import Voulenteer from "./pages/Voulenteer";
import EarlyIdentification from './pages/EarlyIdentification';
import EarlyIntervention from './pages/EarlyIntervention';
import Empowerment from './pages/Empowerment';
import Celebration from './pages/Celebration';
import Thankyou from "./pages/Thankyou";
import VerifyDonation from "./pages/VerifyDonation";
import DonateInHonor from "./pages/DonateInHonor";
import DonateInMemory from "./pages/DonateInMemory";
import Occasional from "./pages/Occasional";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/advocacy" element={<Advocacy />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/education" element={<Education />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/school" element={< School/>} />
          <Route path="/sponsor" element={< Sponsor/>} />
          <Route path="/stakeholder" element={< StakeHolder/>} />
          <Route path="/success" element={< Succes/>} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/therapeutic" element={< Therapeutic/>} />
          <Route path="/volunteer" element={<Voulenteer />} />
          <Route path="/early-identification" element={<EarlyIdentification />} />
          <Route path="/early-intervention" element={<EarlyIntervention />} />
          <Route path="/empowerment" element={<Empowerment />} />
          <Route path="/celebration-of-major-days" element={<Celebration />} />
          <Route path="/thank-you" element={<Thankyou />} />
          <Route path="/verify-donation" element={<VerifyDonation />} />
          <Route path="/donate-in-honor" element={<DonateInHonor />} />
          <Route path="/donate-in-memory" element={<DonateInMemory />} />
          <Route path="/occasional" element={<Occasional />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
