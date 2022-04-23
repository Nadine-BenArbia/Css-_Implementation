import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MintingPage from "./pages/MintingPage";

function App() {
  render(
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/MintingPage" element={<MintingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );
}

export default App;
