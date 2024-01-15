import express, { json } from 'express'
import { contactsRouter } from './routes/contacts.js'

export const app = express()
app.use(json())
app.disable('x-powered-by')

app.use('/api/v1/', contactsRouter)
app.use((req, res) => { res.status(404).send('404 Not Found😡') })

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})
