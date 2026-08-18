import { useLocation } from "react-router-dom";

import PublicLayout from "./PublicLayout";
import StudentLayout from "./StudentLayout";


export default function AppLayout({
children
}){


const location = useLocation();



const publicRoutes = [

"/",
"/about",
"/contact",
"/pricing",
"/privacy",
"/terms"

];



const isPublic =
publicRoutes.includes(
location.pathname
);



if(isPublic){


return(

<PublicLayout>

{children}

</PublicLayout>

);


}



return(

<StudentLayout>

{children}

</StudentLayout>

);


}