import { z } from 'zod'

export const user = z.object({
    id: z.string(),
    username: z.string(),
    name: z.string(),
    email: z.string().email(),
    status: z.boolean(),
    verified: z.boolean(),
})

export const userCollection = z.object({
    data: z.array(user),
    meta: z.record(z.any()),
})

export const userColumnMeta = z.object({
  searchable: z.boolean().default(false),
  filterable: z.boolean().default(false),
  filterOption: z.array(z.any()).default([]),
})

export type User = z.infer<typeof user>
export type UserCollection = z.infer<typeof userCollection>
export type UserColumnMeta = z.infer<typeof userColumnMeta>
