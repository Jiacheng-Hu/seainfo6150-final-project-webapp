import React from "react";
import Grade from "./Grade";


const grade = [
    {
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
    },
    {
        slug: "170202-database-principle",
        id: "170202",
        name: "Database Principle",
        credit: "4",
        year: "2017",
        semester: "Fall",
        grade: "A-",
        attendance: "A",
        assignment: "A-",
        exam: "A-"
    }
];

describe("Grade tests", () => {
    it("renders correctly", () => {
        const {container} = render(<Grade grade={grade}/>);
        expect(container).toMatchSnapshot();
    });
});