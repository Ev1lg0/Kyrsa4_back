import {models} from '../modelsController';
import {Request, Response} from 'express';
import { IRest } from '../../interfaces/IRest';

export class TaskController extends IRest {
    static async getAll(req: Request, res: Response): Promise<void> {
        const data = await models.Task.findAll({
            attributes: [
                'id',
                'Answer1',
                'Answer2',
                'Answer3',
                'Answer4',
                'Question',
                'CursId'
            ]
        });
        res.send(data);
    }
static async getByID(req: Request, res: Response): Promise<void> {
        const data = await models.Task.findByPk(req.params.id, {
            attributes: [
                'id',
                'Answer1',
                'Answer2',
                'Answer3',
                'Answer4',
                'Question',
                'CursId'
            ]
        });
        res.send(data);
    }

    static async create(req: Request, res: Response): Promise<void> {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }


        models.Task.create({
            Answer1: req.body.Answer1,
            Answer2: req.body.Answer2,
            Answer3: req.body.Answer3,
            Answer4: req.body.Answer4,
            Question: req.body.Question,
            CursId: req.body.CursId,
            CorrectAnswer: req.body.CorrectAnswer
            })
            .then((data, ) => {
                if (!data)
                    res.status(500).send({
                        error:
                            "Some error occurred while creating."
                    });
                        else {
                            res.status(200).send(data)
                        }
                    
                ;
            });
    }

    static async update(req: Request, res: Response): Promise<void> {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }

        const oldTask = await models.Task.findByPk(req.params.id);

        models.Task.update({
            Answer1: req.body.Answer1 || oldTask?.Answer1,
            Answer2: req.body.Answer2 || oldTask?.Answer2,
            Answer3: req.body.Answer3 || oldTask?.Answer3,
            Answer4: req.body.Answer4 || oldTask?.Answer4,
            Question: req.body.Question || oldTask?.Question,
            CursId: req.body.CursId || oldTask?.CursId,
            CorrectAnswer: req.body.CorrectAnswer || oldTask?.CorrectAnswer
        }, {where: {id: req.params.id}})
            .then((data) => {
                if (!data)
                    res.status(500).send({
                        error:
                            "Some error occurred while updating."
                    });
                else res.send(true);
            });
    }

    static async delete(req: Request, res: Response): Promise<void> {
        models.Task.destroy({where: {id: req.params.id}})
            .then(data => {
                if (!data) {
                    res.status(500).send({
                        error:
                            "Some error occurred while deleting."
                    });
                }
                else res.send(true);
            })
    }

    
}
