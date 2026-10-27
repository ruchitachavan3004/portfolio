/**
 * Every word on the site lives here, so the components stay about layout.
 * Taken from Ruchita's resume; the Mindstix work is described at a high level
 * on purpose, without internal data, screens or code.
 */

export const person = {
  name: 'Ruchita Chavan',
  fullName: 'Ruchita Arun Chavan',
  role: 'Software Development Engineer 2',
  location: 'Pune, Maharashtra, India',
  email: 'ruchitachavan3004@gmail.com',
  github: 'https://github.com/ruchitachavan3004',
  linkedin: 'https://linkedin.com/in/ruchita-chavan-3004',
}

/**
 * The clip behind the hero. Swap `src` for your own once you have it:
 * drop the file in `public/` and point this at `/your-file.mp4`.
 *
 * `focus` is the part of the frame to keep in view when it is cropped to the
 * screen — nudge the first number left if the figure sits too far right.
 *
 * For a still image instead of a clip, set `kind: 'image'`.
 */
export const heroMedia = {
  kind: 'video' as 'video' | 'image',
  src: '/hero.mp4',
  focus: 'center center',
}

/**
 * The CV download.
 *
 * Put the PDF at `public/resume.pdf`, then set `available` to true. It is served
 * from your own domain at /resume.pdf and ships with the build, so there is
 * nothing to share, no permissions to keep right and no link that can expire.
 *
 * While `available` is false the button is not rendered at all, so the page
 * never offers a download that 404s.
 */
export const resume = {
  available: true,
  href: '/resume.pdf',
  filename: 'Ruchita-Chavan-CV.pdf',
}

export const hero = {
  greeting: 'Hello, I’m Ruchita Chavan.',
  // Cycled one at a time under the greeting. Each carries its own article.
  roles: [
    'a Software Development Engineer 2.',
    'a frontend developer.',
    'an agentic AI developer.',
    'usually three cups of coffee in.',
  ],
  summary:
    'Software engineer building production AI agents and the B2B e-commerce interfaces around them. I build agents on Amazon Bedrock with Strands, LangChain and LangGraph, and work in React, Redux and Redux Toolkit.',
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  lead: 'Java, then React, now agents.',
  paragraphs: [
    'I started in enterprise Java, on ERP backends where SQL constraints and validation kept business data honest.',
    'At Mindstix that widened into React — B2B commerce and order-tracking interfaces — and then into the agents behind them.',
    'Now most of my work is agentic: LangGraph and LangChain on AWS Bedrock AgentCore, with Strands orchestrating the model calls. Multi-agent systems, retrieval pipelines and prompt engineering.',
    'The backend years shaped how I build them. Validation gates, deterministic processing wherever determinism is safer, audit events throughout. An agent is only worth having if you can check what it did.',
  ],
}

/**
 * The two employers. Each opens its own panel in the Work section, so the card stays
 * short and the detail lives behind a click.
 */
export const companies = [
  {
    slug: 'mindstix',
    org: 'Mindstix Software Labs',
    role: 'Software Development Engineer 2',
    when: 'Aug 2024 — Present',
    where: 'Pune, India',
    blurb:
      'Agentic AI on AWS Bedrock, and the React interfaces that put it in front of people.',
    intro:
      'Two strands of work: building production AI agents on AWS Bedrock, and building the frontends that people actually use to reach them.',
    streams: [
      {
        title: 'Agentic AI',
        stack:
          'AWS Bedrock AgentCore, Strands, LangGraph, Python, CloudWatch, OpenTelemetry, Grafana',
        points: [
          'Developed LangGraph-based AgentCore workflows for InDesign deck generation from Salesforce and e-commerce data, combining deterministic processing with targeted LLM calls through Strands and Claude on Bedrock.',
          'Built validation gates, resilient data integrations with OAuth refresh, retries and image fallbacks, and runtime configuration bundles that allow configuration changes without redeployment.',
          'Enhanced an order-notes summarization agent with Bedrock Prompt Management, caching and fallback prompts, session reuse, multilingual support, and PII anonymization with audit events and CloudWatch monitoring.',
          'Built a Spring Boot SSE endpoint to stream AgentCore output, and fixed HTTP/2 stream truncation by disabling proxy buffering.',
        ],
      },
      {
        title: 'Frontend',
        stack: 'React, MUI, JavaScript, Jest, React Testing Library',
        points: [
          'Built client-specific management features and workflows for an e-commerce platform in React.',
          'Built UI features for a B2B order-tracking application covering order details, inventory, notes and banking information, across North America and global deployments.',
          'Built the agent invocation interface for an AI summarization system: multi-category selection, streaming responses and multilingual support.',
        ],
      },
    ],
  },
  {
    slug: 'techenece',
    org: 'Techenece',
    role: 'Java Developer',
    when: 'Aug 2023 — Jul 2024',
    where: '',
    blurb: 'Backend work on an enterprise ERP system, in Java and SQL.',
    intro:
      'Where I learned that operational data is only as good as the constraints keeping it honest.',
    streams: [
      {
        title: 'ERP platform',
        stack: 'Java, SQL',
        points: [
          'Developed a web-based ERP system to centralize business operations.',
          'Implemented backend business logic in Java and integrated SQL database operations for efficient data storage, retrieval and management.',
          'Implemented CRUD operations, input validation and database constraints to maintain data accuracy and consistency.',
        ],
      },
    ],
  },
]

