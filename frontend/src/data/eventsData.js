// eventsData.js
export const eventsData = [
  // Past Events
  {
    id: "1",
    title: "Coding Contest 1",
    date: "2023-10-15",
    endDate: "2023-10-15",
    time: "10:00 AM",
    location: "Computer Science Lab",
    description:
      "Our first competitive programming contest of the academic year. Students solved algorithmic problems with prizes for top performers.",
    image: "/api/placeholder/800/400",
    category: "competition",
    status: "past",
    hasGallery: true,
  },
  {
    id: "2",
    title: "Sports Carnival",
    date: "2023-11-20",
    endDate: "2023-11-22",
    time: "9:00 AM",
    location: "Campus Sports Complex",
    description:
      "Three days of competitive sports events featuring cricket, football, badminton, and chess tournaments between departments.",
    image: "/api/placeholder/800/400",
    category: "extracurricular",
    status: "past",
    hasGallery: true,
  },
  {
    id: "3",
    title: "Workshop on AI/ML",
    date: "2024-01-15",
    endDate: "2024-01-16",
    time: "2:00 PM",
    location: "Seminar Hall A",
    description:
      "Two-day workshop on Artificial Intelligence and Machine Learning fundamentals. Covered Python basics, data preprocessing, and model training.",
    image: "/api/placeholder/800/400",
    category: "workshop",
    status: "past",
    hasGallery: true,
  },
  {
    id: "4",
    title: "Coding Contest 2",
    date: "2024-02-28",
    endDate: "2024-02-28",
    time: "11:00 AM",
    location: "Computer Science Lab",
    description:
      "Second coding competition focusing on dynamic programming and graph algorithms. Participants competed individually and in teams.",
    image: "/api/placeholder/800/400",
    category: "competition",
    status: "past",
    hasGallery: true,
  },

  // Current/Ongoing Events
  {
    id: "6",
    title: "Web Development Bootcamp",
    date: "2024-02-25",
    endDate: "2024-03-10",
    time: "5:00 PM",
    location: "IT Department Lab 2",
    description:
      "Intensive bootcamp covering modern web technologies including HTML5, CSS3, JavaScript, React, and Node.js with hands-on projects.",
    image: "/api/placeholder/800/400",
    category: "workshop",
    status: "ongoing",
    hasGallery: false,
  },

  // Upcoming Events
  {
    id: "7",
    title: "Coding Contest 3",
    date: "2024-03-20",
    endDate: "2024-03-20",
    time: "9:00 AM",
    location: "IT Department",
    description:
      "The third and final coding competition of this academic year with challenging problems focused on real-world applications.",
    image: "/api/placeholder/800/400",
    category: "competition",
    status: "upcoming",
    hasGallery: false,
  },
  {
    id: "8",
    title: "Workshop on Docker",
    date: "2024-03-25",
    endDate: "2024-03-26",
    time: "10:00 AM",
    location: "IT Department",
    description:
      "Learn containerization with Docker, including image creation, container orchestration, and deployment strategies.",
    image: "/api/placeholder/800/400",
    category: "workshop",
    status: "upcoming",
    hasGallery: false,
  },
  {
    id: "11",
    title: "Cloud Computing Workshop",
    date: "2024-04-28",
    endDate: "2024-04-29",
    time: "2:00 PM",
    location: "IT Department",
    description:
      "Introduction to cloud platforms and services. Learn to deploy applications on AWS and Azure with best practices for scaling and security.",
    image: "/api/placeholder/800/400",
    category: "workshop",
    status: "upcoming",
    hasGallery: false,
  },
];

// Helper functions
export const getEventsByStatus = (status) => {
  if (status === "all") return eventsData;
  return eventsData.filter((event) => event.status === status);
};

export const getEventsByCategory = (category) => {
  if (category === "all") return eventsData;
  return eventsData.filter((event) => event.category === category);
};

export const getAllCategories = () => {
  const categories = eventsData.map((event) => event.category);
  return ["all", ...new Set(categories)];
};

export const getUpcomingEvents = (limit = 3) => {
  return eventsData
    .filter((event) => event.status === "upcoming")
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, limit);
};
