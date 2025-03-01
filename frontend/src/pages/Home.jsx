import { Terminal, Code, Users, BookOpen, Award, ChevronDown, Cpu, Database, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/ITSA_logo.jpeg'

function Home() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="text-[20rem] font-bold select-none">&lt;/&gt;</div>
        </div>
        <div className="absolute inset-0">
          <div className="h-full w-full flex flex-col">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="h-6 whitespace-nowrap font-mono text-green-500/10 text-sm overflow-hidden"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {`const future = await ITSA.innovate({ year: ${new Date().getFullYear()} });`}
                {`function createTechLeaders() { return nextGeneration.map(student => student.transform()); }`}
                {`class Innovation { constructor() { this.passion = Infinity; } }`}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center space-y-6 p-4 relative z-10 bg-black/50 backdrop-blur-sm rounded-lg border border-green-500/20">
          <div className="flex items-center justify-center space-x-3 mb-4">
            {/* <Terminal className="w-12 h-12" />
            <span className="text-6xl font-bold">/</span>
            <Code className="w-12 h-12" /> */}
            <img src={logo} alt="" className="w-24 h-24" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold animate-typing overflow-hidden whitespace-nowrap">
            Welcome to ITSA
          </h1>
          <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl text-green-400">
            <span className="text-green-500">&lt;</span>
            Information Technology Student Association
            <span className="text-green-500">/&gt;</span>
          </div>
          <p className="text-green-400/80 max-w-2xl mx-auto">
            $ echo "Where innovation meets implementation, and code transforms into reality."
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/join" className="px-6 py-2 border-2 border-green-500 hover:bg-green-500 hover:text-black transition-colors flex items-center space-x-2">
              <Terminal className="w-4 h-4" />
              <span>Join Now</span>
            </Link>
            <Link to="/contact" className="px-6 py-2 bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors flex items-center space-x-2">
              <Code className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8" />
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0008_1px,transparent_1px),linear-gradient(to_bottom,#00ff0008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative">
          <div className="space-y-6 p-8 border border-green-500/20 rounded-lg backdrop-blur-sm hover:border-green-500 transition-all">
            <div className="flex items-center space-x-3">
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <div className="pl-11">
              <p className="text-green-400 mb-4">
                To create a community of innovative IT professionals who lead the
                technological revolution and shape the future of computing.
              </p>
              <ul className="space-y-2 text-green-400/80">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">$</span>
                  <span>Foster technological innovation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">$</span>
                  <span>Build future tech leaders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">$</span>
                  <span>Drive digital transformation</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6 p-8 border border-green-500/20 rounded-lg backdrop-blur-sm hover:border-green-500 transition-all">
            <div className="flex items-center space-x-3">
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <div className="pl-11">
              <p className="text-green-400 mb-4">
                To provide students with opportunities for technical growth,
                professional development, and networking through workshops,
                hackathons, and industry connections.
              </p>
              <ul className="space-y-2 text-green-400/80">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">&gt;</span>
                  <span>Hands-on technical workshops</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">&gt;</span>
                  <span>Industry collaboration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">&gt;</span>
                  <span>Skill development programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 px-4 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#00ff0010,transparent)]"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-green-500">&lt;</span>
            What We Offer
            <span className="text-green-500">/&gt;</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <OpportunityCard
              icon={<Terminal />}
              title="Technical Workshops"
              description="Hands-on learning experiences with cutting-edge technologies"
              features={['React', 'Node.js', 'Python', 'Cloud']}
            />
            <OpportunityCard
              icon={<Code />}
              title="Hackathons"
              description="Competitive coding events to showcase your skills"
              features={['48hr Coding', 'Team Projects', 'Mentorship', 'Prizes']}
            />
            <OpportunityCard
              icon={<Users />}
              title="Networking"
              description="Connect with industry professionals and peers"
              features={['Tech Talks', 'Alumni Network', 'Industry Visits', 'Mentoring']}
            />
            <OpportunityCard
              icon={<Database />}
              title="Resources"
              description="Access to learning materials and development tools"
              features={['Documentation', 'Code Labs', 'Study Groups', 'Projects']}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-green-500">function</span> FAQ() {'{'}
          </h2>
          <div className="space-y-6">
            <FaqItem
              question="Who can join ITSA?"
              answer="Any student from the IT department can join ITSA. We welcome students from all years who are passionate about technology."
            />
            <FaqItem
              question="How can I become a member?"
              answer="You can become a member by filling out the registration form on our Join Now page and paying the membership fee."
            />
            <FaqItem
              question="What events do you organize?"
              answer="We organize technical workshops, hackathons, coding competitions, seminars, and industry visits throughout the academic year."
            />
            <FaqItem
              question="Are there any membership benefits?"
              answer="Yes! Members get priority access to all events, exclusive resources, networking opportunities, and certificates for participation."
            />
          </div>
          <div className="text-center mt-8 text-green-500">{'}'}</div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="500+" label="Active Members" icon={<Users className="w-6 h-6" />} />
          <StatCard number="50+" label="Annual Events" icon={<Award className="w-6 h-6" />} />
          <StatCard number="30+" label="Industry Partners" icon={<Globe className="w-6 h-6" />} />
          <StatCard number="100%" label="Success Rate" icon={<Shield className="w-6 h-6" />} />
        </div>
      </section> */}
    </div>
  );
}

function OpportunityCard({
  icon,
  title,
  description,
  features
}) {
  return (
    <div className="p-6 border border-green-500/20 hover:border-green-500 transition-colors rounded-lg text-center group backdrop-blur-sm">
      <div className="w-12 h-12 mx-auto mb-4 text-green-500 group-hover:text-green-400 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-green-400 mb-4">{description}</p>
      <ul className="text-sm text-green-400/80 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center justify-center space-x-1">
            <span className="text-green-500">&gt;</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FaqItem({
  question,
  answer,
}) {
  return (
    <div className="border border-green-500/20 rounded-lg p-6 hover:border-green-500 transition-colors">
      <h3 className="text-xl font-bold mb-2 flex items-center">
        <span className="text-green-500 mr-2">const</span>
        {question}
      </h3>
      <p className="text-green-400 pl-4 border-l-2 border-green-500/20">{answer}</p>
    </div>
  );
}

function StatCard({
  number,
  label,
  icon
}) {  
  return (
    <div className="text-center p-6 border border-green-500/20 rounded-lg hover:border-green-500 transition-all transform hover:-translate-y-1">
      <div className="w-12 h-12 mx-auto mb-4 text-green-500 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-1">{number}</div>
      <div className="text-green-400">{label}</div>
    </div>
  );
}

export default Home;
