export interface Screenshot {
  url: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  architecture?: string[];
  screenshots: Screenshot[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Completed' | 'In Progress';
}

export const projects: Project[] = [
  {
    id: 'compfy',
    title: 'Compfy - PC Builder',
    tagline: 'Smart PC Building Engine and Marketplace',
    description:
      'A full-stack PC builder generating optimized system configurations tailored for Office, AI/Editing, and Gaming workloads with budget optimization and localized electricity cost estimation.',
    problem:
      'Building a PC requires complex decisions balancing performance, compatibility, budget, and long-term electricity costs across different use cases.',
    solution:
      'Compfy provides an intelligent optimization engine that generates tailored PC configurations based on workload requirements, budget constraints, and real-time pricing data.',
    techStack: [
      'Django',
      'Django REST Framework',
      'React (Vite)',
      'MySQL',
      'JWT',
      'Vercel',
      'PythonAnywhere',
    ],
    features: [
      'Budget optimization algorithms for Office, AI/Editing, and Gaming workloads',
      'Hardware performance evaluation and scoring system',
      'Localized electricity cost estimation based on usage patterns',
      'Secure JWT authentication and user profile management',
      'Vendor management modules for component sourcing',
      'Dynamic real-time pricing system with price tracking',
    ],
    architecture: [
      'RESTful API architecture with Django REST Framework',
      'Secure JWT-based authentication flow',
      'MySQL relational database for component and pricing data',
      'Deployed on Vercel (frontend) and PythonAnywhere (backend)',
    ],
    screenshots: [
      {
        url: '/Public/compfy/1.jpg',
        title: 'Role Selection Screen',
        description:
          'Provides access to Compfy’s two user roles: customers and vendors. Customers use the system to explore and evaluate PC builds, while vendors manage their shops, builds, and inventory through the dedicated vendor dashboard.',
      },
      {
        url: '/Public/compfy/2.jpg',
        title: "Customer's Dashboard (Requirement Selection)",
        description:
          'Customer requirement interface for selecting the intended PC usage. Compfy supports Study / Office Work, Professional Editing / AI-ML, and Gaming & Streaming, with Casual and Heavy Usage levels for each category.',
      },
      {
        url: '/Public/compfy/3.jpg',
        title: 'Electricity Bill Calculation Module',
        description:
          'Calculates the estimated electricity usage of a PC build. Compfy includes estimated power consumption as part of its build evaluation so users can consider energy efficiency alongside performance and cost.',
      },
      {
        url: '/Public/compfy/4.jpg',
        title: 'Recommended Builds (with Vendor details)',
        description:
          'Displays suitable PC builds generated from customer requirements alongside vendor-provided build options. Customers can browse builds, compare prices, filter vendor builds by price or city, and view detailed specifications.',
      },
      {
        url: '/Public/compfy/5.jpg',
        title: 'PC Build Detailed Specs',
        description:
          'Provides detailed information about a selected PC build, including a compact component summary covering key specifications such as the CPU, GPU, RAM, and storage. Build details can also be printed or exported.',
      },
      {
        url: '/Public/compfy/6.jpg',
        title: "Vendor's Dashboard",
        description:
          'Dedicated dashboard for retailers to manage their virtual store in Compfy. Vendors can register their shop with details such as shop name, city, contact, and address, and manage their PC builds.',
      },
      {
        url: '/Public/compfy/7.jpg',
        title: 'Inventory Management',
        description:
          'Allows vendors to manage their hardware inventory using structured inventory data. Vendors can add, edit, and delete builds and view inventory with sorting and filtering capabilities.',
      },
    ],
    liveUrl: 'https://compfy.vercel.app',
    status: 'Completed',
  },

  {
    id: 'sdu',
    title: 'System Diagnostic Utility (SDU)',
    tagline: 'Advanced hardware analytics and bottleneck detection platform',
    description:
      'A system diagnostic tool designed to detect critical hardware bottlenecks using stress testing, benchmarking logic, and intelligent component upgrade recommendation algorithms.',
    problem:
      'Users struggle to identify performance bottlenecks in their systems and make informed decisions about hardware upgrades.',
    solution:
      'SDU provides comprehensive diagnostic capabilities with stress testing, bottleneck detection, and data-driven upgrade recommendations through an intuitive React interface powered by Django APIs.',
    techStack: [
      'Django',
      'Django REST Framework',
      'React',
      'SQLite',
      'RESTful APIs',
    ],
    features: [
      'System stress testing for critical hardware bottleneck detection',
      'Benchmarking logic and performance evaluation',
      'Intelligent component upgrade recommendation algorithms',
      'RESTful APIs built with Django and DRF',
      'Interactive React frontend for seamless user experience',
      'Comprehensive hardware performance analytics',
    ],
    architecture: [
      'RESTful API architecture with Django REST Framework',
      'SQLite database for lightweight data storage',
      'React frontend integrated with backend APIs',
      'Modular design for extensible diagnostic modules',
    ],
    screenshots: [
      {
        url: '/Public/sdu/1.png',
        title: 'Authentication Screen',
        description:
          'Secure authentication interface for accessing the SDU platform. The system uses token-based authentication to protect user data and provide secure access to diagnostic and benchmark information.',
      },
      {
        url: '/Public/sdu/2.png',
        title: 'User Dashboard',
        description:
          'Central dashboard for running system diagnostics and viewing hardware information. Users can inspect CPU, GPU, RAM, and storage specifications, launch benchmark tests, view performance summaries, and access saved test history.',
      },
      {
        url: '/Public/sdu/3.png',
        title: 'System Benchmarking Module',
        description:
          'Benchmarking interface for testing individual hardware components including CPU, GPU, RAM, and disk. The system runs simulated workloads, records usage, speed, and temperature, and generates performance and efficiency results.',
      },
      {
        url: '/Public/sdu/4.png',
        title: 'Live Benchmark and Stress Test Monitoring',
        description:
          'Live monitoring interface for observing system activity during testing. SDU tracks CPU, GPU, RAM, and disk usage while monitoring temperature and displaying performance information through visual charts and progress indicators.',
      },
      {
        url: '/Public/sdu/5.png',
        title: 'System Analysis (With Bottlenecks Detection)',
        description:
          'Analyzes benchmark results by comparing the system’s scores against benchmark data from systems with similar hardware configurations. SDU uses these comparative performance results to identify potential hardware bottlenecks, determine which components are underperforming, and generate data-driven upgrade recommendations.',
      },
      {
        url: '/Public/sdu/6.png',
        title: 'Community Reviews similar benchmarking results',
        description:
          'Community discussion interface where users can view and share comments related to similar benchmark results and system configurations. Authenticated users can add their own reviews and manage them by editing or deleting their comments, enabling community-driven insights alongside benchmark comparisons.',
      },
      {
        url: '/Public/sdu/8.png',
        title: 'User Profile Management',
        description:
          'Profile management interface where users can manage their account and maintain their diagnostic history. SDU stores user test results and system specifications and supports profile picture upload and editing.',
      },
    ],
    githubUrl: 'https://github.com/zawar-gh/System_Diagnostic_Utility',
    status: 'In Progress',
  },

  {
    id: 'thesocial',
    title: 'TheSocial - Mobile App',
    tagline:
      'Real-time, proximity-aware social discovery backend and mobile interface',
    description:
      'A location-based social platform with robust backend APIs for geolocation-based user matching and low-latency real-time interactions, enabling dynamic proximity-aware connections.',
    problem:
      'Traditional social apps lack spontaneous, location-aware connections for meeting new people nearby in real-time.',
    solution:
      'TheSocial provides robust backend APIs for geolocation-based user matching with low-latency real-time interactions, enabling dynamic connections with nearby users.',
    techStack: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'React Native',
      'Expo',
    ],
    features: [
      'Robust backend APIs for geolocation-based user matching',
      'Low-latency real-time interaction system',
      'Dynamic, proximity-aware connections with nearby users',
      'Chat functionalities and social networking features',
      'Mobile-first interface built with React Native and Expo',
      'PostgreSQL database for scalable user data management',
    ],
    architecture: [
      'RESTful API architecture with Node.js and Express.js',
      'PostgreSQL for relational data storage and geospatial queries',
      'React Native mobile application with Expo framework',
      'Optimized for real-time, low-latency user interactions',
    ],
    screenshots: [
      {
        url: '/Public/the_social/1.jpeg',
        title: 'Authentication Screen',
        description:
          'Secure authentication interface for accessing TheSocial. The platform uses JWT-based authentication with refresh tokens to provide secure and persistent user sessions.',
      },
      {
        url: '/Public/the_social/2.jpeg',
        title: 'Discover nearby Communities (Location-Based)',
        description:
          'Location-based community discovery interface that helps users discover nearby groups using their geographic proximity. The platform supports configurable discovery ranges and automatically connects users with location-bound communities.',
      },
      {
        url: '/Public/the_social/3.jpeg',
        title: 'Create New Community',
        description:
          'Interface for creating a new location-based community at the user’s current location. TheSocial supports creation of location groups with geographic coordinates and custom group metadata.',
      },
      {
        url: '/Public/the_social/4.jpeg',
        title: 'Join Community',
        description:
          'Community joining interface for participating in existing location-based groups. Users can discover and join communities associated with their current geographic area, with dynamic group membership supporting changes in location.',
      },
      {
        url: '/Public/the_social/5.jpeg',
        title: 'Community Chats and Posts',
        description:
          'Location-bound communication interface supporting real-time messaging and community posts. Users can exchange messages within groups and share multimedia content such as images, videos, and audio files.',
      },
      {
        url: '/Public/the_social/6.jpeg',
        title: 'Games and Fun Activities',
        description:
          'Gaming interface for location-specific mini-games and puzzle-based activities. The platform supports multiplayer gaming sessions within location groups, along with tournament participation and game session management.',
      },
      {
        url: '/Public/the_social/7.jpeg',
        title: 'Leaderboard (Community Scores)',
        description:
          'Location-specific leaderboard interface displaying player rankings and scores. The gaming system maintains individual and aggregate scoring data and supports leaderboards for local gaming activities and tournaments.',
      },
      {
        url: '/Public/the_social/8.jpeg',
        title: 'App Settings and Profile Management',
        description:
          'Profile and privacy management interface where users can customize their profile and preferences. The platform supports avatar and bio customization, profile visibility controls, location-sharing privacy settings, and other user preferences.',
      },
    ],
    githubUrl: 'https://github.com/zawar-gh/The-Social',
    status: 'Completed',
  },
];