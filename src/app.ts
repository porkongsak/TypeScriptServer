import { error } from 'console'
import express, { Application, Request, Response } from 'express'

const app: Application = express()

const port: number = 3001

const string : string = "You're right 👍"

app.get('/', (req: Request, res: Response) => {
    res.send('Hello You are right 👍')
})

app.post('/post', (req: Request, res: Response) => {
    try{
        const result = req.body
    console.log(result);
    res.send(result)
    }catch{
        console.log(error);
        res.send(error)
    }
    
})
app.listen(port, function () {
    console.log(`App is listening on port ${port} ${string}!`)
})