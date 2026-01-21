import { Metadata } from "next";
import Image from "next/image";
import { Shield, Compass, Anchor, Code, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Values",
  description: "Our values guide everything we do. Integrity, stewardship, and excellence in software development.",
};

export default function ValuesPage() {
  const values = [
    {
      icon: Anchor,
      title: "Innovation",
      description: "We are committed to pioneering digital solutions that empower businesses to thrive in an ever-changing technological landscape. Innovation drives everything we do, from cutting-edge technology choices to creative problem-solving approaches.",
      details: [
        "Pioneering digital solutions",
        "Cutting-edge technology adoption",
        "Creative problem-solving",
        "Future-ready approaches",
      ],
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Our values are rooted in integrity, guiding our actions and decisions as we strive to deliver exceptional services. We maintain the highest ethical standards in all our business relationships and technical implementations.",
      details: [
        "Ethical business practices",
        "Transparent communication",
        "Honest client relationships",
        "Reliable service delivery",
      ],
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of collaboration, working closely with our clients and partners to achieve shared success. Our Agile-Scrum methodology promotes collaboration, flexibility, and iterative progress.",
      details: [
        "Client-partner relationships",
        "Agile-Scrum methodology",
        "Team collaboration",
        "Stakeholder engagement",
      ],
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive to deliver exceptional services to our clients and partners, setting industry standards and driving impactful change. Excellence is reflected in every project, every line of code, and every client interaction.",
      details: [
        "Exceptional service delivery",
        "Industry standard setting",
        "Quality-focused approach",
        "Continuous improvement",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark via-navy to-navy-light pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&q=80"
            alt="Values Background"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-light/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Values
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Our values are rooted in innovation, integrity, collaboration, and excellence, guiding our actions and decisions as we strive to deliver exceptional services to our clients and partners.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80"
            alt="Values Grid Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-light/95 via-navy/90 to-navy-dark/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {values.map((value, index) => {
              const valueImages = [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
                "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop&q=80",
              ];
              return (
                <div
                  key={value.title}
                  className="bg-navy-light/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all hover:bg-navy-light/50 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={valueImages[index % valueImages.length]}
                      alt={value.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/50 to-transparent" />
                    <div className="absolute top-4 left-4 w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-gold/30 transition-colors">
                      <value.icon className="h-8 w-8 text-gold" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="text-white font-display text-xl font-bold mb-3">
                      {value.title}
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {value.description}
                    </p>
                    <ul className="space-y-2">
                      {value.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-400">
                          <span className="text-gold mr-2 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80"
            alt="Mission Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-light/95 via-navy/90 to-navy-dark/95" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              To empower businesses through innovative digital solutions that enhance efficiency, drive growth, and ensure sustainability in an evolving technological landscape, ultimately preparing them for future challenges.
            </p>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
              At ARK DIGITAL, we are committed to pioneering digital solutions that empower businesses to thrive in an ever-changing technological landscape, driving growth through tailored software development and digital transformation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
