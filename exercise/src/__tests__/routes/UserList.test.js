import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import UserList from '../../routes/UserList';

describe("<UserList />", () => {

    it('renders users list without crashing', () => {
        shallow(
            <MemoryRouter initialEntries={[ '/s-list' ]}>
                <UserList />
            </MemoryRouter>
            );
    });
})