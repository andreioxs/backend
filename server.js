require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const jobRoutes = require('./routes/jobs')
const userRoutes = require('./routes/user')
const cors = require('cors')


// Express App
const app = express()
app.use(cors())

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method, req.body)
    next()
})

//route
app.use('/', (req, res) => {
    console.log(req.path, req.method)
    // res.send("hi there! im careepo backend")
})
app.use('/api/workouts', workoutRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT || 5000)
        })
    })
    .catch((error) => {
        console.log(error)
    })


    console.log("LOL")