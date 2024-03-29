import React from "react";
import Addholiday from "./Addholiday";
import { useSelector } from "react-redux";
import { POST } from "../API/PostAPI";
import Updatehoilday from './Updateholiday';
function Holiday() {
  const holidaydetails = useSelector((state) => state.Fetchholidayreducer);
  console.log("holidaydetails", holidaydetails);
  var i = 0;
  // ..............Remove Holiday...............
  const [remove, setAdd] = React.useState();
  const [update,setupdatestate]=React.useState();
  const removeURL = "http://localhost/HRMS/Holiday/RemoveHoliday.php";
  const Removeholiday = (id) => {
    console.log("holiday Id",id);
    const values = {
      id
    };
    setAdd(values);
  };

  const updateHoliday=(id)=>{
    setupdatestate(id)
  }
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
                  <h3 className="page-title">All Holidays </h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Holidays</li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <a
                    href="#"
                    className="btn add-btn"
                    data-toggle="modal"
                    data-target="#add_holiday"
                  >
                    <i className="fa fa-plus" /> Add Holiday
                  </a>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped custom-table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title </th>
                        <th>Holiday Date</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {holidaydetails.length > 0 &&
                        holidaydetails.map((items, index) => {
                          i++;
                          return (
                            <>
                              <tr className="holiday-upcoming" key={index}>
                                <td>{i}</td>
                                <td>{items.Holiday_Name}</td>
                                <td>{items.Holiday_Date}</td>
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
                                    <div
                                      className="dropdown-menu dropdown-menu-right"
                                      style={{ cursor: "pointer" }}
                                    >
                                      <span
                                        className="dropdown-item"
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#update_holiday"
                                        onClick={()=>{
                                          updateHoliday(items.id);
                                        }}
                                      >
                                        <i className="fa fa-pencil m-r-5" />{" "}
                                        Edit
                                      </span>
                                      <span
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => {
                                          Removeholiday(items.id);
                                        }}
                                      >
                                        <i className="fa fa-trash-o m-r-5" />{" "}
                                        Delete
                                      </span>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    
          <Addholiday />
        </div>
  
      </div>
      {remove && <POST values={remove} url={removeURL} Addstate={setAdd} />}
      {update && <Updatehoilday values={update} Editefun={setupdatestate} />}
    </>
  );
}

export default Holiday;
