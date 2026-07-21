import { Check } from "lucide-react";
import { Button } from "../components/ui";

export interface PricingPlan {
    name: string;
    slug: string;
    price: string;
    duration: string;
    description: string;
    buttonText: string;
    highlighted: boolean;
    badge?: string;
    features: string[];
}

export const pricingPlans: PricingPlan[] = [
    {
        name: "Free",
        slug: "free",
        price: "₹0",
        duration: "/month",
        description: "Perfect for individual doctors and small clinics getting started.",
        buttonText: "Get Started Free",
        highlighted: false,

        features: [
            "1 Hospital / Clinic",
            "2 Staff Accounts",
            "Up to 100 Patients",
            "Appointment Scheduling",
            "Patient Management",
            "Basic Dashboard",
            "Email Support",
        ],
    },

    {
        name: "Starter",
        slug: "starter",
        price: "₹999",
        duration: "/month",
        description: "Ideal for growing clinics looking to digitize operations.",
        buttonText: "Start Free Trial",
        highlighted: false,

        features: [
            "1 Hospital / Clinic",
            "10 Staff Accounts",
            "Up to 2,000 Patients",
            "Appointment Scheduling",
            "Patient Records",
            "Billing & Invoicing",
            "Doctor Management",
            "Reports & Analytics",
            "Email Support",
        ],
    },

    {
        name: "Professional",
        slug: "professional",
        price: "₹2,999",
        duration: "/month",
        description: "Best for hospitals managing multiple departments and doctors.",
        buttonText: "Get Started",
        highlighted: true,
        badge: "Most Popular",

        features: [
            "Unlimited Patients",
            "Unlimited Doctors",
            "Unlimited Staff",
            "Department Management",
            "Appointment Scheduling",
            "Billing & Insurance",
            "Laboratory Management",
            "Inventory Management",
            "Advanced Analytics",
            "Role-Based Access",
            "Priority Support",
        ],
    },

    {
        name: "Enterprise",
        slug: "enterprise",
        price: "Custom",
        duration: "",
        description: "Tailored solutions for multi-location healthcare organizations.",
        buttonText: "Contact Sales",
        highlighted: false,

        features: [
            "Everything in Professional",
            "Multiple Hospitals",
            "Centralized Dashboard",
            "Branch Management",
            "Custom Integrations",
            "Dedicated Account Manager",
            "API Access",
            "SSO Authentication",
            "Advanced Security",
            "24×7 Premium Support",
        ],
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

function Pricing() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero-bg.png')" }}
            >
                <div className="absolute inset-0 bg-white/30" />

                <div className="relative max-w-360 mx-auto px-6 lg:px-8 py-12 lg:py-24">
                    <div className="text-center">
                        <div className="inline-flex rounded-full border border-primary/20 bg-primary-light px-4 py-2 text-primary font-medium">
                            PRICING PLANS
                        </div>

                        <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                            Simple, Transparent Pricing
                        </h1>

                        <p className="mt-8 text-center text-lg leading-8 text-slate-600">
                            Choose the plan that best fits your healhcare organization.
                            <br />No hidden fees, cancel anytime.
                        </p>

                    </div>
                </div>
            </section>

            {/* Plans section */}
            <section className="border-y border-slate-100 bg-slate-50/50">
                <div className="max-w-360 mx-auto px-6 lg:px-8 py-16">
                    <div className="mt-14 grid gap-x-4 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
                        {pricingPlans?.map((item) => {
                            return (
                                <div className="group pb-24 relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/3" key={item?.slug}>
                                    <div className="text-center">
                                        <h4 className="mt-7 text-2xl lg:text-3xl font-bold leading-7 text-slate-900">
                                            {item?.name}</h4>


                                        <p className="mt-3 text-base leading-7 text-slate-500">
                                            {item?.description}
                                        </p>

                                        <h4 className="mt-5 text-2xl lg:text-3xl font-bold leading-7 text-slate-900">
                                            {item?.price}</h4>
                                    </div>

                                    <ul className="mt-7 space-y-2.5">
                                        {item?.features?.map((feat) => (
                                            <li className="text-slate-500 flex items-center gap-2 text-sm">
                                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <Button
                                            variant={item?.highlighted ? "primary" : "outlinePrimary"}
                                            onClick={() => { }}
                                            className="w-full"
                                            size="lg"
                                        >
                                            {item.buttonText}
                                        </Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing
