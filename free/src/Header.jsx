import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import tea from './assets/header1/tea.png';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Header.css';




const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="header">
        <div className="header__first">
          <img src={tea} alt="Tea" />
        </div>
        <div className="header__second">
          <input placeholder="search" type="text" aria-label="Search" />
          <SearchIcon />
        </div>
        <div className="mobileHidden">
          <div className="header__third">
            <p>Communities</p>
            <p>English/Hindi</p>
            <p>Newsfeed</p>
          </div>
          <div className="header__fourth">
            <button className="header__fourth1">SIGN IN</button>
            <button className="header__fourth2">SIGN UP</button>
          </div>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer
            className="drawer"
            title="Menu"
            placement="right"
            onClose={onClose}
            open={open}
          >
            <p>Communities</p>
            <p>English/Hindi</p>
            <p>Newsfeed</p>
            <p>Sign in</p>
            <p>Sign up</p>
          </Drawer>
        </div>
      </div>
      <div className="h2">
        <h1 className="chai">Welcome to chaicode</h1>
      </div>
    </>
  );
};

export default Header;
