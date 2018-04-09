import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import toJson from 'enzyme-to-json'
import Home from 'Components/Home/Home'

describe('Home', () => {

  const component = shallow(<Home />)

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
