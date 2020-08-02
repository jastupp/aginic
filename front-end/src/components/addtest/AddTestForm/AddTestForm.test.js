import React from 'react';
import ResultItem from "./AddTestForm";
import { shallow } from 'enzyme';

describe('Testing the ResultItem component', () => {

    const renderAddTestForm = (args) => {
        const defaultProps = {
            URL: '',
            onChange: () => {},
            onSubmit: () => {}
        };

        const props = { ...defaultProps, ...args };
        return shallow(<ResultItem {...props} />);
    }

    it("renders the add test form", () => {
        const wrapper = renderAddTestForm();

        expect(wrapper.find("form").length).toBe(1);
        expect(wrapper.find("input").length).toBe(1);
        expect(wrapper.find("button").length).toBe(1);
    });
});