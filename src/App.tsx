import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './components/Logo';
import { 
  Palette, 
  Layout, 
  Code, 
  Terminal, 
  ArrowRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Users,
  CheckCircle2,
  Menu,
  X,
  MessageSquare,
  Send,
  Phone,
  MapPin
} from 'lucide-react';

const TEAM = [
  {
    name: "Fahad Malik",
    role: "Graphic Designer",
    icon: <Palette className="w-6 h-6" />,
    bio: "Visual storyteller specializing in brand identity and digital illustrations.",
    skills: ["Branding", "Illustration", "Print Design"],
    color: "from-blue-500 to-blue-700",
    image: null
  },
  {
    name: "Mr. Fazi",
    role: "UI/UX Designer",
    icon: <Layout className="w-6 h-6" />,
    bio: "Crafting intuitive user experiences and beautiful digital interfaces.",
    skills: ["User Research", "Prototyping", "Figma"],
    color: "from-blue-500 to-blue-700",
    image: "https://res.cloudinary.com/dsacnpxmq/image/upload/v1772684208/IMG-20250521-WA0017_lg8iwr.jpg"
  },
  {
    name: "Hanzala Ahmed",
    role: "Frontend Developer",
    icon: <Code className="w-6 h-6" />,
    bio: "Turning designs into pixel-perfect, responsive web applications.",
    skills: ["React", "Tailwind CSS", "Next.js"],
    color: "from-blue-500 to-blue-700",
    image: "https://res.cloudinary.com/dsacnpxmq/image/upload/v1772684218/b9f7cafd-6636-4be5-aa1c-bb053211f003_ykuytg.jpg"
  },
  {
    name: "Sameer Sajid",
    role: "Fullstack Developer",
    icon: <Terminal className="w-6 h-6" />,
    bio: "Building robust backends and scalable system architectures.",
    skills: ["Node.js", "PostgreSQL", "Cloud Architecture"],
    color: "from-blue-500 to-blue-700",
    image: "https://res.cloudinary.com/dsacnpxmq/image/upload/v1772684218/d271ae5e-8238-44d9-b7d4-716955026ce9_jfeg4f.jpg"
  }
];

