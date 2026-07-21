import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui";
import { Ambulance, ArrowRight, Baby, BarChart3, Bone, Brain, Building, Building2, Check, Clock3, Cloud, Eye, HeartHandshake, HeartPulse, Hospital, Microscope, MoveRight, Pill, ShieldCheck, SquareActivity, Stethoscope, Users, Activity, Headset } from "lucide-react";


export const healthcareSolutions = [
    {
        icon: Building2,
        title: "Multi-Specialty Hospitals",
        slug: "multi-specialty-hospitals",
        image: "/solutions/multi-specialty.png",
        description:
            "Manage every department from a centralized platform designed for large hospitals with multiple specialties and high patient volumes.",
        features: [
            "Department Management",
            "Doctor & Staff Management",
            "Patient Registration",
            "Appointment Scheduling",
            "Operation Theatre Management",
            "Laboratory & Radiology",
            "Billing & Insurance",
            "Inventory Management",
        ],
    },

    {
        icon: Stethoscope,
        title: "Clinics",
        slug: "clinics",
        image: "/solutions/clinic.png",
        description:
            "A lightweight yet powerful solution for clinics to manage appointments, patients, prescriptions, and billing effortlessly.",
        features: [
            "Online Appointment Booking",
            "Patient Records",
            "Prescription Management",
            "Doctor Availability",
            "Billing & Payments",
            "Follow-up Reminders",
            "Medical History",
            "Reports & Analytics",
        ],
    },

    {
        icon: Microscope,
        title: "Diagnostic Centers",
        slug: "diagnostic-centers",
        image: "/solutions/laboratory.png",
        description:
            "Digitize laboratory operations with streamlined test management, report generation, and sample tracking.",
        features: [
            "Test Management",
            "Sample Collection",
            "Barcode Tracking",
            "Digital Reports",
            "Online Report Sharing",
            "Lab Inventory",
            "Result Validation",
            "Analytics Dashboard",
        ],
    },

    {
        icon: Building,
        title: "Multi-Branch Healthcare",
        slug: "multi-branch-healthcare",
        image: "/solutions/multi-branch.png",
        description:
            "Connect multiple hospitals or clinics through one centralized dashboard for seamless management across every location.",
        features: [
            "Centralized Dashboard",
            "Branch-wise Analytics",
            "Shared Patient Database",
            "Staff Management",
            "Role-based Access",
            "Central Billing",
            "Real-time Reports",
            "Cloud Synchronization",
        ],
    },

    {
        icon: HeartPulse,
        title: "Specialty Healthcare Centers",
        slug: "specialty-centers",
        image: "/solutions/specialty.png",
        description:
            "Tailored workflows for specialty hospitals including dental, eye care, cardiology, orthopedics, pediatrics, and more.",
        features: [
            "Custom Patient Workflows",
            "Specialized Medical Records",
            "Treatment Planning",
            "Procedure Scheduling",
            "Digital Prescriptions",
            "Progress Tracking",
            "Patient Follow-ups",
            "Outcome Reports",
        ],
    },
];
const howHospivoHelps = [
    {
        step: "01",
        icon: Hospital,
        title: "Implement Hospivo",
        description:
            "Set up your healthcare organization in minutes with guided onboarding and flexible configuration.",
    },
    {
        step: "02",
        icon: SquareActivity,
        title: "Manage Everything",
        description:
            "Handle patients, doctors, appointments, billing, departments, and reports from one secure platform.",
    },
    {
        step: "03",
        icon: HeartPulse,
        title: "Improve Healthcare Outcomes",
        description:
            "Increase operational efficiency, enhance patient satisfaction, and make informed decisions with actionable insights.",
    },
];

export const benefits = [
    {
        icon: Clock3,
        title: "Save Valuable Time",
        description:
            "Automate repetitive administrative tasks, reduce paperwork, and streamline daily operations so your staff can focus on patient care.",
    },
    {
        icon: HeartHandshake,
        title: "Improve Patient Experience",
        description:
            "Deliver faster appointments, seamless communication, and personalized care with centralized patient information.",
    },
    {
        icon: ShieldCheck,
        title: "Secure & Reliable Data",
        description:
            "Protect sensitive medical records with enterprise-grade security, role-based access, and secure cloud infrastructure.",
    },
    {
        icon: BarChart3,
        title: "Make Smarter Decisions",
        description:
            "Access real-time dashboards, reports, and analytics to monitor hospital performance and make data-driven decisions.",
    },
    {
        icon: Users,
        title: "Boost Team Productivity",
        description:
            "Enable doctors, nurses, and administrators to collaborate efficiently through one unified healthcare platform.",
    },
    {
        icon: Cloud,
        title: "Access Anywhere, Anytime",
        description:
            "Manage your healthcare organization securely from any device with cloud-based access and automatic synchronization.",
    },
];

