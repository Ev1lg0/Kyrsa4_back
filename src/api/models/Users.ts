import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Profession, ProfessionId } from './Profession';
import type { Results, ResultsId } from './Results';
import type { Role, RoleId } from './Role';

export interface UsersAttributes {
  id: number;
  FirstName: string;
  SecondName: string;
  MiddleName?: string;
  DateOfBirth: string;
  PassportId: string;
  Adress: string;
  ProfessionName: number;
  Login: string;
  Password: string;
  Role: number;
}

export type UsersPk = "id";
export type UsersId = Users[UsersPk];
export type UsersOptionalAttributes = "id" | "MiddleName";
export type UsersCreationAttributes = Optional<UsersAttributes, UsersOptionalAttributes>;

export class Users extends Model<UsersAttributes, UsersCreationAttributes> implements UsersAttributes {
  id!: number;
  FirstName!: string;
  SecondName!: string;
  MiddleName?: string;
  DateOfBirth!: string;
  PassportId!: string;
  Adress!: string;
  ProfessionName!: number;
  Login!: string;
  Password!: string;
  Role!: number;

  // Users belongsTo Profession via ProfessionName
  ProfessionName_Profession!: Profession;
  getProfessionName_Profession!: Sequelize.BelongsToGetAssociationMixin<Profession>;
  setProfessionName_Profession!: Sequelize.BelongsToSetAssociationMixin<Profession, ProfessionId>;
  createProfessionName_Profession!: Sequelize.BelongsToCreateAssociationMixin<Profession>;
  // Users belongsTo Role via id
  id_Role!: Role;
  getId_Role!: Sequelize.BelongsToGetAssociationMixin<Role>;
  setId_Role!: Sequelize.BelongsToSetAssociationMixin<Role, RoleId>;
  createId_Role!: Sequelize.BelongsToCreateAssociationMixin<Role>;
  // Users hasMany Results via UserId
  Results!: Results[];
  getResults!: Sequelize.HasManyGetAssociationsMixin<Results>;
  setResults!: Sequelize.HasManySetAssociationsMixin<Results, ResultsId>;
  addResult!: Sequelize.HasManyAddAssociationMixin<Results, ResultsId>;
  addResults!: Sequelize.HasManyAddAssociationsMixin<Results, ResultsId>;
  createResult!: Sequelize.HasManyCreateAssociationMixin<Results>;
  removeResult!: Sequelize.HasManyRemoveAssociationMixin<Results, ResultsId>;
  removeResults!: Sequelize.HasManyRemoveAssociationsMixin<Results, ResultsId>;
  hasResult!: Sequelize.HasManyHasAssociationMixin<Results, ResultsId>;
  hasResults!: Sequelize.HasManyHasAssociationsMixin<Results, ResultsId>;
  countResults!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Users {
    return Users.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Role',
        key: 'id'
      }
    },
    FirstName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    SecondName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    MiddleName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    PassportId: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    Adress: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    ProfessionName: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Profession',
        key: 'id'
      }
    },
    Login: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    Role: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FK_User_ProfessionName_idx",
        using: "BTREE",
        fields: [
          { name: "ProfessionName" },
        ]
      },
      {
        name: "FK_User_Role_idx",
        using: "BTREE",
        fields: [
          { name: "Role" },
        ]
      },
    ]
  });
  }
}
