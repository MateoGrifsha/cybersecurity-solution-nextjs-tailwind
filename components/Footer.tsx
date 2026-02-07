"use client";

import React from "react";
import { Shield, Twitter, Linkedin, Github, ChevronRight } from "lucide-react";
import Link from "next/link";
import { BorderBeam } from "./BorderBeam";

const Footer = () => {
    return (
        <footer className="bg-background pt-32 pb-12 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center space-x-3 group outline-none">
                            <div className="relative">
                                <div className="absolute inset-0 bg-accent-blue/20 blur-md rounded-lg group-hover:bg-accent-blue/40 transition-colors" />
                                <div className="relative bg-background border border-white/10 p-2 rounded-lg group-hover:border-accent-blue/50 transition-colors">
                                    <Shield className="w-5 h-5 text-accent-blue" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black tracking-tighter leading-none text-white">
                                    ABCD<span className="neon-text">.SEC</span>
                                </span>
                                <span className="technical-label text-[8px] text-gray-500">Autonomous Defense</span>
                            </div>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
                            Next-generation cybersecurity orchestration for enterprises that demand elite data integrity and professional defense protocols.
                        </p>
                        <div className="flex space-x-3">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <button key={i} className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center hover:bg-accent-blue/10 hover:border-accent-blue/30 transition-all group/icon">
                                    <Icon className="w-4 h-4 text-gray-500 group-hover/icon:text-white transition-colors" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="technical-label text-[10px] text-white uppercase tracking-[0.2em] mb-8">Infrastructure</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {[
                                { name: "Services", href: "/services" },
                                { name: "Solutions", href: "/solutions" },
                                { name: "Intelligence", href: "/features" },
                                { name: "About Us", href: "/about" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-500 hover:text-accent-blue transition-colors flex items-center group">
                                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="technical-label text-[10px] text-white uppercase tracking-[0.2em] mb-8">Intelligence</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {["Global Matrix", "Neural Team", "Career Nodes", "Signal Contact"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-500 hover:text-accent-blue transition-colors flex items-center group">
                                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        <span>{link}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden">
                        <BorderBeam size={80} duration={20} />
                        <h4 className="technical-label text-[10px] text-white uppercase tracking-[0.2em] mb-6">Neural Feed</h4>
                        <p className="text-gray-500 text-xs mb-6 font-medium leading-relaxed">Stay synchronized with the latest threat intelligence signatures.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Sync endpoint..."
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs outline-none focus:border-accent-blue/50 transition-all w-full technical-label"
                            />
                            <button className="bg-accent-blue text-white px-3 py-2.5 rounded-lg font-black hover:bg-blue-600 transition-colors shadow-glow">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] technical-label font-bold uppercase tracking-widest">
                    <div className="flex items-center space-x-4">
                        <p>© 2026 ABCD.SEC PROTOCOL</p>
                        <span className="text-white/5 hidden md:block">|</span>
                        <p className="text-accent-blue/50 animate-pulse">SYSTEMS ONLINE</p>
                    </div>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Layer</Link>
                        <Link href="#" className="hover:text-white transition-colors">Service Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
