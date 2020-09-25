import mariadb from "mariadb";
import setting from "../connection-setting.js";

const requested_sql = ( id = NaN ) =>
{
    return !isNaN( id ) ? "SELECT * FROM cases WHERE cases.id = " + id : "SELECT * FROM cases LIMIT 5";
};

const status_message = ( data ) =>
{
    if( data instanceof Error )
    {
        return "Error";
    }
    if( data.length < 1 )
    {
        return "Not Found";
    }
    return "Success";
};

export default async( id = "" ) =>
{
    try {
        const conn = await mariadb.createConnection( setting );
        const data = await conn.query( requested_sql( parseInt( id, 10 ) ) , (err, rows) =>
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
