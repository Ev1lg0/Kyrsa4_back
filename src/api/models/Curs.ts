import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Direction, DirectionId } from './Direction';
import type { Results, ResultsId } from './Results';
import type { Task, TaskId } from './Task';

export interface CursAttributes {
  id: number;
  Direction: number;
}

export type CursPk = "id";
export type CursId = Curs[CursPk];
export type CursOptionalAttributes = "id";
export type CursCreationAttributes = Optional<CursAttributes, CursOptionalAttributes>;

export class Curs extends Model<CursAttributes, CursCreationAttributes> implements CursAttributes {
  id!: number;
  Direction!: number;

  // Curs hasMany Results via CursId
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
  // Curs hasMany Task via CursId
  Tasks!: Task[];
  getTasks!: Sequelize.HasManyGetAssociationsMixin<Task>;
  setTasks!: Sequelize.HasManySetAssociationsMixin<Task, TaskId>;
  addTask!: Sequelize.HasManyAddAssociationMixin<Task, TaskId>;
  addTasks!: Sequelize.HasManyAddAssociationsMixin<Task, TaskId>;
  createTask!: Sequelize.HasManyCreateAssociationMixin<Task>;
  removeTask!: Sequelize.HasManyRemoveAssociationMixin<Task, TaskId>;
  removeTasks!: Sequelize.HasManyRemoveAssociationsMixin<Task, TaskId>;
  hasTask!: Sequelize.HasManyHasAssociationMixin<Task, TaskId>;
  hasTasks!: Sequelize.HasManyHasAssociationsMixin<Task, TaskId>;
  countTasks!: Sequelize.HasManyCountAssociationsMixin;
  // Curs belongsTo Direction via Direction
  Direction_Direction!: Direction;
  getDirection_Direction!: Sequelize.BelongsToGetAssociationMixin<Direction>;
  setDirection_Direction!: Sequelize.BelongsToSetAssociationMixin<Direction, DirectionId>;
  createDirection_Direction!: Sequelize.BelongsToCreateAssociationMixin<Direction>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Curs {
    return Curs.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Direction: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Direction',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Curs',
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
        name: "FK_Curs_Direction_idx",
        using: "BTREE",
        fields: [
          { name: "Direction" },
        ]
      },
    ]
  });
  }
}
