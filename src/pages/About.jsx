import React from 'react'
import { Users, Globe, Award, TrendingUp, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import useScrollReveal from '../hooks/useScrollReveal'

function RevealCard({ children, delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const STATS = [
  { icon: Users, value: '175+', label: 'Countries Served' },
  { icon: Globe, value: '100+', label: 'Trading Instruments' },
  { icon: Award, value: 'Fast', label: 'Execution Speed' },
  { icon: TrendingUp, value: '24/7', label: 'Customer Support' },
]

const MILESTONES = [
  { year: '2020', title: 'Company Founded', desc: 'Fexness was established with a vision to democratize forex trading and provide professional-grade tools to all traders.' },
  { year: '2021', title: 'Platform Launch', desc: 'Launched our advanced trading platform with lightning-fast execution and competitive spreads.' },
  { year: '2022', title: 'Global Expansion', desc: 'Expanded services to 175+ countries with multilingual support and localized payment methods.' },
  { year: '2023', title: 'Regulatory License', desc: 'Obtained regulatory authorization ensuring compliance and client protection.' },
  { year: '2024', title: 'Technology Innovation', desc: 'Introduced next-generation trading infrastructure with advanced order management and risk monitoring.' },
  { year: '2025', title: 'Market Leader', desc: 'Recognized as a leading broker offering transparent pricing and exceptional customer support.' },
]

const TEAM = [
  { name: 'James Al-Farsi', role: 'Chief Executive Officer', img: 'https://picsum.photos/seed/ceo/200/200' },
  { name: 'Sarah Nkomo', role: 'Chief Operating Officer', img: 'https://picsum.photos/seed/coo/200/200' },
  { name: 'David Chen', role: 'Chief Technology Officer', img: 'https://picsum.photos/seed/cto/200/200' },
  { name: 'Priya Sharma', role: 'Head of Compliance', img: 'https://picsum.photos/seed/compliance/200/200' },
]

export default function About() {
  return (
    <div>
      <PageHero
        title="About Fexness"
        subtitle="Empowering traders worldwide with professional-grade technology and transparent pricing."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
      />

      {/* Stats */}
      <Section gray>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div className="text-center bg-white rounded-2xl p-6 shadow-sm card-hover">
                <div className="inline-flex p-3 rounded-xl bg-gold-100 text-gold-600 mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-gold-600">{value}</div>
                <div className="text-gray-500 text-sm mt-1">{label}</div>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* Mission */}
      <Section title="Our Story">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=450&fit=crop" alt="Our Story" className="rounded-2xl shadow-lg w-full object-cover" />
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to democratize forex trading, Fexness emerged from a simple belief: every trader deserves access to professional-grade tools, transparent pricing, and exceptional support.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What started as a mission to provide zero-spread trading has evolved into a comprehensive trading ecosystem. Today, we serve traders across 175 countries, offering access to 100+ instruments with lightning-fast execution and industry-leading technology.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our journey is driven by innovation, integrity, and an unwavering commitment to our traders' success. We don't just facilitate trades—we empower traders to reach their full potential.
            </p>
            {['Regulated & Licensed', 'Transparent Pricing', 'Competitive spreads', 'Multi-asset trading platform', '24/7 Customer Support'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section title="Our Journey" subtitle="From startup to global broker — key milestones" gray>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-0.5 w-0.5 bg-gold-200 h-full top-0" />
          {MILESTONES.map((m, i) => (
            <RevealCard key={i} delay={i * 80}>
              <div className={`flex items-start gap-6 mb-10 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 text-right pr-8">
                  {i % 2 === 0 && (
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                      <span className="text-gold-600 font-bold text-sm">{m.year}</span>
                      <h4 className="font-bold mt-1">{m.title}</h4>
                      <p className="text-gray-500 text-sm mt-1">{m.desc}</p>
                    </div>
                  )}
                </div>
                <div className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center z-10 font-bold text-xs flex-shrink-0 mt-1">
                  {i + 1}
                </div>
                <div className="w-1/2 pl-8">
                  {i % 2 !== 0 && (
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                      <span className="text-gold-600 font-bold text-sm">{m.year}</span>
                      <h4 className="font-bold mt-1">{m.title}</h4>
                      <p className="text-gray-500 text-sm mt-1">{m.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section title="Meet the Leadership" subtitle="Experienced professionals driving Fexness forward">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div className="text-center card-hover bg-white rounded-2xl p-5 shadow-sm border">
                <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full mx-auto object-cover mb-3" />
                <h4 className="font-bold">{member.name}</h4>
                <p className="text-gold-600 text-sm mt-0.5">{member.role}</p>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>
    </div>
  )
}
