import express from "express";
import init_route from "./routes/index.js";
const app = express();
const port = process.env.PORT || 5000;

init_route( app );

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
