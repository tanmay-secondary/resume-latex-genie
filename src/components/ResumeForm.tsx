
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const ResumeForm = () => {
  const [name, setName] = useState('TANMAY PATIL');
  const [contact, setContact] = useState('9020784326 | tanmaypatil96@gmail.com | github.com/TANMAYPatil98');
  const [location, setLocation] = useState('Thane, Maharashtra');
  const [summary, setSummary] = useState(`I am a motivated computer engineering student, currently pursuing my Bachelor's in Information Technology. My background in programming possess a strong foundation in programming languages such as Java and Python and have hands-on experience in backend and frontend development. My project experience includes innovative applications like ComplaintBox and DietMG, showcasing my ability to combine technical skills to create real-world solutions.`);
  const [latex, setLatex] = useState('');

  const generateLatex = () => {
    const latexCode = `\\documentclass[a4paper,11pt]{article}

% Packages
\\usepackage[left=0.75in,right=0.75in,top=0.6in,bottom=0.6in]{geometry}
\\usepackage{hyperref}
\\usepackage{fontawesome}
\\usepackage{enumitem}
\\usepackage[none]{hyphenat}

% Custom commands
\\newcommand{\\headerStyle}[1]{\\textbf{\\Large #1}}
\\newcommand{\\sectionTitle}[1]{\\textbf{\\large #1}\\medskip}

% Document
\\begin{document}

% Header
\\begin{center}
\\headerStyle{${name}}\\\\[0.3em]
{\\small ${contact}}\\\\
{\\small ${location}}
\\end{center}

% Summary
\\sectionTitle{SUMMARY}
${summary}

% Education
\\sectionTitle{EDUCATION}
\\begin{itemize}[leftmargin=*]
\\item Bachelor of Engineering in Information Technology\\\\
A. P. Shah Institute of Technology\\\\
08/2020 - 05/2025 \\hfill Thane
\\item Higher Secondary Certificate (HSC)\\\\
DNCVP College\\\\
06/2018 - 05/2021 \\hfill Jalgaon
\\end{itemize}

% Add more sections as needed...

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
