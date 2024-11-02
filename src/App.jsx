import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CoherenceApplied from "./pages/coherenceApplied";
import GeneralEditionPage from "./pages/generalEditionPage";
import LandingPage from "./pages/landingPage";
import Paymentpage from "./pages/paymentPage";
import StorePage from "./pages/store";
import SubArticlePage from "./pages/subarticlePage";
import { NavigationProvider } from "./store/context/navigationContext";

function App() {
  return (
    <Router>
      <NavigationProvider>
        <div className="w-screen h-screen font-sans">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/coherenceapplied" element={<CoherenceApplied />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/article" element={<SubArticlePage />} />
            <Route path="/generaledition" element={<GeneralEditionPage />} />
            <Route path="/payment" element={<Paymentpage />} />
          </Routes>
        </div>
      </NavigationProvider>
    </Router>
  );
}

export default App;
