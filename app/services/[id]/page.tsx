"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/data";
import { ChevronLeft, CheckCircle2, Shield, Activity, Lock, Cpu } from "lucide-react";
import { BorderBeam } from "@/components/BorderBeam";
import Link from "next/link";

export default function ServiceDetailPage() {
    const params = useParams();
    const router = useRouter();
    const service = services.find((s) => s.id === params.id);

    if (!service) {
        return (
            <main className="min-h-screen bg-background flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-black mb-4">PROTOCOL_ERROR: NODE_NOT_FOUND</h1>
                <Link href="/" className="text-accent-blue hover:underline">Return to Command Center</Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-40 pb-20 relative overflow-hidden">
                {/* Background glows */}
                <div className={`absolute top-40 left-0 w-96 h-96 ${service.bg} blur-[120px] opacity-20 -z-10`} />

                <div className="container mx-auto px-6">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors mb-12 technical-label text-[10px] font-bold group"
                    >
                        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Catalog</span>
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                                <span className={`w-2 h-2 rounded-full ${service.color} animate-pulse`} />
                                <span className="technical-label text-[10px] text-gray-400 uppercase tracking-widest">Active Module: {service.id.replace('-', '_')}</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none">
                                {service.title}
                            </h1>

                            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                                {service.detailedDescription}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                {service.specs.map((spec, i) => (
                                    <div key={i} className="flex items-center space-x-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <CheckCircle2 size={16} className={service.color} />
                                        <span className="text-sm font-bold text-gray-300 technical-label tracking-tight">{spec}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative"
                        >
                            <div className="glass-morphism rounded-[2.5rem] p-12 border border-white/10 relative overflow-hidden">
                                <BorderBeam size={200} duration={10} colorFrom="#3b82f6" colorTo="#8b5cf6" />

                                <div className={`w-20 h-20 rounded-2xl ${service.bg} flex items-center justify-center mb-12 shadow-glow`}>
                                    <service.icon className={`w-10 h-10 ${service.color}`} />
                                </div>

                                <h3 className="text-2xl font-black mb-8 tracking-tight uppercase">Technical Integration</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="flex items-center space-x-4">
                                            <Shield size={18} className="text-gray-500" />
                                            <span className="text-sm font-bold">Secure Gateway</span>
                                        </div>
                                        <span className="text-[10px] technical-label text-green-500 font-black">ENCRYPTED</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="flex items-center space-x-4">
                                            <Activity size={18} className="text-gray-500" />
                                            <span className="text-sm font-bold">Latency Overhead</span>
                                        </div>
                                        <span className="text-[10px] technical-label text-accent-blue font-black">0.002ms</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="flex items-center space-x-4">
                                            <Cpu size={18} className="text-gray-500" />
                                            <span className="text-sm font-bold">Resource Load</span>
                                        </div>
                                        <span className="text-[10px] technical-label text-gray-500 font-black">OPTIMAL</span>
                                    </div>
                                </div>

                                <Link href="/assessment">
                                    <button className="w-full mt-10 py-5 bg-white text-background rounded-xl font-bold text-sm technical-label hover:shadow-glow-intense transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center group overflow-hidden relative">
                                        <span className="z-10">Request Integration Specs</span>
                                        <div className="absolute inset-0 bg-accent-blue translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                                    </button>
                                </Link>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-blue/10 rounded-full blur-[60px] -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
