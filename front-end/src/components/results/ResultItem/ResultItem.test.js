import React from 'react';
import ResultItem from "./ResultItem";
import State from '../State';
import { shallow } from 'enzyme';

describe('Testing the ResultItem component', () => {

    const renderResultItem = (args) => {
        const defaultProps = {
            URL: '',
            status: ''
        };

        const props = { ...defaultProps, ...args };
        return shallow(<ResultItem {...props} />);
    }

    it("renders the list item", () => {
        const wrapper = renderResultItem();

        expect(wrapper.find("li").length).toBe(1);
        expect(wrapper.find("li").hasClass("list-group-item")).toBeTruthy();
    });

    it("renders the url", () => {
        const URL = 'Http://dummy.url';
        const wrapper = renderResultItem({URL: URL});

        expect(wrapper.text()).toEqual(URL);
    });

    it("Renders the correct class for waiting", () => {
        const wrapper = renderResultItem({status: State.WAITING});

        expect(wrapper.find('li').hasClass("list-group-item")).toBeTruthy();
        expect(wrapper.find('li').hasClass("list-group-item-info")).toBeTruthy();
    });

    it("renders the correct class for pending", () => {
        const wrapper = renderResultItem({status: State.PENDING});

        expect(wrapper.find('li').hasClass("list-group-item")).toBeTruthy();
        expect(wrapper.find('li').hasClass("list-group-item-warning")).toBeTruthy();
    });

    it("renders the correct class for success", () => {
        const wrapper = renderResultItem({status: State.SUCCESS});

        expect(wrapper.find('li').hasClass("list-group-item")).toBeTruthy();
        expect(wrapper.find('li').hasClass("list-group-item-success")).toBeTruthy();
    });

    it("renders the correct class for failure", () => {
        const wrapper = renderResultItem({status: State.FAILURE});

        expect(wrapper.find('li').hasClass("list-group-item")).toBeTruthy();
        expect(wrapper.find('li').hasClass("list-group-item-danger")).toBeTruthy();
    });
});