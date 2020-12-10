import React from "react";
import HomePage from "./HomePage";


describe("HomePage tests", () => {
    it("renders correctly", () => {
        const {container} = render(<HomePage/>);
        expect(container).toMatchSnapshot();
    });
});