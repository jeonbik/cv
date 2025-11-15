
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
import type { ComponentType, ReactNode } from "react";

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { GoogleScholarIcon } from "@/components/icons/GoogleScholarIcon";

import publicationsData from "./publications.json";

type WorkEntry = {
  company: string;
  link?: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  description: ReactNode;
};

type EducationEntry = {
  school: string;
  degree: ReactNode;
  start: string;
  end: string;
};

type ProjectEntry = {
  title: string;
  techStack: readonly string[];
  description: string;
  link?: {
    label: string;
    href: string;
  };
};

export const RESUME_DATA: {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: { name: string; url: string; icon: ComponentType<{ className?: string }> }[];
  };
  education: EducationEntry[];
  work: WorkEntry[];
  skills: readonly string[];
  projects: ProjectEntry[];
  publications: typeof publicationsData;
} = {
  name: "Bikram Khanal",
  initials: "BK",
  location: "Bellevue, WA, USA",
  locationLink: "https://maps.google.com/?q=Bellevue,+WA",
  about: "Applied Scientist advancing quantum machine learning and culturally aware language models.",
  summary:
    "I am an Applied Scientist at Amazon with a Ph.D. in Computer Science, specializing in quantum machine learning and large‑language models. I develop noise‑aware generalization theory and efficient optimization techniques for quantum machine learning on near‑term quantum hardware. I also design transparent and resource-efficient methods for evaluating language models, with a focus on mitigating locale biases in multilingual and culturally aware language models, particularly in conversational systems. I enjoy tackling complex problems and working across diverse machine‑learning domains.",
  avatarUrl: "https://avatars.githubusercontent.com/u/36014522?v=4",
  personalWebsiteUrl: "https://khanal.vercel.app/",
  contact: {
    email: "general@jeonbik.com",
    tel: "",
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
      degree: (
        <div className="space-y-1">
          <div>Doctor of Philosophy (Ph.D.) in Computer Science</div>
          <div className="text-xs text-muted-foreground">
            Dissertation: Noise-aware Generalization Bound for Quantum Variational Circuits
          </div>
        </div>
      ),
      start: "2020",
      end: "2025",
    },
    {
      school: "Baylor University",
      degree: (
        <div className="space-y-1">
          <div>Master of Science in Computer Science</div>
          <div className="text-xs text-muted-foreground">Focus: Machine Learning, Quantum Machine Learning, NLP</div>
        </div>
      ),
      start: "2020",
      end: "2023",
    },
    {
      school: "Troy University",
      degree: (
        <div className="space-y-1">
          <div>Bachelor of Science in Computer Science</div>
          <div className="text-xs text-muted-foreground">
            Coursework: Machine Learning, Databases, Algorithms, Networking, Cryptography, Advanced Calculus & Statistics
          </div>
        </div>
      ),
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Amazon.com Inc.",
      link: "https://www.amazon.com",
      badges: [],
      title: "Applied Scientist II",
      start: "2025/06",
      end: "Present",
      description: (
        <div className="space-y-2">
          <p>Automated LLM-as-a-Judge system for assessing conversational quality of AI responses.</p>
          <ul className="list-disc space-y-1 pl-4">
            <li>
              Developed a scalable prompt-engineering and scoring framework that reduces manual review time for multilingual
              conversations.
            </li>
            <li>Designed quality assessment criteria covering multiple conversational dimensions to track model performance.</li>
            <li>
              Built an end-to-end evaluation pipeline leveraging LLMs as automated judges to inform iterative model improvements.
            </li>
          </ul>
          <p>
            <strong>Skills:</strong> Prompt Engineering, Model Evaluation & Benchmarking, LLMs, Quality Metrics Design, Cross-cultural
            Localization
          </p>
        </div>
      ),
    },
    {
      company: "Amazon.com Inc.",
      link: "https://www.amazon.com",
      badges: [],
      title: "Applied Scientist Intern",
      start: "2024/05",
      end: "2024/08",
      description: (
        <div className="space-y-2">
          <p>Advanced cultural awareness analysis for large language models.</p>
          <ul className="list-disc space-y-1 pl-4">
            <li>Evaluated prompt-engineering techniques that improve culturally localized responses.</li>
            <li>Researched verbosity bias in LLMs and quantified its impact on conversational performance.</li>
            <li>Optimized prompts to mitigate verbosity bias while preserving response quality.</li>
          </ul>
          <p>
            <strong>Skills:</strong> Prompt Engineering, LLMs, NLP
          </p>
        </div>
      ),
    },
    {
      company: "Baylor University",
      link: "https://www.ecs.baylor.edu/research-departments/computer-science",
      badges: [],
      title: "Research Assistant",
      start: "2021/06",
      end: "2025/05",
      description: (
        <div className="space-y-3">
          <div>
            <p className="font-semibold">Established Tissue Bank for Alcohol Research</p>
            <ul className="list-disc space-y-1 pl-4">
              <li>
                Built and maintained a Django-based tissue bank application that streamlined bioinformatics data management and
                integration.
              </li>
              <li>Structured raw sample data into PostgreSQL to ensure integrity and improve researcher access.</li>
              <li>Created custom analytical functions enabling nuanced, time-sensitive investigations.</li>
            </ul>
            <p>
              <strong>Skills:</strong> Python, PostgreSQL, Django
            </p>
          </div>
          <div>
            <p className="font-semibold">Improved Liver Disease Diagnosis</p>
            <ul className="list-disc space-y-1 pl-4">
              <li>Engineered a resource-efficient pipeline for 50–80 GB DZI image analysis to scale diagnostics.</li>
              <li>
                Visualized drinking patterns via Sankey diagrams, connecting gender, categories, and hourly ethanol consumption.
              </li>
              <li>Developed a sequential CNN in Keras achieving 98% accuracy for liver disease classification.</li>
            </ul>
            <p>
              <strong>Skills:</strong> Image Processing, Sankey Diagrams, CNN, Optimization
            </p>
          </div>
          <div>
            <p className="font-semibold">Web Development</p>
            <ul className="list-disc space-y-1 pl-4">
              <li>Led Django platform enhancements that expanded functionality and user experience.</li>
              <li>Implemented security checks that hardened the platform against vulnerabilities.</li>
              <li>Containerized operations with Docker for reliable deployment and scalability.</li>
            </ul>
            <p>
              <strong>Skills:</strong> Docker, Django, Python, Git, Remote Server Management
            </p>
          </div>
        </div>
      ),
    },
    {
      company: "Baylor University",
      badges: [],
      title: "Teaching Assistant",
      start: "2020/08",
      end: "Present",
      description: (
        <div className="space-y-2">
          <p>Supported instruction across Computer Science curriculum.</p>
          <ul className="list-disc space-y-1 pl-4">
            <li>
              Led lab tutorials and assessments for C++, Python, Computer Architecture, Computing Fundamentals, and Algorithms.
            </li>
            <li>Partnered with faculty to design assignments and exams aligned with course outcomes.</li>
            <li>Mentored 150+ students through individual and group sessions to address learning challenges.</li>
          </ul>
          <p>
            <strong>Skills:</strong> Interactive Learning, C++, Python, Curriculum Design, Teaching
          </p>
        </div>
      ),
    },
  ],
  skills: [
    "Languages: Python, C++, Java, LaTeX",
    "Frameworks: TensorFlow, PyTorch, Transformers, Scikit-learn, Pandas, NumPy, Django, Qiskit, PennyLane, Docker",
    "Tools: VS Code, Jupyter, UNIX, PyCharm, Git, Ollama, Hugging Face",
    "Expertise: Optimization, Image Processing, Quantum Machine Learning, LLM Evaluation",
  ],
  publications: publicationsData,
  projects: [
    {
      title: "Locale- and Culturally-aware Response Generation in LLMs",
      techStack: ["NLP", "LLM Evaluation", "Prompt Engineering", "Amazon Bedrock"],
      description:
        "Designed an LLM-as-a-Judge framework with context engineering and conversational metrics to evaluate and improve localized responses across cultures.",
      link: {
        label: "Locale-aware LLM Evaluation",
        href: "https://khanal.vercel.app/",
      },
    },
    {
      title: "Generalization Error Bound for Quantum Machine Learning in NISQ Era--A Survey",
      techStack: [
        "Quantum Computing",
        "Quantum Machine Learning",
        "Generalization Bound",
      ],
      description: "A Systematic Mapping Study (SMS) to explore the state-of-the-art generalization bound for supervised QML in NISQ-era and analyze the latest practices in the field",
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
      link: {
        label: "Modified Depolarization Channel",
        href: "https://www.mdpi.com/2227-7390/12/9/1385",
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
      link: {
        label: "Noise Evaluation on Variational Circuits",
        href: "https://www.rivas.ai/pdfs/khanal2023evaluating.pdf",
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
      link:{
        label: "Muzzle Matching for Cattle Identification",
        href: "https://www.rivas.ai/pdfs/sanjel2023non.pdf",
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
          link:{
            label: "Adversarial example",
            href: "https://www.rivas.ai/pdfs/sooksatra2022adversarial.pdf",
          },
          },
  ],
};
