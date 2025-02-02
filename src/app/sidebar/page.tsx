"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  // Dynamic list of sidebar items
  const sidebarItems = [
    { name: 'Dashboard', icon: 'bi-grid', path: '/dashboard' },
    { name: 'Student', icon: 'bi-person', path: '/student' },
    { name: 'Finance', icon: 'bi-currency-rupee', path: '/finance' },
    { name: 'Inventory', icon: 'bi-book', path: '/inventory' },
    { name: 'Transport', icon: 'bi-bus-front', path: '/transport' },
    { name: 'Hostel', icon: 'bi-building-fill', path: '/hostel' },
    { name: 'Examination', icon: 'bi-mortarboard-fill', path: '/examination' },
    { name: 'Employee', icon: 'bi-people-fill', path: '/employee' },
    { name: 'Front Desk', icon: 'bi-pc-display-horizontal', path: '/front-desk' },
    { name: 'Academic', icon: 'bi-buildings-fill', path: '/academic' },
    { name: 'User & Roles', icon: 'bi-people-fill', path: '/user-roles' },
    { name: 'Settings', icon: 'bi-gear-fill', path: '/settings' },
  ];

  // Helper function to check if the current path is active
  const isActive = (path: string) => pathname === path;

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {sidebarItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link href={item.path} className={`nav-link ${isActive(item.path) ? 'active' : ''}`}>
              <i className={`bi ${item.icon}`}></i>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
