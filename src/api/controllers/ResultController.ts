import {models} from '../modelsController';
import {Request, Response} from 'express';
import { IRest } from '../../interfaces/IRest';

export class ResultsController extends IRest {
    static async getAll(req: Request, res: Response): Promise<void> {
        const data = await models.Results.findAll({
            attributes: [
                'id',
                'UserId',
                'CursId',
                'Grade'
                
            ]
        });
        res.send(data);
    }
static async getByID(req: Request, res: Response): Promise<void> {
        const data = await models.Results.findByPk(req.params.id, {
            attributes: [
                'id',
                'UserId',
                'CursId',
                'Grade'
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


        models.Results.create({
            UserId: req.body.UserId,
            CursId: req.body.CursId,
            Grade: req.body.CursId
            
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

        const oldResults = await models.Results.findByPk(req.params.id);

        models.Results.update({
            UserId: req.body.UserId || oldResults?.UserId,
            CursId: req.body.CursId || oldResults?.CursId,
            Grade: req.body.Grade || oldResults?.Grade
            
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
        models.Results.destroy({where: {id: req.params.id}})
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
