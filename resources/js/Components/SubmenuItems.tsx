import { LucideIcon } from "lucide-react";
// import { usePathname, useRouter } from "next/navigation";

declare interface SideNavItem{
    name: string;
    icon: LucideIcon;
    path: string;
    items?: SideNavItem[];
}

const SubmenuItems = ({item}: {item: SideNavItem}) => {
const { name, icon: Icon, items, path } = item;
  
// const router = useRouter();
// const pathName = usePathname();

// const onClick = () => {
//     router.push(path);
// }

return (
    <div
        className={`flex items-center space-x-2 py-3 px-4  text-sidebar-text
        hover:bg-sidebar-bg-hover hover:text-my-orange-700 hover:cursor-pointer`}
        // onClick={onClick}
    >
        <Icon size={20} />
        <div className='text-sm font-semibold'>{name}</div>
    </div>
  )
}

export default SubmenuItems