import type { Sequelize } from "sequelize";
import { Curs as _Curs } from "./Curs";
import type { CursAttributes, CursCreationAttributes } from "./Curs";
import { Direction as _Direction } from "./Direction";
import type { DirectionAttributes, DirectionCreationAttributes } from "./Direction";
import { Profession as _Profession } from "./Profession";
import type { ProfessionAttributes, ProfessionCreationAttributes } from "./Profession";
import { Results as _Results } from "./Results";
import type { ResultsAttributes, ResultsCreationAttributes } from "./Results";
import { Role as _Role } from "./Role";
import type { RoleAttributes, RoleCreationAttributes } from "./Role";
import { Task as _Task } from "./Task";
import type { TaskAttributes, TaskCreationAttributes } from "./Task";
import { Users as _Users } from "./Users";
import type { UsersAttributes, UsersCreationAttributes } from "./Users";

export {
  _Curs as Curs,
  _Direction as Direction,
  _Profession as Profession,
  _Results as Results,
  _Role as Role,
  _Task as Task,
  _Users as Users,
};

export type {
  CursAttributes,
  CursCreationAttributes,
  DirectionAttributes,
  DirectionCreationAttributes,
  ProfessionAttributes,
  ProfessionCreationAttributes,
  ResultsAttributes,
  ResultsCreationAttributes,
  RoleAttributes,
  RoleCreationAttributes,
  TaskAttributes,
  TaskCreationAttributes,
  UsersAttributes,
  UsersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Curs = _Curs.initModel(sequelize);
  const Direction = _Direction.initModel(sequelize);
  const Profession = _Profession.initModel(sequelize);
  const Results = _Results.initModel(sequelize);
  const Role = _Role.initModel(sequelize);
  const Task = _Task.initModel(sequelize);
  const Users = _Users.initModel(sequelize);

  Results.belongsTo(Curs, { as: "Cur", foreignKey: "CursId"});
  Curs.hasMany(Results, { as: "Results", foreignKey: "CursId"});
  Task.belongsTo(Curs, { as: "Cur", foreignKey: "CursId"});
  Curs.hasMany(Task, { as: "Tasks", foreignKey: "CursId"});
  Curs.belongsTo(Direction, { as: "Direction_Direction", foreignKey: "Direction"});
  Direction.hasMany(Curs, { as: "Curs", foreignKey: "Direction"});
  Users.belongsTo(Profession, { as: "ProfessionName_Profession", foreignKey: "ProfessionName"});
  Profession.hasMany(Users, { as: "Users", foreignKey: "ProfessionName"});
  Users.belongsTo(Role, { as: "id_Role", foreignKey: "id"});
  Role.hasOne(Users, { as: "User", foreignKey: "id"});
  Results.belongsTo(Users, { as: "User", foreignKey: "UserId"});
  Users.hasMany(Results, { as: "Results", foreignKey: "UserId"});

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
