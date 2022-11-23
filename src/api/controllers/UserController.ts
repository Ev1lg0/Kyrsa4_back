import {models} from '../modelsController';
import {IUser} from "../../interfaces/IUser";
import {Request, Response} from 'express';
import { read } from 'fs';

export class UserController extends IUser {
    static async getAll(req: Request, res: Response): Promise<void> {
        const data = await models.Users.findAll({
            attributes: [
                'Id',
                'FirstName',
                'SecondName',
                'MiddleName',
                'Adress',
                'DateOfBirth',
                'ProfessionName'
            ]
        });
        res.send(data);
    }
static async getByID(req: Request, res: Response): Promise<void> {
        const data = await models.Users.findByPk(req.params.id, {
            attributes: [
                'Id',
                'FirstName',
                'SecondName',
                'MiddleName',
                'Adress',
                'DateOfBirth',
                'ProfessionName'
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


        models.Users.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            MiddleName: req.body.MiddleName,
            DateOfBirth: req.body.DateOfBirth,
            Adress: req.body.Adress,
            ProfessionName:req.body.ProfessionName
            
        })
            .then((data, ) => {
                if (!data)
                    res.status(500).send({
                        error:
                            "Some error occurred while creating."
                    });
                else {
                    models.Authorization.create({
                        Login: req.body.Login,
                        Password: req.body.Password,
                        Role: req.body.Role, 
                        UserId: data.id
                    }).then((data, ) => {
                        if (!data){
                        res.status(500).send({
                            error:
                                "Some error occurred while creating."
                        });}
                        else {
                            res.status(200).send(data)
                        }
                    })
                };
            });
    }

    static async update(req: Request, res: Response): Promise<void> {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }

        const oldUser = await models.Users.findByPk(req.params.id);

        models.Users.update({
            FirstName: req.body.FirstName || oldUser?.FirstName,
            MiddleName: req.body.MiddleName || oldUser?.MiddleName,
            LastName: req.body.LastName || oldUser?.LastName,
            Adress: req.body.Adress || oldUser?.Adress,
            DateOfBirth: req.body.DateOfBirth || oldUser?.DateOfBirth,
            ProfessionName:req.body.ProfessionName || oldUser?.ProfessionName,
        }, {where: {Id: req.params.id}})
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
        models.Users.destroy({where: {id: req.params.id}})
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

    static async auth(req: Request, res: Response): Promise<void> {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }
        const data = await models.Authorization.findOne({
            attributes: [
                'UserId',
                'Password',

            ],
            where: {Login: req.body.Login}
        });
        if (!data) {
            res.status(400).send({
                message: "UserController don't found."
            });
            return
        }


        res.status(req.body.password === data.Password ? 200 : 401).send(req.body.password === data.Password);
    }

    static async changePassword(req: Request, res: Response): Promise<void> {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }


        models.Users.update({
            Password: req.body.password
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
}
