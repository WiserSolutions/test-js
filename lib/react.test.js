const renderer = require('react-test-renderer')
const { default: styled } = require('styled-components')

describe('react test setup', () => {
  it('allows testing React components with Enzyme matchers', () => {
    const TestComponent = () => React.createElement('div', {}, 'test content')
    const wrapper = shallow(React.createElement(TestComponent))
    expect(wrapper).toIncludeText('content')
  })

  it('includes styling in plain snapshots of styled components', () => {
    const StyledComponent = styled.div`
      color: red;
    `
    expect(renderer.create(React.createElement(StyledComponent, {}, 'test content')).toJSON()).toMatchSnapshot()
  })
})
