import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiShoppingBag, HiUser } from "react-icons/hi";
import {  NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
const DashBoardHeader = () => {
  
  const admin = useAdmin();

 
  const navLinks = (
    <div>
      { admin ? (
        <div className="flex flex-col gap-4">
          <NavLink
            to="/dashboard/manageUser"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-green-200 font-extrabold"
                : ""
            }
          >
            {" "}
            Manage user
          </NavLink>
          <NavLink
            to="/dashboard/manageContest"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-green-200 font-extrabold"
                : ""
            }
          >
            {" "}
            Manage Contest
          </NavLink>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          
          <NavLink
            to="/dashboard/addContest"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-green-200 font-extrabold"
                : ""
            }
          >
            {" "}
            Add contest
          </NavLink>
          <NavLink
            to="/dashboard/addedContest"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-200 font-extrabold"
                : ""
            }
          >
            {" "}
            My added Contest
          </NavLink>
          <NavLink
            to="/dashboard/submittedContest"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-200 font-extrabold"
                : ""
            }
          >
            {" "}
            Submitted Contest
          </NavLink>
        </div>
      )}
    </div>
  );
  return (
    <div >

      <div>
      <Sidebar className="h-screen" aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            
            <Sidebar.Item href="/userDashboard" icon={HiChartPie}>
            {navLinks}
            </Sidebar.Item>

    
            <hr />
            <Sidebar.Item href="/" icon={HiShoppingBag}>Home</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
    </div>
  );
};

export default DashBoardHeader;
