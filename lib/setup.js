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

// `window.matchMedia` is not implemented in JSDOM yet
// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

afterEach(() => window.matchMedia.mockReset())
