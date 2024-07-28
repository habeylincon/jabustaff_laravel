import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        // <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
        //     <div>
        //         <Link href="/">
        //             <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
        //         </Link>
        //     </div>

        //     <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
        //         {children}
        //     </div>
        // </div>

        <main className="bg-[url('/images/bg.jpg')] min-h-screen relative flex justify-center items-center">
       
            <div className="flex flex-col justify-center items-center gap-6">
                {/* <Image src="/images/logo.png" alt='logo' width={140} height={80}/> */}
                <img src='/images/logo.png'  />
                
                
                <div className='bg-white px-4 py-6 rounded-lg'>
                    {children}
                </div>
                
            </div>

            <div className=" bg-sidebar-bg fixed bottom-0 w-full text-white text-xs flex justify-center py-4">
                Copyright © 2024 JOSEPH AYO BABALOLA UNIVERSITY, All rights reserved.
            </div>
        </main>
    );
}
