"use client";

import { Check } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";

export default function PricingSection() {
  const tiers = [
    {
      name: "Standard Tier",
      price: "$29.00",
      description: "Core domain identity",
      emoji: "📋",
      features: [
        "Core domain identity",
        "AI-native metadata",
        "Basic profile + support"
      ],
      buttonText: "Get Started",
      buttonVariant: "secondary" as const,
      popular: false
    },
    {
      name: "Developer Tier",
      price: "$49.00",
      description: "For builders and creators",
      emoji: "✨",
      features: [
        "Standard domain registration",
        "Basic agent deployment",
        "API access",
        "Community + Dev Kit access"
      ],
      buttonText: "Choose Developer",
      buttonVariant: "primary" as const,
      popular: true
    },
    {
      name: "Founding Tier",
      price: "$99.00",
      description: "Early access pioneer",
      emoji: "👑",
      features: [
        "Priority domain selection",
        "Advanced agent configuration",
        "Early access to Unified AI tools",
        "Premium support",
        "Founding Member badge"
      ],
      buttonText: "Secure Founding",
      buttonVariant: "gradient" as const,
      popular: false
    },
    {
      name: "Institutional Tier",
      price: "$199.00",
      description: "Enterprise-grade solution",
      emoji: "🏢",
      features: [
        "Multi-domain allocation",
        "Enterprise-grade agent orchestration",
        "White-label infrastructure",
        "Integration and compliance tools"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "secondary" as const,
      popular: false
    }
  ];

  const includedFeatures = [
    "Agentic Domain: Discoverable AI-native identity",
    "Searchable Metadata: Optimized for agent queries",
    "Compute-Ready Endpoint: Instantly deploy agents",
    "API + Permission Controls: Manage who and what connects",
    "Upgradeable Infrastructure: Path to Unified AI deployment stack"
  ];

  return (
    <section id="pricing" className="py-24 text-white relative overflow-hidden">
      {/* Conditional Background - Lightweight on mobile */}
      <ConditionalBackground
        intensity={0.8}
        particleCount={100}
        floatingCount={0}
        gridSize={100}
      />
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            <span>🌅 Sunrise Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Infrastructure Access Tiers
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Structured identity endpoints with upgrade path: Dev → Founding → Institutional.
            Each tier includes compute credits, priority support, and governance rights.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`card relative bg-black/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:scale-105 overflow-hidden ${
                tier.popular
                  ? "border-cyan-500 shadow-xl shadow-cyan-500/20"
                  : "border-cyan-500/20 hover:border-cyan-500/40"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                '--glow-color': '34, 211, 238'
              } as React.CSSProperties}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
                card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
                card.style.setProperty('--glow-intensity', '1');
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.setProperty('--glow-intensity', '0');
              }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-cyan-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Tier Info */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-cyan-400">{tier.price}</span>
                  <span className="text-gray-300 ml-2">one-time</span>
                </div>
                <p className="text-gray-300">{tier.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <div key={`${tier.name}-feature-${feature}`} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  tier.buttonVariant === 'primary'
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-black'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600'
                }`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Included Features */}
        <div className="bg-dark-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-dark-900 mb-6 text-center">
            💡 What's Included in Every Registration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includedFeatures.map((feature) => (
              <div key={`included-feature-${feature}`} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-dark-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Notice */}
        <div className="text-center mt-12">
          <p className="text-lg text-dark-600 mb-4">
            🟡 <strong>Sunrise pricing ends after 1,000 registrations.</strong>
          </p>
          <p className="text-dark-500">
            Secure your domain before general access opens and prices increase.
          </p>
        </div>
      </div>
    </section>
  );
}
