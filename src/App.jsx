import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import YouTube from "./pages/YouTube";
import Courses from "./pages/Courses";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <YouTube />
      <Courses />
      <Footer />
    </>
  );
}

export default App;
