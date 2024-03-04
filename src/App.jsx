import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import FullScreen from "./FullScreen";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FullScreen />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
