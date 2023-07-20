import React, { useState } from 'react'
import Header from './component/Header'
// import Learn from './component/Learn'
import "./App.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const App = () => {
  const[name,setName]= useState("");
  const[email,setEmail]= useState("");
  const[data,setData]= useState([]);

  const addData = () =>{
    setData([...data,{
      name,
      email,
    }]);
    setName("")
    setEmail("")
  };
   
  const removeItem = (index) =>{
    let arr=data;
    arr.splice(index,1);
    setData([...arr]);
  }




  return (
    <div className='App'>
      {/* <h1>{name}</h1>
      <h1>{email}</h1> */}
      <Header/>
      <div className="form">

      <Stack spacing={2} direction="row">

      <TextField 
      id="outlined-basic" 
      label="Name" 
      variant="outlined" 
      value={name} 
      onChange={(event) => setName(event.target.value)}
      />
      <TextField 
      id="outlined-basic" 
      label="Email"
      variant="outlined" 
      value={email}
      onChange={(event) => setEmail(event.target.value)} 
      />
      <Button variant="contained" color="success" onClick={addData}>
        <AddIcon/>
      </Button>
      </Stack>
      
      </div>
      {/* <Learn/> */}


      <div className='data'>
       <div className='data_val'>
         <h4>name</h4>
         <h4>Email</h4>
         <h4>Delete</h4>
       </div>
       {
        data.map((element,index)=>{
          return(
            <div key={index} className='data_val'>
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>

              <stack>
                <button onClick={()=> removeItem(index)} variant="contained" color="error">
                  <DeleteIcon/>
                </button>
              </stack>
            </div>
          )
        })
       }
      </div>
    </div>
    
  )
}

export default App