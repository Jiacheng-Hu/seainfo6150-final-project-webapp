import React from "react";
import Friendly from "./Friendly";


describe("Friendly tests", () => {
    it("renders correctly", () => {
        const {container} = render(<Friendly/>);
        expect(container).toMatchSnapshot();
    });
});