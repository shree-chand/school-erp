// RootLayout.tsx
'use client';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./globals.css";
import Sidebar from './sidebar/page';
import Header from "./header/page";
import Footer from './footer/page';
import Login from './login/page';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>GroSchool</title>
        <link rel="icon" type="image/x-icon" href="/image/favicon.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
      </head>
      <body>
        {/* If not logged in, render Login page */}
        {!isLoggedIn ? (
          <Login onLoginSuccess={handleLoginSuccess} />
        ) : (
          <div className="outerMainPage">
            <div className={`leftMain ${isSidebarOpen ? 'close' : ''}`}>
              <Sidebar />
            </div>
            <div className={`rightMain ${isSidebarOpen ? 'withSidebar' : ''}`}>
              <Header toggleSidebar={toggleSidebar} />
              {children}
              <Footer />
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
