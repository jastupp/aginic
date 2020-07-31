import React from 'react';
import Menu from "./Menu";
import PageLink from "../../api/PageLInk";
import { shallow } from 'enzyme';

describe('Testing the Menu component', () => {

    const renderMenu = (args) => {
        const defaultProps = { };

        const props = { ...defaultProps, ...args };
        return shallow(<Menu {...props} />);
    }

    it("Should have a brand item", () => {
        const wrapper = renderMenu();

        expect(wrapper.find("NavbarBrand").length).toBe(1);
        expect(wrapper.find("NavbarBrand").text()).toBe("Server Checker");

        //expect(wrapper.find("ul").hasClass("list-group")).toBeTruthy();
        //expect(wrapper.find("ul").children().length).toBe(0);
    });

    // it("renders the list with children", () => {
    //     const wrapper = renderResultList({
    //         results: [{URL: "", state: State.SUCCESS}]
    //     });
    //
    //     expect(wrapper.find("ul").children().length).toBe(1);
    // });
});