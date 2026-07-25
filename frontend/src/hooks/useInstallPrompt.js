import { useEffect, useState } from "react";


export default function useInstallPrompt(){


const [installPrompt,setInstallPrompt]=useState(null);

const [canInstall,setCanInstall]=useState(false);





useEffect(()=>{


function handleBeforeInstallPrompt(event){


event.preventDefault();


setInstallPrompt(event);


setCanInstall(true);


}



window.addEventListener(

"beforeinstallprompt",

handleBeforeInstallPrompt

);





window.addEventListener(

"appinstalled",

()=>{


setCanInstall(false);


setInstallPrompt(null);


}

);





return()=>{


window.removeEventListener(

"beforeinstallprompt",

handleBeforeInstallPrompt

);


};


},[]);






async function installApp(){


if(!installPrompt) return;



installPrompt.prompt();



const result =
await installPrompt.userChoice;



if(result.outcome==="accepted"){


console.log(
"PBody Academy installed"
);


}



setInstallPrompt(null);

setCanInstall(false);


}






return {

canInstall,

installApp

};


}