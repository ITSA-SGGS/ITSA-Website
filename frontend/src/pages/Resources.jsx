import { useState, useEffect } from 'react';
import { Filter, ExternalLink, BookOpen, Code, Video, FileText, Database, Server, Globe, Cpu } from 'lucide-react';
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
  return icons[iconName];
};

export default function Resources() {
  const [yearFilter, setYearFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [subjects, setSubjects] = useState([]);
  
  // Update available subjects when year changes
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
    return matchesYear && matchesCategory && matchesSubject;
  });

  const categories = ['all', ...getCategories()];

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
          <p className="text-green-400 max-w-2xl mx-auto">
            $ echo "Access curated learning materials, tools, and guides to enhance your
            technical skills and knowledge. Filter by year and subject to find resources
            relevant to your computer science curriculum."
          </p>
        </div>

        <div className="mb-8 p-6 border border-green-500/20 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold mb-2 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filter Resources
              </h2>
              <p className="text-green-400 text-sm">Find resources tailored to your academic year and subjects</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Academic Year</label>
                <select 
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="px-4 py-2 bg-black border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-green-500"
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
                  <label className="block text-sm font-medium mb-1">Subject</label>
                  <select 
                    value={subjectFilter}
                    onChange={(e) => setSubjectFilter(e.target.value)}
                    className="px-4 py-2 bg-black border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-green-500"
                  >
                    <option value="all">All Subjects</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              
              {/* <div>
                <label className="block text-sm font-medium mb-1">Resource Type</label>
                <select 
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-4 py-2 bg-black border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-green-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Types' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div> */}
            </div>
          </div>
        </div>

        {yearFilter !== 'all' && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {yearFilter === '1' && 'First Year Resources'}
              {yearFilter === '2' && 'Second Year Resources'}
              {yearFilter === '3' && 'Third Year Resources'}
              {yearFilter === '4' && 'Fourth Year Resources'}
            </h2>
            <p className="text-green-400 mb-4">
              {yearFilter === '1' && 'Foundational resources covering Digital Systems, Data Structures, OOP concepts, Java, and Computer Architecture.'}
              {yearFilter === '2' && 'Intermediate resources for advanced Digital Systems, Data Structures, C++, Microprocessors, and Java Programming.'}
              {yearFilter === '3' && 'Advanced resources focusing on Python, Software Engineering, Algorithms, Theory of Computation, Databases, Networks, and Operating Systems.'}
              {yearFilter === '4' && 'Professional resources covering Cloud Computing, Blockchain, AI, DevOps, and System Design to prepare you for industry.'}
            </p>
          </div>
        )}

        {subjectFilter !== 'all' && (
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">
              {subjectFilter} Resources
            </h3>
          </div>
        )}

        {filteredResources.length === 0 ? (
          <div className="text-center py-12 border border-green-500/20 rounded-lg">
            <p className="text-green-400 text-lg">No resources found matching your filters.</p>
            <button 
              onClick={() => {setYearFilter('all'); setCategoryFilter('all'); setSubjectFilter('all');}}
              className="mt-4 px-4 py-2 bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="border border-green-500/20 rounded-lg p-6 hover:border-green-500 transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-500/10 rounded-lg text-green-500">
                    {getIcon(resource.icon)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{resource.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1 mb-2">
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs">
                        Year {resource.year}
                      </span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs">
                        {resource.subject}
                      </span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs">
                        {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                      </span>
                    </div>
                    <p className="text-green-400 mt-2 mb-4">{resource.description}</p>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors"
                    >
                      Access Resource
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}