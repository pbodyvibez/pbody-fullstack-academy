import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function ScrollRestoration(){


const location = useLocation();



useEffect(()=>{


const savedPosition = sessionStorage.getItem(
`scroll-${location.pathname}`
);



if(savedPosition){

window.scrollTo(
0,
Number(savedPosition)
);

}



const savePosition = ()=>{


sessionStorage.setItem(

`scroll-${location.pathname}`,

window.scrollY

);


};



window.addEventListener(
"scroll",
savePosition,
{
passive:true
}
);



return()=>{


window.removeEventListener(
"scroll",
savePosition
);


};



},[location.pathname]);



return null;

}