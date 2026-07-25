// ===============================================
// PBODY FULLSTACK ACADEMY
// CAPACITOR SETUP
// ===============================================


import { Capacitor } from "@capacitor/core";



export async function setupMobile(){


  const platform = Capacitor.getPlatform();



  // Only run native plugins on Android/iOS

  if(
    platform === "android" ||
    platform === "ios"
  ){

    const { StatusBar } = await import(
      "@capacitor/status-bar"
    );


    await StatusBar.setBackgroundColor({

      color:"#0d47a1"

    });


  }


}