import React, { useEffect, useState } from "react";
import { Sidebar } from "../../Component";
import { ROUTES } from "..";
function RequireHome({ children }) {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  useEffect(()=>{
    console.log(localStorage.getItem('sideBar'),99);
    
setSidebarVisible(localStorage.getItem('sideBar'))
  },[])
  const openSidebar = () => {
      setSidebarVisible(true);
    localStorage.setItem("sideBar", true);
  };

  const closeSidebar = () => {
      setSidebarVisible(false);
    localStorage.setItem("sideBar", false);
  };
  return (
    <div className="screen">
      <Sidebar
        sidebarVisible={sidebarVisible}
        closeSidebar={closeSidebar}
        route={ROUTES}
      />
      <div id="main" className={sidebarVisible ? "sidebar-open" : ""}>
        {/* <button
          id="openNav"
          className="w3-button w3-teal w3-xlarge"
          onClick={openSidebar}
          style={{ display: sidebarVisible ? "none" : "inline-block" }}
        >

          &#9776;
        </button> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-list cursor-pointer"
          viewBox="0 0 16 16"
          onClick={openSidebar}
          style={{ display: sidebarVisible ? "none" : "inline-block", marginTop: "-10px", marginBottom: "10px" }}
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
        {children}
      </div>
    </div>
  );
}
export default RequireHome;
