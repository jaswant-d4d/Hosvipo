import { Ambulance, ArrowRight, BarChart3, BedDouble, Bell, Calendar, CalendarCheck, ClipboardList, Clock3, Clock7, CreditCard, FileText, Headset, Heart, HeartHandshake, HeartPulse, Hospital, Pen, Ribbon, Shield, ShieldCheck, Smartphone, Stethoscope, Users } from "lucide-react";
import { Button } from "../components/ui";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


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

const whyChooseHospivo = [
  {
    icon: ShieldCheck,
    title: "Trusted & Secure",
    description:
      "Enterprise-grade security keeps patient records and hospital data safe at every step.",
  },
  {
    icon: Clock3,
    title: "Faster Operations",
    description:
      "Reduce manual work with automated scheduling, billing, and patient management.",
  },
  {
    icon: HeartHandshake,
    title: "Better Patient Care",
    description:
      "Improve patient satisfaction with quicker services and organized medical records.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Insights",
    description:
      "Track appointments, revenue, occupancy, and performance through interactive dashboards.",
  },
  {
    icon: Smartphone,
    title: "Cloud-Based Access",
    description:
      "Manage your hospital anytime, anywhere with secure cloud access across all devices.",
  },
  {
    icon: Headset,
    title: "24/7 Expert Support",
    description:
      "Get continuous assistance from our dedicated team whenever your hospital needs help.",
  },
];

