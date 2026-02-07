"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Shield,
    Zap,
    Target,
    Users,
    Globe,
    Cpu,
    History,
    MessageSquare,
    ArrowRight,
    Trophy,
    CheckCircle2
} from "lucide-react";
import { BorderBeam } from "@/components/BorderBeam";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/10 blur-[150px] -z-10 animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent-purple/10 blur-[120px] -z-10" />

                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="technical-label text-[10px] text-accent-blue tracking-[0.3em] font-bold uppercase mb-6 block">The Genesis Protocol</span>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.9]">
                            Engineering <br />
                            <span className="text-gradient">Absolute Digital</span> <br />
                            Resilience
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl font-medium leading-relaxed">
                            ABCD.SEC was founded on a singular realization: traditional security is failing in an era of autonomous threats. We don't just build firewalls; we engineer self-healing digital ecosystems.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Strategic Pillars - Interactive Grid */}
            <section className="py-24 bg-accent/5 border-y border-white/5 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Target,
                                title: "Offensive Origins",
                                desc: "Our DNA is rooted in elite red-teaming. We understand the attacker's mind because we've mastered it.",
                                tag: "STRATEGY_01"
                            },
                            {
                                icon: Shield,
                                title: "Defensive Mastery",
                                desc: "We translate offensive insights into impenetrable defensive architectures that adapt in real-time.",
                                tag: "ENGINEERING_02"
                            },
                            {
                                icon: Zap,
                                title: "Autonomous Future",
                                desc: "Human scale isn't enough. We leverage neural-orchestration to mitigate threats at the speed of compute.",
                                tag: "INTELLIGENCE_03"
                            }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-10 rounded-[2.5rem] glass-morphism border border-white/5 hover:border-accent-blue/30 transition-all hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-8 border border-accent-blue/20 group-hover:scale-110 transition-transform">
                                    <pillar.icon className="text-accent-blue w-6 h-6" />
                                </div>
                                <span className="technical-label text-[8px] text-gray-500 font-bold tracking-widest mb-2 block">{pillar.tag}</span>
                                <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">{pillar.title}</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Timeline Section */}
            <section className="py-32 bg-background relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="mb-20 text-center">
                        <span className="technical-label text-[10px] text-gray-400 tracking-[0.3em] font-bold uppercase">The Evolution</span>
                        <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tighter uppercase leading-tight">Genesis <span className="text-gradient">& Milestones</span></h2>
                    </div>

                    <div className="relative space-y-24 max-w-5xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

                        {[
                            { year: "2020", title: "Project Alpha", desc: "A coalition of elite security engineers and white-hat hackers initiate the ABCD protocol.", side: "left" },
                            { year: "2021", title: "Neural Core Beta", desc: "First successful deployment of AI-driven threat mitigation for major financial nodes.", side: "right" },
                            { year: "2023", title: "Global Expansion", desc: "Operational hubs established across 4 continents, protecting over 500k critical nodes.", side: "left" },
                            { year: "2025", title: "Nexus v4 Launch", desc: "Full-scale rollout of our post-quantum secure defense architecture across all sectors.", side: "right" }
                        ].map((event, i) => (
                            <div key={i} className={`relative flex items-center ${event.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden md:block w-1/2" />
                                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-accent-blue rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                                <motion.div
                                    initial={{ opacity: 0, x: event.side === 'left' ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className={`w-full md:w-1/2 ${event.side === 'left' ? 'md:pr-20 pl-10 md:pl-0' : 'pl-10 md:pl-20'}`}
                                >
                                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/20 transition-all group">
                                        <span className="text-accent-blue font-black text-xs technical-label mb-2 block tracking-widest italic">{event.year} // NODE_POINT</span>
                                        <h4 className="text-2xl font-black mb-3 tracking-tight uppercase text-white group-hover:text-accent-blue transition-colors">{event.title}</h4>
                                        <p className="text-gray-500 text-sm font-medium leading-relaxed">{event.desc}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Impact - Map Visualization Callout */}
            <section className="py-32 relative group">
                <div className="container mx-auto px-6">
                    <div className="glass-morphism rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 border border-white/10 relative overflow-hidden">
                        <BorderBeam size={200} duration={15} colorFrom="#3b82f6" colorTo="#8b5cf6" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
                            <div>
                                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                                    Global <span className="text-gradient">Threat</span> <br />
                                    Intelligence
                                </h2>
                                <p className="text-gray-400 text-base md:text-lg mb-12 font-medium leading-relaxed">
                                    Our operational footprint spans the globe, providing real-time data from millions of sensors to stay ahead of the most localized state-sponsored threats.
                                </p>

                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <span className="text-4xl font-black text-white block mb-1">120+</span>
                                        <span className="technical-label text-[9px] text-gray-500 font-bold uppercase tracking-widest">Sovereign Regions</span>
                                    </div>
                                    <div>
                                        <span className="text-4xl font-black text-accent-blue block mb-1">0.05ms</span>
                                        <span className="technical-label text-[9px] text-gray-500 font-bold uppercase tracking-widest">Global P50 Latency</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative aspect-square flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        opacity: [0.6, 0.8, 0.6]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-accent-blue/10 rounded-full blur-[80px]"
                                />
                                <div className="w-[80%] h-[80%] border-2 border-dashed border-white/10 rounded-full animate-spin-slow flex items-center justify-center p-12">
                                    <Globe size={180} className="text-accent-blue opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="technical-label text-[10px] font-bold text-accent-blue animate-pulse">MAP_SYNCHRONIZED</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Security Council (Leadership) */}
            <section className="py-32 bg-background">
                <div className="container mx-auto px-6 text-center">
                    <div className="mb-20">
                        <span className="technical-label text-[10px] text-gray-500 tracking-[0.3em] font-bold uppercase">The Architects</span>
                        <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tighter uppercase">The Security <span className="text-gradient">Council</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "DR. ELARA VANCE", role: "Chief Security Architect", node: "CX-01" },
                            { name: "MARCUS CHENG", role: "Offensive Ops Director", node: "OX-05" },
                            { name: "SARA AL-FRAY", role: "Head of Neural Defense", node: "NX-09" },
                            { name: "VIKTOR MOROZ", role: "Principal GRC Strategist", node: "GX-12" }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/30 transition-all text-left relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-black technical-label text-4xl">{member.node}</div>
                                <div className="w-16 h-16 rounded-full bg-accent-blue/5 mb-6 border border-white/10 flex items-center justify-center overflow-hidden">
                                    <Users className="text-gray-700" size={32} />
                                </div>
                                <h4 className="text-xl font-black mb-1 tracking-tight uppercase group-hover:text-accent-blue transition-colors">{member.name}</h4>
                                <p className="text-gray-500 text-xs font-bold technical-label uppercase tracking-widest mb-6">{member.role}</p>

                                <div className="h-px w-10 bg-accent-blue/30 mb-6 group-hover:w-full transition-all duration-500" />

                                <div className="flex items-center space-x-2 text-[9px] technical-label text-white/40 group-hover:text-white transition-colors cursor-pointer">
                                    <span>View Intelligence Profile</span>
                                    <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Trust */}
            <section className="py-20 bg-accent/5 border-t border-white/5">
                <div className="container mx-auto px-6 overflow-hidden">
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        {["SOC2 TYPE II", "SANS INSTITUTE", "PTES CERTIFIED", "OSCP ELITE", "HIPAA SECURE"].map((cert, i) => (
                            <div key={i} className="flex items-center space-x-2">
                                <Trophy size={16} className="text-accent-blue" />
                                <span className="technical-label text-[10px] font-black tracking-[0.2em]">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto glass-morphism p-20 rounded-[4rem] border border-white/10 relative overflow-hidden">
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-blue/10 blur-[100px] -z-10" />
                        <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none text-white">READY TO JOIN <br /><span className="text-gradient">THE PROTOCOL?</span></h2>
                        <p className="text-gray-400 text-xl mb-12 font-medium max-w-xl mx-auto italic">"We don't just secure your data. We orchestrate your digital sovereignty."</p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link href="/assessment">
                                <button className="px-10 py-5 bg-white text-background rounded-2xl font-black text-xs technical-label hover:shadow-glow-intense transition-all transform hover:-translate-y-1 active:scale-95 flex items-center group uppercase tracking-widest whitespace-nowrap">
                                    Start Tactical Assessment
                                    <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link href="/services">
                                <button className="px-10 py-5 border border-white/10 text-white rounded-2xl font-black text-xs technical-label hover:bg-white/5 transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest whitespace-nowrap">
                                    Explore Node Catalog
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
