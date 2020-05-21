import { Response, Request } from 'express'
import createUser from './services/CreateUser';




export function helloWorld(request: Request, response: Response) {

    const user = createUser({
        name: 'Victor',
        password: '123456789',
        email: 'teste@io.com',
        techs: ['NodeJS', 'React', 'ReactNative',
            { title: 'JavaScript', experience: 100 }

        ]
    });


    return response.json({ message: 'Hello World' })
}