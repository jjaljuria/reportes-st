import express from 'express'

const app = express()

// settings
app.set('PORT', 3000)

app.listen(app.get('PORT'), () => {
    console.log(`server running at port ${app.get('PORT')}`)
})
