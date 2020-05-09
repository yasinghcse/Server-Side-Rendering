import React from "react";
import Header from "./Header";
import {renderRoutes} from "react-router-config"
import {fetchCurrentUser} from "./actions/index";

const App = ({route}) => {

    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    );
};

export default {
    component: App,
    loadData: ({dispatch}) => dispatch(fetchCurrentUser)
};