'use client'
import Link from "next/link";
import { SubmitButton } from "../components/SubmitButton";
import { useAuthFetch } from "../hooks/useAuthFetch";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";



export default function Login() {
  const { authRouter } = useAuthFetch();
  const [formData, setFormData] = useState({
    email:"",
    password:""
  })

  const endpoint = "login"
  const redirectRoute = "/home"
  const notify = (notifyMessage) => toast(notifyMessage);
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault(e)
    const loginState = await authRouter(endpoint, redirectRoute, formData);
    if(loginState.message){
      notify(loginState.message)
    }
    if(loginState.error){
      notify(loginState.error)
    }
  }
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">
          PEI SAS
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link
            href="/forget-password"
            className="text-xs text-blue-600 hover:underline"
          >
            Olvidaste tu contraseña?
          </Link>
          <div className="mt-2">
            <SubmitButton buttonText={"Entrar"}/>
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          No tenes una cuenta?{" "}
          <Link
            href="/register"
            className="font-medium text-blue-600 hover:underline"
          >
            Registrate
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
