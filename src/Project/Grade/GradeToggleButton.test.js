import React from "react";
import GradeToggleButton from "./GradeToggleButton";


describe("GradeItem tests", () => {
    it("renders correctly", () => {
        const content = "Show More";
        const {container} = render(<GradeToggleButton buttonText={content}/>);
        expect(container).toMatchSnapshot();
    });
});