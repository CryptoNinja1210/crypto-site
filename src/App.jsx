import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import Team from "./pages/Team/index";
import Product from "./pages/Product/index";
import Portfolio from "./pages/Portfolio";
import SignIn from "./pages/Login";
import Contacts from "./pages/Contats";
import Market from "./pages/Market";
import Careers from "./pages/Careers";
import News from "./pages/News/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/team" element={<Team />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/market" element={<Market />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
