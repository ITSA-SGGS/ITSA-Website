import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  Send,
  Sparkles,
  Zap,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: data.message }
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: data.message }
        });
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' }
      });
    }
  };

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
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Get In Touch</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Contact ITSA
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have questions or need assistance? We're here to help! Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail className="w-6 h-6" />,
                      title: "Email",
                      description: "itsa@sggs.ac.in",
                      color: "cyan"
                    },
                    {
                      icon: <Phone className="w-6 h-6" />,
                      title: "Phone",
                      description: "+1 (555) 123-4567",
                      color: "purple"
                    },
                    {
                      icon: <MapPin className="w-6 h-6" />,
                      title: "Location",
                      description: "IT Department, University Campus",
                      color: "pink"
                    },
                    {
                      icon: <Globe className="w-6 h-6" />,
                      title: "Social Media",
                      description: "Follow us on GitHub and LinkedIn",
                      color: "cyan"
                    },
                    {
                      icon: <Clock className="w-6 h-6" />,
                      title: "Office Hours",
                      description: "Monday - Friday: 9:00 AM - 5:00 PM",
                      color: "purple"
                    }
                  ].map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 group/info">
                      <div className={`p-3 rounded-xl bg-${info.color}-500/10 group-hover/info:bg-${info.color}-500/20 transition-colors`}>
                        <div className={`text-${info.color}-400`}>{info.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 text-white group-hover/info:text-cyan-400 transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-gray-400">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map or Additional Info */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h2 className="text-2xl font-bold mb-4">Find Us</h2>
                <div className="aspect-video w-full bg-gray-700 rounded-lg overflow-hidden relative">
                  {/* Placeholder for map */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-400">Interactive map would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <MessageCircle className="w-6 h-6 text-purple-400" />
                </div>
                Send Us a Message
              </h2>

              {status.submitted ? (
                <div className="text-center p-6 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text">
                    Message Sent Successfully!
                  </div>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } })}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 flex items-center justify-center mx-auto"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                      required
                    ></textarea>
                  </div>

                  {status.info.error && (
                    <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                      {status.info.msg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status.submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}