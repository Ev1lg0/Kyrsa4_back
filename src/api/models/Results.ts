import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Curs, CursId } from './Curs';
import type { Users, UsersId } from './Users';

export interface ResultsAttributes {
  id: number;
  UserId: number;
  CursId: number;
  Grade: number;
}

export type ResultsPk = "id";
export type ResultsId = Results[ResultsPk];
export type ResultsOptionalAttributes = "id";
export type ResultsCreationAttributes = Optional<ResultsAttributes, ResultsOptionalAttributes>;

export class Results extends Model<ResultsAttributes, ResultsCreationAttributes> implements ResultsAttributes {
  id!: number;
  UserId!: number;
  CursId!: number;
  Grade!: number;

  // Results belongsTo Curs via CursId
  Cur!: Curs;
  getCur!: Sequelize.BelongsToGetAssociationMixin<Curs>;
  setCur!: Sequelize.BelongsToSetAssociationMixin<Curs, CursId>;
  createCur!: Sequelize.BelongsToCreateAssociationMixin<Curs>;
  // Results belongsTo Users via UserId
  User!: Users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Results {
    return Results.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    CursId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Curs',
        key: 'id'
      }
    },
    Grade: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Results',
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
        name: "FK_Result_UserId_idx",
        using: "BTREE",
        fields: [
          { name: "UserId" },
        ]
      },
      {
        name: "FK_Resuklt_Curs_idx",
        using: "BTREE",
        fields: [
          { name: "CursId" },
        ]
      },
    ]
  });
  }
}
