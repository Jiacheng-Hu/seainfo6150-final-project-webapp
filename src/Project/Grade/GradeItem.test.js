import React from "react";
import GradeItem from "./GradeItem";

const gradeItem = {
    slug: "170201-program-structure-and-algorithms",
    id: "170201",
    name: "Program Structure and Algorithms",
    credit: "4",
    year: "2017",
    semester: "Fall",
    grade: "A",
    attendance: "A",
    assignment: "A",
    exam: "A"
};

describe("GradeItem tests", () => {
    it("renders correctly", () => {
        const {container} = render(<GradeItem gradeItem={gradeItem}/>);
        expect(container).toMatchSnapshot();
    });
    it("renders correctly after button is clicked", () => {
        const {container, getByText} = render(<GradeItem gradeItem={gradeItem}/>);
        const buttonShowMore = getByText("Show More");
        fireEvent.click(buttonShowMore);
        expect(container).toMatchSnapshot();
        const buttonShowLess = getByText("Show Less");
        fireEvent.click(buttonShowLess);
        expect(container).toMatchSnapshot();
    });
});