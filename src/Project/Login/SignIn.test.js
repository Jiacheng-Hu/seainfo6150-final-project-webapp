import React from "react";
import SignIn from "./SignIn";


describe("SignIn tests", () => {
    it("renders correctly", () => {
        const {container} = render(<SignIn/>);
        expect(container).toMatchSnapshot();
    });
});