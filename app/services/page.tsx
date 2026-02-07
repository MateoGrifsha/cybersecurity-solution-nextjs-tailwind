"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Building2, Landmark, Stethoscope, Factory, Zap, Globe2, Cpu, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";
import { BorderBeam } from "@/components/BorderBeam";

const ServiceIcons = {
    Offensive: () => (
        <svg viewBox="0 0 200 120" className="w-full h-full">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.2 }} />
                    <stop offset="50%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.1 }} />
                    <stop offset="100%" style={{ stopColor: "transparent", stopOpacity: 0 }} />
                </linearGradient>
            </defs>
            <rect width="200" height="120" fill="url(#grad1)" rx="12" />
            <motion.path
                d="M100 30 L140 70 L100 110 L60 70 Z"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <path d="M70 70 L130 70" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M100 45 L100 95" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="100" cy="70" r="15" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" />
        </svg>
    ),
    Defensive: () => (
        <svg viewBox="0 0 200 120" className="w-full h-full">
            <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.2 }} />
                    <stop offset="50%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.1 }} />
                    <stop offset="100%" style={{ stopColor: "transparent", stopOpacity: 0 }} />
                </linearGradient>
            </defs>
            <rect width="200" height="120" fill="url(#grad2)" rx="12" />
            <motion.path
                d="M70 40 L130 40 L130 90 C130 100 100 110 100 110 C100 110 70 100 70 90 Z"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <rect x="85" y="55" width="30" height="20" rx="4" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
        </svg>
    ),
    GRC: () => (
        <svg viewBox="0 0 200 120" className="w-full h-full">
            <defs>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.2 }} />
                    <stop offset="50%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.1 }} />
                    <stop offset="100%" style={{ stopColor: "transparent", stopOpacity: 0 }} />
                </linearGradient>
            </defs>
            <rect width="200" height="120" fill="url(#grad3)" rx="12" />
            <motion.circle
                cx="100" cy="65" r="35"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <circle cx="100" cy="65" r="25" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.4" />
            <circle cx="100" cy="65" r="15" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
            <path d="M100 30 L100 100" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
            <path d="M65 65 L135 65" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
        </svg>
    )
};

