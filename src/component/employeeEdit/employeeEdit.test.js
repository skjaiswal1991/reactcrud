import React from 'react'
import { expect } from '@jest/globals';
import { configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EmployeeEdit from './index'

configure({ adapter: new Adapter() });
const data =
        {
            params:{
            id:1
        }
    }

describe("employee list",()=>{
    it("check the data",()=>{
        // const wrapper = shallow(<EmployeeEdit match = {data}/>)
        // // const nerdata = wrapper.setState({id:})
        // const respdata = wrapper.props.params.id
        // expect(respdata).toBe(1)
    })
})