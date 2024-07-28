import React from 'react'
import { adminSidebarLinks, staffSidebarLinks } from './constants'
import SidebarItem from './SidebarItem'

const SideBar = (props: any) => {
    return (
        <div className=' fixed top-14'>
            {/* <ScrollArea> */}
                <div className='text-sidebar-mute  py-4 pl-4'>Navigation</div>
                {props.type === "ADMIN" && (  
                    adminSidebarLinks.map((item) => {
                        // const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
    
                        return(
                            <div 
                            key={item.path}
                            className=''
                            >
                                <SidebarItem key={item.path} item={item} />
                            </div>
                        )
                    })
                )}
    
                {props.type === "STAFF" && (  
                    staffSidebarLinks.map((item) => {
                        // const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
    
                        return(
                            <div 
                            key={item.path}
                            className=''
                            >
                                <SidebarItem key={item.path} item={item} />
                            </div>
                        )
                    })
                )}
            {/* </ScrollArea> */}
            {/* <div className='fixed bottom-0 text-white'><SignOut /></div> */}
        </div>
      )
}

export default SideBar