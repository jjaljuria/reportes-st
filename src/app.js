import express from 'express'
import morgan from 'morgan'
import hbs from 'hbs'
import IndexRouter from './routes/index.router.js'

const app = express()

// settings
app.set('PORT', 3000)
app.set('views', 'src/views')
app.set('view engine', 'hbs')
app.engine('hbs', hbs.__express)

// middlewares
app.use(morgan('dev'))

// routers
app.use(IndexRouter)

export default app
