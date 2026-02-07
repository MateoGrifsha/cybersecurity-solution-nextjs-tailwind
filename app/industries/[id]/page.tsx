"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { industries } from "@/lib/data";
import { ChevronLeft, AlertTriangle, Lightbulb, ShieldCheck, ArrowRight, Activity, Cpu } from "lucide-react";
import { BorderBeam } from "@/components/BorderBeam";
import Link from "next/link";

export default function IndustryDetailPage() {
    const params = useParams();
    const router = useRouter();
    const industry = industries.find((i) => i.id === params.id);

    if (!industry) {
        return (
            <main className="min-h-screen bg-background flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-black mb-4">SECTOR_ERROR: NODE_NOT_FOUND</h1>
                <Link href="/services" className="text-accent-blue hover:underline font-bold technical-label text-xs">Return to Catalog</Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-40 right-0 w-96 h-96 bg-accent-blue/10 blur-[120px] opacity-20 -z-10" />
                <div className="container mx-auto px-6">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors mb-12 technical-label text-[10px] font-bold group"
                    >
                        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Vertical Catalog</span>
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-blue/5 border border-accent-blue/20 mb-8">
                                <industry.icon size={14} className="text-accent-blue" />
                                <span className="technical-label text-[10px] text-accent-blue uppercase tracking-widest font-bold">Specialized Vertical</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none">
                                {industry.name}
                            </h1>

                            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                                {industry.detailedDesc}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative"
                        >
                            <div className="glass-morphism rounded-[2.5rem] p-12 border border-white/10 relative overflow-hidden shadow-glow">
                                <BorderBeam size={250} duration={15} colorFrom="#3b82f6" colorTo="#8b5cf6" />

                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                                            <span className="technical-label text-xs font-bold text-gray-300">SYSTEM_NOMINAL</span>
                                        </div>
                                        <Activity className="text-accent-blue animate-pulse w-5 h-5" />
                                    </div>

                                    <div className="h-px w-full bg-white/5" />

                                    <div className="flex items-center justify-between text-center gap-6">
                                        <div className="flex-1">
                                            <span className="technical-label text-[10px] text-gray-500 block mb-2">UPTIME</span>
                                            <span className="text-2xl font-black text-white">99.9997%</span>
                                        </div>
                                        <div className="w-px h-10 bg-white/10" />
                                        <div className="flex-1">
                                            <span className="technical-label text-[10px] text-gray-500 block mb-2">THREAT_MITIGATION</span>
                                            <span className="text-2xl font-black text-accent-blue">AUTOMATED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-red-500/20 transition-all group"
                        >
                            <div className="flex items-center space-x-3 mb-8">
                                <AlertTriangle className="text-red-500" size={24} />
                                <h3 className="text-2xl font-black tracking-tight uppercase">Critical Challenges</h3>
                            </div>
                            <div className="space-y-4">
                                {industry.challenges.map((challenge, i) => (
                                    <div key={i} className="flex gap-4 items-start pb-4 border-b border-white/5 last:border-0">
                                        <div className="technical-label text-[10px] text-red-500 font-black mt-1">{String(i + 1).padStart(2, '0')}</div>
                                        <p className="text-gray-400 font-medium text-sm">{challenge}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/20 transition-all group"
                        >
                            <div className="flex items-center space-x-3 mb-8">
                                <Lightbulb className="text-accent-blue" size={24} />
                                <h3 className="text-2xl font-black tracking-tight uppercase">Tailored Architectures</h3>
                            </div>
                            <div className="space-y-4">
                                {industry.solutions.map((solution, i) => (
                                    <div key={i} className="flex gap-4 items-start pb-4 border-b border-white/5 last:border-0">
                                        <ShieldCheck className="text-accent-blue mt-0.5" size={16} />
                                        <p className="text-gray-400 font-medium text-sm">{solution}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto glass-morphism p-16 rounded-[4rem] border border-white/10 relative overflow-hidden">
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-blue/10 blur-[100px] -z-10" />
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">Request Industry <span className="text-gradient">Blueprints</span></h2>
                        <p className="text-gray-400 text-lg mb-12 font-medium">Download our deep-dive security architectures specifically designed for the {industry.name} vertical.</p>

                        <Link href="/assessment">
                            <button className="px-12 py-5 bg-white text-background rounded-xl font-bold text-sm technical-label hover:shadow-glow-intense transition-all transform hover:-translate-y-1 active:scale-95 flex items-center mx-auto group overflow-hidden relative">
                                <span className="z-10 flex items-center">
                                    Initialize Vertical Audit
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
