import { Request, Response } from "express";

export class DefaultController {
    static helloWorld(req: Request, res: Response): any {
        res.status(200).jsonp('hello world!');
    }
}
