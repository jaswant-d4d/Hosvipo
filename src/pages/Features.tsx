import { Ambulance, ArrowRight, BedDouble, Bell, Calendar, CalendarCheck, ClipboardList, CreditCard, FileText, HeartPulse, Hospital, MoveRight, ShieldCheck, Stethoscope } from "lucide-react"
import { Button } from "../components/ui"
import { useNavigate } from "react-router-dom"

const hospitals = [
    "City Healthcare",
    "Lifeline Clinic",
    "HealthPlus Hospital",
    "Wellness Hospital",
    "Max Hospital",
    "CurePlus Healthcare",
];

const features = [
    {
        icon: HeartPulse,
        title: "Patient Management",
        description: "Manage patient records, medical history, and personal information efficiently from one place."
    },
    {
        icon: CalendarCheck,
        title: "Appointment Scheduling",
        description: "Manage appointments, doctor availability, and patient bookings with an intuitive scheduling system."
    },
    {
        icon: Stethoscope,
        title: "Doctor Management",
        description: "Organize doctor profiles, specialties, schedules, and availability from a centralized dashboard."
    },
    {
        icon: CreditCard,
        title: "Billing & Invoicing",
        description: "Generate invoices, manage payments, insurance claims, and financial reports with ease."
    },

    {
        icon: FileText,
        title: "Reports & Analytics",
        description: "Gain valuable insights with real-time reports on hospital performance, revenue, and patient statistics."
    },
    {
        icon: BedDouble,
        title: "Ward & Bed Management",
        description: "Monitor bed occupancy, ward availability, and patient admissions in real time."
    },
    {
        icon: ClipboardList,
        title: "Electronic Medical Records",
        description: "Securely store and access patient medical history, diagnoses, prescriptions, and treatment records."
    },

    {
        icon: Bell,
        title: "Notifications & Alerts",
        description: "Send appointment reminders, emergency alerts, and important updates to patients and staff."
    },
    {
        icon: ShieldCheck,
        title: "Role-Based Access",
        description: "Control access with secure role-based permissions for administrators, doctors, nurses, and staff."
    },
    {
        icon: Ambulance,
        title: "Emergency Management",
        description: "Coordinate emergency admissions, ambulance services, and critical patient care seamlessly."
    }
]
function Features() {
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
                                Features
                            </div>

                            <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                                Powerful Features for
                                <br />
                                <span className="text-primary">
                                    Modern Healthcare
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                                Hospivo is a comprehensive hospital suite of features designed to streamline hospital operations, improve
                                patient care, and enhance overall efficiency.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Button
                                    rightIcon={<ArrowRight className="size-5" />}
                                    onClick={() => navigate("/contact")}
                                    size="lg"
                                >
                                    Get Started Now
                                </Button>

                            </div>

                        </div>

                        {/* Right */}
                        <div className="relative flex justify-center">
                            {/* Background Glow */}
                            <div className="absolute h-130 w-130 rounded-full bg-primary/10 blur-3xl" />

                            <img
                                // src="/dashboard2.png"
                                src="/dashboard-desktop-mobile.png"
                                alt="Hospital"
                                className="relative z-10 w-full max-w-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Section */}
            <section className="border-y border-slate-100 bg-slate-50/50">
                <div className="max-w-360 mx-auto px-6 lg:px-8 py-16">

                    <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Trusted By
                    </p>

                    <h3 className="mt-3 text-center text-3xl font-bold text-slate-900">
                        Trusted by 350+ Hospitals & Clinics Worldwide
                    </h3>

                    <p className="mt-3 mx-auto max-w-2xl text-center text-slate-500">
                        Healthcare organizations rely on Hospivo to simplify operations,
                        improve patient care, and manage hospitals efficiently.
                    </p>

                    <div className="mt-14 grid sm:grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6">

                        {hospitals.map((hospital) => (
                            <div
                                key={hospital}
                                className="group flex h-20 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                            >
                                <Hospital className="mr-2 h-6 w-6 text-primary transition group-hover:scale-110" />

                                <span className="font-semibold text-slate-700">
                                    {hospital}
                                </span>
                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* Features Section */}
            <section className="border-y border-slate-100 bg-slate-700/10">
                <div className="max-w-360 mx-auto px-6 lg:px-8 py-16">
                    <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        OUR FEATURES
                    </p>

                    <h3 className="mt-3 text-center text-3xl lg:text-4xl font-bold text-slate-900">
                        Everything You Need to Manage Your Hospital
                    </h3>
                    <p className="mt-3 mx-auto max-w-xl text-lg font-medium text-center text-slate-500">
                        From patient registration to billing and reporting. Hospivo simplifies every process so you can focus on what matters most.
                    </p>

                    <div className="mt-14 justify-center flex flex-wrap gap-6 ">
                        {features?.map(({ icon, title, description }) => {
                            const Icon = icon
                            return (
                                <div key={title} className="basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] xl:basis-[calc(25%-18px)] flex-grow-0 space-y-4 p-6 border border-slate-200 bg-white rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">
                                    
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 p-3 rounded-full bg-primary-light">
                                            <Icon className="size-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className=" text-2xl font-bold text-slate-900">
                                                {title}
                                            </h4>
                                        </div>
                                    </div>
                                    <p className="max-w-sm text-slate-500 line-clamp-2">
                                        {description}
                                    </p>
                                    <p className="max-w-sm text-primary flex items-center gap-2">
                                        Learn more <MoveRight className="size-4" />
                                    </p>
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
                            className="flex flex-col gap-8 px-6 lg:px-10 py-10"
                        >
                            <div className="max-w-2xl">
                                <div className="inline-flex rounded-full border border-primary/20 bg-primary-light px-4 py-2 text-primary-dark font-medium">
                                    READY TO GET STARTED?
                                </div>
                                <h4 className="mt-4 text-2xl  lg:text-3xl font-semibold text-white">
                                    Experience the Power of Hospivo
                                </h4>

                                <p className="mt-2 text-base text-white/80">
                                    Join hundreds of hospitals already using Hospivo to provide better healthcare and improve operation efficiency.
                                </p>
                            </div>
                            <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto">
                                <Button variant="primary" size="md" className="bg-white! text-primary! hover:bg-primary2" rightIcon={<ArrowRight className="size-6" />} onClick={() => { }}>
                                    Get Started Now
                                </Button>
                                <Button variant="outline" size="md" className="border-white text-white hover:bg-white hover:text-primary" leftIcon={<Calendar className="size-6" />} onClick={() => { }}>
                                    <span>Book a Demo</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Features
