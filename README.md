# test-js

Default setup for testing JavaScript/React packages with Jest

## Use

Install using

```sh
npm install @wisersolutions/test-js
```

Add a test script to your `package.json`

```json
{
  "scripts": {
    "test": "test-js"
  }
}
```

or just run it using `npx test-js`. This simply launches `jest` with a default setup tailored
for testing packages containing React components - with `enzyme` and `jest-enzyme` to automatically
include `React`, and the render functions in the global scope and add `enzyme-matchers`. Your
component tests can now be as simple as:

```jsx harmony
describe('Component', () => {
  it('renders with defaults', () => {
    expect(shallow(<Component />)).toMatchSnapshot()
  })
})
```

If you need to customise the configuration, use `@wisersolutions/test-js/lib/defaultConfig.js` as defaults.
If you also need to extend the test framework setup, don't forget to include `@wisersolutions/test-js/lib/setup.js`
from your setup file.

## Development

### Install

Install dependencies using:

```sh
npm install
```

### Develop

After you modify sources, run the following (or set up your IDE to do it for you):

- format the code using `npm run format`
- lint it using `npm run lint`
- test it using `npm test`

and fix the errors, if there are any.

### Publish

Publishing is done in two steps:

1. Create a new version tag and push it to the repository:
    ```sh
    npm version <patch|minor|major>
    git push --follow-tags
    ```
1. Build and publish the new version as a npm package:
    ```sh
    npm publish --access public
    ``` 
