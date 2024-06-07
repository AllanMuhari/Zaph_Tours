import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import Home from "../src/pages/Home/Home";
import Destinations from "../src/pages/Destinations/Destination";
import Packages from "../src/pages/Packages/Packages";
import Contacts from "../src/pages/Contacts/Contacts";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route exact path="/destinations" element={<Destinations />} />
          <Route exact path="/packages" element={<Packages />} />
          <Route exact path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
