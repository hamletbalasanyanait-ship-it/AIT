import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/anhatner/anhatner-himnakan/footer";
import Business from "./Business/Business";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;