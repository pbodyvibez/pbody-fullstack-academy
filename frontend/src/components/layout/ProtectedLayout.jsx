import { Outlet } from "react-router-dom";

import StudentLayout from "./StudentLayout";


export default function ProtectedLayout(){


return(


<StudentLayout>


<Outlet />


</StudentLayout>


);


}