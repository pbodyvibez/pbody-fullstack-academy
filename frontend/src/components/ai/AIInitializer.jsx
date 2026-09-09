// ===============================================
// PBODY FULLSTACK ACADEMY
// AI INITIALIZER
// ===============================================

import { useEffect, useRef } from "react";

import useAI from "../../ai/useAI";


// ===============================================
// AI INITIALIZER
// ===============================================

export default function AIInitializer() {

  const { initializeAI } = useAI();

  const initialized = useRef(false);


  useEffect(() => {

    if (initialized.current) {
      return;
    }

    initialized.current = true;

    initializeAI();

  }, [initializeAI]);


  return null;

}