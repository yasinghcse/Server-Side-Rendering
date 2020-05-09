import React, {Component} from "react";
import {fetchAdmin} from "./../actions";
import {connect} from "react-redux";
import requireAuth from "./../components/hoc/requireAuth";

class AdminListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmin();
    }

    renderAdmins() {
        console.log("this.props.admins", this.props.admins);
        return this.props.admins && this.props.admins.map((admin) => <li key={admin.id}>{admin.name}</li>)
    }

    render() {
        return(
            <div>
                Admin List:
                <ul>
                    {this.renderAdmins()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({admins}) => ({
    admins
});

const mapDispatchToProps = (dispatch) => ({
    fetchAdmin: () => dispatch(fetchAdmin)
});

export default {
    component: connect(mapStateToProps, mapDispatchToProps)(requireAuth(AdminListPage)),
    loadData: ({dispatch}) => dispatch(fetchAdmin)
};
