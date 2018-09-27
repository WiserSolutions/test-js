/* eslint-env jest */
require('jest-enzyme')

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(error => {
    throw new Error(error)
  })
})

afterAll(() => {
  console.error.mockRestore() // eslint-disable-line no-console
})
