// ===============================================
// PBODY FULLSTACK ACADEMY
// AI INITIALIZATION HOOK
// ===============================================


import { useEffect } from "react";

import useAI from "./useAI";



// ===============================================
// AI INITIALIZER
// ===============================================


export default function useAIInitialize(){


  const {

    initializeAI,

    setPage


  } = useAI();




  useEffect(()=>{



    initializeAI();



  },[]);




  const updateAIPage = (page)=>{


    setPage(page);


  };



  return {


    updateAIPage


  };


}