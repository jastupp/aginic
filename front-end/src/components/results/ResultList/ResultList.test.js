import React from 'react';
import ResultList from "./ResultList";
import State from '../State';
import { shallow } from 'enzyme';

describe('Testing the ResultList component', () => {

    const renderResultList = (args) => {
        const defaultProps = {
            results: []
        };

        const props = { ...defaultProps, ...args };
        return shallow(<ResultList {...props} />);
    }

    it("renders the list with no children", () => {
        const wrapper = renderResultList();

        expect(wrapper.find("ul").length).toBe(1);
        expect(wrapper.find("ul").hasClass("list-group")).toBeTruthy();
        expect(wrapper.find("ul").children().length).toBe(0);
    });

    it("renders the list with children", () => {
        const wrapper = renderResultList({
            results: [{URL: "", state: State.SUCCESS}]
        });
        
        expect(wrapper.find("ul").children().length).toBe(1);
    });
});