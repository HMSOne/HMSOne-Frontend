import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const patientSchema = z.object({
  shortId: z.string(),
  fullName: z.string(),
  contact: z.string(),
  gender: z.string(),
  age: z.number(),
})

export type Patient = z.infer<typeof patientSchema>
