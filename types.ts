export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  school: string;
  location: string;
  degree: string;
  details: string[];
}

export interface VolunteerWork {
  organization: string;
  role: string; // inferred
  period: string;
  details: string[];
}

export interface ResumeData {
  personalInfo: {
    name: string;
    location: string;
    email: string;
    phone: string;
  };
  skills: SkillCategory[];
  workHistory: Job[];
  education: Education[];
  volunteer: VolunteerWork[];
  awards: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}