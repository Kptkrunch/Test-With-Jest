import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
    it('Should correctly render App in debug mode', () => {
        const app = shallow(<App debug />);

        expect(app).toMatchSnapshot();
    });
});