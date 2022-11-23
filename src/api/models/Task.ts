import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Curs, CursId } from './Curs';

export interface TaskAttributes {
  id: number;
  CursId: number;
  Answer1: string;
  Answer2: string;
  Answer3: string;
  Answer4: string;
  Question: string;
  CorrectAnswer: number;
}

export type TaskPk = "id";
export type TaskId = Task[TaskPk];
export type TaskOptionalAttributes = "id";
export type TaskCreationAttributes = Optional<TaskAttributes, TaskOptionalAttributes>;

export class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
  id!: number;
  CursId!: number;
  Answer1!: string;
  Answer2!: string;
  Answer3!: string;
  Answer4!: string;
  Question!: string;
  CorrectAnswer!: number;

  // Task belongsTo Curs via CursId
  Cur!: Curs;
  getCur!: Sequelize.BelongsToGetAssociationMixin<Curs>;
  setCur!: Sequelize.BelongsToSetAssociationMixin<Curs, CursId>;
  createCur!: Sequelize.BelongsToCreateAssociationMixin<Curs>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Task {
    return Task.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CursId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Curs',
        key: 'id'
      }
    },
    Answer1: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Answer2: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Answer3: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Answer4: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Question: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    CorrectAnswer: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Task',
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
        name: "FK_Task_CursId_idx",
        using: "BTREE",
        fields: [
          { name: "CursId" },
        ]
      },
    ]
  });
  }
}
