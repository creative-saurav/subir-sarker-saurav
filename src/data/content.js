import { FaDownload, FaBriefcase } from "react-icons/fa";


export const siteData = {
  name: 'Subir Sarker Saurav',
  title: 'Full Stack Developer | Laravel & MERN Stack Developer',
  location: 'Road 6 , Pallabi,  Mirpur 12 , Dhaka 1216, Bangladesh',
  experience: '2+ Years',
  email: 'subirsarkar90283@gmail.com',
  resume: '/resume.pdf',
  social: {
    github: 'https://github.com/creative-saurav',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://twitter.com/yourhandle'
  }
}

export const hero = {
  subtitle:
    'I build modern, scalable, and user-friendly web applications using Laravel, React, and modern frontend technologies.',

  ctas: [
    { label: 'Download Resume', href: '/resume.pdf' ,  icon: FaDownload, },
    { label: 'Hire Me ', href: 'http://www.fiverr.com/creative_saurav/',  target: '_blank', icon: FaBriefcase,},
    
  ],

  roles: [
    'Full Stack Developer',
    'Laravel Developer',
    'React Developer',
    'Frontend Engineer'
  ]
}

export const about = {
  heading: 'About Me',

  paragraph: `I'm a Full Stack Web Developer with 2.5+ years of experience building modern, responsive, and user-friendly web applications. My professional expertise is in Laravel, PHP, MySQL, and RESTful APIs, while I also enjoy creating interactive frontend experiences with React, Tailwind CSS, and Framer Motion. Currently, I am expanding my skills through MERN Stack projects and continuously exploring modern web technologies.`,

  meta: 'Location: Dhaka, Bangladesh • Availability: Open to Work & Freelance',

  stats: [
    { label: 'Years Experience', value: 2.5 },
    { label: 'Projects Completed', value: 18 },
    { label: 'Tech Stack Skills', value: 15 }
    
  ]
}


export const skills = {
  categories: [
    { title: 'Frontend', items: ['HTML5', 'CSS3', 'Bootstrap 5', 'Tailwind CSS',' DaisyUI', 'JavaScript (ES6+)', ' jQuery','React.js', 'Framer Motion'] },
    { title: 'Backend', items: ['Laravel', 'PHP','CodeIgniter', 'Node.js', 'Express', 'MySQL', 'MongoDB'] },
    { title: 'Tools', items: ['Git', 'Thunder Client', 'Postman'] }
  ]
}

export const services = [
  'Frontend Development (React)',
  'Backend Development (Laravel & Node.js)',
  'API Design & Integration',
  'Database Design',
  'UI Implementation & Optimization'
]

export const experience = [
  {
    role: 'Frontend Designer → Laravel Developer',
    company: 'Creativeitem',
    period: 'Jan 2023 - Apr 2026',
    details:
            'Joined Creativeitem as a Frontend Designer and gradually transitioned into Laravel development. Worked with HTML, CSS, Bootstrap, JavaScript, PHP, Laravel, CodeIgniter, and MySQL while contributing to commercial web applications, business directory platforms, and eCommerce solutions.'
  },

  {
    role: 'React & MERN Stack Developer',
    company: 'Personal Development',
    period: '2026 - Present',
    details:
      'Focused on modern frontend development with React, Tailwind CSS, and Framer Motion. Actively building MERN stack projects to strengthen expertise in Node.js, Express.js, and MongoDB.'
  }
]
export const projects = [
  {
    image: '/atlas.png',
    title: 'Atlas',
    short:
      'A Laravel-powered business directory and listing platform featuring advanced search, location-based discovery, bookings, subscriptions, and business management tools.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'jQuery'],
    live: 'https://demo.creativeitem.com/atlas-laravel/',
  
  },

  {
    image: '/elevate.png',
    title: 'Elevate',
    short:
      'A modern multi-vendor eCommerce platform with product management, secure checkout, order tracking, payment gateways, and vendor management features.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    live: 'https://demo.creativeitem.com/elevate/fashion',

  },

  {
    image: '/public/portfolio.png',
    title: 'Portfolio Website',
    short:
      'A modern personal portfolio built with React, Tailwind CSS, and Framer Motion, showcasing projects, skills, and professional experience.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    live: '#',

  }
]

export const achievements = [
  { label: 'Years Experience', value: 3 },
  { label: 'Professional Projects', value: 10 },
  { label: 'Tech Stack Skills', value: 15 }
]

export const testimonials = [
  { name: 'Client A', text: 'Delivered quickly and exceeded expectations — great communication and clean code.' },
  { name: 'Client B', text: 'Transformed our UI into a delightful experience; highly recommended.' }
]

export const faqs = [
  { q: 'What services do you offer?', a: 'Frontend, Backend, API design, Database modelling, and consulting.' },
  { q: 'What is your availability?', a: 'Open to freelance and full-time opportunities.' }
]
