import React from 'react'
import { toJSON } from 'enzyme-to-json/serializer'
import { shallow } from 'enzyme'
import Header from "../../Components/Header"



it('Test Header Render correctly',()=>{

    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})
