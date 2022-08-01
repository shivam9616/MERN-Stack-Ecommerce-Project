import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useNavigate } from "react-router-dom";
import "./Profile.css"

const Profile = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  let navigate = useNavigate();
  useEffect(() => {
    if(isAuthenticated===false){
      navigate("/login")
    }
  }, [navigate, isAuthenticated])
  

  return (
    <Fragment>
      {!isAuthenticated ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={ user.avatar.url } alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h1>Full Name</h1>
                <p>{user.name}</p>
              </div>
              <div>
                <h1>Email</h1>
                <p>{user.email}</p>
              </div>
              <div>
                <h1>Joined On</h1>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>
              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
