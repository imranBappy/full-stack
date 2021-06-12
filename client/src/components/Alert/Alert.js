import React from 'react';
import { connect } from 'react-redux';
import { alertAction } from '../../store/actions/alertAction';
import './Alert.css';

const Alert = (props) => {
    const {message, error} = props.alert
    const checkAlert = () =>{
        props.alertAction({
            message:'',
            error: false
        })
    }
    
    // d4edda
    return (
        <div>
            <div  style={error?{color:'red', background:'#f8d7da'}:{color:'green', background:'#d4edda'}} className="alert">
                <span className="closebtn" onClick={checkAlert} >&times;</span> 
                {message}
            </div>
        </div>
    );
};

const mapStateToProps = state =>({
    alert: state.alert
})

export default connect(mapStateToProps,{alertAction})(Alert) ;