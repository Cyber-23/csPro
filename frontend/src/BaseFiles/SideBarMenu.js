import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FiMenu } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { PiStudentBold, PiExam } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { LiaSchoolSolid } from "react-icons/lia";
import { BiLibrary } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const SidebarMenu = ({ toggleSidebar }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [companyNameVisible, setCompanyNameVisible] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [isMobile, setIsMobile] = useState(false);
  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
    setCompanyNameVisible(!collapsed);
    toggleSidebar();
  };


  return (
    <div
      className={`sidebar-wrapper ${
        collapsed && isMobile ? "collapsed" : ""
      } fixed h-full overflow-y-auto z-10`}
    >
      <Sidebar
        collapsed={collapsed}
        width="20"
        className="tracking-widest font-sans text-xs text-gray-600 max-2xl:w-[250px]"
      >
        <div className="sidebar-header flex justify-between">
          {isMobile && (
            <div
              className="toggle-btn-mobile py-6 bg-gray-600 w-full"
              onClick={handleToggleCollapse}
            >
              <FiMenu />
            </div>
          )}
          {(!isMobile || (isMobile && !collapsed)) && (
            <div
              className={`company-name bg-gray-600 text-white w-2/3 text-center py-6 ${
                companyNameVisible ? "hidden" : ""
              } py-2`}
            >
              Cyber Solvings
            </div>
          )}
          {!isMobile && (
            <div className="toggle-btn p-2 bg-gray-600 text-white w-1/3 item-center py-6" onClick={handleToggleCollapse}>
              <FiMenu />
            </div>
          )}
        </div>
        {(!isMobile || (isMobile && !collapsed)) && (
          <Menu
            className="bg-[#f8fafc] text-black"
            iconShape="square"
            menuItemStyles={{
              button: {
                backgroundColor: "#f8fafc",
                "&:hover": {
                  backgroundColor: "#020617",
                  color:"#f8fafc"
                },
              },
            }}
          >
            {(user && user?.role === "admin") ? (
              <Link to={`/admin/dashboard`}>
                <MenuItem
                  icon={<MdOutlineDashboard/>}
                >
                  {" "}
                  Admin
                </MenuItem>
              </Link>
            ) : (
              <>
                {/* <SubMenu
                  label="Dashboard"
                  icon={<MdOutlineDashboard  />}
                > */}
                <Link to={`/pro`}>
                  <MenuItem
                    icon={<MdOutlineDashboard />}
                  >
                    Student
                  </MenuItem>
                </Link>
                {/* <Link to={`/dashboard/parent`}>
                    <MenuItem>Parent</MenuItem>
                  </Link> */}
                {/* </SubMenu> */}
              </>
            )}
            <hr />
            {user?.role === "admin" ? (
              <>
                <SubMenu
                  label="Product"
                  icon={<PiStudentBold/>}
                >
                  <Link to={`/project/list`}>
                    <MenuItem>All Product</MenuItem>
                  </Link>

                  {/* <Link to="/student/create">
                    <MenuItem>Admin Form</MenuItem>
                  </Link> */}
                  {/* <MenuItem>Student Promotion</MenuItem> */}
                </SubMenu>
                <hr />
                <SubMenu
                  label="Tickets"
                  icon={<GiTeacher  />}
                >
                  <Link to={`/ticket/list`}>
                    <MenuItem>All Tickets</MenuItem>
                  </Link>
                  {/* <Link to={`/teacher/assign`}>
                    <MenuItem>Assign Teacher</MenuItem>
                  </Link>
                  <Link to={`/staff/create`}>
                    <MenuItem>Add Teacher</MenuItem>
                  </Link> */}
                </SubMenu>
                <hr />

              </>
            ) : null}



            <SubMenu
              label="Demo - 1"
              disabled
              icon={<BiLibrary  />}
            >
              <Link to="/fees/entries">
                <MenuItem>Fees Collection</MenuItem>
              </Link>
              <Link to="/createfees">
                <MenuItem>Create Student Payment</MenuItem>
              </Link>
              <Link to="/createfee/structure">
                <MenuItem>Create Fees Structure</MenuItem>
              </Link>
              <Link to="/salary/box">
                <MenuItem>Salary Box</MenuItem>
              </Link>
              <Link to="/salary/create">
                <MenuItem>Create Salary Structure</MenuItem>
              </Link>
              <Link to="/salary/pay">
                <MenuItem>pay Salary</MenuItem>
              </Link>
            </SubMenu>
            <hr />
            <hr />

            <SubMenu
              label="Demo - 2"
              disabled
              icon={<BiLibrary  />}
            >
              <Link to="/fees/entries">
                <MenuItem>Fees Collection</MenuItem>
              </Link>
              <Link to="/createfees">
                <MenuItem>Create Student Payment</MenuItem>
              </Link>
              <Link to="/createfee/structure">
                <MenuItem>Create Fees Structure</MenuItem>
              </Link>
              <Link to="/salary/box">
                <MenuItem>Salary Box</MenuItem>
              </Link>
              <Link to="/salary/create">
                <MenuItem>Create Salary Structure</MenuItem>
              </Link>
              <Link to="/salary/pay">
                <MenuItem>pay Salary</MenuItem>
              </Link>
            </SubMenu>
            <hr />
            <hr />

            <SubMenu
              label="Demo -3"
              disabled
              icon={<BiLibrary  />}
            >
              <Link to="/fees/entries">
                <MenuItem>Fees Collection</MenuItem>
              </Link>
              <Link to="/createfees">
                <MenuItem>Create Student Payment</MenuItem>
              </Link>
              <Link to="/createfee/structure">
                <MenuItem>Create Fees Structure</MenuItem>
              </Link>
              <Link to="/salary/box">
                <MenuItem>Salary Box</MenuItem>
              </Link>
              <Link to="/salary/create">
                <MenuItem>Create Salary Structure</MenuItem>
              </Link>
              <Link to="/salary/pay">
                <MenuItem>pay Salary</MenuItem>
              </Link>
            </SubMenu>
            <hr />

            <SubMenu
              label="Demo - 4"
              disabled
              icon={<BiLibrary  />}
            >
              <Link to="/fees/entries">
                <MenuItem>Fees Collection</MenuItem>
              </Link>
              <Link to="/createfees">
                <MenuItem>Create Student Payment</MenuItem>
              </Link>
              <Link to="/createfee/structure">
                <MenuItem>Create Fees Structure</MenuItem>
              </Link>
              <Link to="/salary/box">
                <MenuItem>Salary Box</MenuItem>
              </Link>
              <Link to="/salary/create">
                <MenuItem>Create Salary Structure</MenuItem>
              </Link>
              <Link to="/salary/pay">
                <MenuItem>pay Salary</MenuItem>
              </Link>
            </SubMenu>
            <hr />
          </Menu>
        )}
      </Sidebar>
    </div>
  );
};

export default SidebarMenu;
