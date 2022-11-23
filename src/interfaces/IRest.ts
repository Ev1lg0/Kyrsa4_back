import {Request, Response} from 'express';

export class IRest {
    public static getAll: (req: Request, res: Response) => Promise<void>
    public static getByID: (req: Request, res: Response) => Promise<void>
    public static create: (req: Request, res: Response) => Promise<void>
    public static update: (req: Request, res: Response) => Promise<void>
    public static delete: (req: Request, res: Response) => Promise<void>
}