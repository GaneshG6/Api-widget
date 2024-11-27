import React, { useState } from "react";
import classnames from "classnames";
import "./index.css";
import { NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Modal } from "../Modal";
import { useModal, useNavigation } from "../../Hooks";
import { Button } from "../Button";
function Sidebar({ closeSidebar, sidebarVisible, route }) {
  const logoutModal = useModal(false);
  const {goTo} = useNavigation()
  return (
    <div
      className={`sidebar ${sidebarVisible ? "visible" : "hidden"}`}
      id="mySidebar"
    >
      <div className="p-4 d-flex justify-content-between align-items-center">
        <p className="fw-bold fs-4 m-0" style={{ color: "#7494ec" }}>
          Interview Task
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-list cursor-pointer"
          viewBox="0 0 16 16"
          onClick={closeSidebar}
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
      <div
        className="d-flex flex-column justify-content-between"
        style={{ height: "100%" }}
      >
        <div>
          {route &&
            route.length > 0 &&
            route.map((each) => {
              return (
                <a
                  href={each.path}
                  className={`p-4 nav-link ${
                    window.location.pathname === each.path ? "active" : ""
                  } mb-1 `}
                >
                  {each.name}
                </a>
              );
            })}
        </div>
        <div
          className="p-4 d-flex justify-content-start align-items-center cursor-pointer"
          onClick={() => {
            logoutModal.show();
          }}
        
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#7494ec"
            class="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
            />
            <path
              fill-rule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
            />
          </svg>
          <p
            className=" m-0 ps-2 cursor-pointer"
            style={{
              color: "#7494ec",
              fontSize: "18px",
              fontWeight: "500",
            }}
            onClick={() => {
              logoutModal.show();
            }}
          >
            Logout
          </p>
        </div>
      </div>
      <Modal
        isOpen={logoutModal.visible}
        onClose={() => {
          logoutModal.hide();
        }}
        title={"Logout"}
        subtitle={"Thanks for visiting!"}
      >
        <div className="d-flex justify-content-center" style={{ gap: "16px" }}>
          <Button text={"Cancel"} outline onClick={logoutModal.hide} />
          <Button text={"Logout"} onClick={()=>{
            localStorage.clear()
            goTo('/')
          }} />
        </div>
      </Modal>
    </div>
  );
}
export { Sidebar };
