const express = require('express')
const app = express()

/* app.get('/*', (req, res) => {
    res.sendfile('./docs/index.html')
}) */

app.use(express.static('./docs'))

const PORT = 8080

app.listen(PORT, '127.0.0.1')

console.log(`listening on port ${PORT}...`)
