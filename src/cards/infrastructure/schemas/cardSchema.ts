import { z } from 'zod'

const errorMessageRangeCVV = 'CVV should be 3 digits; 4 if American Express'
const errorMessageCardNumber = 'Card number must be between 13 and 16 digits'

export const CreateCardTokenSchema = z.object({
  body: z.object({
    card_number: z
      .string()
      .trim()
      .min(13, errorMessageCardNumber)
      .max(16, errorMessageCardNumber),
    cvv: z.string().min(3, errorMessageRangeCVV).max(4, errorMessageRangeCVV),
    expiration_month: z.string().min(1).max(2),
    expiration_year: z.string().length(4),
    email: z.string().min(5).max(100).email()
  })
})

export const GetCardTokenSchema = z.object({
  params: z.object({
    id: z.string().length(25).startsWith('tkn_card', 'Invalid Id')
  })
})
