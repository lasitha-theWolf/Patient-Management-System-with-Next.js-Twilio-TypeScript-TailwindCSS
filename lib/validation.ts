import { z } from "zod";

export const UserFormValidation = z.object({
    username: z.string()
    .min(2, "Username must be at least 2 characters.")
    .max(50, "Username must be at most 50 characters."),

    email: z.string().email("Invalid email address."),
    phone: z.string().refine((phone => /^\+94[0-9]{9}$/.test(phone)), {
        message: "Invalid phone number."
    })

})