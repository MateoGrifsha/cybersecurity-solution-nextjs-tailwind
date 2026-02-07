"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { BorderBeam } from "./BorderBeam";
import Link from "next/link";
import { services } from "@/lib/data";

const Services = () => {
    return (
        <section id="services" className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-blue/5 border border-accent-blue/20 mb-6"
                        >
                            <span className="technical-label text-[10px] text-accent-blue">Service Catalog v2.4</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-6xl font-black mb-4 tracking-tighter"
                        >
                            ENGINEERED FOR <br />
                            <span className="text-gradient">ABSOLUTE DEFENSE</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-gray-400 max-w-sm text-sm font-medium leading-relaxed"
                    >
                        We provide a multi-layered security stack that protects your digital perimeter 24/7/365 with autonomous intelligence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all group relative overflow-hidden backdrop-blur-sm"
                        >
                            <BorderBeam size={100} duration={12} delay={index * 2} />

                            <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <service.icon className={`w-6 h-6 ${service.color}`} />
                            </div>

                            <span className="technical-label text-[9px] text-gray-500 mb-2 block">{service.label}</span>
                            <h3 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <Link href={`/services/${service.id}`}>
                                <button className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-[9px] technical-label font-bold text-gray-400 flex items-center space-x-2 group/btn hover:bg-white/[0.06] hover:border-white/10 hover:text-white transition-all">
                                    <span>Detailed Specs</span>
                                    <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform text-accent-blue" />
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
