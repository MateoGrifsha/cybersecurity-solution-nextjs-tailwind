"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
    "TECH-CORP //",
    "CYBER-SYNC //",
    "NEXUS-LABS //",
    "SHIELD-TECH //",
    "QUANTUM-SYSTEMS //",
    "VIRTUAL-FORTRESS //"
];

const Trust = () => {
    return (
        <section id="trust" className="py-24 border-y border-white/5 overflow-hidden bg-background relative">
            {/* Background elements */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="container mx-auto px-6 mb-16">
                <div className="flex flex-col items-center">
                    <div className="w-1 h-8 bg-accent-blue/30 mb-6" />
                    <p className="technical-label text-[10px] text-gray-500 tracking-[0.3em] uppercase">
                        Strategic Infrastructure Partners
                    </p>
                </div>
            </div>

            <div className="flex overflow-hidden group">
                <motion.div
                    animate={{ x: [0, -1920] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex space-x-24 whitespace-nowrap py-10"
                >
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <span
                            key={index}
                            className="text-5xl md:text-7xl font-black text-white/[0.03] hover:text-accent-blue/20 transition-all duration-700 cursor-default select-none tracking-tighter"
                        >
                            {partner}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Trust;
