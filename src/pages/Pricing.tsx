import { Building2, CalendarDays, ChartNoAxesCombined, Check, ClipboardList, Clock7, Cloud, CreditCard, Database, FileText, Headphones, KeyRound, Smartphone, UserLock, UserRound, X } from "lucide-react";
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

export const comparisonData = [
    {
        feature: "Patient Management",
        icon: ClipboardList,
        free: true,
        starter: true,
        professional: true,
        enterprise: true,
    },
    {
        feature: "Appointment Scheduling",
        icon: CalendarDays,
        free: true,
        starter: true,
        professional: true,
        enterprise: true,
    },
    {
        feature: "Billing & Invoicing",
        icon: CreditCard,
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
    },
    {
        feature: "Reports",
        icon: FileText,
        free: "Basic",
        starter: "Basic",
        professional: "Advanced",
        enterprise: "Custom",
    },
    {
        feature: "Multi-Branch Management",
        icon: Building2,
        free: false,
        starter: false,
        professional: true,
        enterprise: true,
    },
    {
        feature: "API Access",
        icon: KeyRound,
        free: false,
        starter: false,
        professional: true,
        enterprise: true,
    },
    {
        feature: "Priority Support",
        icon: Headphones,
        free: false,
        starter: false,
        professional: true,
        enterprise: true,
    },
    {
        feature: "Dedicated Account Manager",
        icon: UserRound,
        free: false,
        starter: false,
        professional: false,
        enterprise: true,
    },
];

export const includesInPlan = [
    {
        title: "Secure Cloud Storage",
        icon: Cloud,
        description: "Your data is safely stored in the cloud with enterprise-grade security."
    },
    {
        title: "Role-Based Access",
        icon: UserLock,
        description: "Control user permissions and protect sensitive information."
    },
    {
        title: "Mobile Friendly",
        icon: Smartphone,
        description: "Access Hospivo from any device, anytime, anywhere."
    },
    {
        title: "Automatic Backups",
        icon: Database,
        description: "We automatically backup your data so you never have to worry."
    },
    {
        title: "Real-Time Analytics",
        icon: ChartNoAxesCombined,
        description: "Get real-time insights and make data-driven decisions with ease."
    },
    {
        title: "27/7 Security",
        icon: Clock7,
        description: "We monitor, protect and keep your data secure around the clock."
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
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        {pricingPlans?.map((item) => {
                            return (
                                <div className="group pb-24 relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30" key={item?.slug}>
                                    {/* Most Popular */}
                                    {item?.highlighted && (
                                        <div className="absolute top-0 inset-x-0 flex justify-center">
                                            <div className="rounded-b-lg bg-primary px-5 py-1.5 shadow-md">
                                                <span className="text-sm font-medium text-white">
                                                    Most Popular
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    <div className="text-center">
                                        <h4 className="mt-7 text-2xl lg:text-3xl font-bold leading-7 text-primary">
                                            {item?.name}</h4>


                                        <p className="mt-3 text-base leading-7 text-slate-700">
                                            {item?.description}
                                        </p>

                                        <h4 className="mt-5 text-2xl lg:text-3xl font-bold leading-7 text-slate-900">
                                            {item?.price}</h4>
                                    </div>

                                    <ul className="mt-7 space-y-2.5">
                                        {item?.features?.map((feat) => (
                                            <li className="text-slate-700 flex items-center gap-3 text-base">
                                                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> <span>{feat}</span>
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

            {/* Compare plan */}
            <section className="max-w-360 mx-auto px-6 lg:px-8 py-16">
                <div className=" overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr className="border-b border-slate-200">

                                    <th className="w-80 px-8 py-6 text-left">
                                        <h3 className="text-xl font-bold">
                                            Compare Plans
                                        </h3>
                                    </th>

                                    <th className="px-8 py-6 text-center">
                                        <h4 className="font-bold">Free</h4>
                                        <p className="text-3xl font-bold">$0</p>
                                        <span className="text-xs text-slate-400">
                                            /Forever
                                        </span>
                                    </th>

                                    <th className="px-8 py-6 text-center">
                                        <h4 className="font-bold">Starter</h4>
                                        <p className="text-3xl font-bold">$29</p>
                                        <span className="text-xs text-slate-400">
                                            /month
                                        </span>
                                    </th>

                                    <th className="bg-primary/5 px-8 py-6 text-center">
                                        <h4 className="font-bold text-primary">
                                            Professional
                                        </h4>
                                        <p className="text-3xl font-bold">$79</p>
                                        <span className="text-xs text-slate-400">
                                            /month
                                        </span>
                                    </th>

                                    <th className="px-8 py-6 text-center">
                                        <h4 className="font-bold">Enterprise</h4>
                                        <p className="text-3xl font-bold">Custom</p>
                                        <span className="text-xs text-slate-400">
                                            /month
                                        </span>
                                    </th>

                                </tr>
                            </thead>

                            <tbody>
                                {comparisonData.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <tr
                                            key={item.feature}
                                            className="border-b border-slate-200 last:border-none hover:bg-slate-50"
                                        >
                                            <td className="px-8 py-4">
                                                <div className="flex text-nowrap items-center gap-3 ">
                                                    <Icon className="h-4 w-4 text-slate-500 shrink-0" />
                                                    <span className="font-medium">
                                                        {item.feature}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <Cell value={item.free} />
                                            </td>

                                            <td className="text-center">
                                                <Cell value={item.starter} />
                                            </td>

                                            <td className="bg-primary/5 text-center">
                                                <Cell value={item.professional} />
                                            </td>

                                            <td className="text-center">
                                                <Cell value={item.enterprise} />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>

                        </table>
                    </div>
                </div>
            </section>

            <section className="border-y border-slate-100 bg-slate-700/10">
                <div className="max-w-360 mx-auto px-6 lg:px-8 py-16">
                    <h3 className="mb-10 text-center text-3xl lg:text-4xl font-bold text-slate-900">
                        What's include in every plan
                    </h3>
                    <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-6">
                        {includesInPlan?.map(({ title, description, icon: Icon }) => {
                            return (
                                <div className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30" key={title}>

                                    <div className="flex items-center flex-col gap-3 text-center">
                                        <div className="flex items-center justify-center w-20 bg-primary/10 p-4 rounded-full">
                                            <Icon className="size-12 text-primary shrink-0" />
                                        </div>
                                        <h4 className="text-xl font-semibold leading-7 text-slate-900">
                                            {title}</h4>

                                        <p className="text-base leading-7 text-slate-500">
                                            {description}
                                        </p>
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


const Cell = ({ value }: { value: boolean | string }) => {
    if (value === true)
        return <Check className="mx-auto h-5 w-5 text-primary" />;

    if (value === false)
        return <X className="mx-auto h-5 w-5 text-slate-500" />;

    return (
        <span className="text-sm font-medium text-slate-700">
            {value}
        </span>
    );
};