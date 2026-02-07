"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Zap, ArrowRight, ChevronRight } from "lucide-react";
import { BorderBeam } from "./BorderBeam";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Decorative SVG Patterns */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hexagons" width="100" height="173.2" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
                            <path d="M50 0 L100 28.8 L100 86.6 L50 115.4 L0 86.6 L0 28.8 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/10" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexagons)" />
                </svg>
            </div>

            <div className="scanline z-20" />

            {/* Background Blobs with glass/gradient depth */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/40 rounded-full blur-[160px] opacity-40 z-0" />
            <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent-blue/30 rounded-full blur-[180px] opacity-30 z-0" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 relative group cursor-default">
                        <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                        <span className="technical-label text-[10px] text-gray-300">System Status: Secure</span>
                        <ChevronRight className="w-3 h-3 text-gray-500 group-hover:translate-x-0.5 transition-transform" />
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[1.1] tracking-tighter">
                        DEFEND YOUR <br />
                        <span className="text-gradient">DIGITAL ESTATE</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                        Next-generation autonomous security systems designed to protect, detect, and remediate at machine speed.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
                >
                    <button className="relative px-10 py-5 bg-white text-background rounded-xl font-bold text-sm technical-label hover:shadow-glow-intense transition-all transform hover:-translate-y-1 active:scale-95 flex items-center group overflow-hidden">
                        <span className="z-10 flex items-center">
                            <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-3 animate-ping" />
                            Initialize Defense
                        </span>
                        <ArrowRight className="z-10 ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-accent-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out -z-0" />
                    </button>

                    <button className="px-10 py-5 glass-morphism rounded-xl font-bold text-sm technical-label hover:bg-white/10 transition-all border border-white/10 flex items-center relative group">
                        <BorderBeam size={100} duration={10} borderWidth={1.5} delay={5} />
                        <span className="tracking-[0.2em]">Read Intelligence</span>
                    </button>
                </motion.div>

                {/* Feature badges with enhanced fidelity */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                    {[
                        { icon: ShieldCheck, title: "Threat Vector", val: "0.02ms Response", color: "text-accent-blue" },
                        { icon: Lock, title: "Vault Engine", val: "AESA-256 Poly", color: "text-accent-purple" },
                        { icon: Zap, title: "Compute Load", val: "Optimized 0.04%", color: "text-yellow-500" },
                    ].map((item, i) => (
                        <div key={i} className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm group overflow-hidden">
                            <BorderBeam size={80} duration={20 + i * 5} delay={i * 2} />
                            <div className="flex items-center space-x-4">
                                <div className={`p-3 rounded-xl bg-white/5 ${item.color}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <h3 className="technical-label text-[10px] text-gray-500 mb-1">{item.title}</h3>
                                    <p className="font-bold text-sm tracking-tight">{item.val}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
