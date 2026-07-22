import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui"
import { Activity, Building2, CalendarDays, Handshake, HeartPulse, Lightbulb, Mail, Rocket, Shield, ShieldCheck, Sparkles, Star, UserRound, Wrench } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const timeline = [
  {
    year: "2021",
    title: "The Vision",
    description:
      "Recognized the growing need for a modern, connected, and efficient healthcare management solution.",
    icon: Lightbulb,
  },
  {
    year: "2022",
    title: "Building Hospivo",
    description:
      "Designed and developed an intuitive platform to simplify hospital operations and patient management.",
    icon: Wrench,
  },
  {
    year: "2023",
    title: "Growing Together",
    description:
      "Expanded our platform with powerful features to help hospitals improve productivity and patient care.",
    icon: Rocket,
  },
  {
    year: "2024 & Beyond",
    title: "Innovating the Future",
    description:
      "Continuing to build secure, scalable, and intelligent healthcare solutions for organizations worldwide.",
    icon: Sparkles,
  },
];

const coreValues = [
  {
    title: "Patient First",
    icon: Activity,
    description: "We put patient at the center of everything we build."
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    description: "We embrace creativity and technology to solve real problems."
  },
  {
    title: "Security",
    icon: Shield,
    description: "We protect data with highest standards of security."
  },
  {
    title: "Collaboration",
    icon: Handshake,
    description: "We Believe in the power of teamwork and strong partnerships."
  },
  {
    title: "Reliability",
    icon: ShieldCheck,
    description: "We deliver dependable solutions you can trust every day."
  },
  {
    title: "Excellence",
    icon: Star,
    description: "We are commited to quality and continuous improvement."
  },
]

