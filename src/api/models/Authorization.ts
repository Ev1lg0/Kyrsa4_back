import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Role, RoleId } from './Role';
import type { Users, UsersId } from './Users';

export interface AuthorizationAttributes {
  id: number;
  Login: string;
  Password: string;
  Role: number;
  UserId: number;
}

export type AuthorizationPk = "id";
export type AuthorizationId = Authorization[AuthorizationPk];
export type AuthorizationOptionalAttributes = "id";
export type AuthorizationCreationAttributes = Optional<AuthorizationAttributes, AuthorizationOptionalAttributes>;

export class Authorization extends Model<AuthorizationAttributes, AuthorizationCreationAttributes> implements AuthorizationAttributes {
  id!: number;
  Login!: string;
  Password!: string;
  Role!: number;
  UserId!: number;

  // Authorization belongsTo Role via Role
  Role_Role!: Role;
  getRole_Role!: Sequelize.BelongsToGetAssociationMixin<Role>;
  setRole_Role!: Sequelize.BelongsToSetAssociationMixin<Role, RoleId>;
  createRole_Role!: Sequelize.BelongsToCreateAssociationMixin<Role>;
  // Authorization belongsTo Users via UserId
  User!: Users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Authorization {
    return Authorization.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Login: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    Role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Role',
        key: 'id'
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      unique: "FK_Authorization_User"
    }
  }, {
    sequelize,
    tableName: 'Authorization',
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
        name: "UserId_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserId" },
        ]
      },
      {
        name: "FK_Authorization_Role_idx",
        using: "BTREE",
        fields: [
          { name: "Role" },
        ]
      },
    ]
  });
  }
}
