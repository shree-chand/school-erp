'use-clint'

import React from 'react';

export default function Dashboard() {
  const tableData = [
    { sn: 1, name: 'Rohan Kumar Singh', regNo: 'DPS56212', className: '10th', section: 'Sec-A', contactNo: '+91 8545474744' },
    { sn: 2, name: 'John Doe', regNo: 'DPS56213', className: '9th', section: 'Sec-B', contactNo: '+91 8545474745' },
    { sn: 3, name: 'Jane Smith', regNo: 'DPS56214', className: '8th', section: 'Sec-C', contactNo: '+91 8545474746' },
    { sn: 4, name: 'Samuel Green', regNo: 'DPS56215', className: '7th', section: 'Sec-D', contactNo: '+91 8545474747' },
    // Add more data here as needed
  ]; 
  return (
    <>
      <main id="main" className="main">
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body ">
                  <div className="flexTitle">
                    <h2 className="card-title">Student List</h2>
                    <div className="rightBtn">
                      <button type="button" className="btn btn-primary me-2"><i className="bi bi-plus-circle"></i>Student</button>
                      <button type="button" className="btn btn-primary"><i className="bi bi-x-circle-fill"></i></button>
                    </div>
                  </div>

                  <div className="table-responsive outerTable">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr className="table-primary">
                          <th scope="col">SN.</th>
                          <th scope="col">Name</th>
                          <th scope="col">Reg.No</th>
                          <th scope="col">Class Name</th>
                          <th scope="col">Section</th>
                          <th scope="col">Contact No.</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
          {tableData.map((item) => (
            <tr key={item.sn}>
              <td scope="row">{item.sn}</td>
              <td>{item.name}</td>
              <td>{item.regNo}</td>
              <td>{item.className}</td>
              <td>{item.section}</td>
              <td>{item.contactNo}</td>
              <td>
                <a className="edit" title="Edit" data-toggle="tooltip">
                  <i className="bi bi-pencil-square"></i>
                </a>
                <a className="delete ms-2" title="Delete" data-toggle="tooltip">
                  <i className="bi bi-trash"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>
    </>
  )
}