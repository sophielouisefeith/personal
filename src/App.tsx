import { useState, useEffect } from 'react';
import CVPage from './components/CVPage';
import SEO from './components/SEO';

const SpiralMarker = ({ className = "" }: { className?: string }) => (
  <svg className={`w-2 h-2 text-[#6B8F7E] animate-[spiralSpin_8s_ease-in-out_infinite] ${className}`} viewBox="0 0 20 20" fill="none">
    <path
      d="M10 2C13.5 2 16 4.5 16 8C16 10.5 14.5 12 12 12C11 12 10 11 10 10C10 9.5 10.5 9 11 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default function App() {
  const [currentHash, setCurrentHash] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('day');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initialize and handle hash changes
  useEffect(() => {
    // Set initial hash from current location
    const initialHash = window.location.hash || '#/';
    setCurrentHash(initialHash);
    
    // If no hash exists, set it to home
    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    const handleHashChange = () => {
      const newHash = window.location.hash;
      setIsTransitioning(true);
      
      // Small delay for smooth transition
      setTimeout(() => {
        setCurrentHash(newHash);
        setIsTransitioning(false);
      }, 150);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Natural rhythm: Time-aware color shifts
  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      if (hour >= 6 && hour < 12) {
        setTimeOfDay('morning'); // 6-12: Fresh morning tones
      } else if (hour >= 12 && hour < 18) {
        setTimeOfDay('day'); // 12-18: Bright day
      } else if (hour >= 18 && hour < 22) {
        setTimeOfDay('evening'); // 18-22: Warm evening
      } else {
        setTimeOfDay('night'); // 22-6: Gentle night
      }
    };

    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const navigateTo = (hash: string) => {
    window.location.hash = hash;
  };

  const handleCVClick = () => {
    navigateTo('#/cv');
  };

  const handleBackToMain = () => {
    navigateTo('#/');
  };

  // Time-aware background colors (subtle)
  const getTimeBasedBg = () => {
    switch (timeOfDay) {
      case 'morning': return 'bg-gradient-to-br from-white via-blue-50/30 to-white';
      case 'day': return 'bg-white';
      case 'evening': return 'bg-gradient-to-br from-white via-orange-50/30 to-white';
      case 'night': return 'bg-gradient-to-br from-white via-purple-50/30 to-white';
      default: return 'bg-white';
    }
  };

  // Show CV page if on #/cv route
  if (currentHash === '#/cv') {
    return (
      <>
        <SEO
          title="Sophie Louise Feith - CV & Resume | Technology Consultant Amsterdam"
          description="Experienced technology consultant CV. Software engineering at Codam, co-founder of Hanah, expertise in AI integration, privacy architecture, and conscious technology design."
          keywords="Sophie Louise Feith CV, technology consultant resume, Amsterdam software engineer, AI integration specialist, privacy architecture, women's health technology, Codam graduate, Hanah co-founder"
          url="https://sophielouisefeith.com/cv"
          structuredData={{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sophie Louise Feith",
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Software Engineering",
                "credentialCategory": "degree",
                "educationalLevel": "Professional Training",
                "recognizedBy": {
                  "@type": "EducationalOrganization",
                  "name": "Codam"
                }
              },
              {
                "@type": "EducationalOccupationalCredential", 
                "name": "Bachelor of Branding",
                "credentialCategory": "degree",
                "educationalLevel": "Bachelor",
                "recognizedBy": {
                  "@type": "EducationalOrganization",
                  "name": "AMFI"
                }
              }
            ],
            "hasOccupation": [
              {
                "@type": "Occupation",
                "name": "Co-founder",
                "occupationLocation": "Amsterdam, Netherlands",
                "skills": "AI Integration, Privacy Architecture, Women's Health Technology"
              }
            ]
          }}
        />
        <div className={`transition-all duration-300 ease-out ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
          <CVPage onBack={handleBackToMain} />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO />
      <div className={`min-h-screen transition-all duration-[5000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${getTimeBasedBg()}`}>
        <div className={`transition-all duration-300 ease-out ${isTransitioning ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
          {/* Navigation */}
          <nav className="relative flex justify-between items-center px-4 md:px-8 py-4 mb-4 sticky top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" role="navigation" aria-label="Main navigation">
            <button 
              onClick={() => navigateTo('#/')}
              className="text-xs hover:text-[#6B8F7E] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              aria-label="Go to homepage"
            >
              Sophie
            </button>
            
            <button
              onClick={handleCVClick}
              className="text-gray-600 hover:text-[#6B8F7E] text-xs transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              aria-label="View CV and resume"
            >
              CV
            </button>
          </nav>

          {/* Main Content */}
          <main className="relative px-4 md:px-8 py-6 md:py-12" role="main">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                {/* Left Column - Main Content */}
                <div className="space-y-10 md:space-y-16">
                  <header className="space-y-5 md:space-y-8 animate-[fadeInUp_1000ms_ease-out] group hover:text-[#6B8F7E] transition-colors duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                    <h1 className="text-lg md:text-xl lg:text-2xl leading-relaxed">
                      At the intersection of technology and <span className="sr-only">conscious</span> conscious design lies a chance to build differently. To create tools that support <span className="sr-only">(non)human</span> (non)human life. In a world that moves fast, it's not just about what we build, but how we build and why.
                    </h1>
                    <div className="text-gray-600 group-hover:text-[#6B8F7E]/80 text-sm md:text-base max-w-2xl space-y-5 md:space-y-6 transition-colors duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                      <p>
                        I work with teams to navigate this space through thoughtful <strong>tech project management</strong>, <strong>ethical AI strategies</strong>, and questions that invite a slower, more grounded kind of progress.<br />
                        How can technology feel soft, intuitive, even quiet?<br />
                        How can it honour <strong>natural rhythms</strong> and meet real (non)human needs?
                      </p>
                      <p>
                        My work is guided by care, curiosity, and a belief that <strong>technology is not neutral</strong>—it reflects the choices we make, and the values we bring into the process. We have the responsibility, and the opportunity, to shape it with intention.
                      </p>
                      <p>
                        Whether I'm designing <strong>secure infrastructure</strong>, building <strong>privacy-aware systems</strong>, or guiding a roadmap from idea to launch, I focus on solutions that support and strengthen human capacity without overwhelming it.
                      </p>
                    </div>
                  </header>

                  {/* Current Work */}
                  <section className="space-y-4 md:space-y-6 group hover:text-[#6B8F7E] transition-colors duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" aria-labelledby="current-work">
                    <div className="space-y-4 md:space-y-6 text-sm md:text-base">
                      <p className="text-gray-900 group-hover:text-[#6B8F7E] transition-colors duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                        <span className="font-medium">Currently co-founding <strong>Hanah</strong></span> — a <strong>private decentralized ecosystem</strong> for women's health data. 
                        Building <strong>cycle-centered design principles</strong> and bridging the gender health gap through <strong>privacy-preserving technologies</strong>.
                      </p>
                      <ul className="text-xs md:text-sm text-gray-500 group-hover:text-[#6B8F7E]/70 space-y-1 pl-4 transition-colors duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" aria-label="Hanah project features">
                        <li>• Private, decentralized health data</li>
                        <li>• Women-centered research participation</li>
                        <li>• <strong>Data sovereignty</strong> &amp; ownership</li>
                        <li>• <strong>Cycle-centered design</strong> principles</li>
                      </ul>
                    </div>
                  </section>

                  {/* Services Section */}
                  <section className="space-y-6 md:space-y-10" aria-labelledby="services">
                    <h2 id="services" className="text-lg md:text-xl">Services</h2>
                    <div className="space-y-5 md:space-y-6">
                      <details className="border-b border-gray-100 pb-5 md:pb-6 group transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-[#6B8F7E]/30">
                        <summary className="cursor-pointer font-medium hover:text-[#6B8F7E] list-none flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                          <span>AI Integration Consulting</span>
                          <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-open:rotate-90" aria-hidden="true">→</span>
                        </summary>
                        <p className="mt-3 text-gray-600 text-xs md:text-sm animate-[fadeIn_500ms_ease-out] group-hover:text-[#6B8F7E]/80 transition-colors duration-500">
                          Strategic guidance for implementing <strong>AI solutions</strong> that enhance workflow and decision-making 
                          rather than overwhelm teams.
                        </p>
                      </details>
                      
                      <details className="border-b border-gray-100 pb-5 md:pb-6 group transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-[#6B8F7E]/30">
                        <summary className="cursor-pointer font-medium hover:text-[#6B8F7E] list-none flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                          <span>Development Work</span>
                          <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-open:rotate-90" aria-hidden="true">→</span>
                        </summary>
                        <p className="mt-3 text-gray-600 text-xs md:text-sm animate-[fadeIn_500ms_ease-out] group-hover:text-[#6B8F7E]/80 transition-colors duration-500">
                          <strong>Full-stack development services</strong> with focus on <strong>user-centered design</strong> and maintaining 
                          the human element in digital solutions.
                        </p>
                      </details>
                      
                      <details className="border-b border-gray-100 pb-5 md:pb-6 group transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-[#6B8F7E]/30">
                        <summary className="cursor-pointer font-medium hover:text-[#6B8F7E] list-none flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                          <span>Security &amp; Privacy Strategy</span>
                          <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-open:rotate-90" aria-hidden="true">→</span>
                        </summary>
                        <p className="mt-3 text-gray-600 text-xs md:text-sm animate-[fadeIn_500ms_ease-out] group-hover:text-[#6B8F7E]/80 transition-colors duration-500">
                          Building <strong>secure systems</strong> that respect user privacy and <strong>data sovereignty</strong>, 
                          especially important for health data and <strong>decentralized systems</strong>.
                        </p>
                      </details>
                      
                      <details className="border-b border-gray-100 pb-5 md:pb-6 group transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-[#6B8F7E]/30">
                        <summary className="cursor-pointer font-medium hover:text-[#6B8F7E] list-none flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                          <span>Project Management</span>
                          <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-open:rotate-90" aria-hidden="true">→</span>
                        </summary>
                        <p className="mt-3 text-gray-600 text-xs md:text-sm animate-[fadeIn_500ms_ease-out] group-hover:text-[#6B8F7E]/80 transition-colors duration-500">
                          <strong>End-to-end project management</strong> for technology initiatives, ensuring delivery 
                          while maintaining focus on <strong>user experience</strong> and <strong>sustainable practices</strong>.
                        </p>
                      </details>
                      
                      <details className="border-b border-gray-100 pb-5 md:pb-6 group transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-[#6B8F7E]/30">
                        <summary className="cursor-pointer font-medium hover:text-[#6B8F7E] list-none flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                          <span>Technology Advisory</span>
                          <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-open:rotate-90" aria-hidden="true">→</span>
                        </summary>
                        <p className="mt-3 text-gray-600 text-xs md:text-sm animate-[fadeIn_500ms_ease-out] group-hover:text-[#6B8F7E]/80 transition-colors duration-500">
                          Strategic thinking partner for <strong>technology decisions</strong> that balance innovation with 
                          <strong>user wellbeing</strong> and <strong>sustainable practices</strong>.
                        </p>
                      </details>
                    </div>
                  </section>
                </div>

                {/* Right Column - About & Contact */}
                <aside className="space-y-10 md:space-y-16">
                  <section className="space-y-5 md:space-y-8 group hover:text-[#6B8F7E] transition-colors duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" aria-labelledby="research-focus">
                    <h2 id="research-focus" className="text-lg md:text-xl">Research Focus</h2>
                    <div className="space-y-3 md:space-y-5 text-xs md:text-sm text-gray-600 group-hover:text-[#6B8F7E]/80 transition-colors duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                      <p>
                        Dedicated to research and development exploring technology's impact on our <strong>natural rhythms</strong>. 
                        How can we create technology that prioritizes <strong>natural cycles</strong> over technological advancement?
                      </p>
                      <p>
                        Particularly interested in preserving <strong>biological clocks</strong> for future generations, 
                        honoring our <strong>biological heritage</strong> while fostering a balanced world where all thrive 
                        in harmony with their <strong>natural cycles</strong>.
                      </p>
                      <ul className="space-y-2 mt-5" aria-label="Research areas">
                        <li className="flex items-center space-x-2">
                          <SpiralMarker aria-hidden="true" />
                          <span><strong>Cycle-centered design</strong> principles</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <SpiralMarker aria-hidden="true" />
                          <span>Preservation of <strong>natural rhythms</strong></span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <SpiralMarker aria-hidden="true" />
                          <span>Technology's impact on <strong>biological cycles</strong></span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <SpiralMarker aria-hidden="true" />
                          <span><strong>Sustainable innovation</strong> practices</span>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Contact */}
                  <section className="space-y-5 md:space-y-8 group hover:text-[#6B8F7E] transition-colors duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" aria-labelledby="contact">
                    <h2 id="contact" className="text-lg md:text-xl">Contact</h2>
                    <div className="space-y-3 md:space-y-5 text-xs md:text-sm">
                      <p className="text-gray-600 group-hover:text-[#6B8F7E]/80 transition-colors duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">Available for <strong>consulting and collaboration</strong></p>
                      <address className="space-y-2 not-italic">
                        <p>
                          <a href="mailto:Sophylouise@pm.me" className="hover:text-[#6B8F7E] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" aria-label="Send email to Sophie">
                            <span>Soph</span><span>ylo</span><span>uise</span><span>@</span><span>pm</span><span>.</span><span>me</span>
                          </a>
                        </p>
                        <p>
                          <a href="https://www.linkedin.com/in/sophie-louise-feith/" className="hover:text-[#6B8F7E] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" rel="noopener noreferrer" target="_blank" aria-label="View Sophie's LinkedIn profile">
                            LinkedIn
                          </a>
                        </p>
                        <p>
                          <a href="https://github.com/sophielouisefeith" className="hover:text-[#6B8F7E] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" rel="noopener noreferrer" target="_blank" aria-label="View Sophie's GitHub profile">
                            GitHub
                          </a>
                        </p>
                      </address>
                      <p className="text-gray-500 group-hover:text-[#6B8F7E]/60 text-xs transition-colors duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                        Response time: Usually within 24-48 hours
                      </p>
                    </div>
                  </section>

                  {/* Areas of Expertise */}
                  <section className="space-y-5 md:space-y-8 group hover:text-[#6B8F7E] transition-colors duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" aria-labelledby="expertise">
                    <h2 id="expertise" className="text-lg md:text-xl">Areas of Expertise</h2>
                    <div className="grid grid-cols-2 gap-3 md:gap-5 text-xs md:text-sm text-gray-600 group-hover:text-[#6B8F7E]/80 transition-colors duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                      <ul className="space-y-2" aria-label="Primary expertise areas">
                        <li className="flex items-center space-x-2">
                          <SpiralMarker aria-hidden="true" />
                          <span><strong>AI Integration</strong></span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <SpiralMarker aria-hidden="true" />
                          <span><strong>Privacy Architecture</strong></span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <SpiralMarker aria-hidden="true" />
                          <span><strong>Decentralized Systems</strong></span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <SpiralMarker aria-hidden="true" />
                          <span>Project Management</span>
                        </li>
                      </ul>
                      <ul className="space-y-2" aria-label="Additional expertise areas">
                        <li className="flex items-center space-x-2">
                          <SpiralMarker aria-hidden="true" />
                          <span><strong>Security Strategy</strong></span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <SpiralMarker aria-hidden="true" />
                          <span>Technology Advisory</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <SpiralMarker aria-hidden="true" />
                          <span>UX Design</span>
                        </li>
                      </ul>
                    </div>
                  </section>
                </aside>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="relative px-4 md:px-8 py-8 md:py-12 border-t border-gray-100 mt-10 md:mt-16" role="contentinfo">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-5 md:space-y-0">
                <p className="text-xs md:text-sm text-gray-600">
                  © 2025 Sophie Louise Feith
                </p>
                <p className="text-xs text-gray-500 group hover:text-[#6B8F7E]/80 transition-colors duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                  Building <strong>technology that enhances</strong> rather than overwhelms
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}