import React, { Component } from "react";
import { connect} from "react-redux";
import {fetchUsers} from "../actions/index";
import {Helmet} from "react-helmet";

class UserListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUserList() {
        return this.props.users.map((user) => <li key={user.id}>{user.name}</li>)
    }

    header() {
        return(
            <Helmet>
                 <title>{`${this.props.users.length} users`}</title>
                 <meta name="og:title" content="User Listcomponent" />
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.header()}
                Inside User component
                <ul>
                    {this.renderUserList()}
                </ul>
            </div>
        );
    }
}

function loadData(store) {
    return store.dispatch(fetchUsers);
}

const mapStateToProps = ({users}) => ({
    users
});

const dispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers)
});

export default {
    loadData,
    component: connect(mapStateToProps,dispatchToProps)(UserListPage)
}

