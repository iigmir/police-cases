import query from "../model/cases2.js";

const status_code = ( status = "Error" ) =>
{
    const dictionary = {
        "Error": 500,
        "Not Found": 404
    };
    return dictionary[ status ] || 200;
}

export default async (req, res, next) =>
{
    const id = req.params.id || "";
    const data = await query( id );
    res.status( status_code( data.status ) );
    res.send({
        data,
        id,
    });
};
