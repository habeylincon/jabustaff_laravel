import React, { useState } from 'react'
import { RxMagnifyingGlass } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Searchbar = () => {
  const[magnify, setMagnify] = useState<boolean>(false);
  return (
    <div>
        {!magnify ? (
          <RxMagnifyingGlass className='font-bold text-xl' onClick={() => setMagnify(!magnify)} />
        ):(
          <div className='flex items-center justify-center gap-2 bg-gray-300 rounded-xl px-3'>
            <MdClose onClick={() => setMagnify(false)} />
            <input type="text" autoFocus className='bg-gray-300 border-none outline-none text-xs w-40 py-2 px-2'/>
            <RxMagnifyingGlass />
          </div>
        )}
        
        
    </div>
  )
}

export default Searchbar