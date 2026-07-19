import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/login.css";

export default function ForgotPassword() {

const [email,setEmail]=useState("");

const [sent,setSent]=useState(false);

const handleSubmit=(e)=>{

e.preventDefault();

setSent(true);

};

return(

<div className="login-page">

<div className="login-overlay"></div>

<div className="login-card">

<h1>

Forgot Password

</h1>

<p>

Enter your email address.

</p>

{

sent?

<>

<div className="login-success">

If an account exists,

a reset link will be sent.

</div>

<Link to="/login">

Back to Login

</Link>

</>

:

<form onSubmit={handleSubmit}>

<div className="input-group">

<label>Email</label>

<input

type="email"

required

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="Email Address"

/>

</div>

<button

className="login-btn"

type="submit"

>

Send Reset Link

</button>

</form>

}

</div>

</div>

);

}