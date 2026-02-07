"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X, ChevronRight, Binary } from "lucide-react";
import Link from "next/link";
import { BorderBeam } from "./BorderBeam";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "Solutions", href: "/solutions" },
        { name: "About Us", href: "/about" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4" : "py-8"
                }`}
        >
            <div className="container mx-auto px-6">
                <div className={`relative flex justify-between items-center transition-all duration-500 rounded-2xl ${isScrolled ? "glass-morphism px-8 py-3" : "bg-transparent px-6 py-4"
                    }`}>
                    <Link href="/" className="flex items-center space-x-3 group outline-none">
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent-blue/20 blur-md rounded-lg group-hover:bg-accent-blue/40 transition-colors" />
                            <div className="relative bg-background border border-white/10 p-2 rounded-lg group-hover:border-accent-blue/50 transition-colors">
                                <Shield className="w-5 h-5 text-accent-blue" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-black tracking-tighter leading-none">
                                ABCD<span className="neon-text">.SEC</span>
                            </span>
                            <span className="technical-label text-[8px] text-gray-500">Autonomous Defense</span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[11px] technical-label font-bold text-gray-400 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-blue transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}

                        <Link href="/assessment">
                            <button className="relative group px-6 py-2.5 rounded-lg border border-white/10 text-white text-[10px] technical-label font-bold transition-all hover:scale-105 active:scale-95 bg-white/[0.03] hover:bg-white/[0.08] overflow-hidden cursor-pointer hover:shadow-glow-intense hover:border-accent-blue/50">
                                <BorderBeam size={60} duration={8} delay={0} colorFrom="#3b82f6" colorTo="#8b5cf6" />
                                <span className="relative z-10 flex items-center tracking-[0.2em]">
                                    <Binary className="w-3 h-3 mr-2 text-accent-blue animate-pulse" />
                                    Security Assessment
                                </span>
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-[90%] left-6 right-6 glass-morphism border border-white/10 rounded-3xl md:hidden overflow-hidden shadow-2xl z-50 bg-[#030712]/95 backdrop-blur-xl"
                    >
                        <div className="flex flex-col p-8 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm technical-label font-bold flex justify-between items-center group text-gray-400 hover:text-white transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                    <ChevronRight size={14} className="text-gray-600 group-hover:text-accent-blue transition-colors" />
                                </Link>
                            ))}
                            <div className="h-px w-full bg-white/5" />
                            <Link href="/assessment" onClick={() => setIsMobileMenuOpen(false)}>
                                <button className="relative group w-full px-6 py-4 rounded-xl border border-white/10 text-white text-[10px] technical-label font-bold transition-all bg-white/[0.03] overflow-hidden cursor-pointer shadow-glow-intense border-accent-blue/30">
                                    <BorderBeam size={80} duration={8} delay={0} colorFrom="#3b82f6" colorTo="#8b5cf6" />
                                    <span className="relative z-10 flex items-center justify-center tracking-[0.2em]">
                                        <Binary className="w-4 h-4 mr-2 text-accent-blue animate-pulse" />
                                        Security Assessment
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
