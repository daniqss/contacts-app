import { ageFromBirthday } from '../../utils/age.js'
import { contactSchema } from '../../schemas/mongooseSchema.js'
import { randomUUID } from 'node:crypto'
import mongoose from 'mongoose'

if (process.env.MONGODB_USER === null || process.env.MONGODB_PASSWORD === null) {
    console.log('No MongoDB credentials provided')
    process.exit(1)
}
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.xxsuhnj.mongodb.net/contact-book?retryWrites=true&w=majority`

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Cannot connect to MongoDB Atlas: \n'))

db.once('open', () => {
    console.log('Succeful connection to MongoDB Atlas')
})


const Contacts = mongoose.model('Contact', contactSchema)

export default class ContactModel {
    static async getAll ({ age = null }) {
        try {
            const contacts = await Contacts.find({}).exec()
    
            if (age != null) {
                // eslint-disable-next-line eqeqeq
                return contacts.filter((contact) => ageFromBirthday(contact.birthday) == age)
            }
            return contacts
        } catch (error) {
            console.error('Error obteining contacts:', error)
            throw error
        }
    }


    static async getContact ({ name }) {
        try {
            const contact = await Contacts.findOne(name).exec()
            return contact
        } catch (error) {
            console.error('Error obteining contacts:', error)
            throw error
        }
    }

    static async create ({ contact }) {
        try {
            const newContact = {
                id: randomUUID(),
                ...contact
            }
            await Contacts.create(contact)
            return newContact
        } catch (error) {
            console.error('Error al crear un contacto:', error)
            throw error
        }   
    }

    static async delete ({ id }) {
        try {
            const deletedContact = await Contacts.findByIdAndDelete(id).exec()

            if (!deletedContact) {
                return null
            }

            return deletedContact.toObject()
        } catch (error) {
            console.error('Error al crear un contacto:', error)
            throw error
        }   
    }

    static async update ({ id, input }) {
        try {
            await Contacts.findByIdAndUpdate(id, input).exec()


            return await Contacts.findById(id).exec()
        } catch (error) {
            console.error('Error al crear un contacto:', error)
            throw error
        }   
    }
}
