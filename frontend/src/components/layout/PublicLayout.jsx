// =====================================================
// PBODY FULLSTACK ACADEMY
// PUBLIC APPLICATION LAYOUT
// PREMIUM RESPONSIVE
// FULL REPLACEMENT
// =====================================================

import {
  Outlet
} from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "./PublicLayout.css";


export default function PublicLayout() {

  return (

    <div className="publicLayout">

      <Navbar />

      <main className="publicContent">
        <Outlet />
      </main>

      <Footer />

    </div>

  );

}