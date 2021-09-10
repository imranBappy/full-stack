import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { DrawerContext } from '../../App';
import AlertMessage from '../Alert/Alert';
import AddBet from '../Bet/AddBet';
import Bet from '../Bet/Bet';
import Game from '../Game/Game';
import GameAdd from '../Game/GameAdd';
import Info from '../Info/Info';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Sidevar from '../Sidevar/Sidevar';
import style from '../style/style';
import User from '../User/User';
import './Dashboard.css';
import Club from '../Club/Club';
import AddClub from '../Club/AddClub';
import Admin from '../Admin/Admin';
import AddAdmin from '../Admin/AddAdmin';
import BetList from '../BetList/BetList';
import Deposit from '../Deposit/Deposit';
import Withdraw from '../Withdraw/Withdraw';
import GameFinish from '../GameFinish/GameFinish';
import Option from '../Option/Option';

const useStyles = style(makeStyles);

function Dashboard(props) {
  const classes = useStyles();
  const [open] = useContext(DrawerContext)
  return (
    <div style={{overflow: 'auto'}} className={classes.root}>
      
      <CssBaseline />
      <Sidevar/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        { props.alert.message && <AlertMessage/> }
        <PrivateRoute exact path='/'> 
          <Info/>
        </PrivateRoute>
        <PrivateRoute path='/user'>
          <User/>
        </PrivateRoute>
        <PrivateRoute path='/game-add'>
          <GameAdd/>
        </PrivateRoute>
        <PrivateRoute path='/game'>
          <Game/>
        </PrivateRoute>
        <PrivateRoute path='/bet-add/:gameId'>
          <AddBet/>
        </PrivateRoute>
        <PrivateRoute path='/bet/:gameId'>
          <Bet/>
        </PrivateRoute>
        <PrivateRoute path='/club'>
          <Club/>
        </PrivateRoute>
        <PrivateRoute path='/add-club'>
          <AddClub/>
        </PrivateRoute>
        <PrivateRoute path='/bet-list'>
          <BetList/>
        </PrivateRoute>
        <PrivateRoute path='/deposit'>
          <Deposit/>
        </PrivateRoute>
        <PrivateRoute path='/withdraw'>
          <Withdraw/>
        </PrivateRoute>
        <PrivateRoute path='/game-finish'>
          <GameFinish/>
        </PrivateRoute>
        <PrivateRoute path='/admin'>
          <Admin/>
        </PrivateRoute>
        <PrivateRoute path='/add-admin'>
          <AddAdmin/>
        </PrivateRoute>
        <PrivateRoute path='/option'>
          <Option/>
        </PrivateRoute>
      </main>
    </div>
  );
}
const mapStateToProps = state =>({
  alert: state.alert
})
export default connect(mapStateToProps)(Dashboard);