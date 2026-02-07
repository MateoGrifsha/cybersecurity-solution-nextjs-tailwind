"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, ChevronLeft, Check, ShieldCheck, Mail, User, Building2 } from "lucide-react";

const sections = [
    {
        id: "objective",
        title: "Primary Objective",
        question: "What is your main goal for engaging cybersecurity support?",
        type: "checkbox",
        options: [
            "Conduct technical testing or vulnerability assessment",
            "Enhance detection, response, and resilience capabilities",
            "Achieve or maintain compliance (ISO 27001, GDPR, DORA, NIS 2)",
            "Obtain a structured review of the current security posture"
        ]
    },
    {
        id: "maturity",
        title: "Current Maturity Level",
        question: "Which best describes your current cybersecurity posture?",
        type: "radio",
        options: [
            "Minimal controls or ad hoc security measures",
            "Partial controls, limited visibility or governance",
            "Defined program, lacking external validation",
            "Mature program, seeking optimization or certification readiness"
        ]
    },
    {
        id: "scope",
        title: "Engagement Scope",
        question: "What level of engagement are you considering?",
        type: "radio",
        options: [
            "One-time technical assessment (e.g., penetration test)",
            "60-day improvement or remediation program",
            "Continuous managed service or outsourced security function",
            "Strategic advisory or compliance consulting"
        ]
    },
    {
        id: "compliance",
        title: "Compliance Drivers",
        question: "Which regulations or frameworks are relevant to your operations?",
        type: "checkbox",
        options: [
            "GDPR",
            "ISO 27001 / 27002",
            "DORA",
            "NIS 2",
            "EU AI Act / ISO 42001",
            "Unsure"
        ]
    },
    {
        id: "org",
        title: "Organization Profile",
        question: "Size and sector of your organization",
        type: "radio",
        options: [
            "SME (< 250 employees)",
            "Mid-size (250 – 1 000 employees)",
            "Large enterprise (> 1 000 employees)",
            "Public or regulated entity"
        ]
    },
    {
        id: "industry",
        title: "Industry",
        question: "Select your industry sector",
        type: "radio",
        options: [
            "Automotive",
            "Manufacturing",
            "Finance",
            "Healthcare",
            "Technology",
            "Other"
        ]
    },
    {
        id: "next",
        title: "Preferred Next Step",
        question: "What would you like to receive after this assessment?",
        type: "radio",
        options: [
            "Recommendations report",
            "Technical scope proposal",
            "Service quotation",
            "Readiness workshop"
        ]
    }
];

