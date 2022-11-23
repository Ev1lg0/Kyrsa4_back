import {IRest} from "./IRest";
import {Request, Response} from 'express';

export class IUser extends IRest {
    public static changePassword: (req: Request, res: Response) => void
    public static auth: (req: Request, res: Response) => void
}