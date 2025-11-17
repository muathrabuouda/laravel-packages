import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

export const createUserInitialValues = {
    username: '',
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
}

export const createUserSchema = toTypedSchema(
    z.object({
        username: z.string().min(2).max(30),
        name: z.string().min(2).max(30),
        email: z.string().email(),
        password: z.string().min(8),
        password_confirmation: z.string().min(8),
    }).superRefine((values, ctx) => {
        if (values.password !== values.password_confirmation) {
            ctx.addIssue({
                code: "custom",
                message: "The password does not match",
                path: ["password_confirmation"],
            })
        }
    })
)
