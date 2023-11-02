'use client'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { middlewere } from "../middleware/middleware"
import HomeComponent from "./HomeComponent"

function HomePage() {
  const router = useRouter()
const [user, setUser] = useState({
  id: "",
  userData: {
    userName:"",
    userLastname:"",
    userEmail: "",
    userToken:""
  }
})

    useEffect(() => {
       const user = window.sessionStorage.getItem("userData")
       const userId = window.sessionStorage.getItem("user");
       
       if(!userId){
        router.push("/")
       }else{
         middlewere(user.userToken)
       }
       
       setUser({
        id: userId,
        userData: JSON.parse(user)
       })
    }, [])
    
    return (
      <div>
        {!user.id ? (
          <p>Ingreso No Autorizado</p>
        ) : (
          <HomeComponent user={user}/>
        )}
        {/* <p>Bienvenido nuevamente {user.userData.userName}!</p> */}
      </div>
    );
}

export default HomePage