import 'reflect-metadata'
import {createKoaServer} from 'routing-controllers'
import AdController from './advertisements/controller'
import setupDb from './db'

const app = createKoaServer({
  cors: true,
  controllers: [
    AdController
  ]
})

setupDb()
  .then(_ =>
    app.listen(4000, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))

// interface Advertisement {
//     id: number
//     title: string
//     price: number
//     picture: string
//     email: string
//     phonenumber: string
// }