const TestComponent = () => React.createElement('div', {}, 'test content')

describe('react test setup', () => {
  it('allows testing React components with Enzyme matchers', () => {
    const wrapper = shallow(React.createElement(TestComponent))
    expect(wrapper).toIncludeText('content')
  })
})
