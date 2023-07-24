import express from 'express'
import morgan from 'morgan'
import hbs from 'hbs'
import SolicitudRouter from './routes/SolicitudRouter.js'
import StaticsRouter from './routes/Statics.js'
import SupporterController from './routes/SupporterRouter.js';
import handlebarsLayouts from 'handlebars-layouts'


const app = express()
hbs.registerHelper(handlebarsLayouts(hbs.handlebars))

// settings
app.set('PORT', 3000)
app.set('views', 'src/views')
app.set('view engine', 'hbs')
app.engine('hbs', hbs.__express)

// statics
app.use(StaticsRouter)

// middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev'))

// routers
app.use(SolicitudRouter)
app.use(SupporterController)

export default app
