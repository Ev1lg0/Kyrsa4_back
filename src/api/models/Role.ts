import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Users, UsersCreationAttributes, UsersId } from './Users';

export interface RoleAttributes {
  id: number;
  RoleName: string;
}

export type RolePk = "id";
export type RoleId = Role[RolePk];
export type RoleOptionalAttributes = "id";
export type RoleCreationAttributes = Optional<RoleAttributes, RoleOptionalAttributes>;

export class Role extends Model<RoleAttributes, RoleCreationAttributes> implements RoleAttributes {
  id!: number;
  RoleName!: string;

  // Role hasOne Users via id
  User!: Users;
  getUser!: Sequelize.HasOneGetAssociationMixin<Users>;
  setUser!: Sequelize.HasOneSetAssociationMixin<Users, UsersId>;
  createUser!: Sequelize.HasOneCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Role {
    return Role.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RoleName: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Role',
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
    ]
  });
  }
}
