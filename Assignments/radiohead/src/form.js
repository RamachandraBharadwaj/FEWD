import React,{useState} from "react";


function Form()
{
    const[name,setName]=useState("");

    const changing=(e)=>{
        setName(e.target.value);
    }

    const submit=(e)=>{
        e.preventDefault();
        console.log("hello subbarao");
        alert(`hello ,${name}`);
    }

    return(
        <>
            <Form>
                <h1> form</h1>
                <label for="name">Name</label>
                <input type="text" placeholder="enter your name !" value={name} onChange={changing}/>
                <button type="submit" onClick={submit}>Submit</button>
            </Form>
        </>
    )
}




export default Form;