import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav()
{
    return(
        <nav>
            <Link to="/" >HOME</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/aboutus">ABOUT US</Link>
        </nav>
    )
};