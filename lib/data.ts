import { ShieldAlert, CloudLightning, Search, HardDrive, Users, MonitorCheck, Landmark, Stethoscope, Factory, Building2 } from "lucide-react";

export const services = [
    {
        id: "offensive-operations",
        title: "Offensive Operations",
        label: "Red Teaming & Pentesting",
        description: "Simulating real-world attacks and continuous vulnerability management to harden your perimeter.",
        detailedDescription: "Our Offensive Operations combine deep penetration testing with continuous vulnerability scanning. We test your systems, networks, and people like real attackers do, ensuring you fix gaps before they are exploited. This module includes automated exploitation simulations, authenticated scanning, and manual red-teaming exercises designed to push your defenses to their absolute limit.",
        icon: ShieldAlert,
        color: "text-red-500",
        bg: "bg-red-500/10",
        specs: [
            "Methodology: PTES / OSSTMM",
            "Scan Depth: Full Stack (L2-L7)",
            "CVE Database: 150k+ Signatures",
            "Accuracy: 99.9% False Positive Shield"
        ]
    },
    {
        id: "defensive-operations",
        title: "Defensive Operations",
        label: "SOC & Incident Response",
        description: "24/7 AI-driven monitoring, autonomous threat hunting, and rapid breach containment.",
        detailedDescription: "The absolute guard for your digital assets. Our Defensive Operations center provides persistent, real-time visibility into every packet across your network. Using proprietary NEURAL CORE v4 intelligence, we identify anomalous behavior and zero-day signatures in milliseconds. If a threat is detected, our machine-orchestrated playbooks automatically isolate compromised nodes and revoke credentials to minimize blast radius instantly.",
        icon: MonitorCheck,
        color: "text-accent-blue",
        bg: "bg-blue-500/10",
        specs: [
            "Response Time: < 0.05ms",
            "Monitoring: 24/7/365 Elite SOC",
            "Auto-Containment: < 150ms",
            "Orchestration: Playbook-driven IR"
        ]
    },
    {
        id: "cloud-infrastructure",
        title: "Cloud Infrastructure",
        label: "Secure Multi-Cloud",
        description: "Seamless security orchestration across AWS, Azure, and GCP with automated policy enforcement.",
        detailedDescription: "Protect your multi-cloud environment with a unified security posture. Our Cloud Infrastructure module provides deep visibility and control across all major providers. We automate compliance checks, secure your CI/CD pipelines, and ensure that your cloud configurations are always optimized for security. Includes IAM auditing, serverless protection, and container security orchestration across AWS, GCP, and Azure.",
        icon: CloudLightning,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        specs: [
            "Providers: AWS, Azure, GCP, OCI",
            "Compliance: SOC2, HIPAA, GDPR",
            "Automation: Terra-Shield Hooks",
            "Drift Detection: Real-time"
        ]
    },
    {
        id: "data-integrity",
        title: "Data Integrity",
        label: "Quantum Ready Secrets",
        description: "Protecting sensitive assets with post-quantum cryptographic standards and immutable audit logs.",
        detailedDescription: "In the age of quantum computing, standard encryption is obsolete. Our Data Integrity layer uses lattice-based cryptography to ensure your data remains secure even against future threats. We implement zero-knowledge architectures where only you hold the keys, coupled with hardware security modules (HSM) and blockchain-backed immutable logs for a provable chain of custody.",
        icon: HardDrive,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        specs: [
            "Standard: Post-Quantum Lattice (Kyber)",
            "Architecture: Zero-Knowledge Provable",
            "Audit: Blockchain-based Immutable Logs",
            "Storage: Encrypted Object Vaults"
        ]
    },
    {
        id: "zero-trust-identity",
        title: "Zero Trust Identity",
        label: "Behavioral Biometrics",
        description: "Verifying every user through biometric-backed authentication and granular permission layers.",
        detailedDescription: "Identity is the new perimeter. Our Zero Trust Identity module implements a strict 'never trust, always verify' model. We integrate seamlessly with your SSO while adding a mandatory layer of behavioral biometric verification that detects session hijacking and identity theft in real-time based on typing patterns, mouse movements, and access telemetry.",
        icon: Users,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        specs: [
            "MFA: FIDO2 / WebAuthn / Biometric",
            "Protocol: OAuth 2.1 / OIDC",
            "Granularity: Per-request Authorization",
            "Analytics: Behavioral Anomaly Scoring"
        ]
    },
    {
        id: "governance-risk",
        title: "Governance & Risk",
        label: "Continuous Compliance",
        description: "Aligning controls with frameworks like DORA and ISO 27001 while quantified risk impact.",
        detailedDescription: "Transform compliance from a checkbox into a competitive strength. Our Governance & Risk module aligns your security controls with global frameworks like DORA, NIS2, and ISO 27001 in real-time. We provide a quantified dashboard of your organization's risk posture, illustrating the financial impact of potential threats and providing automated exports for auditors.",
        icon: Search,
        color: "text-accent-purple",
        bg: "bg-purple-500/10",
        specs: [
            "Frameworks: ISO 27001, DORA, NIS2",
            "Risk Assessment: Quantitative Impact",
            "Governance: Code-based Controls",
            "Reporting: Automated Auditor Exports"
        ]
    }
];

