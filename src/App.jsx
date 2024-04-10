import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}
