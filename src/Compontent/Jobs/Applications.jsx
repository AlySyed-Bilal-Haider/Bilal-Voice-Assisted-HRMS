import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {applicationssearcing} from '../Redux/Actions/Actions';
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Stack,
  Grid,
  Pagination,
} from "@mui/material";
import { POST } from "../API/PostAPI";
import useGet from "../API/API";
import { useEffect } from "react";
function Applications() {
  const [seacrh,setsearch]=useState('');
  const [applicationsstate,setApplicationstate]=useState([]);
    // .......Fetch Applications Handler..........
    useGet("http://localhost/HRMS/Application/Fetchapplicationsuser.php", "Applications");
  const url = "http://localhost/HRMS/Application/Changestatus.php";
  const [setstatus, setstatusstate] = useState();
  const Applicationdetails = useSelector((state) => state.fetchuserAppliations);
  console.log("fetchuserAppliations", Applicationdetails);
  var i = 0;
  // .............Paginations...........
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };
  const pageCount = Math.ceil(applicationsstate.length / postsPerPage);
  // .............Decison making...........
  const DecisionHandler = (id, status,applicationemail) => {
    // console.log("status",status);
    const value = {
      id,
      status,
      applicationemail
    };
    setstatusstate(value);
  };

  useEffect(()=>{
    Applicationdetails && setApplicationstate(Applicationdetails);
  },[applicationsstate,Applicationdetails]);

let newstate; 
  const searchhandler=()=>{
    newstate = applicationsstate.filter((items) => {
      return (
        items.designation?.toLowerCase().includes(seacrh?.toLowerCase().trim()) ||
        items.instituename?.toLowerCase().includes(seacrh?.toLowerCase().trim()) || 
        items.degree?.toLowerCase().includes(seacrh?.toLowerCase().trim()) ||
        items.totalexp?.toLowerCase().includes(seacrh?.toLowerCase().trim()) ||
        items.cname?.toLowerCase().includes(seacrh?.toLowerCase().trim()) || 
        items.cgpa?.toLowerCase().includes(seacrh?.toLowerCase().trim()) 
      )});
  }
  if(seacrh){
    setApplicationstate(newstate);
    setsearch();
  }else {
    setApplicationstate(Applicationdetails);
  }
  return (
    <>
      <>
        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Page Wrapper */}
          <div className="page-wrapper">
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">Applications</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Applications</li>
                    </ul>
                  </div>
                </div>
                 {/* Page Header */}
            
            {/* /Page Header */}
            {/* Search Filter */}
            <div className="row filter-row" style={{marginTop:'10px'}}>
              <div className="col-sm-12 col-md-9">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" placeholder="Search job applications"  value={seacrh} onChange={(e)=>{
                    setsearch(e.target.value)
                  }} />
                </div>
              </div>
              
              <div className="col-sm-6 col-md-3" onClick={searchhandler}>
                <a href="#" className="btn btn-success btn-block">
                  Search
                </a>
              </div>
            </div>
            {/* Search Filter */}
            {/* user profiles list starts her */}
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <table className="table table-striped custom-table mb-0 datatable">
                      <thead>
                        <tr>
                          <th style={{ width: 30 }}>#</th>
                          <th>Job title</th>
                          <th>Univeristy</th>
                          {/* <th>Description</th> */}
                          <th>Degree</th>
                          <th>CGPA</th>
                          {/* <th>Locations</th> */}
                          <th>Exprience</th>
                          <th>Company</th>
                          <th>email</th>
                          <th>Phone</th>
                          <th>Resume</th>
                          <th>Date</th>
                          <th>Selections</th>
                        </tr>
                      </thead>
                    
                      <tbody>
                        {applicationsstate.length > 0 &&
                          applicationsstate?.slice(
                            currentPage * postsPerPage - postsPerPage,
                            currentPage * postsPerPage
                          ).map((items, index) => {
                            i++;
                            if(items.userstatus=='Interview' || items.userstatus=='pending' ){
                              return (
                                <>
                               <tr style={{ color: "black" }} key={index}>
                                    <td>{i}</td>
                                    <td>{items.designation}</td>
                                    <td>{items.instituename}</td>
                                    {/* <td>{items.description}</td> */}
                                    <td>{items.degree}</td>
                                    <td>{items.cgpa}</td>
                                    {/* <td>{items.address}</td> */}
                                    <td>{items.totalexp}</td>
                                    <td>{items.cname}</td>
                                    <td>{items.email}</td>
                                    <td>{items.phone}</td>
                                    {items.File ?(
                                    <td><a href={`http://localhost/HRMS/Uploads/${items.File}`} style={{color:'black'}}  target="_blank" download>Click to download</a></td>
                                    ):(
                                      <td></td>
                                    )}
                                    <td>{items.date}</td>
                                    <td className="text-right">
                                      <div className="dropdown dropdown-action">
                                        <a
                                          href="#"
                                          className="action-icon dropdown-toggle"
                                          data-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="material-icons">
                                            more_vert
                                          </i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <span className="dropdown-item">
                                            {items.userstatus}
                                          </span>
                                          <hr/>
                                          <span
                                            className="dropdown-item"
                                            onClick={() => {
                                              DecisionHandler(items.id, "Reject",items.email);
                                            }}
                                          >
                                            Reject
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            onClick={() => {
                                              DecisionHandler(
                                                items.id,
                                                "Interview",
                                                items.email
                                              );
                                            }}
                                          >
                                            Interview
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            onClick={() => {
                                              DecisionHandler(items.id, "Select",items.email);
                                            }}
                                          >
                                            Select
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </>
                              );
                            }
                          
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        </div>
        {setstatus && (
          <POST values={setstatus} url={url} Addstate={setstatusstate} />
        )}
        {/* /Main Wrapper */}
      </>
    </>
  );
}

export default Applications;
