import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';
import { add, Home } from './Screens/Home';

describe('<App />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBe(1);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('add fuction', () => {
        expect(add(1, 2)).toBe(3);
    });
});