export const industries = [
    {
        id: "banking-finance",
        name: "Banking & Finance",
        icon: Landmark,
        desc: "Ultra-low latency security for HFT hubs and retail banking nodes.",
        detailedDesc: "The financial sector is the primary target for sophisticated nation-state actors and organized cybercrime. ABCD.SEC provides a military-grade security perimeter designed for high-frequency trading (HFT) environments and distributed retail banking networks. We focus on sub-millisecond threat detection and immutable transaction auditing.",
        challenges: [
            "Real-time transaction fraud detection",
            "SWIFT/ISO 20022 message integrity",
            "Regulatory compliance (DORA, Basel III)",
            "Legacy core banking system hardening"
        ],
        solutions: [
            "Lattice-based encryption for data at rest",
            "AI-driven anomaly detection for trading flows",
            "Hardware Security Modules (HSM) as-a-service",
            "Continuous GRC auditing for central banks"
        ]
    },
    {
        id: "healthcare",
        name: "Healthcare",
        icon: Stethoscope,
        desc: "HIPAA-compliant zero-trust architectures for patient data silos.",
        detailedDesc: "Healthcare infrastructure is increasingly reliant on connected IoT devices and telemedicine platforms. We protect the entire care lifecycle—from patient intake to clinical diagnostics. Our architecture ensures that sensitive HPI/PHI remains strictly confidential while maintaining 99.999% availability for critical life-support systems.",
        challenges: [
            "Ransomware protection for hospital networks",
            "Insecure Medical IoT (IoMT) device isolation",
            "Fragmented patient data interoperability",
            "Strict HIPAA/GDPR data privacy requirements"
        ],
        solutions: [
            "Zero-Trust micro-segmentation for IoMT",
            "Secure Edge computing for diagnosis data",
            "Homomorphic encryption for medical research",
            "Automated incident containment for EMR systems"
        ]
    },
    {
        id: "critical-infra",
        name: "Critical Infra",
        icon: Factory,
        desc: "Hardened SCADA/ICS protection for energy and manufacturing.",
        detailedDesc: "Protecting the backbone of modern society requires a unique understanding of Industrial Control Systems (ICS) and SCADA protocols. We bridge the gap between IT and OT security, providing deep packet inspection for proprietary industrial protocols and ensuring your physical assets are shielded from digital sabotage.",
        challenges: [
            "Legacy SCADA/ICS protocol vulnerabilities",
            "IT/OT convergence risk management",
            "State-sponsored grid sabotage threats",
            "Supply chain compromise in manufacturing"
        ],
        solutions: [
            "Physical/Digital Air-gap orchestration",
            "Unidirectional security gateways (Data Diodes)",
            "Shadow-OT detection and mapping",
            "Industrial-grade threat hunting signatures"
        ]
    },
    {
        id: "gov-public",
        name: "Gov & Public",
        icon: Building2,
        desc: "Sovereign cloud security and nation-state threat mitigation.",
        detailedDesc: "National security depends on the integrity of government digital infrastructure. ABCD.SEC offers sovereign cloud solutions that ensure data remains within specified jurisdictions and is protected by post-quantum encryption standards. We specialize in defending public service nodes from coordinated disinformation and DDoS campaigns.",
        challenges: [
            "Nation-state persistent threat (APT) defense",
            "Data sovereignty and jurisdictional control",
            "Public infrastructure DDoS resilience",
            "Secure digital identity for millions of citizens"
        ],
        solutions: [
            "Sovereign cloud security orchestration",
            "Multi-layer identity verification (EIDAS)",
            "Government-wide threat intelligence sharing",
            "Hardened end-point security for civil servants"
        ]
    }
];
