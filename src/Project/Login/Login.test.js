import React from "react";
import Login from "./Login";


describe("Login tests", () => {
    it("renders correctly", () => {
        const {container} = render(<Login/>);
        expect(container).toMatchSnapshot();
    });
});