// resourcesData.js
import { BookOpen, Code, Video, FileText, Database, Server, Globe, Cpu } from 'lucide-react';

export const resourcesData = [
  // First Year Resources
  {
    id: '101',
    title: 'Digital System Design Fundamentals',
    description: 'Introduction to boolean algebra, logic gates, and combinational circuits.',
    link: 'https://www.coursera.org/learn/digital-systems',
    category: 'course',
    icon: 'Cpu',
    year: '1',
    subject: 'Digital System Design'
  },
  {
    id: '102',
    title: 'Data Structures Basics',
    description: 'Learn about arrays, linked lists, stacks, and queues with implementations.',
    link: 'https://www.geeksforgeeks.org/data-structures/',
    category: 'tutorial',
    icon: 'Code',
    year: '1',
    subject: 'Data Structures'
  },
  {
    id: '103',
    title: 'Introduction to OOP with C++',
    description: 'Master object-oriented programming principles and C++ syntax.',
    link: 'https://www.learncpp.com/',
    category: 'tutorial',
    icon: 'Code',
    year: '1',
    subject: 'OOPs in C++'
  },
  {
    id: '104',
    title: 'Java Programming for Beginners',
    description: 'Comprehensive guide to Java syntax, classes, and object-oriented concepts.',
    link: 'https://dev.java/learn/',
    category: 'course',
    icon: 'BookOpen',
    year: '1',
    subject: 'Java Programming'
  },
  {
    id: '105',
    title: 'Computer Architecture Visualized',
    description: 'Interactive visualizations of CPU components, memory hierarchy, and system bus.',
    link: 'https://www.cs.umd.edu/class/sum2003/cmsc311/Notes/',
    category: 'tool',
    icon: 'Cpu',
    year: '1',
    subject: 'General Architecture of Computer'
  },
  
  // Second Year Resources
  {
    id: '201',
    title: 'Advanced Digital System Design',
    description: 'Sequential circuits, finite state machines, and hardware description languages.',
    link: 'https://www.edx.org/learn/digital-systems',
    category: 'course',
    icon: 'Cpu',
    year: '2',
    subject: 'Digital System Design'
  },
  {
    id: '202',
    title: 'Data Structures and Algorithms',
    description: 'Advanced data structures including trees, graphs, and hashing techniques.',
    link: 'https://algs4.cs.princeton.edu/home/',
    category: 'course',
    icon: 'Code',
    year: '2',
    subject: 'Data Structures'
  },
  {
    id: '203',
    title: 'Advanced C++ Programming',
    description: 'Deep dive into templates, STL, and modern C++ features.',
    link: 'https://isocpp.org/get-started',
    category: 'tutorial',
    icon: 'Code',
    year: '2',
    subject: 'OOPs in C++'
  },
  {
    id: '204',
    title: 'Microprocessors and Assembly Language',
    description: 'Learn about microprocessor architecture, instruction sets, and assembly programming.',
    link: 'https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html',
    category: 'article',
    icon: 'Cpu',
    year: '2',
    subject: 'Microprocessor and Interfacing'
  },
  {
    id: '205',
    title: 'Intermediate Java and Design Patterns',
    description: 'Master Java collections, multithreading, and common design patterns.',
    link: 'https://refactoring.guru/design-patterns/java',
    category: 'tutorial',
    icon: 'BookOpen',
    year: '2',
    subject: 'Java Programming'
  },
  
  // Third Year Resources
  {
    id: '301',
    title: 'Python Programming Masterclass',
    description: 'Comprehensive guide to Python programming from basics to advanced concepts.',
    link: 'https://docs.python.org/3/tutorial/',
    category: 'course',
    icon: 'Code',
    year: '3',
    subject: 'Python'
  },
  {
    id: '302',
    title: 'Software Engineering Principles',
    description: 'Learn about software development life cycles, agile methodologies, and project management.',
    link: 'https://www.pearson.com/en-us/subject-catalog/p/software-engineering/P200000006205',
    category: 'course',
    icon: 'BookOpen',
    year: '3',
    subject: 'Software Engineering'
  },
  {
    id: '303',
    title: 'Design and Analysis of Algorithms',
    description: 'Master algorithm design paradigms, complexity analysis, and optimization techniques.',
    link: 'https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/',
    category: 'course',
    icon: 'Code',
    year: '3',
    subject: 'DAA'
  },
  {
    id: '304',
    title: 'Theory of Computation',
    description: 'Explore automata theory, formal languages, and computability concepts.',
    link: 'https://www.coursera.org/learn/automata',
    category: 'video',
    icon: 'Video',
    year: '3',
    subject: 'TOC'
  },
  {
    id: '305',
    title: 'Database Management Systems',
    description: 'Learn relational database concepts, SQL, normalization, and transaction management.',
    link: 'https://www.postgresqltutorial.com/',
    category: 'tutorial',
    icon: 'Database',
    year: '3',
    subject: 'DBMS'
  },
  {
    id: '306',
    title: 'Computer Networks Fundamentals',
    description: 'Understand network protocols, topologies, and the OSI model.',
    link: 'https://www.computernetworkingnotes.com/',
    category: 'article',
    icon: 'Globe',
    year: '3',
    subject: 'Computer Networks'
  },
  {
    id: '307',
    title: 'Operating Systems Concepts',
    description: 'Learn about process management, memory management, file systems, and concurrency.',
    link: 'https://www.os-book.com/OS10/',
    category: 'course',
    icon: 'Server',
    year: '3',
    subject: 'OS'
  },
  
  // Fourth Year Resources
  {
    id: '401',
    title: 'Cloud Computing Architecture',
    description: 'Fundamentals of cloud services, deployment models, and distributed systems.',
    link: 'https://aws.amazon.com/getting-started/',
    category: 'tutorial',
    icon: 'Server',
    year: '4',
    subject: 'Cloud Computing'
  },
  {
    id: '402',
    title: 'Blockchain Development',
    description: 'Master blockchain fundamentals, smart contracts, and decentralized applications.',
    link: 'https://ethereum.org/en/developers/tutorials/',
    category: 'course',
    icon: 'Code',
    year: '4',
    subject: 'Blockchain'
  },
  {
    id: '403',
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to supervised and unsupervised learning algorithms and techniques.',
    link: 'https://www.tensorflow.org/tutorials',
    category: 'course',
    icon: 'BookOpen',
    year: '4',
    subject: 'Artificial Intelligence'
  },
  {
    id: '404',
    title: 'DevOps and CI/CD Pipelines',
    description: 'Learn continuous integration, delivery, and deployment workflows.',
    link: 'https://github.com/features/actions',
    category: 'tutorial',
    icon: 'Code',
    year: '4',
    subject: 'Software Engineering'
  },
  {
    id: '405',
    title: 'System Design for Interviews',
    description: 'Prepare for technical interviews with scalable system design principles.',
    link: 'https://github.com/donnemartin/system-design-primer',
    category: 'article',
    icon: 'FileText',
    year: '4',
    subject: 'System Design'
  },
  {
    id: '406',
    title: 'Full Stack Development with MERN',
    description: 'Build complete web applications with MongoDB, Express, React, and Node.js.',
    link: 'https://www.mongodb.com/mern-stack',
    category: 'video',
    icon: 'Video',
    year: '4',
    subject: 'Web Development'
  }
];

// Helper function to get all unique subjects by year
export const getSubjectsByYear = (year) => {
  const subjects = resourcesData
    .filter(resource => resource.year === year)
    .map(resource => resource.subject);
  
  return [...new Set(subjects)];
};

// Helper function to get all unique categories
export const getCategories = () => {
  const categories = resourcesData.map(resource => resource.category);
  return [...new Set(categories)];
};

// Helper function to get resources by year and subject
export const getResourcesByYearAndSubject = (year, subject) => {
  return resourcesData.filter(
    resource => resource.year === year && resource.subject === subject
  );
};

// Helper function to get all years
export const getYears = () => {
  const years = resourcesData.map(resource => resource.year);
  return [...new Set(years)].sort();
};