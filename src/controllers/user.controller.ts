import { Response, Request } from "express"

export class UserController {
    getUsers(req: Request, res: Response) {
        console.log('controlador')
        return res.status(200).json({
            user : 'Jonathan'
        })
    }
}