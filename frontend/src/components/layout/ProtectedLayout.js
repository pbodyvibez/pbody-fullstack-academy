import { Outlet } from "react-router-dom";
import AppLayout from "./AppLayout";


export default function ProtectedLayout(){

return(

<AppLayout>

<Outlet />

</AppLayout>

);

}