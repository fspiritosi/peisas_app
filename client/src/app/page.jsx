import axios from "axios"
import Link from "next/link"
import image from "@/app/assets/homeImg.jpg"
export default async function Home() {
  return (
    <>
      <div className="mt-auto mb-0 flex items-center flex-col gap-4">
        <h1 className="text-3xl font-bold">
          Bienvenidos al sistema de gestión de Trailers de PEI SAS
        </h1>
        <p className="text-lg">Por favor inicia sesión o crea tu cuenta</p>
        <div className="flex gap-5">
          <Link href="/login">
            <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
              Iniciar Sesión
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-sky-600 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded">
              Crear Cuenta
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