const serviceData = [
    {
        id: "offensive-operations",
        ref: "OFFENSIVE-001",
        IconName: "Offensive"
    },
    {
        id: "defensive-operations",
        ref: "DEFENSIVE-002",
        IconName: "Defensive"
    },
    {
        id: "governance-risk",
        ref: "GRC-003",
        IconName: "GRC"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Core Pillars Section */}
            <section className="pt-40 pb-20">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <span className="technical-label text-[10px] text-gray-500 tracking-[0.3em] font-bold">CORE CAPABILITIES</span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mt-4 tracking-tighter uppercase leading-none">
                            Our <span className="text-gradient">Services</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceData.map((item, i) => {
                            const service = services.find(s => s.id === item.id);
                            if (!service) return null;
                            const Icon = ServiceIcons[item.IconName as keyof typeof ServiceIcons];

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group"
                                >
                                    <div className="mb-6 rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] aspect-video flex items-center justify-center relative">
                                        <Icon />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                                    </div>

                                    <div className="space-y-4">
                                        <span className="technical-label text-[8px] text-accent-blue font-bold">{item.ref}</span>
                                        <h3 className="text-2xl font-black tracking-tight">{service.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                            {service.description}
                                        </p>

                                        <Link href={`/services/${service.id}`}>
                                            <button className="flex items-center space-x-2 text-white/40 hover:text-white transition-colors group/btn cursor-pointer">
                                                <span className="technical-label text-[9px] font-bold uppercase tracking-widest">Explore Node</span>
                                                <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-32 bg-accent/5 relative overflow-hidden border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="technical-label text-[10px] text-accent-blue tracking-[0.3em] font-bold">VERTICAL SPECIALIZATION</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 tracking-tighter uppercase">Industry Specific <span className="text-gradient">Defense</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { id: "banking-finance", name: "Banking & Finance", icon: Landmark, desc: "Ultra-low latency security for HFT hubs and retail banking nodes." },
                            { id: "healthcare", name: "Healthcare", icon: Stethoscope, desc: "HIPAA-compliant zero-trust architectures for patient data silos." },
                            { id: "critical-infra", name: "Critical Infra", icon: Factory, desc: "Hardened SCADA/ICS protection for energy and manufacturing." },
                            { id: "gov-public", name: "Gov & Public", icon: Building2, desc: "Sovereign cloud security and nation-state threat mitigation." }
                        ].map((industry, i) => (
                            <Link key={i} href={`/industries/${industry.id}`}>
                                <div className="p-8 rounded-2xl glass-morphism border border-white/5 hover:border-accent-blue/30 transition-all group h-full cursor-pointer hover:shadow-glow-intense transform hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <industry.icon className="w-6 h-6 text-accent-blue" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 tracking-tight">{industry.name}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed font-medium mb-6">{industry.desc}</p>
                                    <div className="flex items-center space-x-2 text-[9px] technical-label text-accent-blue font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span>Read Protocol</span>
                                        <ChevronRight size={10} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deployment Pipeline */}
            <section className="py-20 md:py-32 bg-background relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-20">
                        <div className="lg:w-1/2 w-full">
                            <span className="technical-label text-[10px] text-gray-500 tracking-[0.3em] font-bold">METHODOLOGY</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-8 tracking-tighter uppercase leading-tight">
                                Autonomous <br />
                                <span className="text-gradient">Activation Pipeline</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg mb-10 md:text-12 leading-relaxed font-medium">
                                We don't just sell tools. We deploy an integrated ecosystem that matures with your infrastructure through four key phases.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
                                {[
                                    { step: "01", title: "Assessment & Entropy Mapping", desc: "Digital footprint analysis and vulnerability identification." },
                                    { step: "02", title: "Neural Orchestration", desc: "Setting up AI-driven monitoring nodes and sensors." },
                                    { step: "03", title: "Policy Enforcement", desc: "Implementing automated containment and zero-trust rules." },
                                    { step: "04", title: "Continuous Evolution", desc: "Real-time threat hunting and adaptive defense tuning." }
                                ].map((phase, i) => (
                                    <div key={i} className="flex gap-4 md:gap-6 items-start p-4 md:p-0 rounded-2xl md:rounded-none bg-white/[0.02] md:bg-transparent border border-white/5 md:border-0">
                                        <span className="technical-label text-accent-blue font-black text-sm">{phase.step}</span>
                                        <div>
                                            <h4 className="font-bold text-white mb-1 text-sm md:text-base">{phase.title}</h4>
                                            <p className="text-gray-500 text-[11px] md:text-xs font-medium">{phase.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full relative">
                            <div className="glass-morphism rounded-[2.5rem] p-6 md:p-10 border border-white/10 relative overflow-hidden shadow-glow">
                                <BorderBeam size={150} duration={12} />
                                <div className="aspect-square flex items-center justify-center max-w-[400px] mx-auto">
                                    <div className="relative w-full h-full">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 flex items-center justify-center scale-90 md:scale-100"
                                        >
                                            <div className="w-[85%] h-[85%] rounded-full border border-dashed border-accent-blue/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]" />
                                            <div className="w-[65%] h-[65%] rounded-full border border-dashed border-accent-purple/30 shadow-[0_0_30px_rgba(139,92,246,0.1)]" />
                                            <div className="w-[45%] h-[45%] rounded-full border border-dashed border-accent-blue/20" />
                                        </motion.div>

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4 animate-pulse">
                                                    <Cpu className="w-6 h-6 md:w-8 md:h-8 text-accent-blue" />
                                                </div>
                                                <span className="technical-label text-[8px] md:text-[10px] text-accent-blue block font-black">SYSTEM_OPTIMIZED</span>
                                                <span className="text-3xl md:text-4xl font-black text-white tracking-tighter mt-2 block">100%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto glass-morphism p-16 rounded-[3rem] border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[80px] -z-10" />
                        <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase">Ready to <span className="text-gradient">Interface?</span></h2>
                        <p className="text-gray-400 text-lg mb-12 font-medium">Get a custom security architecture designed for your specific industry requirements in minutes.</p>

                        <Link href="/assessment">
                            <button className="px-12 py-5 bg-white text-background rounded-xl font-bold text-sm technical-label hover:shadow-glow-intense transition-all transform hover:-translate-y-1 active:scale-95 flex items-center mx-auto group overflow-hidden relative">
                                <span className="z-10 flex items-center">
                                    Start Tactical Assessment
                                    <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-accent-blue translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
