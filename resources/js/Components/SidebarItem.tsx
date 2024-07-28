// import Link from "next/link";
import { ChevronRightIcon, LucideIcon } from "lucide-react";
// import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import exp from "constants";
import SubmenuItems from "./SubmenuItems";

declare interface SideNavItem{
    name: string;
    icon: LucideIcon;
    path: string;
    items?: SideNavItem[];
}

const SidebarItem = ({item}: {item:SideNavItem}) => {

    const { name, icon: Icon, items, path } = item;
    const[expanded, setExpanded] = useState(false);

    // const router = useRouter();
    // const pathName = usePathname();

    // const onClick = () => {
    //     if(items && items.length > 0){
    //         return setExpanded(!expanded);
    //     }
    //    router.push(path);
    // }

    // const isActive = useMemo(() =>{
    //     return path === pathName;
    // }, [path, pathName])

// ${isActive && "text-my-orange-700"}`
  return (
    <>
    <div 
       className={`flex items-center justify-between space-x-2 py-3 px-4  text-sidebar-text
        hover:bg-sidebar-bg-hover hover:text-my-orange-700 hover:cursor-pointer`}
        // onClick={onClick}
    >
    
           <div className="flex items-center space-x-2">
                <Icon size={20} />
                <div className=" text-sm font-semibold">{name}</div>
            </div>
            {items && items.length > 0 && (
                <ChevronRightIcon 
                    size={18} 
                    className={expanded ? "rotate-90 duration-200" : ""}
                />
            )}
        
    </div>
     {expanded && items && items.length > 0 && (
        <div
          className="flex flex-col pl-6 transition duration-200"
        >{
            items.map((item) => (
                <SubmenuItems key={item.path} item={item} />
            ))
        }</div>
        )}
    </>
  )
}

export default SidebarItem