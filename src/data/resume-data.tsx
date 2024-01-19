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
    "Python",
    "Latex",
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
    "Django",
    "Large Language Models",
    "Docker",
  ],
  projects: [
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
        label: "Grovers Algorithm",
        href: "https://ieeexplore.ieee.org/abstract/document/9798970",
      },
      },
      {
        title: "Supercomputing levaraging Quantum machine learning",
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
          label: "SuperComputring",
          href: "https://link.springer.com/article/10.1007/s11227-022-04923-4",
        },
        },
      

    {
      title: "Kernels and Quantum Machine Learning",
      techStack: [
        "Quantum Machine Learning",
        "Clasical and Quantum Kernels",
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
          title: "Adverserial example generation using white-box attach on text embedding",
          techStack: [
            "Large Language Models",
            "Natural Language Processing",
            "Word Embeddings",
            "Adverserial Training",
            "Latent Representation Perturbation",
          ],
          description: "A white-box adversarial attack on text embedding vectors through encoder-decoder model to generate adversarial examples.",
          logo: ConsultlyLogo,
          link:{
            label: "SAdverserial example",
            href: "https://www.rivas.ai/pdfs/sooksatra2022adversarial.pdf",
          },
          },


  
  ],
} as const;
