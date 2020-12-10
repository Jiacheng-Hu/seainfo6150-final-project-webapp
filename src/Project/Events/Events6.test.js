import React from "react";
import Events6 from "./Events6";


const eventsItem = [
    {
        slug: "events1",
        title: "ECE MS Thesis Defense: Sila Deniz Calisgan",
        text: "<p>MS Thesis Defense: MEMS Infrared Resonant Detectors With Near-Zero Power Readout For Miniaturized Low Power Systems Sila Deniz Calisgan Location: Online Abstract: The demand for low-cost and low-power microsystems for spectrally-selective IR sensing has been rising with the proliferation of Internet of Things (IoT) for applications such as security surveillance and natural disaster monitoring.</p>",
        department: "COE",
        timeStamp: "2020-11-30T09:30:00.000Z",
        displayTime: "Mondey, November 30 at 9:30am"
    },
    {
        slug: "events2",
        title: "Cancelled! Biology Colloquia Series: Prof. Mark Alkema",
        text: "<p>Prof. Mark Alkema, University of Massachusetts Medical School</p><p><a href='#'>www.umassmed.edu/AlkemaLab</a></p><p>presents: “Migraines, microbiomes, and metabolism”</p><p>Dial-In Information</p><p>Zoom Link:<br/><a href='#'>https://northeastern.zoom.us/j/92267517205?pwd=WlcrZlhCL2NLL2NiRXhVaFFvTW9Xdz09</a><br/>Meet ID: 922 6751 7205</p><p>Passcode: 2c967n</p>",
        department: "COS, Behavioral Neuroscience, Biochemistry, Biology, Biotechnology, Chemistry and Chemical Biology, COE, Chemical Engineering, Bioengineering",
        timeStamp: "2020-11-30T12:00:00.000Z",
        displayTime: "Monday, November 30 at 12:00pm"
    },
    {
        slug: "events3",
        title: "Understanding the Importance of Standard and Non-Standard English Dialects",
        text: "<p>What is the proper way to speak English? That all depends on context! Using formal English grammar in a cover letter when applying for a professional job may help you land an interview, but it won't likely win you friends at a party. In this session we use the tools of linguistics (the scientific study of language) to discuss the importance of understanding both standard and non-standard dialects of English.</p><p>Co-sponsored by Global Student Success and the Department of Linguistics. This workshop series from Global Student Success is designed for international and non-native English speaking learners.</p>",
        department: "GSS",
        timeStamp: "2020-12-02T09:00:00.000Z",
        displayTime: "Wednesday, December 2 at 9:00am"
    },
    {
        slug: "events4",
        title: "American Flavors: A U.S. Food and Drink Guide",
        text: "<p>Learn to order your food with confidence! This workshop will review the names and descriptions of several popular flavors and ingredients found throughout the United States. We shall also review guidelines for etiquette and tipping for takeout, dine-in, and delivery. This workshop series from Global Student Success is designed for international and non-native English speaking learners.</p>",
        department: "GSS",
        timeStamp: "2020-12-04T10:00:00.000Z",
        displayTime: "Friday, December 4 at 10:00am"
    },
    {
        slug: "events5",
        title: "Information Ethics Roundtable Speaker, Kevin Zollman",
        text: "<p>Information Ethics Rountable Speaker, Kevin Zollman is a professor of Philosophy and Social and Decision Sciences at Carnegie Mellon University.</p><p>Abstract: Occasionally, people refuse to publicly state their beliefs because they think others disagree.  Others do in fact share their belief, but are also afraid to speak out for similar reasons. No one is speaking out and as a result, the false group belief persists; each member thinks they believe differently from one another.  This phenomena, known as pluralistic ignorance, is puzzling for many reasons.  In this talk, I will use a new computer simulation model for the emergence of pluralistic ignorance to discover under what situations we might expect it to arise. Ultimately, I conclude that pluralistic ignorance requires relatively special conditions to arise. In particular, I argue that pluralistic ignorance will only arise in conditions where individual's beliefs are shifting for other reasons.</p>",
        department: "CSSH, Department of Philosophy and Religion, Master Calendar",
        timeStamp: "2020-12-16T09:00:00.000Z",
        displayTime: "Wednesday, December 16 at 9:00am"
    },
    {
        slug: "events6",
        title: "Virtual Bookclub on Racial Inequality Moderated by Professor Patricia Williams",
        text: "<p>Join the Alumni/ae Association Board of Directors Community Building Committee and the Office of Alumni/ae Relations and Development for a Virtual Book Club on February 4, 2021, from 7 to 8 PM ET. We will read Caste: The Origins of Our Discontents, by Isabel Wilkerson.  The New York Times describes it as, “An instant American classic and almost certainly the keynote nonfiction book of the American century thus far.”</p><p>The discussion will be led by Professor Patricia Williams, one of the most provocative intellectuals in American law and a pioneer of both the law and literature and critical race theory movements in American legal theory. Professor Williams has published widely in the areas of race, gender, literature and law. Her books, including The Alchemy of Race and Rights (Harvard University Press, 1991), illustrate some of America’s most complex societal problems and challenge our ideas about socio-legal constructs of race and gender.</p><p>We hope many graduates from around the globe will join us over Zoom on February 4, 2021!</p>",
        department: "School of Law, Alumni/ae",
        timeStamp: "2021-02-04T19:00:00.000Z",
        displayTime: "Thursday, February 4, 2021 at 7:00pm"
    }
];

describe("Events6 test", () => {
    it("renders correctly", () => {
        const {container} = render(<Events6 eventsItem={eventsItem}/>);
        expect(container).toMatchSnapshot();
    });
});