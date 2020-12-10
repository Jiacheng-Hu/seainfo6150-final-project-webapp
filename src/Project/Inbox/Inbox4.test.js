import React from "react";
import Inbox4 from "./Inbox4";


const inboxItem = [
    {
        slug: "inbox1",
        sender: "Instructure Canvas",
        title: "Recent Canvas Notification",
        text: "<p>You're signed up to receive a weekly report of some notifications from your Canvas account. Below is the report for the week ending Nov 21:</p><p><b>Assignment Created - Lab 5, INFO6210 13524 Data Mgt and Database Design SEC 08 Fall 2020 [SEA-2-TR]</b></p><p>due: Nov 22 at 11:59pm</p><p><b>Assignment Created - Database Implementation, INFO6210 13524 Data Mgt and Database Design SEC 08 Fall 2020 [SEA-2-TR]</b></p><p>due: Nov 30 at 11:59</p><p><b>Assignment Due Date Changed: Final project usability test assignment, INFO6150 15367 Web Design/User Experien Engr SEC 03 Fall 2020 [SEA-2-TR]</b></p><p>due: Dec 3 at 2:59am</p><p><b>Assignment Due Date Changed: Final project website, INFO6150 15367 Web Design/User Experien Engr SEC 03 Fall 2020 [SEA-2-TR]</b></p><p>due: Dec 12 at 2:59am</p><p><b>Assignment Created - Images for the web assignment, INFO6150 15367 Web Design/User Experien Engr SEC 03 Fall 2020 [SEA-2-TR]</b></p>",
        timeStamp: "2020-11-21T14:30:00.000Z",
        displayTime: "Saturday, November 21st 2020 at 2:30pm"
    },
    {
        slug: "inbox2",
        sender: "The Student Hub",
        title: "Reminder: select next week’s scheduling preferences",
        text: "<p>Hello!</p><p>The dynamic class scheduler is now live so that you may begin selecting your preferences for in-person or remote classes, for eligible classes the week of September 7. You may log in to the Student Hub and submit next week’s preferences no later than this Wednesday at 9 p.m. ET.</p><p>Your finalized assignments for next week will be available in the Hub, under Classes, beginning on Thursday.</p><p>A video demo and more information about dynamic scheduling is available on Northeastern’s Hybrid NUflex website. For additional questions and support for dynamic scheduling, the IT Service Desk is ready to help 24/7, all year long. Please reach out via the Tech Service Portal, at 617.373.HELP [4357], or at help@northeastern.edu.</p>",
        timeStamp: "2020-09-01T00:28:00.000Z",
        displayTime: "Tuesday, September 1st 2020 at 12:28am"
    },
    {
        slug: "inbox3",
        sender: "Office of Global Services",
        title: "Important Updates from OGS about your I-20 End Date",
        text: "<p>Dear student,</p><p>According to OGS records, your I-20 will expire at the end of the Spring/Winter 2021 term.  As you should have seen in previous communications from Northeastern, the Spring/Winter 2021 academic calendar has been adjusted to promote the health and wellbeing of the Northeastern community. Due to these adjustments, your I-20 end date will be updated in SEVIS to match the academic calendar. A new I-20 will not be issued and is not required.</p><p>Please refer to the University Academic Calendar determine your new program end date. Your program end date can be found on page 1 of your I-20 in the “Program of Study” section.</p><p>IMPORTANT: If your I-20 is expiring at the end of the Spring/Winter 2021 term, but you are NOT completing your program, you are required to submit a program extension request. Failure to submit a program extension request prior to your current program end date will result in the automatic completion of your SEVIS record and failure to maintain status and/or loss of benefits.</p><p>If you will be applying for Post-Completion OPT, please apply based on your new I-20 program end date. When your Post-OPT Recommendation I-20 is printed, this I-20 will reflect your updated program end date. More information about how and when to apply for Post-OPT can be found here.</p><p>If you have additional concerns, please respond to this email, or call OGS at 617-373-2310.</p><p>Sincerely,</p><p>Office of Global Services</p>",
        timeStamp: "2020-10-23T06:53:00.000Z",
        displayTime: "Friday, October 23rd 2020 at 6:53am"
    },
    {
        slug: "inbox4",
        sender: "Office 365 Support",
        title: "Important Updates on the Student Email Transition",
        text: "<p>Dear students,</p><p>As was announced in the fall, all student email accounts are transitioning from husky.neu.edu to northeastern.edu and migrating to Microsoft Office 365. Nearly 6,000 students opted-in to be among the first to migrate earlier this year, transferring their Google HuskyMail data and making the transition to O365. At the end of this week, all student email accounts will have completed the data migration to the new accounts in O365.</p><p>If you have not already transitioned to using your new mailbox, now is the time to do so. To access your new email account, use your northeastern.edu email address, [myNortheastern username]@northeastern.edu, and your myNortheastern password to log in to your mailbox at outlook.office365.com.</p><p>Your husky.neu.edu emails are setup to forward to your O365 account, and will do so indefinitely, even after your HuskyMail account in Google is retired later this year. Until then, you continue to have access to your HuskyMail account in Google, and your husky.neu.edu email will continue to be used in most university systems and sites, including Canvas and Blackboard. You do not need to update your email address in university systems.</p><p>The other Google tools students commonly use—including Google Docs and Drive—aren’t going anywhere. While Google mail and calendar will retire later in 2020, the rest of the Google Suite services at Northeastern will remain. Continue using husky.neu.edu addresses to collaborate in G Suite.</p><p>You will receive more information to help you prepare closer to when HuskyMail is retired. For more information about O365 and the student email transition, visit Northeastern’s O365 website, or contact the IT Service Desk at 617.373.HELP [4357].</p><p>Sincerely,</p><p>The O365 student email transition team</p>",
        timeStamp: "2020-05-13T23:23:00.000Z",
        displayTime: "Wednesday, May 13th 2020 at 11:23am"
    },
    {
        slug: "inbox5",
        sender: "Registrar",
        title: "Spring 2021 Registration begins November 13, 2020. Plan Your Class Schedule Now!",
        text: "<p>Registration for the Spring 2021 semester begins November 13, 2020 at 8 a.m. for continuing graduate students. You will be assigned a time ticket based on your degree and overall credit hours (including current registration). You can view your time ticket beginning November 12th on the myNortheastern web portal. Students are encouraged to register early to ensure ongoing active student status. Log into your myNortheastern account to plan your schedule now in preparation for the start of registration. Please contact your department if you require registration assistance.</p><p>Office of the University Registrar</p>",
        timeStamp: "2020-11-10T07:19:00.000Z",
        displayTime: "Tuesday, November 11th 2020 at 7:19am"
    },
    {
        slug: "inbox6",
        sender: "The Student Hub",
        title: "New In-Person Assignments in the Dynamic Class Scheduler",
        text: "<p>Hello!</p><p>Starting this week, an update to the dynamic class scheduler will improve access to safe, in-person class participation for those who want it. The change will be effective with assignments for the week of November 16.</p><p>Each Sunday prior to the week of class, any students who are not compliant with their required COVID-19 testing cadence are removed from in-person assignments. Beginning tomorrow, the dynamic scheduler will fill those seats emptied due to testing non-compliance.</p><p>If you indicate an in-person preference but receive a remote assignment on Thursday, please check back each Sunday evening to see if your assignment has been updated to in-person.</p><p>The university remains committed to providing as many in-person learning opportunities as possible, whenever it is safe to do so. If you have any questions, please visit the Dynamic Scheduling page.</p>",
        timeStamp: "2020-11-15T03:27:00.000Z",
        displayTime: "Sunday, November 15th 2020 at 3:27am"
    }
];

describe("Inbox4 tests", () => {
    it("renders correctly", () => {
        const {container} = render(<Inbox4 inboxItem={inboxItem}/>);
        expect(container).toMatchSnapshot();
    });
});