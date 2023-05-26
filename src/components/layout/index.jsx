import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Layout = () => {
  return (
    <div className="w-full text-primaryColor">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
