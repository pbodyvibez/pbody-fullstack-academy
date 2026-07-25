import useInstallPrompt from "../hooks/useInstallPrompt";


export default function InstallButton(){


const {

canInstall,

installApp

}=useInstallPrompt();




if(!canInstall){

return null;

}




return (

<button

onClick={installApp}

style={{

position:"fixed",

bottom:"25px",

right:"25px",

padding:"14px 22px",

borderRadius:"30px",

background:"#fbbf24",

color:"#061b4f",

border:"none",

fontWeight:"700",

cursor:"pointer",

zIndex:9999

}}

>

🚀 Install PBody Academy App

</button>

);


}