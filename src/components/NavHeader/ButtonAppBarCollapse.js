import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  buttonCollapse: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    margin: '10px',
    boxShadow: 'none',
  },
}));

const ButtonAppBarCollapse = (props) => {
  const [anchorEl, setanchorEl] = useState(null);

  const handleMenu = (event) => {
    setanchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setanchorEl(null);
  };

  const classes = useStyles();
  return (
    <div className={classes.buttonCollapse}>
      <IconButton onClick={handleMenu}>
        <HomeIcon />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.children}
      </Menu>
    </div>
  );
};

export default ButtonAppBarCollapse;
