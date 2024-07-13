import { z } from "zod";

export const loginSchema = z.object({
    key: z.string().min(3, "Username or Email is min 3 characters"),
    password: z.string(),
    remember: z.boolean().optional()
});
