import routes from "./routes.js";
import controllers from "../controllers/index.js";

const main = (app) =>
{
    app.get( routes.cases.COLLECTION, (req, res, next) => controllers.cases(req, res, next) );
    app.get( routes.cases.MEMBER, (req, res, next) => controllers.cases(req, res, next) );
    app.post( routes.cases.MEMBER, (req, res, next) => controllers.cases(req, res, next) );
    app.put( routes.cases.MEMBER, (req, res, next) => controllers.cases(req, res, next) );
    app.delete( routes.cases.MEMBER, (req, res, next) => controllers.cases(req, res, next) );
};

export default main;
