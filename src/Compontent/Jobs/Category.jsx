import React,{useState} from "react";
import Add_category from "./Addcategory";
import useGet from '../API/API';
import { useSelector } from "react-redux";
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Stack,
  Grid,
  Pagination
} from "@mui/material";
const url="";
function Category() {

  var i=0;
  const CategoryInfo = useSelector(state => state.categoryreducer);
  console.log("userInfo", CategoryInfo);
  
 
  //......paginations..........
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };

  const pageCount = Math.ceil(CategoryInfo.length / postsPerPage);

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
                    <h3 className="page-title">Category</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Category</li>
                    </ul>
                  </div>
                  <div className="col-auto float-right ml-auto">
                    <a
                      href="#"
                      className="btn add-btn"
                      data-toggle="modal"
                      data-target="#add_category"
                    >
                      <i className="fa fa-plus" /> Add Category
                    </a>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <table className="table table-striped custom-table mb-0 datatable">
                      <thead>
                        <tr>
                          <th style={{ width: 30 }}>#</th>
                          <th>Category Name</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CategoryInfo.length > 0 && CategoryInfo.slice(
                            currentPage * postsPerPage - postsPerPage,
                            currentPage * postsPerPage
                          ).map((Items)=>{
                            i++;
                            return <>
                            <tr>
                            <td>{i}</td>
                            <td>{Items.catname}</td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#edit_department"
                                  >
                                    <i className="fa fa-pencil m-r-5" /> Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#delete_department"
                                  >
                                    <i className="fa fa-trash-o m-r-5" /> Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          
                          </>
                         
                          })
                        }
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <Box  m="15px">
              
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
            {/* /Page Content */}
            {/* Add Department Modal */}
            <Add_category />
            {/* /Add Department Modal */}
            {/* Edit Department Modal */}
            {/* <?php include_once("includes/modals/department/edit_department.php");?> */}
            {/* /Edit Department Modal */}
            {/* Delete Department Modal */}
            {/* <?php include_once("includes/modals/department/delete_department.php");?> */}
            {/* /Delete Department Modal */}
          </div>
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
      </>
    </>
  );
}

export default Category;
