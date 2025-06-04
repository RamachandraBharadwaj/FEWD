import { useState,useEffect } from "react";
import { users } from "./users";

function Login({onLogin}) {
    const [formData, setFormData] = useState({"name":"","password":""});
    const [error, setError] = useState("");

    const handleLogin=()=>{
        const matched= users.find(x=>x.name==formData.name && x.password==formData.password);

        if(matched)
        {
            onLogin(matched);
            setError("");
        }
        else{
            setError("Invalid Username or password");
        }
    }

    return(
        <div style={{padding :"20px", margin:"10px"}}>
            <h2>Login</h2>
            <input type="text" name="username" placeholder="Username" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} />
            <br/>
            <br/>
            <input type="password" name="password" placeholder="password" value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}/>

            <button onClick={handleLogin}>submit</button>
            {error && <p style={{color:"red"}}>{error}</p>}
        </div>
    )
}

export default Login;