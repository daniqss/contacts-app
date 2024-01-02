import z from 'zod';
import moment from 'moment';

const contactSchema = z.object({
    name: z.string(),
    birthday: z.string().refine((value) => {
        const dateMoment = moment(value, "YYYY-MM-DD", true); // El último parámetro permite el modo estricto
        return dateMoment.z.isValid();
    }, {
        message: "Invalid date format. Expected format: YYYY-MM-DD",
    }),
    phone: z.number(),
    email: z.string().email(),
});

export const validateContact = (contact) => {
    return contactSchema.safeParse(contact)
}

export const validatePartialContact = (contact) => {
    return contactSchema.partial().safeParse(contact)
}