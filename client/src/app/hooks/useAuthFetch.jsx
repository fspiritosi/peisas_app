import axios from "axios"
import { useRouter } from "next/navigation"


export function useAuthFetch() {  
    const router = useRouter()
    
      
    const authRouter = async (endpoint, redirectRoute, formData) => {
       console.log(formData)
        try {
            const loginState = await axios.post(
              `http://localhost:8000/auth/${endpoint}`,
              formData
            );
            const userData = {
                userName: loginState.data.logedUser.user.name,
                userLastName: loginState.data.logedUser.user.lastname,
                userEmail: loginState.data.logedUser.user.email,
                userToken: loginState.data.logedUser.token,
            }
            const userDataSend = JSON.stringify(userData);
            console.log(loginState.data)
            sessionStorage.setItem("user", loginState.data.logedUser.user.id);
            sessionStorage.setItem("userData", userDataSend)





            if(redirectRoute){
                setTimeout(() => {router.push(redirectRoute)}, 2000);
            } 
            return loginState.data
        } catch (error) {
            return error.response.data
        }
    }

    
    return { authRouter };
} 