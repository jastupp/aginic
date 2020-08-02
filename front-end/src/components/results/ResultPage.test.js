import React from 'react';
import ResultPage from "./ResultPage";
import { shallow } from 'enzyme';

describe('Testing the ResultPage component', () => {

    const renderResultPage = (args) => {
        const defaultProps = { };

        const props = { ...defaultProps, ...args };
        return shallow(<ResultPage {...props} />);
    }

    it("renders the list with no children", () => {
        const wrapper = renderResultPage();

        expect(wrapper.find("h4").length).toBe(1);
    });
});