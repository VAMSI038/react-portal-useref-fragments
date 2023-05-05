import React,{useState,Fragment} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';


function App() {
  const [usersList,setUsersList]=useState([]);
  const adduser=(uName,uAge)=>{
    setUsersList((prev)=>{
      return [...prev,{name:uName,age:uAge,id:Math.random().toString()}];
    })
  }
  return (
    <Fragment>
        <AddUser onaddUser={adduser}/>
        <UserList users={usersList}/>
    </Fragment>
  );
}

export default App;
