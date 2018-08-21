import React from 'react';
import { shallow } from 'enzyme';
import UserListItem from '../../components/UserListItem';

describe("<UserListItem />", () => {
    it('renders list without crashing', () => {
        shallow(<UserListItem />);
    });

    let wrapper;

    it('renders user\'s first and lastname', () => {
        wrapper = shallow(<UserListItem name={'Adewale Adeoye'}/>);
        const name = 'Adewale Adeoye';
        expect(wrapper.contains(name)).toEqual(true);
    });

    it('renders user\'s email', () => {
        wrapper = shallow(<UserListItem email={'user@example.com'}/>);
        const email = 'user@example.com';
        expect(wrapper.contains(email)).toEqual(true);
    });

    it('renders user\'s phone', () => {
        wrapper = shallow(<UserListItem phone={'(+1 222 333 444)'}/>);
        const phone = '(+1 222 333 444)';
        expect(wrapper.contains(phone)).toEqual(true);
    });
})