const stats = [
  { icon: Users, title: "12,500+", description: "Happy Patients" },
  { icon: Hospital, title: "350+", description: "Hospitals" },
  { icon: Stethoscope, title: "1,500+", description: "Doctors" },
  { icon: Ribbon, title: "99.9%", description: "Satisfaction Rate" },
]
export const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    designation: "Medical Director",
    hospital: "CityCare Hospital",
    avatar: "/testimonials/doctor-1.jpg",
    rating: 5,
    review:
      "Hospivo has completely transformed how we manage appointments and patient records. Our staff saves hours every day, allowing us to focus more on patient care.",
  },
  {
    id: 2,
    name: "Dr. Michael Brown",
    designation: "Chief Physician",
    hospital: "HealthPlus Medical Center",
    avatar: "/testimonials/doctor-2.jpg",
    rating: 5,
    review:
      "The dashboard is intuitive, the reporting is excellent, and managing doctors, patients, and billing has never been easier. Highly recommended.",
  },
  {
    id: 3,
    name: "Emily Carter",
    designation: "Hospital Administrator",
    hospital: "WellCare Hospital",
    avatar: "/testimonials/admin-1.jpg",
    rating: 5,
    review:
      "From patient registration to appointment scheduling, Hospivo has streamlined every process. The support team has also been exceptional.",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    designation: "Cardiologist",
    hospital: "Lifeline Hospital",
    avatar: "/testimonials/doctor-3.jpg",
    rating: 5,
    review:
      "The centralized patient records and appointment management have significantly improved communication across departments.",
  },
  {
    id: 5,
    name: "Sophia Miller",
    designation: "Clinic Manager",
    hospital: "Prime Health Clinic",
    avatar: "/testimonials/admin-2.png",
    rating: 5,
    review:
      "Hospivo is simple to use, secure, and packed with features that help us provide a better experience for every patient.",
  },
];
function Home() {
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
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-4 py-2 text-primary font-medium">
                <Heart className="size-4 fill-primary" />

                Smart Healthcare, Better Management
              </div>

              <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Simplify
                Healthcare
                <br />
                Management
                <br />
                <span className="text-primary">
                  with Hospivo
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                Hospivo is a comprehensive hospital management system
                designed to streamline hospital operations, improve
                patient care, automate workflows and simplify healthcare
                management.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  rightIcon={<ArrowRight className="size-5" />}
                  onClick={() => navigate("/contact")}
                >
                  Get Started
                </Button>

                <Button
                  variant="outlinePrimary"
                  leftIcon={<Calendar className="size-5" />}
                  onClick={() => navigate("/contact")}
                >
                  Book a Demo
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Pen className="size-7 text-primary" />
                  <div>
                    <p className="text-base font-semibold text-slate-900">Easy to use</p>
                    <span className="text-sm text-slate-500">Intuitive Interface</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="size-7 text-primary" />
                  <div>
                    <p className="text-base font-semibold text-slate-900">Secure & Reliable</p>
                    <span className="text-sm text-slate-500">Data Protection</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock7 className="size-7 text-primary" />
                  <div>
                    <p className="text-base font-semibold text-slate-900">24/7 Support</p>
                    <span className="text-sm text-slate-500">Always Here to Help</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right */}
            <div className="relative flex justify-center">
              {/* Background Glow */}
              <div className="absolute h-130 w-130 rounded-full bg-primary/10 blur-3xl" />

              <img
                src="/hospital-bg-transparent.png"
                alt="Hospital"
                className="relative z-10 w-full max-w-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-360 mx-auto px-6 py-16">

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
        <div className="max-w-360 mx-auto px-6 py-16">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            FEATURES
          </p>

          <h3 className="mt-3 text-center text-3xl lg:text-4xl font-bold text-slate-900">
            Everything You Need to Manage Your Hospital
          </h3>
          <p className="mt-3 mx-auto text-lg font-medium text-center text-slate-500">
            Hospivo offers a complete suite of tools to manage all aspects of your healthcare facility.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-6 xl:grid-cols-3">
            {features?.slice(0, 6)?.map(({ icon, title, description }) => {
              const Icon = icon
              return (
                <div className="p-6 bg-white rounded-2xl">
                  <div className="size-12 p-3 rounded-full bg-primary-light">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h4 className="mt-3 text-2xl font-bold text-slate-900">
                    {title}
                  </h4>
                  <p className="mt-3 max-w-sm text-slate-500">
                    {description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mx-auto text-center">
            <Button onClick={() => navigate("/features")} className="mt-8 ">Explore All Features</Button>
          </div>
        </div>

      </section>

      {/* Why Choose Hosvipo Section */}
      <section className="border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-360 mx-auto px-6 py-16">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-2/5">
              <img
                src="/main-entrance.png"
                alt="Hospital"
                className="w-full rounded-3xl object-cover shadow-xl"
              />
            </div>
            <div className="flex-1 w-full ">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                WHY CHOOSE HOSVIPO
              </p>

              {/* <div className="h-12 w-1 rounded-full bg-primary" /> */}
              <h3 className="mt-3 text-3xl font-bold text-slate-900">
                Why Healthcare Providers Choose Hosvipo
              </h3>
              <p className="mt-3 text-lg font-medium text-slate-500">
                We provide the tools and support  you need to deliver exceptional healthcare services.
              </p>

              <div className="mt-12 space-y-6">
                {whyChooseHospivo?.slice(0, 4)?.map(({ icon, title, description }) => {
                  const Icon = icon
                  return (
                    <div className="flex gap-4 rounded-2xl p-4 transition hover:bg-white hover:shadow-lg">
                      <div className="h-16 w-16 shrink-0 p-4 rounded-xl bg-primary-light">
                        <Icon className="size-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900">
                          {title}
                        </h4>
                        <p className="mt-2 text-slate-500">
                          {description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-360 rounded-3xl bg-primary overflow-hidden my-10">
        <div className="grid grid-cols-1 divide-y divide-white/15 md:grid-cols-2 md:divide-y-0 md:divide-x xl:grid-cols-4">
          {stats.map(({ icon, title, description }) => {
            const Icon = icon;

            return (
              <div
                key={title}
                className="flex items-center gap-5 px-8 py-8"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <div>
                  <h4 className="text-2xl lg:text-3xl font-semibold text-white">
                    {title}
                  </h4>

                  <p className="mt-2 text-base text-white/80">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="border-y border-slate-100 bg-slate-700/10">
        <div className="max-w-360 mx-auto px-6 py-16">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            TESTIMONIALS
          </p>

          <h3 className="mt-3 text-center text-3xl lg:text-4xl font-bold text-slate-900">
            Trusted by Healthcare Professionals
          </h3>
          <p className="mt-3 mx-auto text-lg font-medium text-center text-slate-500">
            Discover why hospitals and clinics rely on Hospivo to simplify
            operations, improve patient care, and enhance overall efficiency.
          </p>
          <div className="mt-14">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
              className="pb-14"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))} */}
          </div>
        </div>
      </section>


      {/* Ready Section */}
      <section className="mx-auto max-w-360 rounded-3xl bg-primary overflow-hidden mt-10">
        <div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-6 lg:px-10 py-10"
        >
          <div className="max-w-2xl">
            <h4 className="text-2xl  lg:text-3xl font-semibold text-white">
              Ready to Transform Your Hospital Management?
            </h4>

            <p className="mt-2 text-base text-white/80">
              Join hundreds of hospitals already using Hospivo to deliver better healthcare.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto">
            <Button variant="primary" className="bg-white! text-primary! hover:bg-primary2" rightIcon={<ArrowRight className="size-6" />} onClick={() => { }}>
              Get Started Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" rightIcon={<Calendar className="size-6" />} onClick={() => { }}>
              <span>Book a Demo</span>
            </Button>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;

import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    designation: string;
    hospital: string;
    avatar: string;
    rating: number;
    review: string;
  };
}

export function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Quote */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star
              key={index}
              className="size-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <div className="rounded-xl bg-primary-light p-3">
          <Quote className="size-6 text-primary" />
        </div>
      </div>

      {/* Review */}
      <p className="line-clamp-5 text-base leading-8 text-slate-600">
        "{testimonial.review}"
      </p>

      {/* Divider */}
      <div className="my-6 h-px bg-slate-200" />

      {/* User */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-slate-900">
            {testimonial.name}
          </h4>

          <p className="text-sm text-slate-500">
            {testimonial.designation}
          </p>

          <p className="text-sm font-medium text-primary">
            {testimonial.hospital}
          </p>
        </div>
      </div>
    </div>
  );
}
