import React from "react";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiShoppingBag, HiUser } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
const UserHeader = () => {

  const admin = useAdmin();
  console.log(admin);
  return (
        <div>
          {
            admin ? 

          <div className=" flex items-center justify-center w-full h-full">
            <h2 className="text-5xl font-semibold">Your are not user </h2>
          </div>

          :
          <div>
          <Sidebar
            className="h-screen"
            aria-label="Sidebar with multi-level dropdown example"
          >
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="/userDashboard/userProfile" icon={HiUser}>
                  <NavLink to="/userDashboard/userProfile">Profile</NavLink>
                </Sidebar.Item>
                <Sidebar.Item href="/userDashboard" icon={HiChartPie}>
                  User Dashboard
                </Sidebar.Item>
    
                <Sidebar.Item href="/userDashboard/participated" icon={HiUser}>
                  <NavLink to="/userDashboard/participated">
                    Participated Contest
                  </NavLink>
                </Sidebar.Item>
    
                <Sidebar.Item
                  href="/userDashboard/winningContest"
                  icon={HiShoppingBag}
                >
                  <NavLink to="/userDashboard/winningContest">
                    {" "}
                    Winning Contest
                  </NavLink>
                </Sidebar.Item>
    
                <hr />
                <Sidebar.Item href="/" icon={HiShoppingBag}>
                  Home
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>

          }
        </div>
  );
};

export default UserHeader;
