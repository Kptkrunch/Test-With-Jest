import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
const app = shallow(<App debug />);
describe('App', () => {
    it('Should correctly render App in debug mode', () => {
        expect(app).toMatchSnapshot();
    });

    it('Initializes the state with and empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    })

    it('Adds a new gift to the gifts state', () => {
        app.find('.btn-add').simulate('click');
        expect(app.state().gifts).toEqual([{ id: 1 }]);
    })
});