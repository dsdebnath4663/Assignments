import React from 'react';
import './App.css';
import ProjectItem from './components/ProjectItem';
import EducationItem from './components/EducationItem';
import SkillItem from './components/SkillItem';
import ContactItem from './components/ContactItem';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <header id="header">
        <img
          src="https://media.licdn.com/dms/image/C5603AQGZ9WekZLq_XQ/profile-displayphoto-shrink_400_400/0/1631376023202?e=1725494400&v=beta&t=1Usr32Vq_H4chPVCzcxs76nCwBxPMlpiTklpQEaj7Q4"
          alt="Your Photo"
          className="profile-photo"
        />
        <div className="name-container">
          <h1>DEBNATH<span className="last-name">SAHA</span></h1>
          <hr />
          <p>💻 Front-End Dev | 🚀 Seeking React ⚛️, Redux 🔁, HTML 🌐, CSS 🎨, Java ☕️ Internship | 🎨 Tech Enthusiast | 💡 Ready to Innovate! | 🌟 Fast Learner | 🛠 Problem Solver | Let's Build Something Awesome!</p>
          <hr />
        </div>
      </header>
      <main>
        <article id="mainLeft">
          <Section title="CONTACT">
            <ContactItem icon="fa-envelope" text="dsdebnath4663@gmail.com" link="mailto:dsdebnath4663@gmail.com" />
            <ContactItem icon="fab fa-github" text="dsdebnath4663?tab=repositories" link="https://github.com/dsdebnath4663?tab=repositories" />
            <ContactItem icon="fab fa-linkedin" text="debnath-saha-190b44199" link="https://www.linkedin.com/in/debnath-saha-190b44199/" />
          </Section>
          <Section title="SKILLS">
            <SkillItem name="HTML" level="90" />
            <SkillItem name="CSS" level="85" />
            <SkillItem name="JavaScript" level="80" />
            <SkillItem name="React" level="75" />
            <SkillItem name="Git" level="70" />
            <SkillItem name="Java" level="75" />
            <SkillItem name="Spring" level="75" />
            <SkillItem name="Hibernate" level="75" />
            <SkillItem name="Oracle" level="75" />
          </Section>
        </article>
        <article id="mainRight">
          <Section title="EDUCATION">
            <EducationItem title="Bachelor of Technology (B.Tech), Computer Science & Engineering" institution="Maulana Abul Kalam Azad University Of Technology, West Bengal" duration="2021 - 2023" />
            <EducationItem title="Diploma, Computer Science & Engineering" institution="All India Council For Technical Education (AICTE)" duration="2019 - 2021" />
            <EducationItem title="Secondary (X)" institution="WEST BENGAL BOARD OF SECONDARY EDUCATION board" duration="2018-2019" />
          </Section>
          <Section title="PROJECTS">
            <ProjectItem
              title="Learning Management System"
              description="Implemented LMS features"
              details={[
                "Login/Registration: Username/email, password fields, 'Forgot Password,' 'Register.'",
                "Dashboard: Enrolled courses, assignments, notifications, course materials.",
                "Course Catalog: Search, filters, course details, instructor info, enrollment.",
                "Course Page: Overview, modules, assignments, grades, forum, announcements.",
                "Enrollment: Button, confirmation, access link for courses.",
                "Assignment Submission: Details, form, file upload, confirmation.",
                "Grades: Assignment breakdown, course grade, instructor feedback.",
                "Discussion Forum: Threads, reply, upvote/downvote, sorting.",
                "Notifications: Center, real-time updates, preference management.",
                "Profile Management: Edit profile, change password, history, settings.",
                "Admin Dashboard: Course/user management, analytics, settings."
              ]}
              techStack="Tech stack: React.js, Redux.js, CSS, Bootstrap, Spring Boot, Oracle DB, JDBC."
              links={[
                "https://github.com/dsdebnath4663/learning-management-system",
                "https://github.com/dsdebnath4663/lms-service"
              ]}
            />
          </Section>
          <Section title="LANGUAGES">
            <SkillItem name="English" level="95" />
            <SkillItem name="Hindi" level="80" />
            <SkillItem name="Bengali" level="70" />
          </Section>
        </article>
      </main>
      <footer>
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default App;
