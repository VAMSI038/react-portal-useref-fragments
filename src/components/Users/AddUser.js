import React,{useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser=props=>{
        const [username,setUsername]=useState('');
        const [age,setAge]=useState('');
        const [error,setError]=useState();
        const nameHandler=event=>{
            setUsername(event.target.value);
        };
        const ageHandler=event=>{
            setAge(event.target.value);
        };
    const addUserHandler=event=>{
        event.preventDefault();
        if(username.trim().length===0 || age.trim().length===0){
            setError({
                title:'Invalid name and age',
                message:'Please enter valid name and age (non-empty values)'
            });
            return;
        }
        if(+age<1){
            setError({
                title:'Invalid age',
                message:'Please enter age (>0)'
            });
            return;
        }
        props.onaddUser(username,age);
        setUsername('');
        setAge('');
    };
    const errorHandler=()=>{
        setError(null);
    };
    return(
        <Wrapper>
           {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' onChange={nameHandler} value={username}/>
            <label htmlFor='age'>Age (Years)</label>
            <input type='number' id='age' onChange={ageHandler} value={age}/>
            <Button type='submit'>Add User</Button>
        </form>
        </Card>
        </Wrapper>
    );
};

export default AddUser;