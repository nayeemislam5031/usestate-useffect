
import './App.css';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useEffect, useState } from 'react';



function App() {
  // useing useState
  const [likeColor, setLikeColor] = useState("");
  const [users, setUsers] = useState([]);
  const [singleuser, setSingleuser] = useState({});
  const [randomUser, setRandomUser] = useState({});

  // USING USEFFCT FOR FETCH
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => setUsers(data))


    //singleuser
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setSingleuser(data));
    
    //randomUser
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setRandomUser(data.results[0]));

  },[])


  const handleLike =()=> {
    const color = likeColor ? '' : 'primary';
    setLikeColor(color);
  }

  // declaring useState value in single 
  const {name} = singleuser;
  const { gender} = randomUser;
  
  return (
    <div>
      <h1>Module 40 advande intermideteBonus</h1>
      <ThumbUpIcon onClick={handleLike} color={likeColor}></ThumbUpIcon>

      <h2>Name: {name}</h2>
      random user

      <h3>Gender: {gender}</h3>      
      <h3>Name: {randomUser.name?.first } {randomUser.name?.last} </h3>
      

      {/* USING MAP FOR DECLAR ALL STATE VALUE  */}

      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </div>
  );
}


export default App;
