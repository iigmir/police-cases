import seq from "sequelize";
const { Sequelize, Model, DataTypes } = seq;
import setting from "../connection-setting.js";
import status_message from "../utils/status-message.js";

const requested_condition = ( id = NaN ) =>
{
    return isNaN( id ) ? { limit: 5 } : { where: { id } };
};

class Case extends Model {}

const fetch_data = async ( id = NaN ) =>
{
    const sequelize = new Sequelize( setting.database, setting.user, setting.password, {
        host: setting.host,
        dialect: "mariadb"
    });
    Case.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        description: {
            type: DataTypes.CHAR,
            allowNull: false
        },
    },{
        sequelize,
        modelName: "cases",
        timestamps: false
    });
    const data = await Case.findAll( requested_condition( id ) );
    return data;
};

export default async ( id = "" ) =>
{
    const data = await fetch_data( parseInt( id, 10 ) );
    return {
        status: status_message(data),
        data,
    };
};
