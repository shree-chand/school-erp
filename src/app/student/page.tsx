'use client';
import React, { useState } from 'react';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const tableData = [
    { sn: 1, name: 'Rohan Kumar Singh', regNo: 'DPS56212', className: '10th', section: 'Sec-A', contactNo: '+91 8545474744' },
    { sn: 2, name: 'John Doe', regNo: 'DPS56213', className: '9th', section: 'Sec-B', contactNo: '+91 8545474745' },
    { sn: 3, name: 'Jane Smith', regNo: 'DPS56214', className: '8th', section: 'Sec-C', contactNo: '+91 8545474746' },
    { sn: 4, name: 'Samuel Green', regNo: 'DPS56215', className: '7th', section: 'Sec-D', contactNo: '+91 8545474747' },
  ];

  return (
    <>
      <main id="main" className="main">
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="flexTitle">
                    <h2 className="card-title">Student List</h2>
                    <div className="rightBtn">
                      <button type="button" className="btn btn-primary me-2" onClick={toggleModal}><i className="bi bi-plus-circle"></i>Student</button>
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
      {/* --student list modal-- */}
      {isModalOpen && (
        <div id="default-modal" aria-hidden="true" className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="relative p-2 w-full max-w-2xl max-h-full bg-white rounded-lg">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg">
              {/* Modal header */}
              <div className="flex items-center justify-between p-2 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Sudent List
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 grid grid-cols-2 gapX">
                <div className="form-group">
                  <label className="form-label">Serial No.</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">Registerd No.</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">Class Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">Section</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              {/* Modal footer */}
              <div className="flex items-center p-4 justify-content-end">
                <button onClick={closeModal} type="button" className="btn btn-danger me-2">
                  Close
                </button>
                <button onClick={closeModal} type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
