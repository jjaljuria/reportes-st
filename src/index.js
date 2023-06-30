import app from './app.js'

app.listen(app.get('PORT'), () => {
    console.log(`server running at port ${app.get('PORT')}`)
})
