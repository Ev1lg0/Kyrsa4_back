import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Authorization, AuthorizationId } from './Authorization';

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

  // Role hasMany Authorization via Role
  Authorizations!: Authorization[];
  getAuthorizations!: Sequelize.HasManyGetAssociationsMixin<Authorization>;
  setAuthorizations!: Sequelize.HasManySetAssociationsMixin<Authorization, AuthorizationId>;
  addAuthorization!: Sequelize.HasManyAddAssociationMixin<Authorization, AuthorizationId>;
  addAuthorizations!: Sequelize.HasManyAddAssociationsMixin<Authorization, AuthorizationId>;
  createAuthorization!: Sequelize.HasManyCreateAssociationMixin<Authorization>;
  removeAuthorization!: Sequelize.HasManyRemoveAssociationMixin<Authorization, AuthorizationId>;
  removeAuthorizations!: Sequelize.HasManyRemoveAssociationsMixin<Authorization, AuthorizationId>;
  hasAuthorization!: Sequelize.HasManyHasAssociationMixin<Authorization, AuthorizationId>;
  hasAuthorizations!: Sequelize.HasManyHasAssociationsMixin<Authorization, AuthorizationId>;
  countAuthorizations!: Sequelize.HasManyCountAssociationsMixin;

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
