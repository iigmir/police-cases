import query from "../model/cases.js";

export default async (req, res, next) =>
{
    const id = req.params.id || "";
    const { method } = req;
    const data = await query();
    res.status( data.status === "Error" ? 500 : 200 );
    res.send({
        method,
        data,
        id,
    });
};
