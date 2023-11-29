import React, { useContext, useEffect } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logoutUser().then(() => {
      toast.success("Logout success!");
    });
  };

  const navLinks = (
    <div className="flex md:flex-row gap-5  text-[17px] text-black  flex-col">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "  font-extrabold"
            : ""
        }
      >
        {" "}
        Home
      </NavLink>
      <NavLink
        to="/allContest"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "  font-extrabold"
            : ""
        }
      >
        {" "}
        All contest
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "  font-extrabold"
            : ""
        }
      >
        {" "}
        Blog
      </NavLink>
      <NavLink
        to="/resources"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-extrabold"
            : ""
        }
      >
        {" "}
        Resources
      </NavLink>
      <NavLink
        to="/leaderboard"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-extrabold"
            : ""
        }
      >
        {" "}
        Leaderboard
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-extrabold"
            : ""
        }
      >
        {" "}
        Login
      </NavLink>
    </div>
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let stickyScroll = document.documentElement.querySelector(".sticky-nav");
      let height = scrollY;
      if (height > 0) {
       
        stickyScroll.classList.add('active');
      } else {
        stickyScroll.classList.remove('active');
      }
    })
  }, [])

  



  return (
    <div className="fixed  sticky-nav md:h-20 transition-all  flex items-center top-0 right-0 left-0 z-20 ">
      <Navbar fluid rounded className="container mx-auto px-4 bg-transparent">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
           Contest  platform 
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={user?.photoURL} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              {" "}
              <Link to="/dashboard">Dashboard</Link>{" "}
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Link to="/userDashboard">userDashboard</Link>{" "}
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              {user ? (
                <Link onClick={handleLogOut}>Logout</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse >
          <Navbar.Link className="bg-gray-300" href="#" active>
            {navLinks}
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
