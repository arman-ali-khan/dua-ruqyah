import Navbar from "./Shared/Navbar";
import Sidebar from "./Shared/Sidebar";

function Layout({ children }) {
  return (
    <main>
      <div className="flex w-full gap-[30px]">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          {children}
        </div>
      </div>
    </main>
  );
}

export default Layout;
