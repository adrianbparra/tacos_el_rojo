import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Contact from "../components/Contact.js";



let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders contact page", ()=>{
    act(()=> {
        render(<Contact/>,container);
    })
    expect(container.textContent).toContain("I am here to serve you some great tasting tacos. I created my taco stand on December 20 2019 to serve my fellow west side community. We offer catering and hold a stand to let anyone get a taste to the great food we make. We are in the process on getting a food truck to take my tacos to further destinations.");

})