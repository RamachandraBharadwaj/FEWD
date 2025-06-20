import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

function Home()
{
    return(
        <>
            <Nav />
            <h1> Welcome to THE MAIN PAGE !!!</h1>
        </>
    )
}