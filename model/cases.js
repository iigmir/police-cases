import mariadb from "mariadb";
import setting from "../connection-setting.js";

export default async() =>
{
    try {
        const conn = await mariadb.createConnection( setting );
        const data = await conn.query( "SELECT * FROM cases LIMIT 5", (err, rows) =>
        {
            if( err )
            {
                return err;
            }
            else
            {
                return rows;
            }
        });
        const status = data instanceof Error ? "Error" : "Success";
        return {
            status,
            data,
        };
    } catch (err) {
        return {
            status: "Error",
            message: err,
        };
    }
};
