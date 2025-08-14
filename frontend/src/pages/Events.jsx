import { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle,
  Clock3,
  Terminal,
  Zap,
  Users,
  ArrowRight,
  ChevronRight,
  Globe,
  Code2,
  Cpu,
  Blocks,
} from "lucide-react";
import { eventsData } from "../data/eventsData";

export default function Events() {
  const [filter, setFilter] = useState("all");
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const filteredEvents =
    filter === "all"
      ? eventsData
      : eventsData.filter((event) => event.status === filter);

  const getStatusIcon = (status) => {
    switch (status) {
      case "upcoming":
        return <Calendar className="w-5 h-5 text-cyan-400" />;
      case "ongoing":
        return <Clock3 className="w-5 h-5 text-purple-400" />;
      case "past":
        return <CheckCircle className="w-5 h-5 text-gray-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
      case "ongoing":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      case "past":
        return "bg-gray-500/10 text-gray-400 border-gray-500/30";
      default:
        return "";
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      workshop: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      hackathon: "bg-pink-500/10 text-pink-400 border-pink-500/30",
      talk: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
      default: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    };
    return colors[category.toLowerCase()] || colors.default;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#3b82f633,transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_800px,#6366f133,transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_800px,#8b5cf633,transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full mb-6">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Events Console</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Upcoming Tech Events
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            Join our community events, from hands-on workshops to competitive hackathons. 
            Level up your skills and connect with fellow tech enthusiasts.
          </p>
          
          {/* Stats Section */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Code2 className="w-8 h-8 text-cyan-400" />,
                title: "Technical Workshops",
                value: "20+",
                desc: "Monthly Sessions"
              },
              {
                icon: <Cpu className="w-8 h-8 text-purple-400" />,
                title: "Hackathons",
                value: "5+",
                desc: "Annual Events"
              },
              {
                icon: <Blocks className="w-8 h-8 text-pink-400" />,
                title: "Tech Talks",
                value: "50+",
                desc: "Industry Speakers"
              }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                  <div className="mb-4">{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-lg font-semibold mb-2">{stat.title}</div>
                  <div className="text-gray-400 text-sm">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl backdrop-blur-sm bg-gray-800/50 p-1.5" role="group">
            {["all", "upcoming", "ongoing", "past"].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center space-x-2
                  ${filter === filterType
                    ? "bg-cyan-500 text-gray-900 shadow-lg shadow-cyan-500/25"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                {filterType === "all" && <Globe className="w-4 h-4" />}
                {filterType === "upcoming" && <Calendar className="w-4 h-4" />}
                {filterType === "ongoing" && <Clock3 className="w-4 h-4" />}
                {filterType === "past" && <CheckCircle className="w-4 h-4" />}
                <span className="capitalize">{filterType}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 border border-gray-800 rounded-2xl bg-gray-800/20 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 mb-4">
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-400 text-lg">No events found in this category.</p>
          </div>
        ) : (
          <div className="grid gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group relative rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-500 hover:border-cyan-500/50"
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-64 w-full object-cover md:h-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className={`px-4 py-2 rounded-full text-sm flex items-center space-x-2 border ${getStatusColor(event.status)}`}>
                        {getStatusIcon(event.status)}
                        <span className="capitalize">{event.status}</span>
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:w-3/5 relative">
                    {/* Category Badge */}
                    <div className="flex items-center space-x-2 mb-4">
                      <span className={`px-4 py-2 rounded-full text-sm border flex items-center ${getCategoryColor(event.category)}`}>
                        <Zap className="w-4 h-4 mr-2" />
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                      {event.title}
                    </h2>
                    <p className="text-gray-400 mb-6 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Tech Stack */}
                    {event.techStack && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {event.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-sm bg-gray-700/50 text-gray-300 border border-gray-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Speaker Info */}
                    {event.speakerName && (
                      <div className="flex items-center space-x-4 mb-6">
                        <img
                          src={event.speakerImage}
                          alt={event.speakerName}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-white">{event.speakerName}</div>
                          <div className="text-sm text-gray-400">{event.speakerRole}</div>
                        </div>
                      </div>
                    )}

                    {/* Event Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3 text-gray-300">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Date</p>
                          <p className="text-sm font-medium">
                            {new Date(event.date).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                            {event.endDate && (
                              <span> - {new Date(event.endDate).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}</span>
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 text-gray-300">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Time</p>
                          <p className="text-sm font-medium">{event.time}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 text-gray-300">
                        <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-pink-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Location</p>
                          <p className="text-sm font-medium">{event.location}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 text-gray-300">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Capacity</p>
                          <p className="text-sm font-medium">{event.capacity} attendees</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      {event.status !== "past" && (
                        <button className="px-6 py-2.5 bg-cyan-500 text-gray-900 rounded-lg font-medium hover:bg-cyan-400 transition-colors duration-300 flex items-center group/button">
                          Register Now
                          <ArrowRight className="w-4 h-4 ml-2 transform group-hover/button:translate-x-1 transition-transform" />
                        </button>
                      )}
                      <button className="px-6 py-2.5 border border-gray-600 text-gray-300 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center group/button">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-1 transform group-hover/button:translate-x-1 transition-transform" />
                      </button>
                      {event.status === "past" && event.hasGallery && (
                        <button className="px-6 py-2.5 bg-gray-800/50 text-gray-300 rounded-lg font-medium hover:bg-gray-700/50 transition-colors duration-300">
                          View Gallery
                        </button>
                      )}
                    </div>
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