"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ChevronRight,
    Cpu,
    ShieldCheck,
    Zap,
    Globe2,
    Activity,
    Search,
    ArrowRight,
    Terminal,
    Lock,
    Database,
    Network
} from "lucide-react";
import Link from "next/link";
import { BorderBeam } from "@/components/BorderBeam";

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 blur-[150px] -z-10 animate-pulse" />
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-blue/5 border border-white/10 mb-8"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                            <span className="technical-label text-[10px] text-accent-blue font-bold tracking-widest uppercase">System Architecture v4.0</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                            Autonomous <br />
                            <span className="text-gradient">Defense Matrix</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl font-medium leading-relaxed mb-12">
                            A multi-layered ecosystem of neural nodes and cryptographic barriers, designed to intercept zero-day threats at the packet level.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technical Matrix Section */}
            <section className="py-20 bg-background relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
                        <div>
                            <span className="technical-label text-[10px] text-accent-blue tracking-[0.3em] font-bold uppercase">INTELLIGENCE_LAYERS</span>
                            <h2 className="text-3xl font-black mt-2 tracking-tight uppercase">Technical <span className="text-gradient">Matrix</span></h2>
                        </div>
                        <div className="hidden md:flex gap-4">
                            <div className="flex flex-col items-end text-right">
                                <span className="technical-label text-[8px] text-gray-500 uppercase">SYS_LOAD</span>
                                <span className="text-xs font-bold text-accent-blue font-mono">14.4%</span>
                            </div>
                            <div className="w-px h-8 bg-white/10" />
                            <div className="flex flex-col items-end text-right">
                                <span className="technical-label text-[8px] text-gray-500 uppercase">ACTIVE_THREATS</span>
                                <span className="text-xs font-bold text-red-500 font-mono">0.00</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 font-bold">
                        {[
                            { name: "Neural Core v4", icon: Cpu, val: "ACTIVE", detail: "Self-learning L7 analysis node" },
                            { name: "Lattice-Crypt", icon: ShieldCheck, val: "0.05ms", detail: "Post-quantum secure handshakes" },
                            { name: "ISO-SOAR", icon: Zap, val: "ORCHESTRATED", detail: "Automated playbook execution engine" },
                            { name: "Edge Sentinel", icon: Globe2, val: "GLOBAL", detail: "Distributed perimeter scrubbing" },
                            { name: "Entropy-Guard", icon: Activity, val: "STABLE", detail: "Statistical anomaly protection" },
                            { name: "Dark Node Scan", icon: Search, val: "CONTINUOUS", detail: "Deep web threat intelligence" }
                        ].map((node, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                                className="p-6 rounded-xl glass-morphism border border-white/5 transition-all group relative overflow-hidden aspect-square flex flex-col justify-center items-center text-center"
                            >
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <node.icon className="w-6 h-6 text-accent-blue mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                <h4 className="text-[10px] font-black uppercase tracking-wider mb-1">{node.name}</h4>
                                <div className="text-[8px] technical-label text-accent-blue font-bold mb-4">{node.val}</div>
                                <p className="text-[9px] text-gray-500 leading-tight font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">{node.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Implementation Section */}
            <section className="py-32 bg-accent/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div>
                                <span className="technical-label text-[10px] text-accent-blue font-bold tracking-[0.3em] uppercase">INTEGRATION_PROTOCOLS</span>
                                <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tighter uppercase leading-[0.9]">Deep Stack <br /><span className="text-gradient">Security Control</span></h2>
                            </div>

                            <div className="space-y-8">
                                {[
                                    { icon: Terminal, title: "Kernel-Level Monitoring", desc: "Hooks directly into the OS kernel to detect privilege escalation in real-time." },
                                    { icon: Lock, title: "Zero-Knowledge Vaults", desc: "Data is encrypted at-rest and in-transit without ever leaving your perimeter." },
                                    { icon: Database, title: "Immutable Data Ledger", desc: "Every system change is logged to a write-once ledger for forensic audit-ready compliance." },
                                    { icon: Network, title: "Neural Mesh Network", desc: "Nodes communicate peer-to-peer to share global threat intelligence in milliseconds." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20 group-hover:scale-110 transition-all shadow-glow flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-accent-blue" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-1 tracking-tight">{item.title}</h4>
                                            <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="glass-morphism rounded-[3rem] p-1 border border-white/10 aspect-square relative overflow-hidden group">
                                <BorderBeam size={200} duration={10} colorFrom="#3b82f6" colorTo="#8b5cf6" />
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent flex items-center justify-center">
                                    <div className="relative w-full h-full p-20">
                                        {/* Abstract data flow visualization mockup */}
                                        <svg viewBox="0 0 400 400" className="w-full h-full opacity-30 group-hover:opacity-60 transition-opacity">
                                            <motion.circle
                                                cx="200" cy="200" r="150" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="10 20"
                                                animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                            />
                                            <motion.circle
                                                cx="200" cy="200" r="100" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5 15"
                                                animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            />
                                            <motion.path
                                                d="M200 50 L350 200 L200 350 L50 200 Z" fill="none" stroke="#3b82f6" strokeWidth="1"
                                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2 }}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center font-bold">
                                                <div className="text-accent-blue text-xs technical-label mb-2">SECURE_CORE</div>
                                                <div className="text-5xl font-black tracking-tighter">ENCRYPTED</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Node Feed */}
            <section className="py-20 border-y border-white/5 bg-white/[0.01] overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex items-center space-x-4 mb-10 justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                        <span className="technical-label text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 font-bold">Live Protected Cluster Feed</span>
                    </div>

                    <div className="flex gap-4 relative">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="flex gap-4 whitespace-nowrap"
                        >
                            {[...Array(20)].map((_, i) => (
                                <div key={i} className="px-6 py-4 rounded-xl border border-white/5 bg-background/50 glass-morphism flex items-center space-x-4">
                                    <div className="w-2 h-2 rounded-full bg-accent-blue opacity-50" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] technical-label font-black text-gray-400">NODE_XA{1000 + i}</span>
                                        <span className="text-[9px] font-mono text-accent-blue flex items-center font-bold">
                                            <Activity size={10} className="mr-1" /> ACTIVE_PING
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto glass-morphism p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/20 blur-[150px] -z-10" />
                        <h2 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none text-white">DEPLOY YOUR <br /><span className="text-gradient">DEFENSE MATRIX</span></h2>
                        <p className="text-gray-400 text-base md:text-xl mb-12 font-medium max-w-xl mx-auto">Interface with our security architects to design a bespoke architecture for your infrastructure.</p>

                        <Link href="/assessment">
                            <button className="px-12 py-6 bg-white text-background rounded-2xl font-black text-xs technical-label hover:shadow-glow-intense transition-all transform hover:-translate-y-1 active:scale-95 flex items-center mx-auto group overflow-hidden relative uppercase tracking-[0.2em] font-bold">
                                <span className="z-10 flex items-center">
                                    Start Tactical Assessment
                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
