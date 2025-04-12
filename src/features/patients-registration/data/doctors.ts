import { faker } from '@faker-js/faker'

export const doctors = Array.from({ length: 20 }, () => {
  const shortId = faker.string.uuid().split('-')[0]
  const first_name = faker.person.firstName()
  const last_name = faker.person.lastName()
  const contact = faker.phone.number({ style: 'international' })
  return {
    shortId,
    first_name,
    last_name,
    user_type: 'doctor',
    user_appreviation: 'Dr.',
    contact,
    gender: faker.helpers.arrayElement(['male', 'female']),
    age: faker.number.int({ min: 0, max: 100 }),
    status: faker.helpers.arrayElement(['active', 'offline']),
  }
})
