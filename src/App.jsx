import React from "react";
import { Button } from "@material-tailwind/react";
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <div className="md:mx-20">
        <Navbar />
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
