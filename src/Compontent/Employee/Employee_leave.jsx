import React from "react";
import Addleave from "./Addleave";
import { useSelector } from "react-redux";
import { Container, Box, Stack, Pagination } from "@mui/material";
import { POST } from "../API/PostAPI";
import { useState } from "react";
function Employee_leave() {
  const [remove, setAdd] = React.useState();
  const [Leave, setleave] = React.useState();
  var userdetials, checkstatus, id;
  if (localStorage.getItem("user")) {
    const Islogin = window.atob(localStorage.getItem("user"));
    userdetials = JSON.parse(Islogin);
    checkstatus = userdetials.token;
    id = userdetials.id;
  }

  // ............Employee leave and Employee Information....................
  const Employeeleave = useSelector((state) => state.Fetchemployeeleavereducer);
  const Employeestate = useSelector((state) => state.Fetchemployeereducer);
  console.log("Employee informations", Employeestate);

  // ...............Remove Leave Handler......................
  const removeURL = "http://localhost/HRMS/Employee/Removeleave.php";
  const LeaveURL = "http://localhost/HRMS/Employee/Changestatus.php";
  const Removeleave = (id) => {
    const values = {
      id,
    };
    setAdd(values);
  };

  const ActionsLeaveHandler = (e) => {
    console.log("e.target.value",)
      var value=e.target.value;
      const status=value.slice(0,6);
      const leaveid=value.slice(7);
    const statusobj= {
      status,
      leaveid,
      id
    };
    setleave(statusobj);
  };

  // ....pagination start...

  const [postsPerPage, setPostsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };
  const pageCount = Math.ceil(Employeeleave.length / postsPerPage);
  return (
    <>
      <div className="main-wrapper">
        {/* Page Wrapper */}
        <div className="page-wrapper">
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Leaves</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Leaves</li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <a
                    href="#"
                    className="btn add-btn"
                    data-toggle="modal"
                    data-target="#add_leave"
                  >
                    <i className="fa fa-plus" /> Add Leave
                  </a>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive" style={{overflowX:'scroll'}}>
                  <table className="table table-striped custom-table mb-0 datatable">
                    <thead>
                      <tr>
                        <th>Employee</th>
                        <th>Leave type</th>
                        <th>From</th>
                        <th>To</th>
                        <th>No of Days</th>
                        <th>Reason</th>
                        {checkstatus == 1 && <th>status</th>}
                       {checkstatus == 2 || checkstatus == 3 ? (<th>status</th>):(null)} 
                      </tr>
                    </thead>
                    <tbody>
                      {Employeeleave.length > 0 &&
                          Employeeleave
                            .slice(
                              currentPage * postsPerPage - postsPerPage,
                              currentPage * postsPerPage
                            ).map((items, index) => {
                          return (
                            <tr key={index}>
                              {Employeestate.map((element, i) => {
                                if (element.EmployeeID == items.EmployeeID) {
                                  return <td key={i}>{element.username}</td>;
                                }
                              })}
                              <td>{items.Employee_type}</td>
                              <td>{items.Starting_At}</td>
                              <td>{items.Ending_On}</td>
                              <td>{items.Days}</td>
                              <td>{items.Reason.substring(0, 80)}</td>
                              {checkstatus == 2 || checkstatus == 3 ? (
                                <td>
                                  <select
                                    style={{
                                      border: "none",
                                      borderRadius: "4px",
                                      padding: "5px",
                                      float: "right",
                                    }}
                                    onChange={ActionsLeaveHandler}
                                  >
                                    <option>{items.status}</option>
                                    <option
                                      
                                      value={`accept ${items.id}`}
                                    >
                                      accept
                                    </option>
                                    <option
                                      value={`reject ${items.id}`}
                                    >
                                      reject
                                    </option>
                                  </select>
                                </td>
                              ) : (
                                <td style={{ color: "red" }}>{items.status}</td>
                              )}

                              {/* {checkstatus == 1 ? (
                                <td className="text-right">
                                  <div
                                    className="dropdown dropdown-action"
                                    style={{
                                      cursor: "pointer",
                                    }}
                                  >
                                    <span
                                      className="action-icon dropdown-toggle"
                                      data-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="material-icons">
                                        more_vert
                                      </i>
                                    </span>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <span className="dropdown-item">
                                        <i className="fa fa-pencil m-r-5" />{" "}
                                        Edit
                                      </span>
                                      <span
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => {
                                          Removeleave(items.id);
                                        }}
                                      >
                                        <i className="fa fa-trash-o m-r-5" />{" "}
                                        Delete
                                      </span>
                                    </div>
                                  </div>
                                </td>
                              ) : null} */}
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
          {/* Add Leave Modal */}
          <Addleave />
        </div>
       
        {/* /Page Wrapper */}
        {/* pagination code */}
        {Employeeleave.length > 0 && (
              <Box m="15px">
                <Stack
                  direction={"row"}
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={handleChangepage}
                  />
                </Stack>
              </Box>
            )}
      </div>
      {Leave && <POST values={Leave} url={LeaveURL} Addstate={setleave} />}
        {remove && <POST values={remove} url={removeURL} Addstate={setAdd} />}
    </>
  );
}

export default Employee_leave;
