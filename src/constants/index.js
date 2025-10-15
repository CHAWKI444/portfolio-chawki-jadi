import {
  angular, python, pytorch, huggingface, nestjs, flask,
  mobile,mysql, langchain, tensorflow, pandas,
  backend,
  creator,
  web,
  typescript,
  tailwind,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  calendar,
  jobagent,
  jobhunter,
  graduation,
  rag, graphagent
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Processing & Engineering",
    icon: web,
  },
  {
    title: "AI Model Training & Optimization",
    icon: mobile,
  },
  {
    title: "AI Deployment & Monitoring",
    icon: backend,
  },
  {
    title: "AI Agents & Application Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "HuggingFace",
    icon: huggingface,
  },

  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Langchain",
    icon: langchain,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "NLP & Graph R&D Intern",
    company_name: "EFREI",
    icon: shopify,
    iconBg: "#ffffff",
    date: "March 2025 - Aug 2025",
    points: [
      "Mined and cleaned multi-platform social media data on electric vehicles, reconstructing user–post interaction graphs.",
      "Fine-tuned BERT models for EV relevance and sentiment polarity classification.",
      "Applied topic modeling and mapped sentiment trends across themes.",
        "Ran graph analytics (centrality, communities, motifs) and fused semantic labels with structural metrics for deeper insights.",
    ],
  },
  {
    title: "AI Developer Intern",
    company_name: "E-Direct Tunisie",
    icon: starbucks,
    iconBg: "#ffffff",
    date: "Jul 2024 - Aug 2024",
    points: [
      "Built an AI-driven recruitment platform where candidates apply and get auto-matched to job offers.",
      "Used YOLOv8 + Tesseract OCR to detect CV sections and extract text, then applied NER to pull names, contacts, and key info.",
      "Scored candidate–job fit by sending extracted skills to a Gemini LLM for coherence and relevance matching in seconds.",
      "Developed the platform end-to-end with Flask, Angular, NestJS, MySQL, JWT auth, NLTK, and PyTorch.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "la poste tunisienne",
    icon: tesla,
    iconBg: "#ffffff",
    date: "Jul 2023 - Aug 2023",
    points: [
      "Developed a stock management platform for Tunisian post offices, replacing hours of paperwork with a few seconds of workflow.",
      "Linked offices to their corresponding magazines for real-time inventory tracking and updates.",
      "Built features for stock edits, request forms, and follow-up dashboards to monitor fulfillment progress.",
      "Implemented Angular + NestJS with MySQL and JWT-based authentication for a secure, full-stack solution.",
    ],
  },
  {
    title: "Embedded Systems Developer Intern",
    company_name: "Ouerkema innovation",
    icon: meta,
    iconBg: "#ffffff",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Built an automated IoT system on Raspberry Pi using Python for actuator control and sensor-based automation.",
      "Developed a Tkinter desktop app for users to manage devices and trigger actions remotely.",
      "Deployed a Flask server on the Pi to handle requests and coordinate real-time operations.",
      "Integrated Cayenne MyDevices for cloud management and added email notifications for key events.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Calendar AI Agent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Langchain",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Gemini API",
        color: "pink-text-gradient",
      },
      {
        name: "Calendar API",
        color: "pink-text-gradient",
      },
    ],
    image: calendar,
    source_code_link: "https://github.com/FedyBd/AI-Agent",
  },
  {
    name: "Job Search AI Agent",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Langchain",
        color: "blue-text-gradient",
      },
      {
        name: "Gmail API",
        color: "green-text-gradient",
      },
      {
        name: "Gemini API",
        color: "pink-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Plotly",
        color: "blue-text-gradient",
      },
    ],
    image: jobagent,
    source_code_link: "https://github.com/FedyBd/Job-search-agent",
  },
  {
    name: "Graduation Project",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "NetworkX",
        color: "blue-text-gradient",
      },
      {
        name: "HugginFace Transformers",
        color: "green-text-gradient",
      },
      {
        name: "PyTorch",
        color: "pink-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
    ],
    image: graduation,
    source_code_link: "https://github.com/",
  },
  {
    name: "JobHunter Internship",
    description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "NestJS",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "Gemini API",
        color: "green-text-gradient",
      },
      {
        name: "YOLOv8 & OCR",
        color: "blue-text-gradient",
      },
    ],
    image: jobhunter,
    source_code_link: "https://github.com/FedyBd/cvParser",
  },
  {
    name: "RAG Project",
    description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Langchain",
        color: "blue-text-gradient",
      },
      {
        name: "Ollama",
        color: "green-text-gradient",
      },
      {
        name: "Llama3.1",
        color: "pink-text-gradient",
      },
      {
        name: "Chromadb",
        color: "green-text-gradient",
      },
      {
        name: "Embeddings",
        color: "blue-text-gradient",
      },
    ],
    image: rag,
    source_code_link: "https://github.com/FedyBd/PDF_RAG",
  },
  {
    name: "Graph query chatbot",
    description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Langchain",
        color: "blue-text-gradient",
      },
      {
        name: "Neo4j",
        color: "green-text-gradient",
      },
      {
        name: "Gemini API",
        color: "pink-text-gradient",
      },
    ],
    image: graphagent,
    source_code_link: "https://github.com/FedyBd/GraphQuery-chatbot",
  },
];

export { services, technologies, experiences, testimonials, projects };
