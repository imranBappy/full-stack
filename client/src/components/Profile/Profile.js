import React from 'react';
import userAbater from '../../img/dddd.jpg';
import {connect} from 'react-redux';
import './Profile.css'
const Profile = ({profile}) => {
    console.log(profile);
    return (
        <div>
            <div className="card">
                <img src={userAbater} alt="profile-pic" style={{with: '80%'}}/>
                <h1>{profile.name} <span style={{fontSize:20}} >({profile.username})</span> </h1>
                <p className="title">{profile.isClubHolder ? 'Club Holder' : 'Normal User'}</p>
                <p>Balance: {profile.balance}</p>
                <p> {profile.phone}</p>
                <p> {profile.email}</p>
                <p> {profile.sName.name} <span>({profile.sName.username}) </span></p>
                <p> {profile.club.name} <span>({profile.club.clubId})</span></p>

                <p><button>Update</button></p>
            </div>
        </div>
    );
};
const mapStateToProps = state =>({
    profile: state.auth.user
})
export default connect(mapStateToProps)(Profile);