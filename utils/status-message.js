export default ( data ) =>
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
