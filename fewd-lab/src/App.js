import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import DragAndDropExample from './Dragger';
import Login from './Login';
import ContactUs from './ContactUs';

function App() {

  const [user,setUser] = useState(null);


  //check for session on loadup

  useEffect(()=>{
    const savedUser=localStorage.getItem("loggedInUser");
    if(savedUser){
      setUser(JSON.parse(savedUser));
    }
  },[]); //empty dependency array means it only runs once when the component mounts. it checks if there is a user in session storage and sets it to state if there is.
  //if there is a user in session storage, it will be set to state and the user will be logged in.


  useEffect(()=>{
    if(user){
      localStorage.setItem("loggedInUser",JSON.stringify(user));
    }else{
      localStorage.removeItem("loggedInUser");
    }
  },[user]); //this effect runs whenever the user state changes. if there is a user, it saves it to session storage, otherwise it removes it from session storage.
  //this is to save the user to session storage when they log in or log out. it is used to persist the user session across page reloads.
  //this is useful for keeping the user logged in even if they refresh the page or navigate away and come back.
  //session storage is used instead of local storage because it is cleared when the tab is closed, which is more secure for sensitive information like user sessions.
  //if you want to keep the user logged in even after the tab is closed, you can use local storage instead of session storage.

  return (
    <div className="App">
      {user ?(
        <ContactUs user={user} onLogout={()=>setUser(null)} />
      ):(
        <Login onLogin={setUser}/>
      )}
    </div>
  );


}

export default App;
