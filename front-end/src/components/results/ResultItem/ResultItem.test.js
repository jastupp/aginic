import React from 'react';
import ResultsPage from "../ResultsPage";
import { shallow } from 'enzyme';

describe('Testing the ResultItem component', () => {

    const renderResultItem = (args) => {
        const defaultProps = {
            URL: '',
            status: ''
        };

        const props = { ...defaultProps, ...args };
        return shallow(<ResultsPage {...props} />);
    }

    it("renders the list item", () => {
        const wrapper = renderResultItem();
        // console.log(wrapper.debug());
        expect(wrapper.find("li").length).toBe(1);
    });
})