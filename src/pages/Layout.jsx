import { Footer } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Header</h1>
      <main>
        <Outlet />
      </main>
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
