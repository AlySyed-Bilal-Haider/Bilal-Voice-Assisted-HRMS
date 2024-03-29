import React from "react";
import { NavLink, Link } from "react-router-dom";
function Sidebar() {
  //.........Private and Protected route.........
  var Role, checkstatus;
  if (localStorage.getItem("user")) {
    const Islogin = window.atob(localStorage.getItem("user"));
    Role = JSON.parse(Islogin);
    checkstatus = Role.token;
  }

  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className="submenu">
                {checkstatus == 2 || checkstatus == 3 ? (
                  <Link to="/Admindashboard">
                    <i className="la la-dashboard" /> <span> Dashboard</span>
                  </Link>
                ) : (
                  <Link to="/Admindashboard/Employeedashboard">
                    <i className="la la-dashboard" /> <span> Dashboard</span>
                  </Link>
                )}
              </li>

              <div
                className="dropdown"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  paddingLeft: "10px",
                }}
              >
                <i
                  className="la la-user"
                  style={{ color: "#b7c0cd", float: "left", fontSize: "30px" }}
                />
                <button
                  style={{ color: "#b7c0cd", fontSize: "18px" }}
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Employees
                </button>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    to="/Admindashboard/Employee_leave"
                    className="dropdown-item"
                  >
                    Employee Leave{" "}
                  </Link>

                  <Link
                    to="/Admindashboard/Attendance"
                    className="dropdown-item"
                  >
                    Attendance
                  </Link>
                  {checkstatus == 2 ? (
                    <>
                      <Link
                        to="/Admindashboard/Employee"
                        className="dropdown-item"
                      >
                        All Employees{" "}
                      </Link>

                      <Link
                        to="/Admindashboard/Holiday"
                        className="dropdown-item"
                      >
                        Holidays
                      </Link>
                      <Link
                        to="/Admindashboard/Department"
                        className="dropdown-item"
                      >
                        Departments
                      </Link>
                      <Link
                        to="/Admindashboard/Designations"
                        className="dropdown-item"
                      >
                        Designations
                      </Link>
                    </>
                  ) : null}
                </div>
              </div>

              {checkstatus == 2 || checkstatus == 3? (
                <>
                  <div
                    className="dropdown"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingLeft: "10px",
                    }}
                  >
               
                    <i
                      className="fa fa-user-circle-o"
                      style={{
                        color: "#b7c0cd",
                        float: "left",
                        fontSize: "20px",
                      }}
                    />
                    <button
                      style={{ color: "#b7c0cd", fontSize: "18px" }}
                      className="btn  dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Recuritments
                    </button>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link
                        to="/Admindashboard/Jobslisting"
                        className="dropdown-item"
                      >
                        Jobs
                      </Link>
                      <Link
                        to="/Admindashboard/Category"
                        className="dropdown-item"
                      >
                        Category
                      </Link>
                      <Link
                        to="/Admindashboard/Applications"
                        className="dropdown-item"
                      >
                        Applications
                      </Link>
                      <Link
                        to="/Admindashboard/Vister"
                        className="dropdown-item"
                      >
                        Vister
                      </Link>

                      <Link
                        to="/Admindashboard/Promotions"
                        className="dropdown-item"
                      >
                        Promotions
                      </Link>

                      {/* <li>
                <Link to="/Admindashboard/Terminations">
                  <i className="la la-times-circle" />
                  <span>Termination</span>
                </Link>
              </li> */}
                    </div>
                  </div>
                  <div
                    className="dropdown"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingLeft: "10px",
                    }}
                  >
               
                    <i
                      className="la la-money"
                      style={{
                        color: "#b7c0cd",
                        float: "left",
                        fontSize: "20px",
                      }}
                    />
                    <button
                      style={{ color: "#b7c0cd", fontSize: "18px" }}
                      className="btn  dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Salary
                    </button>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                   <Link to="/Admindashboard/Salary"  className="dropdown-item"> Employee Salary </Link>
                  
                   <Link to="/Admindashboard/Salarysetting"  className="dropdown-item">
                      Salary setting
                    </Link>
                    <Link to="/Admindashboard/Salaryview"  className="dropdown-item"> Payslip </Link>
                    </div>
                  </div>
                </>
              ) : null}

              <div
                className="dropdown"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  paddingLeft: "10px",
                }}
              >
                <i
                  className="la la-user"
                  style={{ color: "#b7c0cd", float: "left", fontSize: "30px" }}
                />
                <button
                  style={{ color: "#b7c0cd", fontSize: "18px" }}
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Project
                </button>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link to="/Admindashboard/Projects" className="dropdown-item">
                    Project
                  </Link>
                </div>
              
              </div>
              <li
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "#b7c0cd",
                  fontSize: "26px",
                  padding: "5px 15px",
                }}
              >
                <i className="la la-money" />
                <Link to="/Admindashboard/Leads">Leads</Link>
              </li>
           
              <li
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "#b7c0cd",
                  fontSize: "26px",
                  padding: "5px 15px",
                }}
              >
                <i class="fa fa-bell-o" />
                <Link to="/Admindashboard/Notice"> Notice </Link>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "#b7c0cd",
                  fontSize: "26px",
                  padding: "5px 15px",
                }}
              >
               <i class="fa fa-clock-o"></i>
                <Link to="/Admindashboard/Timesheet">Timesheet</Link>
              </li>
              {checkstatus == 2 || checkstatus == 3 ? (
                <li
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    color: "#b7c0cd",
                    fontSize: "26px",
                    padding: "5px 15px",
                  }}
                >
                  <i className="la la-user" />
                  <Link to="/Admindashboard/Client">Client</Link>
                </li>
              ) : null}

             
              {/* <li>
                <Link to="/Admindashboard/Resignations">
                  <i className="la la-external-link-square" />{" "}
                  <span>Resignations</span>
                </Link>
              </li> */}
              {checkstatus == 2 || checkstatus == 3 ? (
                <li>
                  <Link to="/Admindashboard/Contactus">
                    <i className="la la-times-circle" />
                    <span>Contact</span>
                  </Link>
                </li>
              ) : null}
              <li className="menu-title">
                <span>Pages</span>
              </li>
              {checkstatus == 2 || checkstatus == 3 ? (
                <li className="submenu">
                  <a href="#">
                    <i className="la la-user" /> <span> Profile </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <Link to="/Admindashboard/Profile">Employee Profile</Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      color: "#b7c0cd",
                      fontSize: "26px",
                      padding: "5px 15px",
                    }}
                  >
                    <i
                      className="la la-user"
                      style={{
                        color: "#b7c0cd",
                        float: "left",
                        fontSize: "30px",
                      }}
                    />
                    <Link to="/Admindashboard/Profile">Employee Profile</Link>
                  </li>{" "}
                </>
              )}
              {checkstatus == 2 || checkstatus == 3 ? (
                <li>
                  <Link to="/Admindashboard/Setting">
                    <i className="la la-cogs" /> <span>Settings</span>
                  </Link>
                </li>
              ) : null}

              <li>
                <Link to="/Admindashboard/Logout">
                  <i className="la la-power-off" /> <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
