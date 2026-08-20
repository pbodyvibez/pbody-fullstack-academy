// =====================================================
// PBODY FULLSTACK ACADEMY
// STUDENT APPLICATION LAYOUT
// PREMIUM FULL RESPONSIVE
// FULL REPLACEMENT
// =====================================================

import { useEffect, useState } from "react";
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
  // CLOSE MOBILE DRAWER WHEN SCREEN BECOMES DESKTOP
  // ===================================================

  useEffect(() => {

    function handleResize() {

      if (window.innerWidth > 768) {

        setMobileOpen(false);

      }

    }


    window.addEventListener(
      "resize",
      handleResize
    );


    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );

    };

  }, []);


  // ===================================================
  // LOCK BODY SCROLL WHEN MOBILE DRAWER IS OPEN
  // ===================================================

  useEffect(() => {

    if (
      mobileOpen &&
      window.innerWidth <= 768
    ) {

      document.body.style.overflow = "hidden";

    } else {

      document.body.style.overflow = "";

    }


    return () => {

      document.body.style.overflow = "";

    };

  }, [mobileOpen]);


  // ===================================================
  // ESCAPE KEY
  // ===================================================

  useEffect(() => {

    function handleKeyDown(event) {

      if (
        event.key === "Escape" &&
        mobileOpen
      ) {

        setMobileOpen(false);

      }

    }


    document.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [mobileOpen]);


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