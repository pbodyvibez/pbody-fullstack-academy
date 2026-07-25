// ===============================================
// PBODY FULLSTACK ACADEMY
// AI CUSTOM HOOK
// ===============================================


import { useContext } from "react";

import AIContext from "./AIContext";



// ===============================================
// USE AI HOOK
// ===============================================


export default function useAI(){



  const context = useContext(AIContext);



  if(!context){


    throw new Error(

      "useAI must be used inside AIProvider"

    );


  }



  return context;



}