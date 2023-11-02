'use client'
import Link from "next/link";
import { SubmitButton } from "../components/SubmitButton";
import { useAuthFetch } from "../hooks/useAuthFetch";
import { useState} from "react";
import { toast, ToastContainer } from "react-toastify";



export default function Register() {
  const {authRouter} = useAuthFetch();
  const [registerData, setRegisterData] = useState({
    name:"",
    lastname:"",
    email:"",
    password: "",
    confirmPassword:"1234"
  })
  const notify = (notifyMessage) => toast(notifyMessage);

  const endpoint = "register";
  const redirectRoute = "/"

  const handleChange = (e) => {
    setRegisterData({...registerData, [e.target.name]: e.target.value})
    console.log(registerData)
  }
  const handleSubmit = async (e) => {
    console.log(registerData)
    e.preventDefault();
    const registerState = await authRouter(endpoint, redirectRoute, registerData)
    if(registerState.message){
      notify(registerState.message)
    }
    if(registerState.error){
      notify(registerState.error)
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
              htmlFor="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Nombre
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Apellido
            </label>
            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
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
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-2">
            <SubmitButton buttonText={"Crear Cuenta"} />
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          Ya tenes una cuenta?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
