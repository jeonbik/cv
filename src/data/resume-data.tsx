import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { GoogleScholarIcon } from "@/components/icons/GoogleScholarIcon";
// Remove the import for PublicationIcon as it's not defined yet

import publicationsData from './publications.json';

export const RESUME_DATA = {
  name: "Bikram Khanal",
  initials: "BK",
  location: "Waco, TX, USA",
  locationLink: "https://www.google.com/maps/place/wACO",
  about:
    "PhD student in Quantum Machine Learning and Quantum Computing.",
  summary:
    "I am a Quantum Computing and Quantum Machine Learning PhD candidate with an analytical mind and the ability to break down and solve complex problems. \
    I have sound foundational knowledge in Quantum Computing, Machine Learning, Deep Learning, and Quantum Machine Learning algorithms.\
    I have worked on various projects in the field of Adverserial Machine Learning, Program Synthesis, Fairness and Robustness, and Natural Language Processing.  \
    I have strong communication skills with a strong mathematical foundation on learning from data. \
    I have an ability to learn new concepts and technologies quickly with a consistent record of meeting project deadlines. \
     ",
  avatarUrl:"https://avatars.githubusercontent.com/u/36014522?v=4",
  personalWebsiteUrl: "https://cv-psi-two.vercel.app/",
  contact: {
    email: "om.jeon1@gmail.com",
    tel: "+16154148571",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jeonbik",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jeonbik/",
        icon: LinkedInIcon,
      },
      {
        name: "Scholar",
        url: "https://scholar.google.com/citations?user=C4B0q1IAAAAJ&hl=en&oi=ao",
        icon: GoogleScholarIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/BikramKhanal6",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Baylor University",
      degree: "PhD in Computer Science",
      start: "2020",
      end: "Present",
    },
    {
      school: "Baylor University",
      degree: "Master's Degree in Computer Science",
      start: "2020",
      end: "2023",
    },
    {
      school:"Troy University",
      degree:"Bachelor's Degree in Computer Science",
      start:"2016",
      end:"2020",
    },
  ],
  work: [
    {
      company: "Amazon.com Inc",
      link: "https://www.amazon.com",
      badges: ["Applied Scientist Intern"],
      title: "Applied Scientist Intern",
      logo: ParabolLogo,
      start: "2024/05",
      end: "2024/08",
      description:
        "Conducted in-depth analysis on Cultural Awareness and Verbosity Bias within Large Language Models (LLMs), assessing their impacts on model performance. Implemented various prompt engineering strategies to enhance the cultural sensitivity and localization of LLM responses. Led initiatives in prompt optimization to effectively reduce verbosity bias. Utilized a robust tech stack including Python, PyTorch, Transformers, and TensorFlow.",
    },
    {
      company: "Baylor University",
      link: "https://www.ecs.baylor.edu/research-departments/computer-science",
      badges: ["Graduate Assistant"],
      title: "Research Assistant",
      logo: ParabolLogo,
      start: "2021",
      end: "Present",
      description:
        "Assisted in the development and management of a tissue bank for\
        alcohol research, specializing in bioinformatics, tissue tracking, and data integration across species and experimental\
        protocols. Technologies: Django, Python, Docker, PostgresSQL",
    },
    { 
      company: "",
      link: "",
      badges: [],
      title: "Teaching Assistant",
      logo: ParabolLogo,
      start: "2020",
      end: "Present",
      description: "Assisted courses in C++ and Python Programming, Computer Architecture, Computing and Computer Fundaments, and Algorithms,\
       to enhance student comprehension through lab tutorials and assessment development.\
       My role involved close collaboration with professors in assignments and exam design, and direct support to students,\
      contributing to improved academic outcomes in Computer Science and Data Science courses. Technologies: C++, Python, Latex, Jupyter Notebook, Canvas",
    },
  ],
  skills: [
    "Large Language Models",
    "Prompt Engineering",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "PyTorch",
    "Transformers",
    "Tensorflow",
    "Quantum Computing",
    "Quantum Machine Learning",
    "Qiskit",
    "Pennylane",
    "Quantum Algorithms",
    "Python",
    "Latex",
    "Django",
    "AWS",
    "git",
    "Docker",
  ],
  projects: [
    {
      title: "Learning Robust Observable to Address Noise in Quantum Machine Learning",
      techStack: [
        "Quantum Computing",
        "Quantum Machine Learning",
        "Robust Observable",
      ],
      description: "A framework for learning observables that are robust against noisy channels in quantum systems",
      logo: ConsultlyLogo,
      link: {
        label: "Robust Observable for QML",
        href: "https://arxiv.org/pdf/2409.07632",
    }
  },
    {
      title: "Generalization Error Bound for Quantum Machine Learning in NISQ Era--A Survey",
      techStack: [
        "Quantum Computing",
        "Quantum Machine Learning",
        "Generalization Bound",
      ],
      description: "A Systematic Mapping Study (SMS) to explore the state-of-the-art generalization bound for supervised QML in NISQ-era and analyze the latest practices in the field",
      logo: ConsultlyLogo,
      link: {
        label: "Generalization Error Bound for QML",
        href: "https://arxiv.org/pdf/2409.07626",
    }
  },
    {
      title: "A Modified Depolarization Approach for Efficient Quantum Machine Learning",
      techStack: [
        "Quantum Computing",
        "Noisy Channels",
        "Quantum Machine Learning",
        " Quantum-Classical optimization",
      ],
      description: "A modified representation for a single-qubit depolarization channel using two Kraus operators based only on X and Z Pauli matrices.",
      logo: ConsultlyLogo,
      link: {
        label: "Modified Depolarization Channel",
        href: "https://www.mdpi.com/2227-7390/12/9/1385",
      },
    },
    {
      title: "Quantum-Enhanced Representation Learning: A Quanvolutional Autoencoder Approach against DDoS Threats",
      techStack: [
        "Quantum Computing",
        "Qiskit",
        "Quantum Machine Learning",
        " Quantum-Classical optimization",
      ],
      description: "A quantum-circuit based DDoS attacks analysis on time-series data.",
      logo: ConsultlyLogo,
      link: {
        label: "DDoS attacks analysis on time-series data",
        href: "https://www.mdpi.com/2504-4990/6/2/44",
      },
    },
  
    {
      title: "Noise Evaluation on Variational Circuits",
      techStack: [
        "Quantum Computing",
        "Qiskit",
        "Machine Learning",
        " Quantum-Classical optimization",
      ],
      description: "A thorough investigation of noise impact on quantum variational classification in\
      the NISQ context over diverse dataset.",
      logo: ConsultlyLogo,
      link: {
        label: "Noise Evaluation on Variational Circuits",
        href: "https://www.rivas.ai/pdfs/khanal2023evaluating.pdf",
      },
    },

    {
      title: "Quantum Machine Learning with Grover's Search",
      techStack: [
        "Quantum Machine Learning",
        "Grover's Algorithm",
        "Quantum Computing",
        "Oracle Design",
      ],
      description: "An Approach to reformulate the classification problem as a searching\
      problem via Amplitude amplification technique using universal gates.",
      logo: ConsultlyLogo,
      link:{
        label: "Grover's Algorithm",
        href: "https://ieeexplore.ieee.org/abstract/document/9798970",
      },
      },
      {
        title: "Supercomputing leveraging Quantum machine learning",
        techStack: [
          "Grover's Algorithm",
          "Oracle Design",
          "Variational Quantum Classifier",
          "NISQ Devices",
        ],
        description: "A simulation of rudimentary classical logical gates into quantum circuits considering\
        AND, XOR, and OR gates.",
        logo: ConsultlyLogo,
        link:{
          label: "SuperComputing",
          href: "https://link.springer.com/article/10.1007/s11227-022-04923-4",
        },
        },
      

    {
      title: "Kernels and Quantum Machine Learning",
      techStack: [
        "Quantum Machine Learning",
        "Classical and Quantum Kernels",
        "Kernel Methods",
        "Reproducing Kernel Hilbert Space",
        "Quantum Computing",
      ],
      description: "A review on parameterized quantum\
      circuit and kernel-based training of QML model.",
      logo: ConsultlyLogo,
      link:{
        label: "Quantum Kernels",
        href: "https://www.rivas.ai/pdfs/khanal2022kernels.pdf",
      },
      },

      {
        title: "Human Activities Classification",
        techStack: [
          "Machine Learning",
          "Human Activity Recognition",
          "Machine Learning Algorithms",
        ],
        description: "A evaluation on the performance of\
        various machine learning algorithms in predicting human\
        behavior.",
        logo: ConsultlyLogo,
        link:{
          label: "Human Activity Classification",
          href: "https://ieeexplore.ieee.org/abstract/document/9799144",
        },
        },
    {
      title: "Muzzle Matching for Cattle Identification",
      techStack: [
        "Computer Vision",
        "Image Processing",
        "Convolutional Neural Networks",
        "Fraud Detection",
      ],
      description: "A non-invasive muzzle matching to address the challenges in\
      insurance fraud and animal trading markets.",
      logo: ConsultlyLogo,
      link:{
        label: "Muzzle Matching for Cattle Identification",
        href: "https://www.rivas.ai/pdfs/sanjel2023non.pdf",
      },
      },
      {
        title: "Automatic Grading of SQL Queries",
        techStack: [
          "Large Language Models",
          "Natural Language Processing",
          "Word Embeddings",
          "Deep Learning",
        ],
        description: "A behavioral analysis of the machine\
        learning model, particularly in terms of how it assigns grades\
        to SQL queries.",
        logo: ConsultlyLogo,
        link:{
          label: "SQL Grading",
          href: "https://www.rivas.ai/pdfs/sooksatra2023attribution.pdf",
        },
        },
        {
          title: "Adversarial example generation using white-box attach on text embedding",
          techStack: [
            "Large Language Models",
            "Natural Language Processing",
            "Word Embeddings",
            "Adversarial Training",
            "Latent Representation Perturbation",
          ],
          description: "A white-box adversarial attack on text embedding vectors through encoder-decoder model to generate adversarial examples.",
          logo: ConsultlyLogo,
          link:{
            label: "Adversarial example",
            href: "https://www.rivas.ai/pdfs/sooksatra2022adversarial.pdf",
          },
          },


  
  ],
  publications: publicationsData,
} as const;
