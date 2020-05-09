/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const FETCH_USES = "fetch_users";
/* harmony export (immutable) */ __webpack_exports__["c"] = FETCH_USES;

const fetchUsers = (() => {
    var _ref = _asyncToGenerator(function* (dispatch, getState, axiosInstance) {
        let res;
        try {
            res = yield axiosInstance.get("/users");
        } catch (e) {
            console.log("async error found", e);
        }

        dispatch({
            type: FETCH_USES,
            payload: res && res.data
        });
    });

    return function fetchUsers(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
})();
/* harmony export (immutable) */ __webpack_exports__["f"] = fetchUsers;


const FETCH_CURRENT_USER = "fetch_current_user";
/* harmony export (immutable) */ __webpack_exports__["b"] = FETCH_CURRENT_USER;

const fetchCurrentUser = (() => {
    var _ref2 = _asyncToGenerator(function* (dispatch, getState, axiosInstance) {
        let res;
        try {
            res = yield axiosInstance.get("/current_user");
        } catch (e) {
            console.log("async error found", e);
        }
        dispatch({
            type: FETCH_CURRENT_USER,
            payload: res && res.data
        });
    });

    return function fetchCurrentUser(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
    };
})();
/* harmony export (immutable) */ __webpack_exports__["e"] = fetchCurrentUser;


const FETCH_ADMIN = "fetch_admin";
/* harmony export (immutable) */ __webpack_exports__["a"] = FETCH_ADMIN;

const fetchAdmin = (() => {
    var _ref3 = _asyncToGenerator(function* (dispatch, getState, axiosInstance) {
        let res;
        try {
            res = yield axiosInstance.get("/admins");
        } catch (e) {
            console.log("async error found", e);
        }
        dispatch({
            type: FETCH_ADMIN,
            payload: res && res.data
        });
    });

    return function fetchAdmin(_x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
    };
})();
/* harmony export (immutable) */ __webpack_exports__["d"] = fetchAdmin;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_HomePage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_UserListPage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_PageNotFound__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_AdminListPage__ = __webpack_require__(17);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








/* harmony default export */ __webpack_exports__["a"] = ([_extends({}, __WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */], {
    routes: [_extends({}, __WEBPACK_IMPORTED_MODULE_1__pages_HomePage__["a" /* default */], {
        path: "/",
        exact: true
    }), _extends({}, __WEBPACK_IMPORTED_MODULE_2__pages_UserListPage__["a" /* default */], {
        exact: true,
        path: "/users"
    }), _extends({}, __WEBPACK_IMPORTED_MODULE_5__pages_AdminListPage__["a" /* default */], {
        path: "/admins"
    }), _extends({}, __WEBPACK_IMPORTED_MODULE_4__pages_PageNotFound__["a" /* default */])]
})]);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_renderer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_createStore__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_routes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_http_proxy__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_http_proxy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_http_proxy__);
// import "babel-polyfill";







const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static("public"));
app.use("/api", __WEBPACK_IMPORTED_MODULE_5_express_http_proxy___default()("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
        opts.headers["x-forwarded-host"] = "localhost:3000";
        return opts;
    }
}));

app.get("*", (req, res) => {
    const store = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_createStore__["a" /* default */])(req);
    const context = {};
    const promises = Object(__WEBPACK_IMPORTED_MODULE_3_react_router_config__["matchRoutes"])(__WEBPACK_IMPORTED_MODULE_4__client_routes__["a" /* default */], req.path).map(({ route }) => {
        return route && route.loadData ? route.loadData(store) : null;
    }).map(promise => {
        if (promise) {
            return new Promise((res, rej) => promise.then(res).catch(res));
        }
    });

    Promise.all(promises).then(data => {
        ;
        const content = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_renderer__["a" /* default */])(req, store, context);
        console.log("Final Context", context);

        if (context.url) {
            return res.redirect(301, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    });
});

app.listen(3000, () => {
    console.log("Running app at port 3000");
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_routes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_serialize_javascript__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_helmet__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_helmet__);









const renderer = (req, store, context) => {
    const content = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"],
        { store: store },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["StaticRouter"],
            { location: req.path, context: context },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                null,
                Object(__WEBPACK_IMPORTED_MODULE_5_react_router_config__["renderRoutes"])(__WEBPACK_IMPORTED_MODULE_3__client_routes__["a" /* default */])
            )
        )
    ));
    const helmet = __WEBPACK_IMPORTED_MODULE_7_react_helmet__["Helmet"].renderStatic();
    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
            </head>
            <body>
                <div id="root">${content}</div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
                <script>window.__INITIAL_REACT_STATE__=${__WEBPACK_IMPORTED_MODULE_6_serialize_javascript___default()(store.getState())}</script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};

/* harmony default export */ __webpack_exports__["a"] = (renderer);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


