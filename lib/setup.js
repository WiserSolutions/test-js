/* eslint-env jest */
require('jest-enzyme')
require('jest-styled-components')
const { configure } = require('enzyme')
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')

configure({ adapter: new Adapter() })

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(error => {
    throw new Error(error)
  })
})

afterAll(() => {
  console.error.mockRestore() // eslint-disable-line no-console
})
