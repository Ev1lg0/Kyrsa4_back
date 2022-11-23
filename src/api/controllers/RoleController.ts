import {models} from '../modelsController';
import {Request, Response} from 'express';
import { IRest } from '../../interfaces/IRest';

export class RoleController extends IRest {
    static async getAll(req: Request, res: Response): Promise<void> {
        const data = await models.Role.findAll({
            attributes: [
                'id',
                'RoleName',
                
                
            ]
        });
        res.send(data);
    }
static async getByID(req: Request, res: Response): Promise<void> {
        const data = await models.Role.findByPk(req.params.id, {
            attributes: [
                'id',
                'RoleName',
                
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


        models.Role.create({
            RoleName: req.body.RoleName
            
            
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

        const oldRole = await models.Role.findByPk(req.params.id);

        models.Role.update({
            RoleName: req.body.RoleName || oldRole?.RoleName
            
            
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
        models.Role.destroy({where: {id: req.params.id}})
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
