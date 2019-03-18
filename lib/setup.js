/* eslint-env jest */
require('jest-enzyme')
require('jest-styled-components')

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(error => {
    throw new Error(error)
  })
})

afterAll(() => {
  console.error.mockRestore() // eslint-disable-line no-console
})
