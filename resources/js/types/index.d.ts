import { z } from 'zod'
import { loginSchema } from '@/Libs/formSchema'
export * from './entity'
export * from './props'

export type LoginSchema = z.infer<typeof loginSchema>
