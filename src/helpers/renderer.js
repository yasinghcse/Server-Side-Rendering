import React from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import Routes from "./../client/routes";
import {Provider} from "react-redux";
import {renderRoutes} from "react-router-config";
import serializer from "serialize-javascript";
import {Helmet} from "react-helmet";

const renderer = (req, store, context) => {
    const content = renderToString(
        <Provider store = {store}>
            <StaticRouter location={req.path} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );
    const helmet = Helmet.renderStatic();
    // return `
        // <html>
        //     <head>
        //         ${helmet.title.toString()}
        //         ${helmet.meta.toString()}
        //     </head>
        //     <body>
        //         <div id="root">${content}</div>
        //         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
        //         <script>window.__INITIAL_REACT_STATE__=${serializer(store.getState())}</script>
        //         <script src="bundle.js"></script>
        //     </body>
        // </html>
    // `;
    return {
        content,
        reduxState: serializer(store.getState())
    };
}

export default renderer;