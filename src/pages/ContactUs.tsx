import { Headset, Mail, MapPin, PenLine, Phone, Send, ShieldCheck, Tag, User } from "lucide-react"
import { Button, Input, Textarea } from "../components/ui"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, type ContactFormData } from "../schemas/auth.schema";

const getInTouch = [
    {
        icon: Phone,
        label: "Phone",
        value: "+91 98343 34342",
        subText: "Mon - Sat, 9:00AM - 6:00PM"
    },
    {
        icon: Mail,
        label: "Email",
        value: "support@hospivo.com",
        subText: "We'll respond within 24 hours"
    },
    {
        icon: MapPin,
        label: "Address",
        subText: "123 Healthcare Street, Medical District, New Delhi, India - 11001"
    }
]
function ContactUs() {
    const initialValues: ContactFormData = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    };

    const methods = useForm<ContactFormData>({
        resolver: zodResolver(ContactSchema),

        defaultValues: initialValues,

        mode: "onBlur"
    });

    const onSubmit = () => {

    }

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
                                CONTACT US
                            </div>

                            <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                                We're Here
                                <br />
                                To
                                <span className="mx-3 text-primary">
                                    Help
                                </span>
                                You
                            </h1>

                            <p className="mt-8 max-w-md text-lg leading-8 text-slate-600">
                                Have questions about Hospivo? Our teams is ready to assist you. Reach out to us and we'll get back to you as soon as possible
                            </p>

                            <div className="mt-10 flex flex-wrap gap-6 lg:gap-8">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/20 rounded-full flex items-center justify-center size-16">
                                        <Headset className="size-8 text-primary" />
                                    </div>
                                    <div className="">
                                        <p className="text-lg text-slate-900 font-medium">
                                            Quick Support
                                        </p>
                                        <span className="text-sm text-slate-500 ">We reply within 24 hours</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/20 rounded-full flex items-center justify-center size-16">
                                        <ShieldCheck className="size-8 text-primary" />
                                    </div>
                                    <div className="">
                                        <p className="text-lg text-slate-900 font-medium">
                                            100% Secure
                                        </p>
                                        <span className="text-sm text-slate-500 ">Your information is safe with us</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="relative flex justify-center">
                            {/* Background Glow */}
                            <div className="absolute h-130 w-130 rounded-full bg-primary/10 blur-3xl" />

                            <img
                                src="/hospital-main-entrance.png"
                                alt="Hospital"
                                className="relative z-10 w-full max-w-2xl rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="border-y border-slate-100 bg-slate-50/50">
                <div className="relative max-w-360 mx-auto px-6 lg:px-8 py-12 lg:py-16">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Get in Touch */}
                        <div className="border border-slate-200 p-8 rounded-2xl shadow-sm">
                            <div className="mb-6">
                                <h3 className="mb-3 text-2xl lg:text-3xl font-bold text-slate-900">
                                    Get in Touch
                                </h3>
                                <p className="text-slate-700">We are always here to help and answer any questions you may have.</p>
                            </div>
                            <div className="space-y-5">
                                {getInTouch?.map(({ label, value, subText, icon: Icon }) => (
                                    <div className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl ">
                                        <div className="flex justify-center items-center gap-4 rounded-full bg-primary/20 size-16 p-4">
                                            <Icon className="text-primary size-7" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-slate-900 font-medium">{label}</p>
                                            <p className="text-primary font-medium">{value}</p>
                                            <span className="text-slate-500 text-sm">{subText}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Send Us a Message */}
                        <div className="border border-slate-200 p-8 rounded-2xl lg:col-span-2 shadow-sm">
                            <div className="mb-5">
                                <h3 className="mb-3 text-2xl lg:text-3xl font-bold text-slate-900">
                                    Send Us a Message
                                </h3>
                                <p>Fill out the form and our team will get back to you.</p>
                            </div>
                            <FormProvider {...methods}>
                                <form className="space-y-4" onSubmit={methods.handleSubmit(onSubmit)}>
                                    <div className="flex flex-col sm:flex-row items-center gap-6">
                                        <div className="w-full">
                                            <Input
                                                name="name"
                                                label="Full Name"
                                                icon={User}
                                                placeholder="Enter your full name"
                                                styleClasses={"border border-slate-200!"}
                                            />
                                        </div>
                                        <div className="w-full">
                                            <Input
                                                name="email"
                                                label="Email Address"
                                                icon={Mail}
                                                placeholder="Enter your email"
                                                styleClasses={"border border-slate-200!"}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center gap-6">
                                        <div className="w-full">
                                            <Input
                                                name="phone"
                                                label="Phone Number"
                                                icon={Phone}
                                                placeholder="Enter your phone number"
                                                styleClasses={"border border-slate-200!"}

                                            />
                                        </div>
                                        <div className="w-full">
                                            <Input
                                                name="subject"
                                                label="Subject"
                                                icon={Tag}
                                                placeholder="How we can help you?"
                                                styleClasses={"border border-slate-200!"}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <Textarea
                                            name="message"
                                            label="Message"
                                            icon={PenLine}
                                            placeholder="Type your message here..."
                                            styleClasses={"border border-slate-200!"}
                                        />
                                    </div>
                                    <Button
                                        variant="gradient"
                                        size="lg"
                                        onClick={function (): void {
                                            throw new Error("Function not implemented.");
                                        }}
                                        rightIcon={<Send className="size-5" />} >
                                        Send Message
                                    </Button>
                                </form>
                            </FormProvider>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default ContactUs
