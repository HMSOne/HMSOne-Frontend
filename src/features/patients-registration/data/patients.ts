import { faker } from '@faker-js/faker'

export const patients = Array.from({ length: 20 }, () => {
  const shortId = faker.string.uuid().split('-')[0]
  const fullName = faker.person.fullName()
  const contact = faker.phone.number({ style: 'international' })
  return {
    shortId,
    fullName,
    contact,
    gender: faker.helpers.arrayElement(['male', 'female']),
    age: faker.number.int({ min: 0, max: 100 }),
    status: faker.helpers.arrayElement(['active', 'offline'])
  }
})
