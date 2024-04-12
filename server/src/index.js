import express, { json } from 'express'
import { contactsRouter } from './routes/contacts.js'
import { corsMiddleware } from './middlewares/cors.js'
// import { cacheMiddleware } from './middlewares/cache.js'

export const app = express()

// Middlewares
app.use(json())
app.disable('x-powered-by')
app.use(corsMiddleware())

app.use('/v1/', contactsRouter)
app.use((req, res) => res.status(404).send("404 Not Found😡"));

const PORT = process.env.PORT ?? 3000

const server = app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})

export const stop = () => {
    server.close()
}
