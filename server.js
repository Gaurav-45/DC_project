const express=require('express');
const app=express()
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const path = require('path')
const PORT=process.env.PORT || 3000

app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')
app.use(express.static('public'))

require('./routes/web')(app)


app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})