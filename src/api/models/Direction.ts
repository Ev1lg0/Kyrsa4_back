import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Curs, CursId } from './Curs';

export interface DirectionAttributes {
  id: number;
  DirectionName: string;
}

export type DirectionPk = "id";
export type DirectionId = Direction[DirectionPk];
export type DirectionOptionalAttributes = "id";
export type DirectionCreationAttributes = Optional<DirectionAttributes, DirectionOptionalAttributes>;

export class Direction extends Model<DirectionAttributes, DirectionCreationAttributes> implements DirectionAttributes {
  id!: number;
  DirectionName!: string;

  // Direction hasMany Curs via Direction
  Curs!: Curs[];
  getCurs!: Sequelize.HasManyGetAssociationsMixin<Curs>;
  setCurs!: Sequelize.HasManySetAssociationsMixin<Curs, CursId>;
  addCur!: Sequelize.HasManyAddAssociationMixin<Curs, CursId>;
  addCurs!: Sequelize.HasManyAddAssociationsMixin<Curs, CursId>;
  createCur!: Sequelize.HasManyCreateAssociationMixin<Curs>;
  removeCur!: Sequelize.HasManyRemoveAssociationMixin<Curs, CursId>;
  removeCurs!: Sequelize.HasManyRemoveAssociationsMixin<Curs, CursId>;
  hasCur!: Sequelize.HasManyHasAssociationMixin<Curs, CursId>;
  hasCurs!: Sequelize.HasManyHasAssociationsMixin<Curs, CursId>;
  countCurs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Direction {
    return Direction.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DirectionName: {
      type: DataTypes.STRING(60),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Direction',
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
