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
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    link: "/home/dashboard",
  },
  {
    name: "Orders",
    icon: <Package size={20} />,
    link: "/home/orders",
  },
  {
    name: "Inventory",
    icon: <Boxes size={20} />,
    link: "/home/inventory",
  },
  {
    name: "Users",
    icon: <UserCircle size={20} />,
    link: "/home/users",
  },
  {
    name: "Statistics",
    icon: <BarChart3 size={20} />,
    link: "/home/statistics",
  },
  {
    name: "Billings",
    icon: <Receipt size={20} />,
    link: "/home/billings"
  },
  {
    name:"Settings",
    icon: <Settings size={20} />,
    link: "/home/settings"
  },
  {
    name: "Help",
    icon: <LifeBuoy size={20} />,
    link: "/home/help"
  }
  

];
