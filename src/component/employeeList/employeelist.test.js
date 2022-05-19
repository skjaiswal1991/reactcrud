import React from 'react'
import { expect } from '@jest/globals';
import { configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EmployeeList from './index'

configure({ adapter: new Adapter() });

describe("employee list",()=>{
    it("check the data",()=>{
        const wrapper = shallow(<EmployeeList/>)
        expect(wrapper).toMatchSnapshot();
    })
})