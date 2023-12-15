import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(`Request received! ${req.url}`)
    res.status(200)
    res.set('Content-Type', 'application/json; charset=utf-8')
    res.send({
        message:
        '<h1>Hola mundo</h1>' +
        '<h2>hola holita</h2>' +
        '<p>Buenas tardes😀</p>'
    })
})

app.get('/contacts', (req, res) => {
    console.log('users')
    res.status(200)
    res.set(`Request to ${req.path}`)
    res.send({
        contacts: {
            0: {
                name: 'jose',
                phone: 643271289,
                email: 'jose@joseando.com'
            },
            1: {
                name: 'maria',
                phone: 618571534,
                email: 'maria@gmail.com'
            }
        }
    })
})

app.use((req, res) => {
    res.status(404)
        .setHeader('Content-Type', 'text/html; charset=utf-8')
        .send('404 Not Found😡')
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})
