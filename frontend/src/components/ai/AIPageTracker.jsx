// ===============================================
// PBODY FULLSTACK ACADEMY
// AI PAGE TRACKER
// ===============================================


import { useLocation } from "react-router-dom";

import { useEffect } from "react";

import useAI from "../../ai/useAI";



// ===============================================
// TRACK CURRENT PAGE
// ===============================================


export default function AIPageTracker(){


  const location = useLocation();


  const {

    setPage

  } = useAI();




  useEffect(()=>{


    setPage(

      location.pathname

    );


  },[location.pathname]);




  return null;


}