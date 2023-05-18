import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import AboutPage from "./components/about";
import ContactPage from "./components/contact";
import Layout from "./components/layouts/Layout";
import HooksPage from "./components/hooks";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/hooks" element={<HooksPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
