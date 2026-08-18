// =====================================================
// PBODY FULLSTACK ACADEMY
// STUDENT APPLICATION LAYOUT
// PREMIUM RESPONSIVE
// FULL REPLACEMENT
// =====================================================

import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import StudentNavbar from "./StudentNavbar";

import "./StudentLayout.css";


export default function StudentLayout() {

  const [collapsed, setCollapsed] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);


  // ===================================================
  // DESKTOP SIDEBAR
  // ===================================================

  function toggleSidebar() {

    setCollapsed(prev => !prev);

  }


  // ===================================================
  // MOBILE SIDEBAR
  // ===================================================

  function openMobileSidebar() {

    setMobileOpen(true);

  }


  function closeMobileSidebar() {

    setMobileOpen(false);

  }


  function toggleMobileSidebar() {

    setMobileOpen(prev => !prev);

  }


  // ===================================================
  // RENDER
  // ===================================================

  return (

    <div
      className={`
        studentLayout
        ${collapsed ? "sidebarCollapsed" : ""}
        ${mobileOpen ? "mobileSidebarOpen" : ""}
      `}
    >


      {/* =================================================
          MOBILE OVERLAY
      ================================================= */}

      {mobileOpen && (

        <button
          type="button"
          className="mobileSidebarOverlay"
          aria-label="Close navigation"
          onClick={closeMobileSidebar}
        />

      )}


      {/* =================================================
          SIDEBAR
      ================================================= */}

      <Sidebar
        collapsed={collapsed}
        toggleSidebar={toggleSidebar}
        mobileOpen={mobileOpen}
        closeMobileSidebar={closeMobileSidebar}
      />


      {/* =================================================
          MAIN WORKSPACE
      ================================================= */}

      <div className="studentWorkspace">


        {/* =================================================
            STUDENT NAVBAR
        ================================================= */}

        <StudentNavbar
          onMenuClick={toggleMobileSidebar}
        />


        {/* =================================================
            PAGE CONTENT
        ================================================= */}

        <main className="studentContent">

          <Outlet />

        </main>


      </div>


    </div>

  );

}