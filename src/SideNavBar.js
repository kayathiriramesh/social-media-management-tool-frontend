import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import  { Post}  from './Post';
import { Home } from './Home';
import AddAccount  from './AddAccount';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

function SideNavBar() {

    const [active, setActive] = useState(true);

    const handleToggle = () => {
      setActive(!active);
    };
  return (
    <>
      <div className={`sidebar ${active ? "" : "active"}`}>
        <div className="logo_content">
          <div className="logo">
            <i className='bx bxl-audible'></i>
            <div className="logo_name">Social Media</div>
          </div>
          <i className='bx bx-menu' id="btn" onClick={handleToggle}></i>
        </div>

        <ul className="nav_list">
          <li>
            <i className='bx bx-search' onClick={handleToggle}></i>
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li>

          <li>
            <Link to="/">
              <i class='bx bx-home'></i>
              <span className="links_name">Home</span>
            </Link>
            <span className="tooltip">Home</span>
          </li>

          <li>
            <Link to="/add_account">
              <i className='bx bxs-user-account'></i>
              <span className="links_name">Add Account</span>
            </Link>
            <span className="tooltip">Add account</span>
          </li>
          <li>
            <Link to="/post">
              <i className='bx bx-repost bx-xs'></i>
              <span className="links_name">Post</span>
            </Link>
            <span className="tooltip">Post</span>
          </li>
          </ul>
      </div>

      
    <Routes>
        <Route  path="/login" element={<LoginPage />} >
        </Route>

        <Route  path="/register" element={<RegisterPage />} >
        </Route>

        <Route  path="/" element={<Home />} >
        </Route>

        <Route path="/add_account" element={<AddAccount />}>
        </Route>

        <Route path="/post" element={<Post />}>
        </Route> 
    
    </Routes>
    </>
);
}

export default SideNavBar