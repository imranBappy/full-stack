import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { DrawerContext } from '../App';
import { default as Sidevar } from '../components/Sidevar/Sidevar';
import Style from '../components/style/style';
import './main.css';
import UserT from './UserT';
const useStyles = Style(makeStyles);

function Dashboard(props) {
  const classes = useStyles();
  const [open] = useContext(DrawerContext)
  console.log(open);
  return (
    <div className={classes.root}>
      
      <CssBaseline />
      <Sidevar/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div>
            <UserT/>
        </div>
      </main>
    </div>
  );
}
const mapStateToProps = state =>({
  alert: state.alert
})
export default connect(mapStateToProps)(Dashboard);