import Button from "../components/Button";
import SideBar from "../components/SideBar";
import SideBarItem from "../components/SideBarItem";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings
} from "lucide-react"


function HomeComponent({user}) {
  return (
    <>
      <div className="flex ">
      <SideBar>
        <SideBarItem icon={<LifeBuoy size={20}/>} text="Help" />
        <SideBarItem icon={<Receipt size={20}/>} text="Billings" />
        <SideBarItem icon={<Boxes size={20}/>} text="Inventory" />
        <SideBarItem icon={<Package size={20}/>} text="Orders" alert/>
        <SideBarItem icon={<UserCircle size={20}/>} text="Users" />
        <SideBarItem icon={<BarChart3 size={20}/>} text="Statistics" active />
        <SideBarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" alert />
        <SideBarItem icon={<Settings size={20}/>} text="Settinds" />
      </SideBar>
      <div>
        <header>
          <p>Bienvenido nuevamente {user.userData.userName}!</p>
        </header>
        <main>
          <div>En este espacio vamos a mostrar el dashboard</div>
          <Button btnText="Crear un Equipo" />
          
        </main>
      </div>
      </div>
    </>
  );
}

export default HomeComponent