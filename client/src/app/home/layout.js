
import SideBar from "../components/SideBar";
import SideBarItem from "../components/SideBarItem";
import { MenuItems } from "../utils/Menu";
import Link from "next/link";

export default function HomeLayout({ children }) {
    

    https: return (
      <div className="flex">
        <SideBar>
          {MenuItems.map((item) => (
            <Link href={item.link} key={item.name}>
              <SideBarItem icon={item.icon} text={item.name} link={item.link} />
            </Link>
          ))}
        </SideBar>
        <main className="w-full p-4 text-black">{children}</main>
      </div>
    );
}
