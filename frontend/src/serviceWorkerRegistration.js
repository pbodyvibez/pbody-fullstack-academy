// PBody Fullstack Academy
// Service Worker disabled for now.
// Will be enabled after final PWA optimization.


export function register(){

console.log(
"PBody Service Worker ready for future PWA deployment"
);


}



export function unregister(){


if(
"serviceWorker" in navigator
){

navigator.serviceWorker.ready

.then((registration)=>{


registration.unregister();


console.log(
"PBody Service Worker removed"
);


});


}


}