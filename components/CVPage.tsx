import { ArrowLeft } from 'lucide-react';

interface CVPageProps {
  onBack: () => void;
}

const SpiralMarker = ({ className = "" }: { className?: string }) => (
  <svg className={`w-2 h-2 text-[#6B8F7E] animate-[spiralSpin_8s_ease-in-out_infinite] ${className}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M10 2C13.5 2 16 4.5 16 8C16 10.5 14.5 12 12 12C11 12 10 11 10 10C10 9.5 10.5 9 11 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default function CVPage({ onBack }: CVPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 md:px-8 py-6 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-50" role="banner">
        <nav className="flex justify-between items-center" role="navigation" aria-label="CV navigation">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#6B8F7E] transition-colors duration-200"
            aria-label="Back to main site"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span className="text-sm">Back to main site</span>
          </button>
          <h1 className="text-sm">Sophie Louise Feith - CV</h1>
          <div className="w-16" aria-hidden="true"></div> {/* Spacer for layout balance */}
        </nav>
      </header>

      {/* CV Content */}
      <main className="px-4 md:px-8 py-8 md:py-16" role="main">
        <div className="max-w-6xl mx-auto">
          {/* Resume Header */}
          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl font-medium tracking-wide mb-1">
              <span className="sr-only">Sophie Louise Feith - </span>RESUME — 2025
            </h1>
          </header>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar - About Section */}
            <aside className="lg:col-span-3 space-y-6" role="complementary">
              {/* Column Header */}
              <div className="border-b border-gray-200 pb-2 mb-4">
                <h2 className="text-sm font-medium tracking-wide">ABOUT</h2>
              </div>

              {/* Contact Info */}
              <section className="space-y-1 text-xs group hover:text-[#6B8F7E] transition-colors duration-700" aria-labelledby="contact-info">
                <h3 id="contact-info" className="sr-only">Contact Information</h3>
                <address className="not-italic">
                  <p>Amsterdam,</p>
                  <p>The Netherlands</p>
                  <br />
                  <p><a href="mailto:Sophylouise@pm.me" className="hover:underline">Sophylouise@pm.me</a></p>
                  <p><a href="https://linkedin.com/in/sophie-louise-feith" className="hover:underline" rel="noopener noreferrer" target="_blank">linkedin.com/in/sophie-louise-feith</a></p>
                  <p><a href="https://github.com/sophielouisefeith" className="hover:underline" rel="noopener noreferrer" target="_blank">github.com/sophielouisefeith</a></p>
                </address>
              </section>

              {/* Skills */}
              <section className="space-y-3 group hover:text-[#6B8F7E] transition-colors duration-700" aria-labelledby="skills">
                <h3 id="skills" className="text-sm font-medium tracking-wide">SKILLS</h3>
                <div className="space-y-2 text-xs group-hover:text-[#6B8F7E]/80 transition-colors duration-700">
                  <ul className="space-y-2" aria-label="Professional skills">
                    <li className="flex items-center space-x-2">
                      <SpiralMarker />
                      <span><strong>AI Integration</strong></span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SpiralMarker />
                      <span><strong>Privacy Architecture</strong></span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SpiralMarker />
                      <span>Project Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SpiralMarker />
                      <span><strong>Security Strategy</strong></span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SpiralMarker />
                      <span>UX Design</span>
                    </li>
                  </ul>
                  <br />
                  <ul className="space-y-2" aria-label="Technical skills">
                    <li className="flex items-center space-x-2">
                      <SpiralMarker />
                      <span><strong>C++</strong></span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SpiralMarker />
                      <span><strong>Rust</strong></span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SpiralMarker />
                      <span>JavaScript</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SpiralMarker />
                      <span>TypeScript</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SpiralMarker />
                      <span>Python</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SpiralMarker />
                      <span>React</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SpiralMarker />
                      <span>Node.js</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Languages */}
              <section className="space-y-3 group hover:text-[#6B8F7E] transition-colors duration-700" aria-labelledby="languages">
                <h3 id="languages" className="text-sm font-medium tracking-wide">LANGUAGES</h3>
                <ul className="space-y-2 text-xs group-hover:text-[#6B8F7E]/80 transition-colors duration-700" aria-label="Language proficiency">
                  <li className="flex items-center space-x-2">
                    <SpiralMarker />
                    <span>Dutch - Native</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <SpiralMarker />
                    <span>English - Fluent</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <SpiralMarker />
                    <span>German - Conversational</span>
                  </li>
                </ul>
              </section>

              {/* Education */}
              <section className="space-y-3 group hover:text-[#6B8F7E] transition-colors duration-700" aria-labelledby="education">
                <h3 id="education" className="text-sm font-medium tracking-wide">EDUCATION</h3>
                <div className="space-y-3 text-xs group-hover:text-[#6B8F7E]/80 transition-colors duration-700">
                  <article className="flex items-start space-x-2">
                    <SpiralMarker className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">2019 - 2023</p>
                      <p><strong>Software Engineering</strong></p>
                      <p>Codam</p>
                    </div>
                  </article>
                  <article className="flex items-start space-x-2">
                    <SpiralMarker className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">2014 - 2018</p>
                      <p>Bachelor of <strong>Branding</strong></p>
                      <p>AMFI</p>
                    </div>
                  </article>
                </div>
              </section>

              {/* Interests */}
              <section className="space-y-3 group hover:text-[#6B8F7E] transition-colors duration-700" aria-labelledby="interests">
                <h3 id="interests" className="text-sm font-medium tracking-wide">INTERESTS</h3>
                <div className="space-y-3 text-xs group-hover:text-[#6B8F7E]/80 transition-colors duration-700">
                  <article className="flex items-start space-x-2">
                    <SpiralMarker className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium"><strong>Cycle-Centered Design</strong></p>
                      <p className="font-medium">2024 - Present</p>
                      <p>Research into preserving <strong>natural rhythms</strong> in technology design</p>
                    </div>
                  </article>
                  <article className="flex items-start space-x-2">
                    <SpiralMarker className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium"><strong>Women's Health Technology</strong></p>
                      <p className="font-medium">2023 - Present</p>
                      <p>Advocacy and development of <strong>privacy-first</strong> health data solutions</p>
                    </div>
                  </article>
                </div>
              </section>
            </aside>

            {/* Right Side - Experience Table */}
            <section className="lg:col-span-9" aria-labelledby="experience">
              {/* Table Headers */}
              <div className="grid grid-cols-12 gap-4 border-b border-gray-200 pb-2 mb-6">
                <div className="col-span-3">
                  <h2 id="experience" className="text-sm font-medium tracking-wide">EXPERIENCE</h2>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-medium tracking-wide">TENURE</h3>
                </div>
                <div className="col-span-7">
                  <h3 className="text-sm font-medium tracking-wide">DESCRIPTION</h3>
                </div>
              </div>

              {/* Experience Entries */}
              <div className="space-y-6">
                {/* Hanah */}
                <article className="grid grid-cols-12 gap-4 border-b border-gray-100 pb-6 group hover:text-[#6B8F7E] transition-colors duration-700">
                  <div className="col-span-3">
                    <h4 className="text-sm font-medium">Co-founder</h4>
                  </div>
                  <div className="col-span-2">
                    <time className="text-sm">2024 - Present</time>
                  </div>
                  <div className="col-span-7">
                    <div className="space-y-2 text-sm group-hover:text-[#6B8F7E]/80 transition-colors duration-700">
                      <div className="flex items-center space-x-2">
                        <SpiralMarker />
                        <p className="font-medium"><strong>Hanah</strong></p>
                      </div>
                      <p>
                        <strong>Private decentralized ecosystem</strong> for women's health data. 
                        Building <strong>cycle-centered design principles</strong> and bridging the gender health gap 
                        through <strong>privacy-preserving technologies</strong>.
                      </p>
                      <p>
                        Focus on <strong>data sovereignty</strong>, user ownership, and creating technology that 
                        respects <strong>natural biological rhythms</strong> rather than disrupting them.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Dusk */}
                <article className="grid grid-cols-12 gap-4 border-b border-gray-100 pb-6 group hover:text-[#6B8F7E] transition-colors duration-700">
                  <div className="col-span-3">
                    <h4 className="text-sm font-medium"><strong>Software Engineering Trainee</strong></h4>
                  </div>
                  <div className="col-span-2">
                    <time className="text-sm">2021 - 2022</time>
                  </div>
                  <div className="col-span-7">
                    <div className="space-y-2 text-sm group-hover:text-[#6B8F7E]/80 transition-colors duration-700">
                      <div className="flex items-center space-x-2">
                        <SpiralMarker />
                        <p className="font-medium">Dusk</p>
                      </div>
                      <p>
                        Learning on the job about <strong>Rust</strong>, <strong>WebAssembly</strong>, and <strong>privacy-first technologies</strong> 
                        in the blockchain world. Gained hands-on experience with <strong>zero-knowledge proofs</strong>, 
                        cryptographic protocols, and <strong>secure system architecture</strong>.
                      </p>
                      <p>
                        Contributed to blockchain infrastructure development while building expertise 
                        in <strong>privacy-preserving technologies</strong> and user-centric security solutions.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Freelance */}
                <article className="grid grid-cols-12 gap-4 border-b border-gray-100 pb-6 group hover:text-[#6B8F7E] transition-colors duration-700">
                  <div className="col-span-3">
                    <h4 className="text-sm font-medium">Freelance Project Manager</h4>
                  </div>
                  <div className="col-span-2">
                    <time className="text-sm">2019 - Present</time>
                  </div>
                  <div className="col-span-7">
                    <div className="space-y-2 text-sm group-hover:text-[#6B8F7E]/80 transition-colors duration-700">
                      <div className="flex items-center space-x-2">
                        <SpiralMarker />
                        <p className="font-medium"><strong>Technology Consulting</strong></p>
                      </div>
                      <p>
                        <strong>End-to-end project management</strong> for technology initiatives across multiple clients. 
                        Specializing in <strong>AI integration</strong>, <strong>privacy strategy</strong>, and <strong>sustainable technology practices</strong>.
                      </p>
                      <p>
                        Coordinating development teams, managing product roadmaps, and ensuring 
                        <strong>user-centered solutions</strong> that balance innovation with wellbeing.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Additional Experience - Previous Roles */}
                <article className="grid grid-cols-12 gap-4 border-b border-gray-100 pb-6 group hover:text-[#6B8F7E] transition-colors duration-700">
                  <div className="col-span-3">
                    <h4 className="text-sm font-medium">Brand Strategist</h4>
                  </div>
                  <div className="col-span-2">
                    <time className="text-sm">2018 - 2019</time>
                  </div>
                  <div className="col-span-7">
                    <div className="space-y-2 text-sm group-hover:text-[#6B8F7E]/80 transition-colors duration-700">
                      <div className="flex items-center space-x-2">
                        <SpiralMarker />
                        <p className="font-medium">Various Agencies</p>
                      </div>
                      <p>
                        <strong>Brand strategy</strong> and visual identity design for technology startups and 
                        <strong>sustainable innovation</strong> companies. Focus on <strong>conscious branding</strong> that 
                        reflects values of environmental and social responsibility.
                      </p>
                      <p>
                        Developed brand guidelines, creative direction, and <strong>user experience 
                        strategies</strong> for early-stage companies.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-6 md:py-8 border-t border-gray-100 mt-8 md:mt-16 group hover:text-[#6B8F7E] transition-colors duration-700" role="contentinfo">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <p className="text-xs md:text-sm text-gray-600 group-hover:text-[#6B8F7E]/80 transition-colors duration-700">
              © 2025 Sophie Louise Feith - Confidential CV
            </p>
            <p className="text-xs text-gray-500 group-hover:text-[#6B8F7E]/80 transition-colors duration-700">
              Building <strong>technology that enhances</strong> rather than overwhelms
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}