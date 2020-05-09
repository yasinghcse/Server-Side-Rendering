import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const requireAuth = (childComponent) => {

    const HOCComponent = (props) => {
        switch(props.auth) {
            case false:
                return <Redirect to="/" />
            case null:
                return <div>Loading ....</div>
            default:
                return <childComponent {...props} />
        }
    }

    const mapStateToProps = ({auth}) => ({
        auth
    });

    return connect(mapStateToProps)(HOCComponent);
}

export default requireAuth;