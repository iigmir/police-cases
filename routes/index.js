import routes from "./routes.js";
import controllers from "../controllers/index.js";

const route_module = (
    app,
    route = { COLLECTION: "",MEMBER: "" },
    func = (req, res, next) => {}
) =>
{
    app.get( route.COLLECTION, (req, res, next) => func(req, res, next) );
    app.get( route.MEMBER, (req, res, next) => func(req, res, next) );
    app.put( route.MEMBER, (req, res, next) => func(req, res, next) );
    app.post( route.MEMBER, (req, res, next) => func(req, res, next) );
    app.delete( route.MEMBER, (req, res, next) => func(req, res, next) );
};

const main = (app) =>
{
    route_module( app, routes.cases, controllers.cases );
};

export default main;
