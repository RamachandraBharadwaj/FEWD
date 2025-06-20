import { useState,useEffect } from "react";


export default function Login({onLogin}){
    const [logindet,setlogindet]=useState({
        "username":"",
        "password":"",
    });
    const [error,setError]=useState("");

    const handleChange=(e)=>{
        setlogindet({
            ...logindet,
            [e.target.name]:e.target.value
        })
    };

    const onSubmit=()=>{
        const users=JSON.parse(sessionStorage.getItem("users")) || [];
        const matched=users.find(x=>x.username==logindet.username && x.password==logindet.password);
        if(matched){
            sessionStorage.setItem("loggedInuser",JSON.stringify(matched))
        }

    }

};