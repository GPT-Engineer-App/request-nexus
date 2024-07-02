import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="main-layout">
      <Outlet />
    </main>
  );
};

export default Layout;