export const industriesWeServe = [
    {
        icon: Hospital,
        title: "General Hospitals",
        description:
            "Comprehensive solutions for managing departments, patients, doctors, billing, and hospital operations.",
    },
    {
        icon: Stethoscope,
        title: "Clinics",
        description:
            "Simplify appointment scheduling, patient records, prescriptions, and everyday clinic management.",
    },
    {
        icon: Microscope,
        title: "Diagnostic Centers",
        description:
            "Manage laboratory tests, sample tracking, digital reports, and patient diagnostics efficiently.",
    },
    {
        icon: HeartPulse,
        title: "Multi-Specialty Hospitals",
        description:
            "Centralize operations across multiple specialties with one unified healthcare platform.",
    },
    {
        icon: Activity,
        title: "Cardiology Centers",
        description:
            "Streamline cardiac consultations, procedures, patient monitoring, and treatment records.",
    },
    {
        icon: Baby,
        title: "Pediatric Hospitals",
        description:
            "Deliver child-focused healthcare with vaccination tracking, growth records, and family management.",
    },
    {
        icon: Eye,
        title: "Eye Care Centers",
        description:
            "Manage eye examinations, vision testing, surgeries, and optical records with ease.",
    },
    {
        icon: Bone,
        title: "Orthopedic Hospitals",
        description:
            "Organize surgeries, rehabilitation plans, imaging reports, and follow-up appointments.",
    },
    {
        icon: Brain,
        title: "Neurology Centers",
        description:
            "Support neurological consultations, diagnostics, treatments, and long-term patient care.",
    },
    {
        icon: Ambulance,
        title: "Emergency Care",
        description:
            "Coordinate emergency admissions, patient triage, ambulance services, and critical care workflows.",
    },
    {
        icon: Pill,
        title: "Medical Centers",
        description:
            "An all-in-one platform for outpatient services, consultations, diagnostics, and healthcare administration.",
    },
    {
        icon: Building2,
        title: "Healthcare Groups",
        description:
            "Manage multiple hospitals and clinics with centralized reporting, staff management, and shared patient records.",
    },
];
export const iconColors = [
    {
        bg: "bg-cyan-400",
        icon: "text-cyan-100",
    },
    {
        bg: "bg-emerald-400",
        icon: "text-emerald-100",
    },
    {
        bg: "bg-blue-400",
        icon: "text-blue-100",
    },
    {
        bg: "bg-violet-400",
        icon: "text-violet-100",
    },
    {
        bg: "bg-amber-400",
        icon: "text-amber-100",
    },
    {
        bg: "bg-rose-400",
        icon: "text-rose-100",
    },
];

