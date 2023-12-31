'use client'
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import { createContext, useState, useEffect } from "react"

export const SidebarContext = createContext()

function SideBar({children}) {
    const [expanded, setExpanded] = useState(true)
    const [user, setUser] = useState({userName: "", userLastName:"", userEmail:""})
    const [currentUrl, setCurrentUrl] = useState('http://localhost:3000/home')
    useEffect(()=>{
      const user = JSON.parse(sessionStorage.getItem("userData"));
      setUser(user)
      const currentUrl = window.location.href;
      setCurrentUrl(currentUrl)
      console.log(currentUrl)
    }, [])
    
  return (
    <>
      <aside className="h-screen text-black max-w-xs">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src="https://img.logoipsum.com/243.svg"
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
              alt="Logo"
            />
            <button
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 "
              onClick={() => setExpanded((curr) => !curr)}
            >
              {expanded ? (
                <ChevronFirst size={20} />
              ) : (
                <ChevronLast size={20} />
              )}
            </button>
          </div>
          <SidebarContext.Provider value={{ expanded, currentUrl }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>
          <div className="border-t flex p-3">
            <img
              src={`https://ui-avatars.com/api/?name=${user.userName}+${user.userLastName}background=c7d2fe&color=3730a3&bold=true`}
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              }`}
            >
              <div className="leading-4">
                <h4 className="font-semibold">
                  {user.userName} {user.userLastName}
                </h4>
                <span className="text-xs text-gray-600">
                  {user.userEmail}
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default SideBar