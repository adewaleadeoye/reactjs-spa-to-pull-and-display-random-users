import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from '../../components/UserInfo';

describe("<UserInfo />", () => {

    it('renders user info without crashing', () => {
    shallow(<UserInfo />);
    });

    let wrapper;
    it('renders user\'s picture',()=>{
        wrapper = shallow(<UserInfo picture={'https://randomuser.me/api/portraits/women/25.jpg'}/>);
        const image = 'https://randomuser.me/api/portraits/women/25.jpg';
        expect(wrapper.find('img').prop('src')).toEqual(image);
    })

    it('renders user\'s first and last name', () => {
        wrapper = shallow(<UserInfo name={'Adewale Adeoye'}/>);
        const name = 'Adewale Adeoye';
        expect(wrapper.contains(name)).toEqual(true);
    });

    it('renders user\'s email', () => {
        wrapper = shallow(<UserInfo email={'user@example.com'}/>);
        const email = 'user@example.com';
        expect(wrapper.contains(email)).toEqual(true);
    });

    it('renders user\'s phone', () => {
        wrapper = shallow(<UserInfo phone={'(+1 222 333 444)'}/>);
        const phone = '(+1 222 333 444)';
        expect(wrapper.contains(phone)).toEqual(true);
    });
})