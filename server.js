const express = require('express')
const app = express()

app.use(express.static('client'))
app.use('/src', express.static('src'))
app.listen(8000, () => console.log('Listening on 8080'))