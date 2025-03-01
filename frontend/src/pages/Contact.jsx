import { Mail, Phone, MapPin, Globe, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono pt-20">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#00ff0010,transparent)]"></div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-green-400 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="border border-green-500/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-black border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-black border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-green-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-black border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 bg-black border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-green-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border border-green-500/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-green-400">contact@itsa.edu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-green-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-green-400">IT Department, University Campus</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Social Media</h3>
                    <p className="text-green-400">Follow us on GitHub and LinkedIn</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Office Hours</h3>
                    <p className="text-green-400">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
