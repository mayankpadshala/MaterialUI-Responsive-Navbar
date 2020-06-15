import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AppBarCollapse from './AppBarCollapse';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navigation: {
    backgroundColor: theme.palette.background.paper,
    color: 'black',
  },
  toggleDrawer: {},
  appTitle: {},
}));

const NavHeader = (props) => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.navigation}>
      <Toolbar>
        <Typography
          variant='title'
          color='inherit'
          className={classes.appTitle}
        >
          MyApp
        </Typography>
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  );
};

export default NavHeader;
