import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { connect } from 'react-redux';
import { alertAction } from '../../store/actions/alertAction';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function AlertMessage(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleAlert =()=>{
    setOpen(false)
    props.alertAction({
      message:'',
      error: false
    })
  }
  return (
    <div style={{margin:10}} className={classes.root}>
      <Collapse in={open}>
        <div style={{width:'80%', margin: '0 auto'}} >
          <Alert
        severity={props.alert.error? 'error': 'success'}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleAlert}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {props.alert.message}
        </Alert>
        </div>
      </Collapse>
    </div>
  );
}

const mapStateToProps = state =>({alert: state.alert})

export default connect(mapStateToProps, { alertAction } )(AlertMessage);