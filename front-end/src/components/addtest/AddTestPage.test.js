import React from 'react';
import AddTestPage from "./AddTestPage";
import { shallow } from 'enzyme';

describe('Testing the AddTestPage component', () => {

    const renderAddTestPage = (args) => {
        const defaultProps = { };

        const props = { ...defaultProps, ...args };
        return shallow(<AddTestPage {...props} />);
    }

    it("renders the list with no children", () => {
        const wrapper = renderAddTestPage();

        expect(wrapper.find("h4").length).toBe(1);
    });
});