function Solutions() {
    const navigate = useNavigate();
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero-bg.png')" }}
            >
                <div className="absolute inset-0 bg-white/30" />

                <div className="relative max-w-360 mx-auto px-6 lg:px-8 py-12 lg:py-24">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* Left */}
                        <div>
                            <div className="inline-flex rounded-full border border-primary/20 bg-primary-light px-4 py-2 text-primary font-medium">
                                Solutions
                            </div>

                            <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                                Healthcare Solutions
                                <br />
                                <span className="text-primary">
                                    for Every Organization
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                                Whether you're managing a single clinic or a mutli-speciality hospital, Hospivo scales with your healthcare business.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Button
                                    rightIcon={<ArrowRight className="size-5" />}
                                    onClick={() => navigate("/contact")}
                                    size="lg"
                                >
                                    Explore Solutions
                                </Button>

                            </div>

                        </div>

                        {/* Right */}
                        <div className="relative flex justify-center">
                            {/* Background Glow */}
                            <div className="absolute h-130 w-130 rounded-full bg-primary/10 blur-3xl" />

                            <img
                                // src="/dashboard2.png"
                                src="/solutions-banner2.png"
                                alt="Hospital"
                                className="relative z-10 w-full max-w-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* Solutions  */}
            <section className="border-y border-slate-100 bg-slate-50/50">
                <div className="max-w-360 mx-auto px-6 lg:px-8 py-16">
                    <h2 className="text-center text-4xl font-bold text-slate-900">
                        Solutions for Every Healthcare Provider
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-8 text-slate-500">
                        Hospivo is designed to adapt to every healthcare environment—from small clinics to multi-specialty hospitals—providing tailored workflows that improve efficiency and patient care.
                    </p>

                    <div className="mt-14 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {healthcareSolutions?.map((item, index) => {
                            const Icon = item.icon;
                            const color = iconColors[index + 1]
                            return (
                                <div className="group pb-18 relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/3" key={item.slug}>
                                    <div className={`absolute left-6 -top-6 rounded-full  ${color.bg} p-4 shadow-lg`}>
                                        <Icon className={`size-7  ${color.icon}`} />
                                    </div>
                                    <h4 className="mt-7 text-xl font-bold leading-7 text-slate-900">
                                        {item?.title}</h4>
                                    <p className="mt-3 text-base leading-7 text-slate-500">
                                        {item?.description}
                                    </p>

                                    <ul className="mt-5 space-y-2.5">
                                        {item?.features?.map((feat) => (
                                            <li className="text-slate-500 flex items-center gap-2 text-sm">
                                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="absolute bottom-6 max-w-sm text-primary flex items-center gap-2">
                                        Learn more <MoveRight className="size-4" />
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>


            {/*How It Works  */}
            <section>
                <div className="max-w-360 mx-auto px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                            HOW IT WORKS
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-slate-900">
                            How Hospivo Helps You Succeed
                        </h2>

                        <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-8 text-slate-500">
                            A simple process that leads to better healthcare management
                        </p>
                    </div>

                    <div className="mt-12 flex flex-col gap-8 rounded-3xl bg-primary/10 px-6 py-8 lg:flex-row lg:items-start lg:justify-between lg:px-10 lg:py-10">
                        {howHospivoHelps?.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.step}
                                    className="relative flex flex-1 items-start gap-5"
                                >
                                    {/* Step */}
                                    <div className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-primary shadow">
                                        {item.step}
                                    </div>

                                    {/* Icon */}
                                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/20">
                                        <Icon className="h-10 w-10 text-primary" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-7 text-slate-700">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Divider (Desktop Only) */}
                                    {index !== howHospivoHelps.length - 1 && (
                                        <div className="hidden lg:block absolute -right-4 top-1/2 h-14 w-px -translate-y-1/2 bg-primary/20" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* Benefits */}
            <section className="py-16 border-y border-slate-100 bg-slate-700/10">
                <div className="max-w-360 mx-auto px-6 lg:px-8 ">

                    {/* Heading */}
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                            BENEFITS
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-slate-900">
                            Benefits You Can Count On
                        </h2>

                        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-500">
                            Powerful features that helps you run your healthcare organization better.
                        </p>
                    </div>

                    {/* Process */}
                    <div className="relative mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {benefits?.map((item, index) => {
                            const Icon = item.icon;
                            const color = iconColors[index];

                            return (
                                <div
                                    key={item.title}
                                    className="group relative rounded-3xl bg-white border border-slate-200 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex items-start gap-6"
                                >

                                    <div className={`mb-6 flex h-18 w-18 p-5 items-center justify-center rounded-full shadow-sm ${color?.bg}`}>
                                        <Icon className={`h-9 w-9 ${color?.icon}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 leading-7 text-slate-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="border-y border-slate-100 bg-slate-50/50">
                <div className="max-w-360 mx-auto px-6 lg:px-8 py-16">

                    <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        SERVICES
                    </p>

                    <h3 className="mt-3 text-center text-3xl font-bold text-slate-900">
                        Industries We Serve
                    </h3>

                    <p className="mt-3 mx-auto max-w-2xl text-center text-slate-500">
                        Hospivo is trusted by a wide range of healthcare organizaions.
                    </p>

                    <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">

                        {industriesWeServe.map((service) => {
                            const Icon = service?.icon;
                            return (

                                <div
                                    key={service?.title}
                                    className="group flex h-20 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                                >
                                    <Icon className="mr-2 h-6 w-6 text-primary transition group-hover:scale-110 shrink-0" />

                                    <span className="font-medium text-slate-700">
                                        {service?.title}
                                    </span>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </section>

            {/* Ready Section */}
            <section className="my-10">
                <div className="mx-auto max-w-360 px-6 lg:px-8">
                    <div className="overflow-hidden rounded-3xl bg-primary" >
                        <div
                            className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 lg:px-10 py-10"
                        >
                            <div>
                                <div className="max-w-xl">
                                    <h4 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                                        Ready to Transform Your Healthcare Operations?
                                    </h4>

                                    <p className="mt-5 text-lg font-medium text-white/80">
                                        Join hundreds of healthcare organizations already using Hosvipo to deliver better care.
                                    </p>
                                </div>
                                <div className="mt-6 flex w-full flex-col gap-4 sm:flex-row lg:w-auto">
                                    <Button variant="primary" size="md" className="bg-white! text-primary! hover:bg-primary2" rightIcon={<ArrowRight className="size-6" />} onClick={() => { }}>
                                        Book a Demo
                                    </Button>
                                    <Button variant="outline" size="md" className="border-white text-white hover:bg-white hover:text-primary" leftIcon={<Headset className="size-6" />} onClick={() => { }}>
                                        <span>Contact Sales</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative flex justify-center">
                                {/* Background Glow */}
                                <div className="absolute h-60 w-60 rounded-3xl bg-primary/10 blur-3xl" />
                                <img src="/dashboard2.png" alt="" className="relative z-10 w-full max-w-lg rounded-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Solutions
