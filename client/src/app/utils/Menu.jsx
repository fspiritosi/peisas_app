import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";

export const MenuItems = [
  {
    name: "Inicio",
    icon: <LayoutDashboard size={20} />,
    link: "/home",
  },
  {
    name: "Tareas",
    icon: <Package size={20} />,
    link: "/home/orders",
  },
  {
    name: "Equipos",
    icon: <Boxes size={20} />,
    link: "/home/inventory",
  },
  {
    name: "Usuarios",
    icon: <UserCircle size={20} />,
    link: "/home/users",
  },
  {
    name: "Reportes",
    icon: <BarChart3 size={20} />,
    link: "/home/statistics",
  },
  {
    name: "Cotizaciones",
    icon: <Receipt size={20} />,
    link: "/home/billings"
  },
  {
    name:"Configuración",
    icon: <Settings size={20} />,
    link: "/home/settings"
  },
  {
    name: "Ayuda  ",
    icon: <LifeBuoy size={20} />,
    link: "/home/help"
  }
  

];
