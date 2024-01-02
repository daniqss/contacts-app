const express = require('express')
const app = express()
const port = process.env.PORT ?? 3000 ?? 3001

app.use(express.json())
app.use(cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        'http://localhost:5171'
      ]
  
      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true)
      }
  
      if (!origin) {
        return callback(null, true)
      }
  
      return callback(new Error('Not allowed by CORS'))
    }
}))
app.disable('x-powered-by')

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


const { router } = require('./routes/router')
router(app, contacts)

app.use((req, res) => {
    res.status(404)
        // .setHeader('Content-Type', 'text/html; charset=utf-8')
        .send('404 Not Found😡')
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

module.exports = {
    app,
    contacts
}