import React from "react";
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";
import App from "./App";
import PageNotFound from "./pages/PageNotFound";
import AdminListPage from "./pages/AdminListPage";

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: "/",
                exact: true
            },
            {
                ...UserListPage,
                exact: true,
                path: "/users"
            },
            {
                ...AdminListPage,
                path: "/admins"
            },
            {
                ...PageNotFound
            }
        ]
    }
];