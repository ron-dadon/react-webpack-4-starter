import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
configure({ adapter: new Adapter() })

const basicTest = ({ Component, props, method }) => {
  const component = method(<Component {...props} />)

  describe('Home', () => {

    it('Should render properly', () => {
      expect(component).toMatchSnapshot()
    })

    it('Should have structure', () => {
      expect(toJson(component)).toMatchSnapshot()
    })

    it('Should have props', () => {
      expect(component.props()).toMatchSnapshot()
    })
  })

  return component
}

export const shallowBasicTest = ({ Component, props }) => basicTest({ Component, props, method: shallow })
export const mountBasicTest = ({ Component, props }) => basicTest({ Component, props, method: mount })
export { shallow, mount }
