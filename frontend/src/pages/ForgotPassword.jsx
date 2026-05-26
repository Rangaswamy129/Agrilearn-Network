import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const ForgotPassword = () => {

const navigate = useNavigate();

const [email,setEmail] = useState("");

const handleSubmit = async (e) => {

e.preventDefault();

try{

await axios.post(
"http://localhost:5000/api/users/forgot-password",
{email}
);

alert("Password reset link sent");

navigate("/login");

}catch(error){

alert(
error.response?.data?.message ||
"Something went wrong"
);

}

};

return (

<div className="auth-viewport-wrapper">

<div
className="auth-brand-corner"
onClick={() => navigate("/")}
>
<span className="brand-icon">⬢</span>
AgriLearnNetwork
</div>

<div className="auth-glass-card">

{/* Back Button */}

<button
className="back-login-btn"
onClick={() => navigate("/login")}
>
⬅ Back to Login
</button>

<h1 className="auth-main-title">
Forgot Password
</h1>

<p className="auth-subtitle">
Enter your registered email
</p>

<form
className="auth-form"
onSubmit={handleSubmit}
>

<div className="input-group">

<span className="input-field-icon">
✉
</span>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

</div>

<button
type="submit"
className="auth-primary-submit"
>
Send Reset Link
</button>

</form>

</div>

</div>

);

};

export default ForgotPassword;