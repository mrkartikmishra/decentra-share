import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SharedByMe from "./pages/SharedByMe";
import SharedByOthers from "./pages/SharedByOthers";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen bg-primary">
      <Header />
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shared-by-me" element={<SharedByMe />} />
          <Route path="/shared-by-others" element={<SharedByOthers />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
