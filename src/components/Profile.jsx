import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

  const {id}=useParams()
  console.log(id)


  const [users , setUser]=useState([])
  
  console.log(users)
  
  useEffect(( )=>{
  
      const fetchUser = async() =>{
          try{
          const response = await fetch(`https://dummyjson.com/users/${id}`)
          const data = await response.json()
          setUser(data)
          }
          catch (error){
          console.log(error)
          
          }
          
          }
  fetchUser()
  
  },[])
  return (
    <div>

      <div className="boxs">
<div className="box">
       
<p> <span>Id :</span>   {users.id}</p>
<p><span>First name :</span> {users.firstName}</p> 
<p><span>Last name :</span> {users.lastName} </p>
<p><span>Age :</span> {users.age}</p>
<p><span>Phone :</span> {users.phone} </p>

</div>

</div>

    </div>
  )
}

export default Profile