export default function AssessmentPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleOptionToggle = (sectionId: string, option: string, isRadio: boolean) => {
        setFormData(prev => {
            if (isRadio) return { ...prev, [sectionId]: option };

            const current = prev[sectionId] || [];
            const updated = current.includes(option)
                ? current.filter((i: string) => i !== option)
                : [...current, option];
            return { ...prev, [sectionId]: updated };
        });
    };

    const handleNext = () => {
        if (currentStep < sections.length) {
            setCurrentStep(prev => prev + 1);
        } else {
            setIsSubmitted(true);
        }
    };

    const handlePrev = () => setCurrentStep(prev => prev - 1);


    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-40 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    {!isSubmitted ? (
                        <>
                            <div className="mb-12">
                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                                    <div>
                                        <span className="technical-label text-[10px] text-accent-blue tracking-[0.3em] font-bold uppercase transition-all">Protocol Sequence</span>
                                        <h1 className="text-4xl font-black mt-2 tracking-tighter uppercase">Security Assessment</h1>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="flex items-center -space-x-1">
                                            {[...Array(sections.length + 1)].map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => i <= currentStep + 1 || i < currentStep ? setCurrentStep(i) : null}
                                                    className={`group relative flex items-center justify-center p-2 outline-none ${i > currentStep + 1 ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'}`}
                                                    title={`Go to Step ${i + 1}`}
                                                >
                                                    <div className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${i === currentStep
                                                        ? "bg-accent-blue border-accent-blue scale-125 shadow-glow"
                                                        : i < currentStep
                                                            ? "bg-white/40 border-white/40"
                                                            : "bg-transparent border-white/20 group-hover:border-white/40"
                                                        }`} />

                                                    {i < sections.length && (
                                                        <div className={`absolute left-full w-4 h-px bg-white/10 transition-colors duration-300 ${i < currentStep ? "bg-accent-blue/30" : ""}`} />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="glass-morphism border border-white/10 rounded-[2rem] p-8 md:p-12"
                                >
                                    {currentStep < sections.length ? (
                                        <>
                                            <div className="mb-10">
                                                <h2 className="text-sm technical-label text-gray-400 mb-2 uppercase tracking-widest">{sections[currentStep].title}</h2>
                                                <p className="text-2xl font-bold tracking-tight">{sections[currentStep].question}</p>
                                            </div>

                                            <div className="grid gap-4">
                                                {sections[currentStep].options.map((option) => {
                                                    const isSelected = sections[currentStep].type === 'radio'
                                                        ? formData[sections[currentStep].id] === option
                                                        : (formData[sections[currentStep].id] || []).includes(option);

                                                    return (
                                                        <button
                                                            key={option}
                                                            onClick={() => handleOptionToggle(sections[currentStep].id, option, sections[currentStep].type === 'radio')}
                                                            className={`flex items-center justify-between p-6 rounded-2xl border transition-all text-left ${isSelected
                                                                ? "bg-accent-blue/10 border-accent-blue shadow-glow-intense"
                                                                : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                                                                }`}
                                                        >
                                                            <span className={`font-semibold mr-4 ${isSelected ? "text-white" : "text-gray-400"}`}>{option}</span>
                                                            <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${isSelected ? "bg-accent-blue border-accent-blue" : "border-white/20"
                                                                }`}>
                                                                {isSelected && <Check size={14} className="text-white" />}
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </>
                                    ) : (
                                        <div className="space-y-8">
                                            <div className="mb-10 text-center">
                                                <h2 className="text-sm technical-label text-gray-400 mb-2 uppercase tracking-widest">Final Step</h2>
                                                <p className="text-2xl font-bold tracking-tight">Contact Information</p>
                                                <p className="text-gray-500 text-sm mt-2 font-medium">Almost there! Provide your details so we can send the results.</p>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="technical-label text-[10px] text-gray-500 ml-2">FULL NAME</label>
                                                        <div className="relative">
                                                            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-accent-blue/50 transition-colors" placeholder="John Doe" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="technical-label text-[10px] text-gray-500 ml-2">BUSINESS EMAIL</label>
                                                        <div className="relative">
                                                            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-accent-blue/50 transition-colors" placeholder="john@company.com" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="technical-label text-[10px] text-gray-500 ml-2">ORGANIZATION NAME</label>
                                                    <div className="relative">
                                                        <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-accent-blue/50 transition-colors" placeholder="Acme Corp" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-12 flex items-center justify-between">
                                        <button
                                            onClick={handlePrev}
                                            disabled={currentStep === 0}
                                            className={`flex items-center space-x-2 technical-label text-[10px] font-bold tracking-widest uppercase transition-opacity ${currentStep === 0 ? "opacity-0 pointer-events-none" : "hover:text-accent-blue"}`}
                                        >
                                            <ChevronLeft size={14} />
                                            <span>Back</span>
                                        </button>

                                        <button
                                            onClick={handleNext}
                                            className="px-10 py-4 bg-accent-blue text-white rounded-xl font-bold flex items-center group shadow-glow hover:shadow-glow-intense transition-all transform hover:-translate-y-1"
                                        >
                                            <span>{currentStep === sections.length ? "Submit Assessment" : "Next Protocol"}</span>
                                            <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-24 h-24 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow">
                                <ShieldCheck size={48} className="text-accent-blue" />
                            </div>
                            <h1 className="text-5xl font-black mb-6 tracking-tighter uppercase">Assessment Received</h1>
                            <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed font-medium">
                                Your cybersecurity requirements have been encrypted and sent to our tactical team. We will contact you within 24 hours with a custom strategy.
                            </p>
                            <button
                                onClick={() => window.location.href = "/"}
                                className="mt-12 px-10 py-4 glass-morphism border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all"
                            >
                                Return to Command Center
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
