"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 200);
                    return 100;
                }
                return prev + Math.random() * 25;
            });
        }, 80);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background Noise/Grid Effect */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150" />

                    <div className="relative z-10 w-full max-w-md px-10">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-black tracking-tighter uppercase inline-flex items-center">
                                ABCD<span className="text-accent-blue animate-pulse">.SEC</span>
                            </h2>
                            <div className="mt-2 text-gray-500 technical-label text-[8px] tracking-[0.4em] font-bold uppercase">
                                INITIALIZING_SECURE_KERNEL
                            </div>
                        </motion.div>

                        {/* Progress Container */}
                        <div className="relative h-1 w-full bg-white/5 rounded-full overflow-hidden mb-4">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-accent-blue shadow-[0_0_15px_#3b82f6]"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "easeOut" }}
                            />
                        </div>

                        {/* Status Decoding Effect */}
                        <div className="flex justify-between items-center text-[10px] technical-label font-bold">
                            <motion.span
                                key={Math.floor(progress / 20)}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-gray-400"
                            >
                                {progress < 25 && "LOADING_CORE_RESOURCES..."}
                                {progress >= 25 && progress < 50 && "AUTHENTICATING_NODES..."}
                                {progress >= 50 && progress < 75 && "ENCRYPTING_TUNNELS..."}
                                {progress >= 75 && progress < 100 && "DECODING_INTERFACE..."}
                                {progress >= 100 && "SYSTEM_READY"}
                            </motion.span>
                            <span className="text-accent-blue">{Math.round(progress)}%</span>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-10 left-10 text-[8px] technical-label text-gray-600 space-y-1">
                        <div>OP_ID: 0x{Math.random().toString(16).slice(2, 10).toUpperCase()}</div>
                        <div>NODE_LOC: LON_01_SEC</div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
