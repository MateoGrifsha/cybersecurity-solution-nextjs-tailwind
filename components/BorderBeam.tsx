"use client";

import { motion } from "framer-motion";

interface BorderBeamProps {
    size?: number;
    duration?: number;
    anchor?: number;
    borderWidth?: number;
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
}

export const BorderBeam = ({
    size = 200,
    duration = 15,
    anchor = 90,
    borderWidth = 1.5,
    colorFrom = "#3b82f6",
    colorTo = "#8b5cf6",
    delay = 0,
}: BorderBeamProps) => {
    return (
        <div
            style={
                {
                    "--size": size,
                    "--duration": duration,
                    "--anchor": anchor,
                    "--border-width": borderWidth,
                    "--color-from": colorFrom,
                    "--color-to": colorTo,
                    "--delay": delay,
                } as React.CSSProperties
            }
            className="pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] [mask-clip:padding-box,border-box] [mask-composite:exclude] [-webkit-mask-composite:xor] [mask-image:linear-gradient(white,white),linear-gradient(white,white)]"
        >
            <motion.div
                className="absolute aspect-square w-[calc(var(--size)*1px)] animate-border-beam [background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:border-box]"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity,
                    delay: delay,
                }}
            />
        </div>
    );
};
