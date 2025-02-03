// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const Name = 'Tarun RG';
export const desig = 'Final year student @ Amrita Vishwa Vidyapeetham Chennai';
export const profile1 = '/tarun.jpeg';
export const SITE_DESCRIPTION =
  'Tarun RG, final year CSE student at Amrita Vishwa Vidyapeetham Chennai';

export const SOCIAL_MEDIA = {
  github: 'https://www.github.com/tr1ck-5t3r',
  linkedin: 'https://www.linkedin.com/in/tarun-r-g',
  email: 'tarungovindharaj2003@gmail.com',
};

type IconName =
  | 'seti:java'
  | 'seti:python'
  | 'seti:javascript'
  | 'seti:react'
  | 'seti:docker'
  | 'github' // Add any custom icon names you use
  | 'node'
  | 'astro';

type Interest = {
  name: string;
  icon: IconName;
};

export const interests: Interest[] = [
  { name: 'Java', icon: 'seti:java' },
  { name: 'Python', icon: 'seti:python' },
  { name: 'Javascript', icon: 'seti:javascript' },
  { name: 'React', icon: 'seti:react' },
  { name: 'Node js', icon: 'node' },
  { name: 'Astro js', icon: 'astro' },
  { name: 'Docker', icon: 'seti:docker' },
  { name: 'Github', icon: 'github' },
];

export const current_company = {
  name: 'Tredence',
  path: '/tredence.jpg',
};

export const projectsHome = [
  {
    title: 'Project One',
    description: 'An AI-powered image reconstruction tool using GANs.',
    link: 'https://github.com/yourusername/project-one',
    image: '/project.webp',
  },
  {
    title: 'Project Two',
    description:
      'A responsive portfolio built with Astro.js and GSAP animations.',
    link: 'https://yourportfolio.com',
    image: '/project.webp',
  },
  {
    title: 'Project Three',
    description:
      'A cloud-based data visualization dashboard for real-time analytics.',
    link: 'https://github.com/yourusername/project-three',
    image: '/project.webp',
  },
];

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
};

// Define the experience array type
export const experience: ExperienceItem[] = [
  {
    company: 'Prodigy InfoTech',
    role: 'Machine Learning Intern',
    duration: '05/05/2024 - 01/06/2024',
    description:
      'Implemented various Machine Learning models and gained practical experience in the field of Artificial Intelligence. \
      Worked on projects like Sentiment Analysis, Image Recognition, and Speech Recognition.',
    logo: '/prodigy-infotech.jpg',
  },
  {
    company: 'NxWeb',
    role: 'Intern',
    duration: '02/12/2024 - 02/03/2025',
    description:
      'Understanding client requirements and developing personalized technology-driven solutions that help businesses achieve \
     their goals through innovation and tailored approaches.',
    logo: '/nxweb.jpg',
  },
  // Add more experience objects if needed
];

export interface Certificate {
  label: string;
  image: {
    src: string;
    alt?: string;
  };
  dates: {
    start: string;
    end: string;
  };
  description: string;
}

export const certificates: Certificate[] = [
  {
    label: "AWS Academy Cloud Architecting",
    image: {
      src: "/cloud-architecting.jpg",
      alt: "AWS Cloud Architecting Certificate"
    },
    dates: {
      start: "01/2004",
      end: "02/2024"
    },
    description: "Applied concepts of Cloud and gained practical experience in building infrastructure on AWS and explored various AWS Cloud Best Practices."
  },
  {
    label: "AWS Academy Cloud Foundations",
    image: {
      src: "/cloud-foundations.jpg",
      alt: "AWS Cloud Foundations Certificate"
    },
    dates: {
      start: "01/2014",
      end: "02/2014"
    },
    description: "Explored various cloud concepts, AWS core services, security, architecture, pricing, and support, and obtained practical knowledge of the working of AWS and its components."
  },
  {
    label: "People and Soft Skills for Professional and Personal Success - IBM",
    image: {
      src: "/ibm-soft-skills.jpg",
      alt: "IBM Soft Skills Certificate"
    },
    dates: {
      start: "09/2023",
      end: "10/2023"
    },
    description: "Practiced and utilized soft skills in the workplace and explored ways to manage a team of 5+ members effectively."
  },
  {
    label: "Technical Support Fundamentals - Google",
    image: {
      src: "/google.jpg",
      alt: "Google Technical Support Certificate"
    },
    dates: {
      start: "07/2023",
      end: "08/2023"
    },
    description: "Studied the different facets of Information Technology, like computer hardware, the Internet, computer software, troubleshooting, and customer service."
  },
  {
    label: "Intro to Machine Learning - Kaggle",
    image: {
      src: "/kaggle.jpg",
      alt: "Kaggle Machine Learning Certificate"
    },
    dates: {
      start: "06/2023",
      end: "06/2023"
    },
    description: "Coded 3+ diverse ML models and gained practical insight into building AI models and applications."
  },
  {
    label: "Introduction to Cybersecurity",
    image: {
      src: "/cisco-cybersecurity.jpg",
      alt: "Cisco Cybersecurity Certificate"
    },
    dates: {
      start: "03/2022",
      end: "06/2022"
    },
    description: "Explored the fundamentals of cybersecurity and gained practical experience in securing networks, systems, and data from cyber threats."
  }
];

export type Award = {
  title: string;
  description: string;
  image: {
    src: string;
    alt?: string;
  };
  dates: string;
  venue: string;
};

export const awards: Award[] = [
  {
    title: "Paper Publication IEEE - INCIP 2025 - MIT Benagluru",
    image: {
      src: "/mahe.svg",
      alt: "Manipal Insitute of Technology"
    },
    dates: "01/2025",
    venue: "Manipal Insitute of Technology, Bengalore",
    description: "Published a paper on Application for Medical Diagnosis powered by Neural Network."
  },
  {
    title: "1st place - Qrack-It - Kriya 23",
    image: {
      src: "/PSG_College.jpg",
      alt: "PSG College of Technology"
    },
    dates: "03/2023",
    venue: "PSG College of Technology, Coimbatore",
    description: "A 24-hour Hackathon, consisting of one round of website building and a presentation. Won first place in the competition."
  },
  {
    title: "2nd Place - CodeAstra 22",
    image: {
      src: "/amrita.jpg",
      alt: "Amrita Vishwa Vidyapeetham"
    },
    dates: "08/2022",
    venue: "Amrita Vishwa Vidyapeetham, Chennai",
    description: "College-wide competitive coding competition consisting of one round of coding with LeetCode-style problems. Secured 2nd place."
  },
  {
    title: "1st Place - CodeInfo - 20",
    image: {
      src: "/Kumaraguru_College.jpg",
      alt: "Kumaraguru College of Technology"
    },
    dates: "02/2020",
    venue: "Kumaraguru College of Technology, Coimbatore",
    description: "A coding competition for school students, consisting of three rounds of coding and an interview. Aced the competition and won first place, the only place secured by my school."
  },
  {
    title: "Subject Topper - Computer Science",
    image: {
      src: "/Stanes-school.jpg",
      alt: "Stanes School ICSE/ISC"
    },
    dates: "08/2019",
    venue: "Stanes School ICSE/ISC, Coimbatore",
    description: "Academic distinction for scoring full marks in the Computer Science paper. Recognized in front of the entire school."
  }
];
