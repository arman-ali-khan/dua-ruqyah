import Link from "next/link";
import { IoMdHome } from "react-icons/io";

function Sidebar() {
    return (
        <section className="sidebar">
        {/* Logo */}
            <div className="py-8">
                <img className="" src="https://duaruqyah.com/assets/dua-logo.svg" />
            </div>
            {/* Side menus */}
            <div className="flex items-center justify-center">
                <ul className="flex items-center flex-col space-y-7">
                    <li className="hover:scale-105 duration-300">
                        <Link href={'#'}>
                            <div className="flex bg-secondary w-10 h-10 p-2.5 items rounded-full justify-center items-center cursor-pointer group"><img src="/icons/home.svg" /></div>
                        </Link>
                    </li>
                    <li className="hover:scale-105 duration-300">
                        <Link href={'#'}>
                            <div className="flex bg-secondary w-10 translate h-10 p-2.5 items rounded-full justify-center items-center cursor-pointer group"><img src="/icons/menu.svg" /></div>
                        </Link>
                    </li>
                    <li className="hover:scale-105 duration-300">
                        <Link href={'#'}>
                            <div className="flex bg-secondary w-10 translate h-10 p-2.5 items rounded-full justify-center items-center cursor-pointer group"><img src="/icons/light.svg" /></div>
                        </Link>
                    </li>
                    <li className="hover:scale-105 duration-300">
                        <Link href={'#'}>
                            <div className="flex bg-secondary w-10 translate h-10 p-2.5 items rounded-full justify-center items-center cursor-pointer group"><img src="/icons/bookmark.svg" /></div>
                        </Link>
                    </li>
                    <li className="hover:scale-105 duration-300">
                        <Link href={'#'}>
                            <div className="flex bg-secondary w-10 translate h-10 p-2.5 items rounded-full justify-center items-center cursor-pointer group"><img src="/icons/bookmark.svg" /></div>
                        </Link>
                    </li>
                    <li className="hover:scale-105 duration-300">
                        <Link href={'#'}>
                            <div className="flex bg-secondary w-10 translate h-10 p-2.5 items rounded-full justify-center items-center cursor-pointer group"><img src="/icons/bookmark.svg" /></div>
                        </Link>
                    </li>
                    <li className="hover:scale-105 duration-300">
                        <Link href={'#'}>
                            <div className="flex bg-secondary w-10 translate h-10 p-2.5 items rounded-full justify-center items-center cursor-pointer group"><img src="/icons/bookmark.svg" /></div>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Support */}
           <div className="mt-8">
           <div className="bg-primary w-14 h-14 flex items-center justify-center rounded-[10px]">
                <img className="w-6 h-6" src="/icons/donate.svg" />
            </div>
           </div>
        </section>
    );
}

export default Sidebar;