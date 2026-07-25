import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AIInitializer from "../ai/AIInitializer";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AIPageTracker from "../ai/AIPageTracker";
import AIAssistant from "../ai/AIAssistant";

import "./AppLayout.css";


export default function AppLayout({ children }) {


  const location = useLocation();



  const publicRoutes = [

    "/",
    "/home",
    "/login",
    "/register",
    "/pricing",
    "/payment-success"

  ];



  const isPublic = publicRoutes.includes(location.pathname);



  const [collapsed, setCollapsed] = useState(() => {

    return localStorage.getItem("pbody_sidebar") === "collapsed";

  });



  useEffect(() => {


    const updateSidebar = () => {


      setCollapsed(

        localStorage.getItem("pbody_sidebar") === "collapsed"

      );


    };



    window.addEventListener(
      "storage",
      updateSidebar
    );


    window.addEventListener(
      "sidebar-change",
      updateSidebar
    );



    return () => {


      window.removeEventListener(
        "storage",
        updateSidebar
      );


      window.removeEventListener(
        "sidebar-change",
        updateSidebar
      );


    };


  }, []);




  if (isPublic) {


    return (

      <div className="publicLayout">


        <Navbar />



        <main className="publicContent">


          {children}



        </main>


<AIInitializer />

<AIPageTracker />

<AIAssistant />

      </div>


    );


  }




  return (


    <div

      className={

        collapsed

        ? "appLayout collapsed"

        : "appLayout"

      }

    >



      <Sidebar />



      <main className="appContent">


        {children}



      </main>



      <AIAssistant />



    </div>


  );


}