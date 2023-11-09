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

export const Icons = [
  {
    name: "Tareas",
    icon: <Package size={20} />,
    link:"/home/orders"
  },
  {
    name: "Equipos",
    icon: <Boxes size={20} />,
    link: "/home/inventory",
  },
  {
    name: "Cotizaciones",
    icon: <Receipt size={20} />,
    link: "/home/billings",
  },
  {
    name: "Usuarios",
    icon: <UserCircle size={20} />,
    link: "/home/users",
  },
];
