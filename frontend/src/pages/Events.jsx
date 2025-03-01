import { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle,
  Clock3,
} from "lucide-react";
import { eventsData } from "../data/eventsData"; // Import the events data

export default function Events() {
  const [filter, setFilter] = useState("upcoming");

  // Use the imported eventsData
  const filteredEvents =
    filter === "all"
      ? eventsData
      : eventsData.filter((event) => event.status === filter);

  const getStatusIcon = (status) => {
    switch (status) {
      case "upcoming":
        return <Calendar className="w-5 h-5 text-blue-400" />;
      case "ongoing":
        return <Clock3 className="w-5 h-5 text-yellow-400" />;
      case "past":
        return <CheckCircle className="w-5 h-5 text-gray-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-500/10 text-blue-400";
      case "ongoing":
        return "bg-yellow-500/10 text-yellow-400";
      case "past":
        return "bg-gray-500/10 text-gray-400";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0008_1px,transparent_1px),linear-gradient(to_bottom,#00ff0008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-green-400 max-w-2xl mx-auto">
           $ echo "Join us for exciting workshops, hackathons, and tech talks. Stay
            updated with the latest events in the world of technology."
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border border-green-500 
                ${
                  filter === "all"
                    ? "bg-green-500 text-black"
                    : "bg-transparent text-green-500 hover:bg-green-500/10"
                }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter("upcoming")}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-green-500
                ${
                  filter === "upcoming"
                    ? "bg-green-500 text-black"
                    : "bg-transparent text-green-500 hover:bg-green-500/10"
                }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter("ongoing")}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-green-500
                ${
                  filter === "ongoing"
                    ? "bg-green-500 text-black"
                    : "bg-transparent text-green-500 hover:bg-green-500/10"
                }`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setFilter("past")}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border-t border-b border-r border-green-500
                ${
                  filter === "past"
                    ? "bg-green-500 text-black"
                    : "bg-transparent text-green-500 hover:bg-green-500/10"
                }`}
            >
              Past
            </button>
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-12 border border-green-500/20 rounded-lg">
            <p className="text-green-400 text-lg">
              No events found in this category.
            </p>
          </div>
        ) : (
          <div className="grid gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500 transition-all transform hover:-translate-y-1"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-48 w-full object-cover md:h-full"
                    />
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm flex items-center space-x-1 ${getStatusColor(
                          event.status
                        )}`}
                      >
                        {getStatusIcon(event.status)}
                        <span className="ml-1 capitalize">{event.status}</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                        {event.category.charAt(0).toUpperCase() +
                          event.category.slice(1)}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                    <p className="text-green-400 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-green-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                        {event.date !== event.endDate && (
                          <span>
                            {" "}
                            -{" "}
                            {new Date(event.endDate).toLocaleDateString(
                              "en-US",
                              {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-green-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-green-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      {event.status !== "past" && (
                        <button className="px-4 py-2 border-2 border-green-500 hover:bg-green-500 hover:text-black transition-colors flex items-center">
                          Register Now
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </button>
                      )}
                      <button className="px-4 py-2 bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors">
                        {event.status === "past"
                          ? "View Details"
                          : "Learn More"}
                      </button>
                      {event.status === "past" && event.hasGallery && (
                        <button className="px-4 py-2 bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors">
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
