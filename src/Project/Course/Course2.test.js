import React from "react";
import Course2 from "./Course2";


const courseItem = [
    {
        slug: "course1",
        crn: "37385",
        title: "Application Modeling and Design",
        subject: "Information Systems Program",
        credit: "4",
        associatedTerm: "Spring 2021 Semester",
        lecturer: "Bugrara, Khaled",
        description: "<p>Practices social-technical software engineering methods and tools to solve real-world problems. Explores innovative design and programming techniques to build significant business applications quickly. Studies the process of systematically combining UX techniques, business processes, and complex data models to assemble applications that are user-friendly and meet business requirements. Employs the object-oriented paradigm, visual user interface design principles, and programming languages such as Java, as well as productivity tools, to put together complicated, powerful business applications with ease. Explores the art of how to systematically write software programs to solve any business problem, through practicing simple and smart ways of making software programming enjoyable.</p>",
        schedule: "Mondey, 08:00 AM - 11:30 AM, 01/19/2021 - 05/01/2021"
    },

    {
        slug: "course2",
        crn: "37390",
        title: "Data Science Engineering with Python",
        subject: "Information Systems Program",
        credit: "4",
        associatedTerm: "Spring 2021 Semester",
        lecturer: "Hariharan, Ramkumar",
        description: "<p>Studies the Python programming language with data science as the application domain. Offers students an opportunity to learn how to perform complex numerical calculations, fixed data types, space efficiency, and vector manipulations. Covers tools and techniques for manipulating tables, spreadsheets, and group and pivot tables involving extremely large data sets. Covers large multidimensional arrays and matrices and the high-level mathematical functions to operate on these arrays. Studies how to use Python to manipulate the classic math and science algorithms. Analyzes helper functions such as linear and nonlinear regression, integration, Fourier transformations, numerical optimization, etc. Includes higher-level classes for manipulating and visualizing data. Applies tools and techniques to classical data science using cases such as time series forecasting, social network analysis, text analytics, and big data processing.</p>",
        schedule: "Mondey, 10:00 AM - 01:00 PM, 01/19/2021 - 05/01/2021"
    },

    {
        slug: "course3",
        crn: "34292",
        title: "Web Design and User Experience Engineering",
        subject: "Information Systems Program",
        credit: "4",
        associatedTerm: "Spring 2021 Semester",
        lecturer: "Bingham, April",
        description: "<p>Exposes students to both conceptual and technical aspects of Web design. User experience design is the discipline of creating a useful and usable website or application that is easily navigated and meets the needs of both the site owner and its users. Covers Web standards and best practices. Studies the fundamental concepts, techniques, practices, work flows, and tools associated with the practice of user-experience design in Web interfaces. Offers students an opportunity to learn the core principles of information architecture, usability, marketing hierarchy, and user experience for contextual, value-driven websites. Additional areas of focus include typography, color theory and composition, responsive design, CSS3 concepts, basic scripting, and JavaScript libraries to create functional, effective, and visually appealing websites.</p>",
        schedule: "Wednesday, 02:30 PM - 05:30 PM, 01/19/2021 - 05/01/2021"
    },

    {
        slug: "course4",
        crn: "32885",
        title: "Program Structure and Algorithms",
        subject: "Information Systems Program",
        credit: "4",
        associatedTerm: "Spring 2021 Semester",
        lecturer: "Ashish, Ashish",
        description: "<p>Presents data structures and related algorithms, beginning with a brief review of dynamic memory allocation. Discusses the fundamental data structures in detail, including the abstract representation, supporting algorithms, and implementation methods. Focuses on understanding the application of the abstract data structure and the circumstances that affect implementation decisions. Covers lists, stacks, queues, trees, hash tables, and graphs. Covers recursion and searching and sorting algorithms in detail. Emphasizes data abstraction and encapsulation in code design. Explores external storage structures, time permitting.</p>",
        schedule: "Thursday, 06:30 PM - 09:30 PM, 01/19/2021 - 05/01/2021"
    },

    {
        slug: "course5",
        crn: "32523",
        title: "Data management and Database Design",
        subject: "Information Systems Program",
        credit: "4",
        associatedTerm: "Spring 2021 Semester",
        lecturer: "Wang, Wuping",
        description: "<p>Studies design of information systems from a data perspective for engineering and business applications; data modeling, including entity-relationship (E-R) and object approaches; user-centric information requirements and data sharing; fundamental concepts of database management systems (DBMS) and their applications; alternative data models, with emphasis on relational design; SQL; data normalization; data-driven application design for personal computer, server-based, enterprisewide, and Internet databases; and distributed data applications.</p>",
        schedule: "Tuesday, 06:30 PM - 09:30 PM, 01/19/2021 - 05/01/2021"
    },

    {
        slug: "course6",
        crn: "33264",
        title: "Smartphones-Based Web Development",
        subject: "Information Systems Program",
        credit: "4",
        associatedTerm: "Spring 2021 Semester",
        lecturer: "Ashish, Ashish",
        description: "<p>Covers application development for mobile devices using advanced development platforms. Focuses on how to write mobile applications using cross-platform development tools and processes. Topics include user interfaces, the software life cycle, persistent storage, networking using HTTP and other REST interfaces, and mobile/handheld data applications. Requires a final project.</p>",
        schedule: "Tuesday, 06:30 PM - 09:30 PM, 01/19/2021 - 05/01/2021"
    }
];

describe("Course2 test", () => {
    it("renders correctly", () => {
        const {container} = render(<Course2 courseItem={courseItem}/>);
        expect(container).toMatchSnapshot();
    });
});