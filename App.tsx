import React, { useState } from 'react';
import { RESUME_DATA } from './constants';
import ChatWidget from './components/ChatWidget';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Briefcase, 
  GraduationCap, 
  Award,
  Heart,
  Code
} from './components/Icons';

const App: React.FC = () => {
  const { personalInfo, skills, workHistory, education, volunteer, awards } = RESUME_DATA;
  const [activeTab, setActiveTab] = useState<'work' | 'volunteer'>('work');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* Navigation / Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-slate-100 tracking-tight">
            AH<span className="text-cyan-500">.</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-full transition-colors border border-slate-700">
            Get in touch
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-24">
        
        {/* Hero Section */}
        <section id="about" className="flex flex-col md:flex-row items-start md:items-center gap-12 pt-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium mb-2 border border-cyan-500/20">
              Data Analyst & Java Automation Engineer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight leading-tight">
              Hello, I'm <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              A versatile professional combining expertise in Data Analytics, Software Automation, and Finance. 
              Currently driving quality at <strong className="text-slate-200">Outlier AI</strong>.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-slate-400 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                <MapPin size={18} className="text-cyan-500" />
                {personalInfo.location}
              </div>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-slate-400 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                <Mail size={18} className="text-cyan-500" />
                {personalInfo.email}
              </a>
              <div className="flex items-center gap-2 text-slate-400 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                <Phone size={18} className="text-cyan-500" />
                {personalInfo.phone}
              </div>
            </div>
          </div>
          
          {/* Visual decoration / Image placeholder */}
          <div className="w-full md:w-1/3 aspect-square relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative w-full h-full bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden flex items-center justify-center">
               <img src="https://picsum.photos/600/600?grayscale" alt="Alazar Hailemeskel" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="text-white font-bold text-lg">Alazar Hailemeskel</div>
                 <div className="text-cyan-400 text-sm">Full Stack & Data Specialist</div>
               </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-cyan-500/10 rounded-xl">
              <Code className="text-cyan-400" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-100">Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all group">
                <h3 className="text-lg font-semibold text-slate-200 mb-4 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 bg-slate-800 text-slate-400 text-sm rounded-md border border-slate-700/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Briefcase className="text-blue-400" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-100">Work History</h2>
            </div>
            
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 w-fit">
              <button 
                onClick={() => setActiveTab('work')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'work' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Professional
              </button>
              <button 
                onClick={() => setActiveTab('volunteer')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'volunteer' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Volunteer
              </button>
            </div>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
            {(activeTab === 'work' ? workHistory : volunteer).map((job: any, index: number) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 group-hover:bg-slate-900 group-hover:border-cyan-500/30 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-slate-900 z-10">
                   <div className="w-2.5 h-2.5 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors"></div>
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-cyan-500/20 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-lg text-slate-100">{job.title || job.role}</h3>
                    <span className="text-xs font-mono py-1 px-2 bg-slate-800 rounded text-cyan-400 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <div className="text-cyan-500 font-medium text-sm mb-4 flex items-center gap-2">
                    {job.company || job.organization} 
                    {job.location && <span className="text-slate-500 font-normal">• {job.location}</span>}
                  </div>
                  <ul className="space-y-2">
                    {(job.responsibilities || job.details).map((resp: string, rIdx: number) => (
                      <li key={rIdx} className="text-slate-400 text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-700 before:rounded-full">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Awards Grid */}
        <section id="education" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <GraduationCap className="text-purple-400" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-100">Education</h2>
            </div>

            <div className="grid gap-6">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-purple-500/20 transition-all flex flex-col sm:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-200 mb-1">{edu.school}</h3>
                    <p className="text-purple-400 mb-2">{edu.degree}</p>
                    <div className="flex flex-wrap gap-3">
                      {edu.details.map((detail, dIdx) => (
                        <span key={dIdx} className="text-sm text-slate-500 bg-slate-950 px-2 py-1 rounded">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-slate-500 text-sm font-medium whitespace-nowrap">
                    {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-500/10 rounded-xl">
                <Award className="text-yellow-400" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-100">Awards</h2>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl h-full">
              <ul className="space-y-4">
                {awards.map((award, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Heart size={18} className="text-yellow-500 mt-1 shrink-0" />
                    <span className="text-slate-300 font-medium">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 border-t border-slate-800">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to collaborate?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              I am currently open to opportunities in Data Analytics, Software Engineering, and Finance. 
              Let's discuss how my unique blend of skills can add value to your team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-medium transition-colors"
              >
                <Mail size={20} />
                Send Email
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-full font-medium transition-colors"
              >
                <Phone size={20} />
                Call Me
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 text-sm bg-slate-950 border-t border-slate-900">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with React & Tailwind • Powered by Gemini AI</p>
      </footer>

      {/* Chat Bot */}
      <ChatWidget />
    </div>
  );
};

export default App;