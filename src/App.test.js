import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
const app = shallow(<App debug />);
describe('App', () => {
    it('Should correctly render App in debug mode', () => {
        expect(app).toMatchSnapshot();
    });

    it('Initializes the state with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    })

    describe('When clicking the "Add Gift" button', () => {

        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        })
        
        afterEach(() => {
            app.setState({ gifts: []});
        })
        it('Adds a new gift to the gifts state', () => {
            expect(app.state().gifts).toEqual([{ id: 1 }]);
        })
    
        it('Adds a new new gift to the rendered gift list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        })

        it('Creates a "Gift" component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        })
    })

    describe('and the user wants to be able to remove the added gift', () => {
        beforeEach(() => {
            app.instance().removeGift(1);
        })

        it('removes the gift from "state"', () => {
            expect(app.state().gifts).toEqual([]);
        })
    })
});