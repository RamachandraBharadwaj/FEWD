import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import {BrowseRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import ContactUs from './ContactUs';

function App() {

  const [user,setUser] = useState(null);

  useEffect(()=>{
    const savedUser=sessionStorage.getItem("loggedInuser");
    if(savedUser){
      setUser(JSON.parse(savedUser));
    }
  },[]); // This effect runs once when the component mounts to check if there is a user in session storage.


  useEffect(()=>{
    if(user){
      sessionStorage.setItem("loggedInuser",JSON.stringify(user));
    }
    else{
      sessionStorage.removeItem("loggedInuser");
    }
  },[user]);
  // This effect runs whenever the user state changes. If there is a user, it saves it to session storage, otherwise it removes it from session storage.


  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={Home}></Route>
            <Route path="/login" element={<Login onLogin={setUser} />}></Route>
          </Routes>
        </Router>
        <Nav></Nav>
      </>
    </div>
  );
}

export default App;
