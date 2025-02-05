import React from "react";
import { Button } from "@material-tailwind/react";
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router";
import Userlayout from "./Userlayout";
const App = () => {
  return (
    <div>
      <div className="md:mx-20">
        <Navbar />
      </div>
      <Routes>
        <Route path="/*" element={<Userlayout />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
