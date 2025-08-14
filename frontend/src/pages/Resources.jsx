import { useState, useEffect } from 'react';
import { 
  Filter, 
  ExternalLink, 
  BookOpen, 
  Code, 
  Video, 
  FileText, 
  Database, 
  Server, 
  Globe, 
  Cpu,
  Search,
  Sparkles,
  GraduationCap,
  ChevronRight,
  ArrowRight,
  Brain,
  Rocket
} from 'lucide-react';
import { resourcesData, getCategories, getSubjectsByYear } from '../data/resourcesData';

const getIcon = (iconName) => {
  const icons = {
    BookOpen: <BookOpen className="w-6 h-6" />,
    Code: <Code className="w-6 h-6" />,
    Video: <Video className="w-6 h-6" />,
    FileText: <FileText className="w-6 h-6" />,
    Database: <Database className="w-6 h-6" />,
    Server: <Server className="w-6 h-6" />,
    Globe: <Globe className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />
  };
  return icons[iconName] || icons.BookOpen;
};

export default function Resources() {
  const [yearFilter, setYearFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [subjects, setSubjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    if (yearFilter !== 'all') {
      setSubjects(getSubjectsByYear(yearFilter));
    } else {
      setSubjects([]);
    }
    setSubjectFilter('all');
  }, [yearFilter]);
  
  const filteredResources = resourcesData.filter(resource => {
    const matchesYear = yearFilter === 'all' || resource.year === yearFilter;
    const matchesCategory = categoryFilter === 'all' || resource.category === categoryFilter;
    const matchesSubject = subjectFilter === 'all' || resource.subject === subjectFilter;
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesCategory && matchesSubject && matchesSearch;
  });

  const categories = ['all', ...getCategories()];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#3b82f633,transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_800px,#6366f133,transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full mb-6">
            <Brain className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Learning Hub</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Educational Resources
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Access curated learning materials, tools, and guides to enhance your technical skills. 
            Filter by year and subject to find resources relevant to your journey.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="relative group mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                <div>
                  <select 
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    className="px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="all">All Years</option>
                    <option value="1">First Year</option>
                    <option value="2">Second Year</option>
                    <option value="3">Third Year</option>
                    <option value="4">Fourth Year</option>
                  </select>
                </div>
                
                {yearFilter !== 'all' && subjects.length > 0 && (
                  <div>
                    <select 
                      value={subjectFilter}
                      onChange={(e) => setSubjectFilter(e.target.value)}
                      className="px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors text-white"
                    >
                      <option value="all">All Subjects</option>
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Year Overview */}
        {yearFilter !== 'all' && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                {yearFilter === '1' && 'First Year Resources'}
                {yearFilter === '2' && 'Second Year Resources'}
                {yearFilter === '3' && 'Third Year Resources'}
                {yearFilter === '4' && 'Fourth Year Resources'}
              </h2>
            </div>
            <p className="text-gray-400 max-w-3xl">
              {yearFilter === '1' && 'Foundational resources covering Digital Systems, Data Structures, OOP concepts, Java, and Computer Architecture.'}
              {yearFilter === '2' && 'Intermediate resources for advanced Digital Systems, Data Structures, C++, Microprocessors, and Java Programming.'}
              {yearFilter === '3' && 'Advanced resources focusing on Python, Software Engineering, Algorithms, Theory of Computation, Databases, Networks, and Operating Systems.'}
              {yearFilter === '4' && 'Professional resources covering Cloud Computing, Blockchain, AI, DevOps, and System Design to prepare you for industry.'}
            </p>
          </div>
        )}

        {/* Resources Grid */}
        {filteredResources.length === 0 ? (
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50 text-center">
              <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No Resources Found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your filters or search query</p>
              <button 
                onClick={() => {
                  setYearFilter('all');
                  setCategoryFilter('all');
                  setSubjectFilter('all');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 inline-flex items-center"
              >
                Clear All Filters
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(resource.icon)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                        {resource.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          Year {resource.year}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs bg-pink-500/10 text-pink-400 border border-pink-500/20">
                          {resource.subject}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4">{resource.description}</p>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                      >
                        Access Resource
                        <ChevronRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contribution Section */}
        <div className="mt-20 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50 text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Contribute</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Share Your Knowledge
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Have a valuable resource to share with the community? We welcome contributions
              from students and faculty to help build our knowledge base.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 flex items-center mx-auto group/button">
              Submit a Resource
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover/button:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}