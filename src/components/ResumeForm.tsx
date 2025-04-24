
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const ResumeForm = () => {
  const [name, setName] = useState('TANMAY PATIL');
  const [title, setTitle] = useState('Engineering Student | Backend & Frontend Development | Machine Learning | Cybersecurity');
  const [contact, setContact] = useState('9020784326 | tanmaypatil96@gmail.com | github.com/TANMAYPatil98');
  const [location, setLocation] = useState('Thane, Maharashtra');
  const [summary, setSummary] = useState(`I am a motivated computer engineering student, currently pursuing my Bachelor's in Information Technology. My background in programming possess a strong foundation in programming languages such as Java and Python and have hands-on experience in backend and frontend development. My project experience includes innovative applications like ComplaintBox and DietMG, showcasing my ability to create real-world solutions.`);
  const [latex, setLatex] = useState('');

  const generateLatex = () => {
    const latexCode = `\\documentclass[a4paper,11pt]{article}

% Packages
\\usepackage[left=0.75in,right=0.75in,top=0.6in,bottom=0.6in]{geometry}
\\usepackage{hyperref}
\\usepackage{fontawesome}
\\usepackage{enumitem}
\\usepackage[none]{hyphenat}
\\usepackage{xcolor}
\\usepackage{tabularx}

% Define colors
\\definecolor{sectioncolor}{RGB}{0, 0, 0}
\\definecolor{linkcolor}{RGB}{0, 114, 227}

% Custom commands
\\newcommand{\\headerName}[1]{\\textbf{\\LARGE #1}}
\\newcommand{\\headerTitle}[1]{\\textcolor{linkcolor}{\\small #1}}
\\newcommand{\\sectionTitle}[1]{\\vspace{6pt}\\textbf{\\Large\\textcolor{sectioncolor}{#1}}\\vspace{3pt}\\hrule\\vspace{6pt}}

% Hyperlink setup
\\hypersetup{
    colorlinks=true,
    linkcolor=linkcolor,
    urlcolor=linkcolor,
}

% Set up indentation
\\setlength{\\parindent}{0pt}

% Document
\\begin{document}

% Header
\\headerName{${name}}\\\\[0.2em]
\\headerTitle{${title}}\\\\[0.3em]

\\begin{tabular}{l l}
\\faPhone\\ ${contact.split('|')[0].trim()} & \\faEnvelope\\ ${contact.split('|')[1].trim()} \\\\
${location} & \\faGithub\\ ${contact.split('|')[2].trim()} 
\\end{tabular}

% Summary
\\sectionTitle{SUMMARY}
${summary}

% Key Achievements section and Education section side by side
\\begin{minipage}[t]{0.58\\textwidth}
  % Education Section
  \\sectionTitle{EDUCATION}
  \\textbf{Bachelor of Engineering in Information Technology}\\\\
  \\textcolor{linkcolor}{A. P. Shah Institute of Technology}\\\\
  \\faCalendar\\ 08/2020 - 05/2025 \\hfill ${location.split(',')[0]}\\\\[0.5em]
  
  \\textbf{Higher Secondary Certificate (HSC)}\\\\
  \\textcolor{linkcolor}{DNCVP College}\\\\
  \\faCalendar\\ 06/2018 - 05/2021 \\hfill \\faMapMarker\\ Jalgaon\\\\[0.5em]
  
  \\textbf{Secondary School Certificate (SSC)}\\\\
  \\textcolor{linkcolor}{St. Teresa's Convent School}\\\\
  \\faCalendar\\ 04/2008 - 05/2018 \\hfill \\faMapMarker\\ Jalgaon\\\\[1em]

  % Certification Section
  \\sectionTitle{CERTIFICATION}
  \\textcolor{linkcolor}{Database Foundations}\\\\[0.3em]
  \\textcolor{linkcolor}{Java Foundations}\\\\[0.3em]
  \\textcolor{linkcolor}{Machine Learning Foundations}\\\\[0.3em]
  \\textcolor{linkcolor}{Data Analytics}\\\\[0.3em]
  \\textcolor{linkcolor}{Cloud Foundations}\\\\[0.3em]
  \\textcolor{linkcolor}{Security Operations Fundamentals}\\\\[0.3em]
  \\textcolor{linkcolor}{Cloud Security Fundamentals}\\\\[0.3em]
  \\textcolor{linkcolor}{Cybersecurity Essentials}\\\\[0.3em]
  \\textcolor{linkcolor}{Programming Essentials in Python}\\\\[0.3em]
  \\textcolor{linkcolor}{Networking Essentials}\\\\
\\end{minipage}
\\hfill
\\begin{minipage}[t]{0.38\\textwidth}
  % Key Achievements
  \\sectionTitle{KEY ACHIEVEMENTS}
  
  \\begin{tabular}{p{0.1\\textwidth}p{0.9\\textwidth}}
  \\textcolor{linkcolor}{\\faGem} & \\textbf{Software Efficiency Boost}\\\\
  & Increased project efficiency by 30\\% through innovative software solutions.\\\\[0.8em]
  
  \\textcolor{linkcolor}{\\faGem} & \\textbf{Prediction Model Success}\\\\
  & Achieved a 85\\% prediction accuracy in stock price models.\\\\[0.8em]
  
  \\textcolor{linkcolor}{\\faGem} & \\textbf{Complaint Resolution Improvement}\\\\
  & Reduced complaint issue resolution time by 45\\% with ComplaintBox.\\\\[0.8em]
  
  \\textcolor{linkcolor}{\\faGem} & \\textbf{Hackathon Championship Lead}\\\\
  & Led team to win national hackathon among 200 participants.\\\\
  \\end{tabular}
  
  % Skills Section
  \\sectionTitle{SKILLS}
  
  \\begin{tabular}{p{0.3\\textwidth}p{0.3\\textwidth}p{0.3\\textwidth}}
  AWS & C/C++ & Cisco \\\\
  CSS & Cybersecurity & Deep Learning \\\\
  Django & GitHub & HTML \\\\
  Java & JavaScript & MongoDB \\\\
  PHP & PostgreSQL & Python \\\\
  React & SQL & Visual Studio Code \\\\
  Node.js & Express.js & Gmail \\\\
  \\end{tabular}
  
  % Projects
  \\sectionTitle{PROJECTS}
  \\textbf{ComplaintBox}
  \\begin{itemize}[leftmargin=*, nosep]
  \\item Developed a complaint management system to streamline the process of logging and resolving issues
  \\item Implemented a user-friendly interface with secure authentication, enabling users to submit complaints, track their status, and receive timely updates
  \\item Designed an admin dashboard for monitoring and resolving issues, ensuring improved user satisfaction and response
  \\end{itemize}
\\end{minipage}

\\end{document}`;

    setLatex(latexCode);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">LaTeX Resume Generator</h2>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <Label htmlFor="title">Professional Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your professional title"
            />
          </div>

          <div>
            <Label htmlFor="contact">Contact Information</Label>
            <Input
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter your contact information"
            />
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location"
            />
          </div>

          <div>
            <Label htmlFor="summary">Professional Summary</Label>
            <Textarea
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Enter your professional summary"
              className="h-32"
            />
          </div>

          <Button onClick={generateLatex} className="w-full">
            Generate LaTeX Code
          </Button>
        </div>
      </Card>

      {latex && (
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Generated LaTeX Code</h3>
          <p className="text-sm mb-4">Copy this code to Overleaf to create your resume</p>
          <Textarea
            value={latex}
            readOnly
            className="h-96 font-mono text-sm"
          />
        </Card>
      )}
    </div>
  );
};

export default ResumeForm;
