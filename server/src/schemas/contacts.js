const zod = require('zod')
const moment = require('moment')

const contactSchema = zod.object({
    name: zod.string(),
    birthday: zod.string().refine((value) => {
        const dateMoment = moment(value, "YYYY-MM-DD", true); // El último parámetro permite el modo estricto
        return dateMoment.isValid();
    }, {
        message: "Invalid date format. Expected format: YYYY-MM-DD",
    }),
    phone: zod.number(),
    email: zod.string().email(),
});

const validateContact = (contact) => {
    return contactSchema.safeParse(contact)
}

const validatePartialContact = (contact) => {
    return contactSchema.partial().safeParse(contact)
}

module.exports = {
    validateContact,
    validatePartialContact
}