const SERVICES = [
  {
    title: "Brand Identity",
    description: "We create memorable brands that stand out in the digital landscape.",
    icon: Palette
  },
  {
    title: "UI/UX Design",
    description: "User-centric designs that drive engagement and conversion.",
    icon: Layout
  },
  {
    title: "Web Development",
    description: "High-performance websites built with the latest technologies.",
    icon: Code
  },
  {
    title: "Full-Stack Solutions",
    description: "End-to-end development from database to final deployment.",
    icon: Terminal
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <span className="font-display font-bold text-xl tracking-tight text-zinc-900">Creative Nexus</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#team" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">The Team</a>
            <a href="#work" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">Our Work</a>
            <button className="px-5 py-2.5 bg-zinc-900 text-white rounded-full text-sm font-bold hover:bg-blue-600 transition-all">
              Start a Project
            </button>
          </div>

          <button className="md:hidden text-zinc-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-display font-bold text-zinc-900">
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#team" onClick={() => setIsMenuOpen(false)}>The Team</a>
              <a href="#work" onClick={() => setIsMenuOpen(false)}>Our Work</a>
              <button className="w-full py-4 bg-blue-600 text-white rounded-2xl">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-700/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-blue-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Users className="w-3 h-3" /> Full-Service Creative Agency
            </span>
            <motion.h1 
              className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-[0.9] cursor-default"
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <motion.span 
                className="block text-zinc-400"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  hover: { color: "#18181b", transition: { duration: 0.3 } }
                }}
              >
                Welcome to
              </motion.span>
              <motion.span 
                className="text-gradient block relative"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: 0.2 } },
                  hover: { 
                    scale: 1.02,
                    filter: "brightness(1.1) drop-shadow(0 0 20px rgba(37, 99, 235, 0.2))",
                    transition: { duration: 0.4, ease: "easeOut" }
                  }
                }}
              >
                Creative Nexus.
              </motion.span>
            </motion.h1>
            <motion.p 
              className="max-w-2xl mx-auto text-zinc-600 text-lg md:text-xl mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              The ultimate intersection of design, code, and strategy. We unite four distinct 
              creative forces to build digital experiences that define the next generation of brands.
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-blue-500/20">
                View Our Portfolio <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 rounded-2xl font-bold hover:bg-zinc-50 transition-colors text-zinc-900">
                Meet the Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-zinc-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-zinc-900">Our Expertise</h2>
              <p className="text-zinc-600 text-lg">
                We combine design thinking with technical excellence to deliver products that work as beautifully as they look.
              </p>
            </div>
            <div className="flex items-center gap-4 text-zinc-400 font-mono text-sm">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Strategy</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Design</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Code</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  backgroundColor: "#1d4ed8", // Royal Blue (blue-700)
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="glass-card p-8 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="mb-6 p-3 bg-zinc-50 rounded-xl w-fit group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 border border-zinc-100 group-hover:border-transparent">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-zinc-900 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-zinc-900">The Power of Four</h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Meet the specialists behind Creative Nexus. Each of us brings a unique set of skills 
              to ensure your project is a success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6 bg-zinc-200">
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-10 group-hover:opacity-30 transition-opacity`} />
                  <img 
                    src={member.image || `https://picsum.photos/seed/${member.name.split(' ')[0]}/800/1000`} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-card p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-3">
                        <Github className="w-5 h-5 text-zinc-500 hover:text-blue-600 cursor-pointer" />
                        <Twitter className="w-5 h-5 text-zinc-500 hover:text-blue-600 cursor-pointer" />
                        <Linkedin className="w-5 h-5 text-zinc-500 hover:text-blue-600 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${member.color} text-white`}>
                    {member.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-zinc-900">{member.name}</h3>
                </div>
                <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-zinc-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Social Proof */}
      <section className="py-20 border-y border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-zinc-900">50+</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest font-bold">Projects Done</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-zinc-900">100%</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest font-bold">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-zinc-900">4</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest font-bold">Core Experts</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-zinc-900">24/7</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest font-bold">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden bg-zinc-50">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 tracking-tighter text-zinc-900 leading-tight">
                Ready to build something <span className="text-gradient">extraordinary?</span>
              </h2>
              <p className="text-zinc-600 text-lg mb-12 max-w-lg">
                Whether you have a fully-formed idea or just a spark, our team is ready to help you bring it to life. Let's start a conversation.
              </p>
              
              <div className="space-y-6">
                <div 
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email Us</p>
                    <p className="text-zinc-900 font-bold group-hover:text-blue-600 transition-colors">creativenexus05@gmail.com</p>
                  </div>
                </div>
                
                <a 
                  href="https://wa.me/923056531604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-blue-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">WhatsApp Us</p>
                    <p className="text-zinc-900 font-bold group-hover:text-emerald-600 transition-colors">+92 305 6531604</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-zinc-900 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                  Send us a message
                </h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@example.com" 
                      className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all text-zinc-900"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Your Message</label>
                    <textarea 
                      placeholder="Tell us about your project..." 
                      rows={4}
                      className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all text-zinc-900 resize-none"
                    />
                  </div>

                  <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3 group">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-8">
                  <Mail className="w-8 h-8" />
                </div>
                
                <h3 className="text-3xl font-display font-bold mb-2 text-zinc-900">Send a Message</h3>
                <p className="text-zinc-500 mb-8">We'll get back to you as soon as possible.</p>

                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  setIsContactModalOpen(false);
                }}>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Your Message</label>
                    <textarea 
                      required
                      placeholder="How can we help you?" 
                      rows={6}
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all text-zinc-900 resize-none"
                    />
                  </div>

                  <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3 group">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Decorative background element */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <span className="font-display font-bold text-lg text-zinc-900">Creative Nexus</span>
          </div>
          
          <div className="text-zinc-500 text-sm">
            © 2024 Creative Nexus. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-400 hover:text-blue-600 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-400 hover:text-blue-600 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-400 hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