const HomePage = () => {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "center-align", style: { marginTop: '200px' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            null,
            "Welcome"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            null,
            "Check out these awesome features"
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = ({
    component: HomePage
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);





class UserListPage extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUserList() {
        return this.props.users.map(user => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            { key: user.id },
            user.name
        ));
    }

    header() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_helmet__["Helmet"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "title",
                null,
                `${this.props.users.length} users`
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "og:title", content: "User Listcomponent" })
        );
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            null,
            this.header(),
            "Inside User component",
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "ul",
                null,
                this.renderUserList()
            )
        );
    }
}

function loadData(store) {
    return store.dispatch(__WEBPACK_IMPORTED_MODULE_2__actions_index__["f" /* fetchUsers */]);
}

const mapStateToProps = ({ users }) => ({
    users
});

const dispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(__WEBPACK_IMPORTED_MODULE_2__actions_index__["f" /* fetchUsers */])
});

/* harmony default export */ __webpack_exports__["a"] = ({
    loadData,
    component: Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, dispatchToProps)(UserListPage)
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_index__ = __webpack_require__(1);





const App = ({ route }) => {

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], null),
        Object(__WEBPACK_IMPORTED_MODULE_2_react_router_config__["renderRoutes"])(route.routes)
    );
};

/* harmony default export */ __webpack_exports__["a"] = ({
    component: App,
    loadData: ({ dispatch }) => dispatch(__WEBPACK_IMPORTED_MODULE_3__actions_index__["e" /* fetchCurrentUser */])
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);



const Header = ({ auth }) => {
    console.log("auth rec as", auth);
    const authButton = auth ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { href: "/api/logout" },
        "Logout"
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { href: "/api/auth/google" },
        "Login"
    );
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "nav",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "nav-wrapper" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
                { to: "/", className: "brand-logo" },
                "React SSR"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "ul",
                { className: "right" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "li",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
                        { to: "/users" },
                        "Users"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "li",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
                        { to: "/admins" },
                        "Admins"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "li",
                    null,
                    authButton
                )
            )
        )
    );
};

const mapStateToProps = ({ auth }) => ({
    auth
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(Header));

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


const PageNotFound = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        null,
        "Page not found !!!"
    );
};

/* harmony default export */ __webpack_exports__["a"] = ({
    component: PageNotFound
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_hoc_requireAuth__ = __webpack_require__(18);





class AdminListPage extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    componentDidMount() {
        this.props.fetchAdmin();
    }

    renderAdmins() {
        console.log("this.props.admins", this.props.admins);
        return this.props.admins && this.props.admins.map(admin => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            { key: admin.id },
            admin.name
        ));
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            null,
            "Admin List:",
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "ul",
                null,
                this.renderAdmins()
            )
        );
    }
}

const mapStateToProps = ({ admins }) => ({
    admins
});

const mapDispatchToProps = dispatch => ({
    fetchAdmin: () => dispatch(__WEBPACK_IMPORTED_MODULE_1__actions__["d" /* fetchAdmin */])
});

/* harmony default export */ __webpack_exports__["a"] = ({
    component: Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Object(__WEBPACK_IMPORTED_MODULE_3__components_hoc_requireAuth__["a" /* default */])(AdminListPage)),
    loadData: ({ dispatch }) => dispatch(__WEBPACK_IMPORTED_MODULE_1__actions__["d" /* fetchAdmin */])
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);




const requireAuth = childComponent => {

    const HOCComponent = props => {
        switch (props.auth) {
            case false:
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Redirect"], { to: "/" });
            case null:
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    null,
                    "Loading ...."
                );
            default:
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("childComponent", props);
        }
    };

    const mapStateToProps = ({ auth }) => ({
        auth
    });

    return Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(HOCComponent);
};

/* harmony default export */ __webpack_exports__["a"] = (requireAuth);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_reducers__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);






/* harmony default export */ __webpack_exports__["a"] = (req => {
    const axiosInstance = __WEBPACK_IMPORTED_MODULE_4_axios___default.a.create({
        baseURL: "http://react-ssr-api.herokuapp.com",
        headers: {
            cookie: req.get("cookie") || ""
        }
    });
    const store = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__client_reducers__["a" /* default */], {}, Object(__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(axiosInstance)));
    return store;
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userReducer__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authReducer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adminReducers__ = __webpack_require__(25);





/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    users: __WEBPACK_IMPORTED_MODULE_1__userReducer__["a" /* default */],
    auth: __WEBPACK_IMPORTED_MODULE_2__authReducer__["a" /* default */],
    admins: __WEBPACK_IMPORTED_MODULE_3__adminReducers__["a" /* default */]
}));

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_index__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ((state = [], action) => {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_index__["c" /* FETCH_USES */]:
            return action.payload;
        default:
            return state;
    };
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_index__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ((state = null, action) => {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_index__["b" /* FETCH_CURRENT_USER */]:
            return action.payload || false;
        default:
            return state;
    };
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_index__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ((state = [], action) => {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_index__["a" /* FETCH_ADMIN */]:
            return action.payload;
        default:
            return state;
    };
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ })
/******/ ]);