"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.Users = exports.Task = exports.Role = exports.Results = exports.Profession = exports.Direction = exports.Curs = void 0;
const Curs_1 = require("./Curs");
Object.defineProperty(exports, "Curs", { enumerable: true, get: function () { return Curs_1.Curs; } });
const Direction_1 = require("./Direction");
Object.defineProperty(exports, "Direction", { enumerable: true, get: function () { return Direction_1.Direction; } });
const Profession_1 = require("./Profession");
Object.defineProperty(exports, "Profession", { enumerable: true, get: function () { return Profession_1.Profession; } });
const Results_1 = require("./Results");
Object.defineProperty(exports, "Results", { enumerable: true, get: function () { return Results_1.Results; } });
const Role_1 = require("./Role");
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return Role_1.Role; } });
const Task_1 = require("./Task");
Object.defineProperty(exports, "Task", { enumerable: true, get: function () { return Task_1.Task; } });
const Users_1 = require("./Users");
Object.defineProperty(exports, "Users", { enumerable: true, get: function () { return Users_1.Users; } });
function initModels(sequelize) {
    const Curs = Curs_1.Curs.initModel(sequelize);
    const Direction = Direction_1.Direction.initModel(sequelize);
    const Profession = Profession_1.Profession.initModel(sequelize);
    const Results = Results_1.Results.initModel(sequelize);
    const Role = Role_1.Role.initModel(sequelize);
    const Task = Task_1.Task.initModel(sequelize);
    const Users = Users_1.Users.initModel(sequelize);
    Results.belongsTo(Curs, { as: "Cur", foreignKey: "CursId" });
    Curs.hasMany(Results, { as: "Results", foreignKey: "CursId" });
    Task.belongsTo(Curs, { as: "Cur", foreignKey: "CursId" });
    Curs.hasMany(Task, { as: "Tasks", foreignKey: "CursId" });
    Curs.belongsTo(Direction, { as: "Direction_Direction", foreignKey: "Direction" });
    Direction.hasMany(Curs, { as: "Curs", foreignKey: "Direction" });
    Users.belongsTo(Profession, { as: "ProfessionName_Profession", foreignKey: "ProfessionName" });
    Profession.hasMany(Users, { as: "Users", foreignKey: "ProfessionName" });
    Users.belongsTo(Role, { as: "id_Role", foreignKey: "id" });
    Role.hasOne(Users, { as: "User", foreignKey: "id" });
    Results.belongsTo(Users, { as: "User", foreignKey: "UserId" });
    Users.hasMany(Results, { as: "Results", foreignKey: "UserId" });
    return {
        Curs: Curs,
        Direction: Direction,
        Profession: Profession,
        Results: Results,
        Role: Role,
        Task: Task,
        Users: Users,
    };
}
exports.initModels = initModels;
