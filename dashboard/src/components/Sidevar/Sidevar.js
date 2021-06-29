import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DrawerContext } from '../../App';
import { logoutAction } from '../../store/actions/authAction';
import style from '../style/style';
const useStyles = style(makeStyles);
const Sidevar = (props) => {
    const [open, setOpen] = useContext(DrawerContext)
    const classes = useStyles();
    const theme = useTheme();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const dashboardRoute = [
      {path:'/', name:'Dashboard'},
      {path:'/user', name:'User'},
      {path:'/game', name:'Game'},
      {path:'/club', name:'Club'},
      {path:'/bet-list', name:'Bet'},
      {path:'/deposit', name:'Deposit'},
      {path:'/withdraw', name:'Withdraw'},
      {path:'/game-finish', name:'Game Finish'},
      {path:'/option', name:'Option'},
      {path:'/admin', name:'Admin'},
    ]
    const handleLogout = () =>{
      props.logoutAction()
    }
    return (
        <>
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <span style={{textAlign:'center', fontSize:20, margin:'0 auto'}} >
              {props.auth.user.name?props.auth.user.name:''}
            </span>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />

          <List>
            {dashboardRoute.map(({name, path}, i) => (
              <Link style={{color: 'blue', textDecoration:'none' }} to={`${path}?page=0`} key={i} >
                <ListItem button >
                  <ListItemText style={{ marginLeft:50 }} primary={name} />
                </ListItem>
              </Link>
            ))}
            <ListItem onClick={handleLogout} button >
                  <ListItemText style={{ marginLeft:50 }} primary={'Logout'} />
              </ListItem>
          </List>
        </Drawer>
        </>
    );
};
const mapStateToProps  = state =>({
  auth: state.auth
})
export default connect(mapStateToProps,{ logoutAction })(Sidevar);
