// import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import {matchRoutes} from "react-router-config";
import Routes from "./client/routes";
import proxy from "express-http-proxy";

const app = express();
app.use(express.static("public"));
app.use("/api", proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
        opts.headers["x-forwarded-host"] = "localhost:3000";
        return opts;
    }
}));


app.get("*", (req, res) => {
    const store = createStore(req);
    const context = {};
    const promises = matchRoutes(Routes, req.path)
        .map(({route}) => {
            return route && route.loadData ? route.loadData(store): null;
        })
        .map((promise) => {
            if(promise) {
                return new Promise ((res, rej)=> promise.then(res).catch(res));
            }
        });

    Promise.all(promises)
    .then((data) => {;
        const content = renderer(req, store, context);
        console.log("Final Context", context);

        if (context.url) {
            return res.redirect(301, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    })

});

app.listen(3000, () => {
    console.log("Running app at port 3000");
});
