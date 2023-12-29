const express = require('express')
const app = express()
// const port = process.env.PORT ?? 3000
const port = 3000

app.use(express.json())

const contacts = [
    {
        name: 'jose',
        birthday: '2004-11-04',
        phone: 643271289,
        email: 'jose@joseando.com'
    },
    {
        name: 'maria',
        birthday: '1990-01-01',
        phone: 618571534,
        email: 'maria@gmail.com'
    }
]


const { routes } = require('./routes/routes.js')
routes(app)

app.use((req, res) => {
    res.status(404)
        // .setHeader('Content-Type', 'text/html; charset=utf-8')
        .send('404 Not Found😡')
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

exports.app = app
exports.contacts = contacts