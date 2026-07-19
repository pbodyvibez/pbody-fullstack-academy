import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { verifyPayment } from "../services/paymentService";

import AppLayout from "../components/layout/AppLayout";

import Logo from "../assets/images/logo.png";

export default function PaymentSuccess(){

const navigate = useNavigate();

const [searchParams] = useSearchParams();

const [message,setMessage] = useState("Verifying payment...");

useEffect(()=>{

const verify = async()=>{

const reference = searchParams.get("reference");

if(!reference){

setMessage("Payment reference not found.");

return;

}

try{

const result = await verifyPayment(reference);

if(result.success){

setMessage("🎉 Payment successful! Premium activated.");

setTimeout(()=>{

navigate("/dashboard");

},3000);

}
else{

setMessage("Payment verification failed.");

}

}
catch(error){

console.error(error);

setMessage("Unable to verify payment.");

}

};

verify();

},[navigate,searchParams]);

return(

<AppLayout>

<div className="paymentSuccessPage">

<img
src={Logo}
alt="PBody FullStack Academy"
/>

<h1>{message}</h1>

<p>

Please wait while we complete your subscription.

</p>

</div>

</AppLayout>

);

}