import { useState } from "react";
import { useParams } from "react-router-dom";
import MegaNavbar from "./MegaNavbar";
import Banner from "./Banner"
import Footer from "./Footer";
export default function HomeLayout({ children }) {
  const currentUrl = window.location.href;
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  return (
    <>
    <Banner/>
    <MegaNavbar/>
      <div>{children}</div>
    <Footer/>
    </>
  );
}
