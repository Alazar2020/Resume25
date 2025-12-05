import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: "Alazar Hailemeskel",
    location: "Burien, WA 98166",
    email: "alazarhailemeskel09@gmail.com",
    phone: "206-714-0487"
  },
  skills: [
    {
      title: "Data Analytics",
      skills: ["R", "SQL", "Excel", "MATLAB", "Python"]
    },
    {
      title: "Programming & Web",
      skills: ["Java", "HTML", "JavaScript"]
    },
    {
      title: "Finance & Accounting",
      skills: ["Financial Analysis", "Valuation", "Cost Accounting", "U.S. GAAP"]
    },
    {
      title: "Collaboration Tools",
      skills: ["Microsoft 365 (Word, PowerPoint, Outlook, Teams)", "Google Workspace"]
    }
  ],
  workHistory: [
    {
      title: "Mathematics Specialist",
      company: "Outlier AI",
      location: "Seattle, WA",
      period: "February 2024 - January 2025",
      responsibilities: [
        "Identified anomalies and potential errors in structured data, flagging potential quality risks and contributing to continuous monitoring practices.",
        "Collaborated with cross-functional teams to assess, test, and evaluate AI-generated content, ensuring quality and compliance with project standards.",
        "Reviewed and rated prompts created by others to ensure high accuracy and consistency in AI model training.",
        "Partnered with remote teams to maintain consistent performance and meet tight deadlines.",
        "Assisted with day-to-day operations, working efficiently and productively with all team members."
      ]
    },
    {
      title: "Java Automation Engineer",
      company: "Renature",
      location: "Seattle, WA",
      period: "May 2021 - August 2023",
      responsibilities: [
        "Utilized version control systems such as Git for efficient collaboration and project management.",
        "Defined and continuously improved software development best practices.",
        "Collaborated with cross-functional teams to ensure seamless integration of software components.",
        "Maintained existing software through bug fixes and enhancements.",
        "Participated in Agile development processes, including daily stand-ups, sprint planning, and retrospectives.",
        "Optimized application performance through profiling tools, refactoring code, and implementing caching strategies where necessary."
      ]
    },
    {
      title: "Student Office Assistant",
      company: "East Tennessee State University",
      location: "Johnson City, TN",
      period: "May 2018 - December 2020",
      responsibilities: [
        "Performing administrative duties related to students' programs.",
        "Answer phones, greet visitors, and provide general information about the office or department.",
        "Perform tasks, including filing, photocopying, scanning, and data entry.",
        "Schedule appointments and maintain office calendars.",
        "Handle incoming and outgoing mail or campus deliveries."
      ]
    },
    {
      title: "Content Moderator",
      company: "Appen Ltd",
      location: "Remote",
      period: "May 2015 - December 2020",
      responsibilities: [
        "Analyzed and evaluated social media content for adherence to platform policies, ensuring compliance with community standards across multiple platforms.",
        "Conducted detailed assessments to identify and remove inappropriate or harmful content, supporting the improvement of automated moderation systems.",
        "Collaborated with a global team to implement best practices for moderating multimodal content, including text, images, and videos.",
        "Provided feedback on content moderation tools to enhance AI-driven decision-making, improving the accuracy of automated filtering."
      ]
    },
    {
      title: "Resident Advisor",
      company: "East Tennessee State University",
      location: "Johnson City, TN",
      period: "February 2015 - December 2017",
      responsibilities: [
        "Maintained confidential student records and incident reports, ensuring accuracy and integrity of documentation in line with institutional guidelines.",
        "Planned and facilitated educational programs and team-building events to promote a respectful and inclusive community.",
        "Coordinated with university administration and local law enforcement during investigations or escalations, reinforcing experience with institutional compliance and stakeholder communication."
      ]
    },
    {
      title: "Customer Service Representative",
      company: "Advanced Call Center Technologies, LLC",
      location: "Johnson City, TN",
      period: "September 2015 - February 2017",
      responsibilities: [
        "Answering calls from customers looking for assistance with their accounts.",
        "Account monitoring/research designed to identify fraud and/or suspicious activity from fraud detection software.",
        "Assists other bank personnel in areas related to debit cards and fraud prevention.",
        "Manage customer inquiries, ensuring proper investigation and timely resolution that is compliant with departmental standards.",
        "Handled complaints and provided appropriate solutions for customers.",
        "Utilized various computer applications to log and locate information for identifying, researching, and resolving customer issues."
      ]
    }
  ],
  education: [
    {
      school: "Eastern Washington University",
      location: "Cheney, WA",
      degree: "Dual Master's Degree in Professional Accounting (MPAcc) and Business Administration (MBA)",
      details: [
        "Expected Graduation: June 2026",
        "GPA: 3.7/4.0"
      ]
    },
    {
      school: "East Tennessee State University",
      location: "Johnson City, TN",
      degree: "Bachelor of Arts in Economics, Minor in Mathematics",
      details: [
        "Graduated: December 2020"
      ]
    }
  ],
  volunteer: [
    {
      organization: "Black Affairs Association – Multicultural Affairs Organizations",
      role: "Board Member / Treasurer (Implied)",
      period: "May 2016 - December 2017",
      details: [
        "Audit and maintain accurate records of all financial transactions.",
        "Prepare and present financial reports at regular meetings.",
        "Work closely with the president and other executive board members to achieve the organization's goals.",
        "Organize and help coordinate events to ensure smooth execution."
      ]
    }
  ],
  awards: [
    "National Honor & Merit Scholars Society"
  ]
};

export const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Alazar Hailemeskel on his personal portfolio website.
Your goal is to answer questions about Alazar's professional background, skills, and experience in a professional, friendly, and concise manner.

Here is Alazar's Resume Context:
${JSON.stringify(RESUME_DATA, null, 2)}

Instructions:
1. Always base your answers on the provided context.
2. If asked about something not in the resume, politely state that it's not listed in his current public profile but suggest contacting him directly.
3. Be helpful and highlight his strengths in Data Analytics, Java Automation, and Finance.
4. Keep responses brief (under 100 words) unless asked for a detailed explanation.
5. If the user greets you, reply as "Alazar's AI Assistant".
`;