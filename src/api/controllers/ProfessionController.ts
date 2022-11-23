import {models} from '../modelsController';
import {Request, Response} from 'express';
import { IRest } from '../../interfaces/IRest';

export class ProfessionController extends IRest {
    static async getAll(req: Request, res: Response): Promise<void> {
        const data = await models.Profession.findAll({
            attributes: [
                'id',
                'ProfessionName',
                
                
            ]
        });
        res.send(data);
    }
static async getByID(req: Request, res: Response): Promise<void> {
        const data = await models.Profession.findByPk(req.params.id, {
            attributes: [
                'id',
                'ProfessionName',
                
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


        models.Profession.create({
            ProfessionName: req.body.ProfessionName
            
            
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

        const oldProfession = await models.Profession.findByPk(req.params.id);

        models.Profession.update({
            ProfessionName: req.body.ProfessionName || oldProfession?.ProfessionName
            
            
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
        models.Profession.destroy({where: {id: req.params.id}})
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
