import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

const [users , setUser]=useState()

console.log(users)

useEffect((   )=>{

    const fetchUser = async() =>{
        try{
        const response = await fetch(`https://dummyjson.com/users`)
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
    <div className='homes' ><h1>Welcome to home page</h1>
<div className="home">

        
{
    users?.users.map((user)=>{
        return<>

        <div className="hero">
        <h1>{user.id}</h1>
      { <Link to={`/profile/${user.id}`}> ID</Link> }
        <h2>{user.firstName}</h2>
        </div>
      
        </>
    })
}
</div>
    </div>
  )
}

export default Home
