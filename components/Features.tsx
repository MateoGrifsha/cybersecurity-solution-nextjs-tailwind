"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Cpu,
    Globe,
    Dna,
    Zap,
    Activity
} from "lucide-react";
import { BorderBeam } from "./BorderBeam";

const features = [
    {
        title: "AI-Driven Intelligence",
        label: "NEURAL CORE",
        description: "Our proprietary neural networks analyze billions of data points to predict and prevent zero-day attacks.",
        icon: Cpu,
    },
    {
        title: "Global Infrastructure",
        label: "DISTRIBUTED EDGE",
        description: "Distributed security nodes across 6 continents ensure low-latency protection wherever your data resides.",
        icon: Globe,
    },
    {
        title: "Biometric Verification",
        label: "IDENTITY PROTOCOL",
        description: "Multi-layered identity checks using advanced behavioral biometrics and hardware keys.",
        icon: Dna,
    },
];

const Features = () => {
    return (
        <section id="features" className="py-32 bg-accent/10 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-blue/5 border border-accent-blue/20 mb-6">
                            <span className="technical-label text-[10px] text-accent-blue tracking-widest uppercase">System Capabilities</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tighter">
                            THE NEXUS OF <br />
                            <span className="text-gradient">ADVANCED DEFENSE</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
                            Standard security is obsolete. We offer a proactive, state-led intelligence platform that anticipates threats before they manifest.
                        </p>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-accent-blue/10 group-hover:border-accent-blue/30 transition-all">
                                        <feature.icon className="w-6 h-6 text-accent-blue group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <span className="technical-label text-[9px] text-gray-600 mb-1 block">{feature.label}</span>
                                        <h3 className="font-bold text-xl mb-2 tracking-tight group-hover:text-white transition-colors">{feature.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        {/* Animated UI Mockup */}
                        <div className="relative z-10 glass-morphism rounded-[2.5rem] p-10 border border-white/10 shadow-glow-intense overflow-hidden">
                            <BorderBeam size={150} duration={15} />

                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="technical-label text-[10px] text-gray-500">Live Telemetry</span>
                                    <Activity className="w-4 h-4 text-accent-blue animate-pulse" />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="technical-label text-[9px] text-gray-400">Node Entropy</span>
                                        <span className="technical-label text-[9px] text-accent-blue">Optimized</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "85%" }}
                                            transition={{ duration: 2, delay: 0.5 }}
                                            className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 flex items-end justify-between gap-4">
                                    <div className="flex gap-2 items-end flex-grow">
                                        {[40, 75, 45, 95, 65, 85, 55, 90].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                transition={{ duration: 1, delay: i * 0.1 }}
                                                className="flex-grow w-2 bg-accent-blue/30 rounded-t-sm relative group"
                                            >
                                                <div className="absolute inset-0 bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity rounded-t-sm" />
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="text-right">
                                        <span className="text-4xl font-black text-white tracking-tighter">99.9<span className="text-accent-blue text-lg">%</span></span>
                                        <p className="technical-label text-[8px] text-gray-500 uppercase tracking-[0.2em] mt-1">Uptime Safety Factor</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background depth */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent-blue/10 rounded-full blur-[120px] -z-10" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/20 rounded-full blur-[60px] -z-10 animate-pulse" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Features;
