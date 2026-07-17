import { Calendar, Droplets, List, Mail, MapPin, Phone, ShieldPlus, User, VenusAndMars } from 'lucide-react'
import { PageHeader } from '../../../components/ui'

const profileDetails = [
    {
        icon: User,
        label: "Full Name",
        value: "Dr. John Doe",
    },
    {
        icon: Mail,
        label: "Email Address",
        value: "johndoe@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone Number",
        value: "+1 234 567 890",
    },
    {
        icon: Calendar,
        label: "Date of Birth",
        value: "14 May 1988",
    },
    {
        icon: VenusAndMars,
        label: "Gender",
        value: "Male",
    },
    {
        icon: Droplets,
        label: "Blood Group",
        value: "O+",
    },
    {
        icon: MapPin,
        label: "Address",
        value: "742 Evergreen Terrace, Springfield, USA",
    },
    {
        icon: ShieldPlus,
        label: "Emergency Contact",
        value: "+1 987 654 3210 (Brother)",
    },
];
const professionalDetails = [
    {
        label: "Role",
        value: "Senior Cardiologist",
    },
    {
        label: "Department",
        value: "Cardiology",
    },
    {
        label: "Qualification",
        value: "MBBS, MD (Cardiology)",
    },
    {
        label: "Licence Number",
        value: "MED-816515",
    },
    {
        label: "Joining Date",
        value: "14 Feb 2022",
    },
    {
        label: "Experience",
        value: "12+",
    },
    {
        label: "Consultation Fee",
        value: "$150",
    },
    {
        label: "Availability",
        value: "Mon-Sat (10:00AM - 6:00PM)",
    },
];
const securityDetails = [
    {
        label: "Email Verified",
        value: "Verified",
    },
    {
        label: "Phone Verified",
        value: "Verified",
    },
    {
        label: "Last Login",
        value: "July 17, 2026 10:20AM",
    },
    {
        label: "Password",
        value: "********",
    },
    {
        label: "Two Factor Auth",
        value: "Enabled",
    },
];

function ProfilePage() {
    return (
        <>
            <PageHeader
                title="Profile"
                subtitle="Manage your personal information, account preferences, and security settings."
                breadcrumb={[
                    { label: "Dashboard", href: "/admin/dashboard" },
                    { label: "Profile" },
                ]}
            />


            {/* header */}
            <div className='p-6 sm:p-8 flex items-center justify-between bg-primary-light rounded-2xl '>
                <div className='flex items-center justify-between gap-4 sm:gap-8'>
                    <img src="/female-doctor.jpg" alt="" className='h-34 w-34 rounded-full object-cover' />
                    <div className='space-y-2'>
                        <h3 className='text-2xl font-bold text-slate-900'>Dr. Monica Aggarwal</h3>
                        <p className='text-lg font-medium text-primary'>Senior Cardiologist</p>
                        <p className='text-base text-slate-700'>Cardiology Department</p>
                        <p className='text-base text-slate-700'>City Care Hospital</p>
                        <p className='text-sm text-slate-500'>Member since Feb 14, 2022</p>
                    </div>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <p>Employee ID</p>
                    <p className="text-lg font-medium text-primary">DOC-2023-001</p>
                    <img src="/dr-monica-qr-code.png" className="w-20 h-20 object-cover" alt="" />
                </div>
            </div>

            {/* Stats */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 '>
                <div className='p-4 sm:p-6 bg-white shadow-sm rounded-2xl flex items-center gap-4 '>
                    <div className='size-10 p-2 rounded-xl'>
                        <List className='size-6' />
                    </div>
                    <div>
                        <p className='text-slate-700'>Total Patients</p>
                        <p className='text-xl font-bold text-slate-900'>1,565</p>
                    </div>
                </div>
                <div className='p-4 sm:p-6 bg-white shadow-sm rounded-2xl flex items-center gap-4 '>
                    <div className='size-10 p-2 rounded-xl'>
                        <List className='size-6' />
                    </div>
                    <div>
                        <p className='text-slate-700'>Total Assignments</p>
                        <p className='text-xl font-bold text-slate-900'>124</p>
                    </div>
                </div>
                <div className='p-4 sm:p-6 bg-white shadow-sm rounded-2xl flex items-center gap-4 '>
                    <div className='size-10 p-2 rounded-xl'>
                        <List className='size-6' />
                    </div>
                    <div>
                        <p className='text-slate-700'>Patient Rating</p>
                        <p className='text-xl font-bold text-slate-900'>4.6/5</p>
                    </div>
                </div>
                <div className='p-4 sm:p-6 bg-white shadow-sm rounded-2xl flex items-center gap-4 '>
                    <div className='size-10 p-2 rounded-xl'>
                        <List className='size-6' />
                    </div>
                    <div>
                        <p className='text-slate-700'>Experience</p>
                        <p className='text-xl font-bold text-slate-900'>12+</p>
                    </div>
                </div>
            </div>

            {/* Profile Details */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className='flex items-center gap-3 mb-6'>
                        <User className='text-primary size-6 stroke-3' />
                        <h3 className='text-2xl text-primary font-bold'>Personal Information</h3>
                    </div>
                    <div className="space-y-5">
                        {profileDetails.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="grid grid-cols-[220px_1fr] items-start gap-5"
                                >
                                    {/* Label */}
                                    <div className="flex items-center gap-3 text-slate-500">
                                        <Icon size={18} className="text-slate-400" />

                                        <span className="text-sm font-medium">
                                            {item.label}
                                        </span>
                                    </div>

                                    {/* Value */}
                                    <div className="text-sm font-semibold text-slate-800">
                                        {item.value}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className='flex items-center gap-3 mb-6'>
                        <User className='text-primary size-6 stroke-3' />
                        <h3 className='text-2xl text-primary font-bold'>Professional Details</h3>
                    </div>
                    <div className="space-y-5">
                        {professionalDetails.map((item, index) => {

                            return (
                                <div
                                    key={index}
                                    className="grid grid-cols-[220px_1fr] items-start gap-5"
                                >
                                    {/* Label */}
                                    <div className="flex items-center gap-3 text-slate-500">

                                        <span className="text-sm font-medium">
                                            {item.label}
                                        </span>
                                    </div>

                                    {/* Value */}
                                    <div className="text-sm font-semibold text-slate-800">
                                        {item.value}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className='flex items-center gap-3 mb-6'>
                        <User className='text-primary size-6 stroke-3' />
                        <h3 className='text-2xl text-primary font-bold'>Account & Security</h3>
                    </div>
                    <div className="space-y-5">
                        {securityDetails.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="grid grid-cols-[220px_1fr] items-start gap-5"
                                >
                                    {/* Label */}
                                    <div className="flex items-center gap-3 text-slate-500">
                                        <span className="text-sm font-medium">
                                            {item.label}
                                        </span>
                                    </div>

                                    {/* Value */}
                                    <div className="text-sm font-semibold text-slate-800">
                                        {item.value}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage
