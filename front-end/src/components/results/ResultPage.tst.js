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
        //expect(wrapper.find("ul").hasClass("list-group")).toBeTruthy();
       // expect(wrapper.find("ul").children().length).toBe(0);
    });

    // it("renders the list with children", () => {
    //     const wrapper = renderResultList({
    //         results: [{URL: "", state: State.SUCCESS}]
    //     });
    //
    //     expect(wrapper.find("ul").children().length).toBe(1);
    // });
});