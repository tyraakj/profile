export const meta = {
  name: "Tyra Javed",
  title: "Full Stack Engineer",
  subtitle: "AI · Web3",
  location: "Mumbai, India",
  coords: "19.0760° N / 72.8777° E",
  email: "tyra191712@gmail.com",
  github: "https://github.com/tyraakj",
  linkedin: "https://linkedin.com/in/tyraakj",
  portfolio: "https://tyrakj.vercel.app",
  available: true,
};

export const about = {
  headline: ["Full Stack", "Engineer."],
  accent: "Engineer.",
  body: [
    "I build distributed systems, AI-integrated platforms, and Web3 infrastructure — backend-first, product-minded.",
    "My stack spans Spring Boot microservices with Kafka and Redis, LangChain/LangGraph multi-agent systems, Solidity smart contracts on Base, and React frontends. I care about correctness, security, and shipping things that actually work.",
    "Near-term: backend or full-stack internships. Long-term: AI engineering and data infrastructure. Working remotely from Mumbai.",
  ],
};

export const projects = [
  {
    index: "01",
    title: "Vaulted",
    tag: "Gasless Freelance Escrow · Base Sepolia",
    desc: "Decentralised escrow where payment locks on-chain at job creation and releases only on client approval. UGF 4-step gasless flow, 7-day auto-release anti-hostage, on-chain caller identity enforcement, dispute state machine.",
    tags: ["Solidity", "OpenZeppelin", "ethers.js", "React", "TypeScript", "Base Sepolia"],
    link: "https://vaulted-three.vercel.app/",
  },
  {
    index: "02",
    title: "Agentic Commerce Gateway",
    tag: "LLM-Routed Transaction Pipeline",
    desc: "Co-developed an AI-powered shopping assistant enabling end-to-end commerce flows with zero app downloads. Engineered agentic workflows using LangChain and Sarvam LLMs to process natural language and handwritten lists across 11 Indian languages. Delivered a complete merchant ecosystem by integrating Twilio for messaging, Paytm for seamless checkout, and a real-time React dashboard for automated inventory management via barcode scanning.",
    tags: ["FastAPI", "React", "TypeScript", "LangChain", "PostgreSQL", "Twilio", "Sarvam AI", "Paytm API"],
    link: "https://paytm-ai-hackathon.onrender.com/dashboard/inventory/add",
  },
  {
    index: "03",
    title: "CodeSheriff",
    tag: "AI-Powered Code Security Platform",
    desc: "4-layer security pipeline: prompt injection detection (20+ patterns), credential leak scanning (13 secret types), AI hallucination validation via AST diff, immutable audit trail. IBM watsonx.ai for method-level Java analysis.",
    tags: ["Spring Boot", "React", "IBM watsonx.ai", "JavaParser", "JWT", "Bucket4j"],
    link: null,
  },
  {
    index: "04",
    title: "API Guardian",
    tag: "Production-Hardened API Gateway",
    desc: "Non-blocking reverse proxy on Spring WebClient with Kafka event streaming, Redis token-bucket rate limiting (Bucket4j), Resilience4j circuit breakers, full JWT auth with Redis blacklist, and a real-time React SSE dashboard.",
    tags: ["Spring Boot", "Kafka", "Redis", "React", "Resilience4j", "Bucket4j", "AWS S3"],
    link: null,
  },
];

export const skills = [
  {
    label: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "Solidity"],
  },
  {
    label: "Frameworks",
    items: ["Spring Boot", "Spring Security", "FastAPI", "React", "Next.js", "React Native"],
  },
  {
    label: "AI & Data",
    items: ["LangChain", "LangGraph", "FAISS", "IBM watsonx.ai", "Supabase", "NeonDB"],
  },
  {
    label: "Infrastructure",
    items: ["Kafka", "Redis", "Docker", "AWS S3", "Vercel", "Railway"],
  },
  {
    label: "Blockchain",
    items: ["Solidity", "OpenZeppelin", "ethers.js", "Base", "ERC-3009"],
  },
];

export const certifications = [
  { name: "Oracle Java Foundations", issuer: "Oracle", date: "Nov 2025" },
  { name: "Introduction to Software Engineering", issuer: "IBM", date: "Nov 2025" },
  { name: "Machine Learning with Python", issuer: "IBM Skills Network", date: "Oct 2025" },
];
