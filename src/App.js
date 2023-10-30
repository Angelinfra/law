// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import MoreInfo from "./pages/MoreInfo";
import Laws from "./pages/Laws";
import SubLaw from "./pages/SubLaw";
import SubLawDetails from "./pages/SubLawDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Lawyer" index element={<Home />} />
        <Route path="/Lawyer/blog" element={<Blog />} />
        <Route path="/Lawyer/sub" element={<MoreInfo />} />
        <Route path="/Lawyer/law" element={<Laws />} />
        <Route path="/Lawyer/LawSection" element={<SubLaw />} />
        <Route path="/Lawyer/LawDetails" element={<SubLawDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
