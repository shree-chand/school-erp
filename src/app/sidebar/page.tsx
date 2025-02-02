"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Sidebar() {


  return (

    <aside id="sidebar" className="sidebar">

      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="/dashboard">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/student">
            <i className="bi bi-person"></i>
            <span>Student</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/finance">
            <i className="bi bi-currency-rupee"></i>
            <span>Finance</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/inventory">
            <i className="bi bi-book"></i>
            <span>Inventory</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/transport">
            <i className="bi bi-bus-front"></i>
            <span>Transport</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/hostel">
            <i className="bi bi-building-fill"></i>
            <span>Hostel</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/examination">
            <i className="bi bi-mortarboard-fill"></i>
            <span>Examination</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/employee">
            <i className="bi bi-people-fill"></i>
            <span>Employee</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="front-desk">
            <i className="bi bi-pc-display-horizontal"></i>
            <span>Front Desk</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/academic">
            <i className="bi bi-buildings-fill"></i>
            <span>Academic</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/user-roles">
            <i className="bi bi-people-fill"></i>
            <span>User & Roles</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/settings">
            <i className="bi bi-gear-fill"></i>
            <span>Settings</span>
          </a>
        </li>

      </ul>
    </aside>

  );
}