export const trustStats = [
  {
    icon: Building2,
    value: "500+",
    label: "Hospitals & Clinics",
  },
  {
    icon: UserRound,
    value: "2,000+",
    label: "Doctors",
  },
  {
    icon: HeartPulse,
    value: "1M+",
    label: "Patients Managed",
  },
  {
    icon: CalendarDays,
    value: "10M+",
    label: "Appointments",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Uptime & Reliability",
  },
];
export const teamMembers = [
  {
    name: "Rahul Sharma",
    designation: "CEO & Founder",
    image: "/team/team.avif",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Priya Patel",
    designation: "CTO & Co-Founder",
    image: "/team/team2.avif",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Sachin Verma",
    designation: "Head of Product",
    image: "/team/team5.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Sneha Singh",
    designation: "Head of Marketing",
    image: "/team/team4.avif",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Sachin Kumari",
    designation: "Head of Department",
    image: "/team/team3.avif",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
];
function AboutUs() {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-shape2.png')" }}
      >
        <div className="absolute inset-0 bg-white/30" />

        <div className="relative max-w-360 mx-auto px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-4 py-2 text-primary sm:font-medium">
                ABOUT HOSPIVO
              </div>

              <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Transforming Healthcare
                <br />
                <span className="text-primary">
                  Through Innovation
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                Hospivo is an all-in-one hospital management solution built to simplify operation, enhance patient care,and empower healthcare organizations to deliver exceptional experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  onClick={() => navigate("/our-story")}
                  size="lg"
                >
                  Our Story
                </Button>

                <Button
                  variant="outlinePrimary"
                  onClick={() => navigate("/contact")}
                  size="lg"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Right */}
            <div className="relative flex justify-center">
              {/* Background Glow */}
              <div className="absolute h-130 w-130 rounded-full bg-primary/10 blur-3xl" />

              <img
                src="/dashboard2.png"
                alt="Hospital"
                className="relative z-10 w-full max-w-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-360 mx-auto px-6 lg:px-8 py-16">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left Image */}
            <div className="col-span-1">
              <img
                src="/hospital-main-entrance2.png"
                alt="Hospital"
                className="w-full rounded-3xl object-cover shadow-xl"
              />
            </div>

            {/* Right Side */}
            <div className="grid lg:grid-cols-2 gap-12">

              {/* Story */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  OUR STORY
                </p>

                <h3 className="mt-3 text-3xl font-bold leading-tight text-slate-900">
                  Built for Healthcare.
                  <br />
                  Designed for Better Care.
                </h3>

                <div className="mt-6 space-y-5 text-slate-500 leading-8">
                  <p>
                    Hospivo was born from a vision to simplify healthcare management
                    through smart, secure, and intuitive technology.
                  </p>

                  <p>
                    We understand the everyday challenges faced by hospitals,
                    clinics, doctors, and healthcare professionals—from managing
                    patient records and appointments to coordinating departments,
                    billing, and operations.
                  </p>

                  <p>
                    That's why we built Hospivo: a modern Hospital Management System
                    that brings every essential healthcare workflow together into one
                    intelligent platform, helping organizations improve efficiency
                    while delivering exceptional patient care.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-2">
                <div className="absolute left-7 top-0 bottom-0 w-px bg-primary/20" />

                <div className="space-y-8">
                  {timeline.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.year} className="relative flex gap-5">
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-primary-light shadow-md">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-primary">
                            {item.year}
                          </p>

                          <h4 className="mt-1 text-lg font-bold text-slate-900">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-sm leading-7 text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="border-y border-slate-100 bg-slate-700/10">
        <div className="max-w-360 mx-auto px-6 lg:px-8 py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              OUR CORE VALUES
            </p>
            <h3 className="mb-10 text-3xl lg:text-4xl font-bold text-slate-900">
              The Values That Drive Us
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-6">
            {coreValues?.map(({ title, description, icon: Icon }) => {
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


      {/* Trusted Section */}
      <section className="border-y border-slate-100 bg-white">
        <div className="max-w-360 mx-auto px-6 lg:px-8 py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              MAKING AN IMPACT
            </p>
            <h3 className="mb-10 text-3xl lg:text-4xl font-bold text-slate-900">
              Trusted by Healthcare Professionals
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

            {trustStats?.map(({ value, label, icon: Icon }) => (
              <div className="flex items-center gap-4">
                <div className="border border-primary rounded-full size-20 flex justify-center items-center">
                  <Icon className="size-12 text-primary" />
                </div>

                <div>
                  <h4 className="text-2xl lg:text-3xl font-bold text-primary">
                    {value}
                  </h4>

                  <p className="mt-2 text-slate-500">{label}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* Our Team */}
      <section className="border-y border-slate-100 bg-slate-700/10">
        <div className="max-w-360 mx-auto px-6 lg:px-8 py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              OUR TEAM
            </p>
            <h3 className="mb-10 text-3xl lg:text-4xl font-bold text-slate-900">
              Meet the People Behind Hospivo
            </h3>
          </div>
          <div className="mt-10">
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
                  slidesPerView: 4,
                },
              }}
              className="pb-14"
            >
              {teamMembers.map(({ name, designation, socials, image }) => (
                <SwiperSlide key={name} className="h-auto">
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">

                    {/* Image */}
                    <div className="overflow-hidden rounded-xl bg-slate-100">
                      <img
                        src={image}
                        alt={name}
                        className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-5 text-center">
                      <h4 className="text-xl font-semibold text-slate-900">
                        {name}
                      </h4>

                      <p className="mt-1 text-sm text-slate-500">
                        {designation}
                      </p>

                      {/* Social Icons */}
                      <div className="mt-5 flex justify-center gap-3">
                        {/* LinkedIn */}
                        <a
                          href={socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.346V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.268 2.372 4.268 5.456v6.285zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>

                        {/* X */}
                        <a
                          href={socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="size-4">
                            <path d="M714.163 519.284 1160.89 0H1055.06L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.828l409.612-476.152 327.232 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.449-67.894L146.4 82.3h162.604l302.861 433.381 47.449 67.894 393.853 563.642H891.563L569.165 687.854v-.026Z" />
                          </svg>
                        </a>

                        {/* Email */}
                        <a
                          href={`mailto:${socials.email}`}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                        >
                          <Mail className="size-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
