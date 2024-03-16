import Navbar from "./Shared/Navbar";

function Layout({children}) {
    return (
        <div>
             <div className="flex w-full gap-[30px]">
        <div className="w-full">
        <Navbar />
        {children}
        </div>
        </div>
        </div>
    );
}

export default Layout;