export const projects = [
  {
    index: 'I',
    title: 'Notes Summarization Agent',
    context: 'Mindstix Software Labs',
    summary:
      'A Strands agent on AgentCore Runtime that turns a natural-language request into three to five factual bullets, drawn from notes it ranks first.',
    stack: ['Amazon Bedrock', 'AgentCore Runtime', 'Strands', 'Python'],
    points: [
      'Answers in three to five bullets, 240 characters at most, from ranked notes rather than from memory.',
      'A notes-hash cache validates responses, and per-session TTL eviction isolates personal data.',
      'Bedrock Guardrails keep the outputs auditable.',
      'Prompts are localized for English, French and Italian, with EU routing.',
    ],
  },
  {
    index: 'II',
    title: 'PPT Design Assistant',
    context: 'Mindstix Software Labs',
    summary:
      'An AgentCore agent that converts a Salesforce project ID into a room-by-room InDesign (IDML) deck.',
    stack: ['Amazon Bedrock', 'AgentCore', 'LangGraph', 'Salesforce'],
    points: [
      'A 16-node LangGraph pipeline drives the conversion end to end.',
      'Salesforce, catalog and Scene7 clients supply the project data and imagery.',
      'Vision classification and a deterministic validation engine check the result before it ships.',
      'Thirty pytest modules, under strict mypy.',
    ],
  },
  {
    index: 'III',
    title: 'RCA Agent for SRE Workflows',
    context: 'Personal project, 2026',
    summary:
      'A LangGraph multi-agent system on Amazon Bedrock that turns a natural-language incident query into root-cause hypotheses backed by evidence.',
    stack: ['Python', 'LangChain', 'LangGraph', 'Amazon Bedrock', 'MCP Gateway'],
    points: [
      'Correlates deployments, CI/CD runs, CloudWatch logs and infrastructure telemetry.',
      'GitHub, CI/CD pipelines, logs and telemetry federate behind a single MCP Gateway, giving every agent one interface for end-to-end deployment visibility.',
      'Validation layers tie conclusions to retrieved evidence and block remediation the evidence does not support.',
      'Auditable reasoning chains replace manual log triage, reducing MTTR.',
    ],
  },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'Python', 'Java', 'SQL', 'C++'] },
  {
    group: 'Frontend and backend',
    items: [
      'React.js',
      'Redux Toolkit (RTK)',
      'HTML5',
      'CSS3',
      'Node.js',
      'Express.js',
      'Java',
      'REST APIs',
    ],
  },
  {
    group: 'AI and LLM',
    items: [
      'Amazon Bedrock',
      'LangChain',
      'LangGraph',
      'AgentCore',
      'Strands',
      'Prompt engineering',
      'Multi-agent orchestration',
      'Guardrails',
    ],
  },
  {
    group: 'DevOps and cloud',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'Amazon CloudWatch', 'CI/CD pipelines'],
  },
  { group: 'Databases and tools', items: ['MySQL', 'Git', 'GitHub', 'VS Code'] },
]

export const education = [
  {
    school: 'Smt. Kashibai Navale College of Engineering',
    detail: 'B.E. in Computer Engineering — CGPA 9.56 / 10',
    where: 'Pune, India',
    years: '2019 — 2023',
  },
  {
    school: 'Mahatma Gandhi Vidyalaya and Jr. College',
    detail: 'HSC (Class XII) — 77.85%',
    where: 'Pune, India',
    years: '2019',
  },
  {
    school: 'Mahatma Gandhi Vidyalaya',
    detail: 'SSC (Class X) — 92.60%',
    where: 'Pune, India',
    years: '2017',
  },
]

export const achievements = [
  'Participated in the AI for Bharat Hackathon, powered by Amazon Web Services.',
  'University topper in Computer Engineering, CGPA 9.56 / 10, at Smt. Kashibai Navale College of Engineering.',
]
