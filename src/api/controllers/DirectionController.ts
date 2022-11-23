import {models} from '../modelsController';
import {Request, Response} from 'express';
import { IRest } from '../../interfaces/IRest';

export class DirectionController extends IRest {
    static async getAll(req: Request, res: Response): Promise<void> {
        const data = await models.Direction.findAll({
            attributes: [
                'id',
                'DirectionName',
                
                
            ]
        });
        res.send(data);
    }
static async getByID(req: Request, res: Response): Promise<void> {
        const data = await models.Direction.findByPk(req.params.id, {
            attributes: [
                'id',
                'DirectionName',
                
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


        models.Direction.create({
            DirectionName: req.body.DirectionName
            
            
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

        const oldDirection = await models.Direction.findByPk(req.params.id);

        models.Direction.update({
            DirectionName: req.body.DirectionName || oldDirection?.DirectionName
            
            
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
        models.Direction.destroy({where: {id: req.params.id}})
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
