import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Person from './Person';
 let container = null;
 beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
 })

 afterEach(() => {
     unmountComponentAtNode(container);
     container.remove();
     container=null;
 })

 it("Renders name with out without", () => {

    act(() => {
        render(<Person/>, container);
    })
    expect(container.textContent).toContain("I'm a  and my age is ");

    act(() => {
        render(<Person name="Thulasi" age="30"/>, container);
    })
    expect(container.textContent).toContain("I'm a Thulasi and my age is 30");   
 })

 it("Person p tag population", () => {
    act(() => {
        render(<Person name="siva" age="34" />, container);
    })
    expect(container.querySelector("p").textContent).toBe("I'm a siva and my age is 34");
 })

 