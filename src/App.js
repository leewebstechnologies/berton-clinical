import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Strategy from "./pages/strategy/Strategy";
import Bioanalytical from "./pages/bioanalytical/Bioanalytical";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Drug from "./pages/drug/Drug";
import Medical from "./pages/medical/Medical";
import Staffing from "./pages/staffing/Staffing";
import Clinical from "./pages/clinical/Clinical";
import Rescue from "./pages/rescue/Rescue";
import Neuroscience from "./pages/neuroscience/Neuroscience";
import Ophthalmology from "./pages/ophthalmology/Ophthalmology";
import Dermatology from "./pages/dermatology/Dermatology";
import Corporate from "./pages/corporate/Corporate";
import Locations from "./pages/locations/Locations";
import Investigators from "./pages/investigators/Investigators";
import Faq from "./pages/faq/Faq";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="strategy" element={<Strategy />} />
            <Route path="bioanalytical" element={<Bioanalytical />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="drug" element={<Drug />} />
            <Route path="medical" element={<Medical />} />
            <Route path="staffing" element={<Staffing />} />
            <Route path="clinical" element={<Clinical />} />
            <Route path="rescue" element={<Rescue />} />
            <Route path="neuroscience" element={<Neuroscience />} />
            <Route path="ophthalmology" element={<Ophthalmology />} />
            <Route path="dermatology" element={<Dermatology />} />
            <Route path="corporate" element={<Corporate />} />
            <Route path="locations" element={<Locations />} />
            <Route path="investigators" element={<Investigators />} />
            <Route path="blog" element={<Blog />} />
            <Route path="faq" element={<Faq />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
