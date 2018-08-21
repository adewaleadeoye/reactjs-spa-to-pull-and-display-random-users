import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import Home from '../../routes/Home';

describe("<Home />", () => {
  
  it('renders home without crashing', () => {
    shallow(<Home />);
  });

  let wrapper;

  describe("Simulate top bar login button actions",() => {
    wrapper = mount( 
      <MemoryRouter initialEntries={[ '/home' ]}>
        <Home /> 
      </MemoryRouter>
      )

    it('exists on top bar', () => {
      expect(wrapper.find('button.login_top_bar').text()).toEqual('Login');
    })

    it('is replaced with badge and logout button on top bar and logout on home content when clicked', () =>{
      const login_top_bar_button = wrapper.find('button.login_top_bar');
      login_top_bar_button.simulate('click');
      expect(wrapper.find('button.login_top_bar').exists()).toEqual(false);
      expect(wrapper.find('div.badge').exists()).toEqual(true);
      expect(wrapper.find('div.badge').text()).toEqual('AA');
      expect(wrapper.find('button.logout_top_bar').exists()).toEqual(true);
      expect(wrapper.find('button.logout_top_bar').text()).toEqual('Logout');
      expect(wrapper.find('button.login_home_content').text()).toEqual('Logout');
    });

    it('reverts to initial state when top bar logout button is clicked', () =>{;
      wrapper.find('button.logout_top_bar').simulate('click');
      expect(wrapper.find('button.logout_top_bar').exists()).toEqual(false);
      expect(wrapper.find('div.badge').exists()).toEqual(false);
      expect(wrapper.find('button.login_top_bar').exists()).toEqual(true);
      expect(wrapper.find('button.login_top_bar').text()).toEqual('Login');
    })

  })

  describe("Simulate home content login button actions",() => {
    wrapper = mount( 
      <MemoryRouter initialEntries={[ '/home' ]}>
        <Home /> 
      </MemoryRouter>
      )

    it('exists on home content', () => {
      expect(wrapper.find('button.login_home_content').text()).toEqual('Login');
    })

    it('is replaced with badge and logout button on top bar and logout on home content when clicked', () =>{
      wrapper.find('button.login_home_content').simulate('click');
      expect(wrapper.find('button.login_home_content').text()).toEqual('Logout');
      expect(wrapper.find('button.login_top_bar').exists()).toEqual(false);
      expect(wrapper.find('div.badge').exists()).toEqual(true);
      expect(wrapper.find('div.badge').text()).toEqual('AA');
      expect(wrapper.find('button.logout_top_bar').exists()).toEqual(true);
      expect(wrapper.find('button.logout_top_bar').text()).toEqual('Logout');
    });

    it('reverts to initial state when top bar logout button is clicked', () =>{;
      wrapper.find('button.login_home_content').simulate('click');
      expect(wrapper.find('button.login_home_content').text()).toEqual('Login');
      expect(wrapper.find('button.logout_top_bar').exists()).toEqual(false);
      expect(wrapper.find('div.badge').exists()).toEqual(false);
      expect(wrapper.find('button.login_top_bar').exists()).toEqual(true);
      expect(wrapper.find('button.login_top_bar').text()).toEqual('Login');
    })

  })



})