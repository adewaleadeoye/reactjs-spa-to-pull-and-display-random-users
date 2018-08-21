import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import UserDetail from '../../routes/UserDetail';

describe("<UserDetail />", () => {

    it('renders users detail without crashing', () => {
        shallow(
            <MemoryRouter initialEntries={[ '/user-detail/061-82-2650' ]}>
                <UserDetail />
            </MemoryRouter>
            );
    });
})