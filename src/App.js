import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import AboutPage from "./components/pages/About";
import ContactPage from "./components/pages/Contact";
import Layout from "./components/layouts/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
