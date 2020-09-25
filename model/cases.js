import mariadb from "mariadb";
import setting from "../connection-setting.js";
import status_message from "../utils/status-message.js";

const requested_condition = ( id = NaN ) =>
{
    return !isNaN( id ) ? "SELECT * FROM cases WHERE cases.id = " + id : "SELECT * FROM cases LIMIT 5";
};

export default async( id = "" ) =>
{
    try {
        const conn = await mariadb.createConnection( setting );
        const data = await conn.query( requested_condition( parseInt( id, 10 ) ) , (err, rows) =>
        {
            return err ? err : rows;
        });
        const status = status_message( data );
        return {
            status,
            data,
        };
    } catch (err) {
        return {
            status: "Error",
            data: err,
        };
    }
};
