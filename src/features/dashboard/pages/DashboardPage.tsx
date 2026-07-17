import { Eye, Pencil, Trash2 } from "lucide-react";
import DataTable from "../../../components/table/DataTable"
import type { ColumnDef } from "@tanstack/react-table";
import { Avatar, Badge, PageHeader } from "../../../components/ui";
import EmptyState from "../../../components/ui/EmptyState";
import { useNavigate } from "react-router-dom";

export interface Doctor {
    id: number;
    doctorId: string;
    name: string;
    email: string;
    avatar?: string;
    status?: string;
    joiningDate?: string;
}


const doctors = [
    {
        "id": 1,
        "doctorId": "DOC-1001",
        "avatar": "https://i.pravatar.cc/150?img=11",
        "name": "Dr. John Smith",
        "email": "john.smith@hospivo.com",
        "phone": "+1 9876543210",
        "gender": "Male",
        "department": "Cardiology",
        "specialization": "Cardiologist",
        "qualification": "MBBS, MD",
        "experience": 12,
        "status": "Active",
        "joiningDate": "2023-01-12"
    },
    {
        "id": 2,
        "doctorId": "DOC-1002",
        "avatar": "https://i.pravatar.cc/150?img=12",
        "name": "Dr. Emily Johnson",
        "email": "emily.johnson@hospivo.com",
        "phone": "+1 9876543211",
        "gender": "Female",
        "department": "Neurology",
        "specialization": "Neurologist",
        "qualification": "MBBS, DM",
        "experience": 9,
        "status": "Active",
        "joiningDate": "2022-09-05"
    },
    {
        "id": 3,
        "doctorId": "DOC-1003",
        "avatar": "https://i.pravatar.cc/150?img=13",
        "name": "Dr. Michael Brown",
        "email": "michael.brown@hospivo.com",
        "phone": "+1 9876543212",
        "gender": "Male",
        "department": "Orthopedics",
        "specialization": "Orthopedic Surgeon",
        "qualification": "MBBS, MS",
        "experience": 15,
        "status": "Active",
        "joiningDate": "2021-03-10"
    },
    {
        "id": 4,
        "doctorId": "DOC-1004",
        "avatar": "https://i.pravatar.cc/150?img=14",
        "name": "Dr. Sophia Wilson",
        "email": "sophia.wilson@hospivo.com",
        "phone": "+1 9876543213",
        "gender": "Female",
        "department": "Pediatrics",
        "specialization": "Pediatrician",
        "qualification": "MBBS, DCH",
        "experience": 8,
        "status": "On Leave",
        "joiningDate": "2023-04-18"
    },
    {
        "id": 5,
        "doctorId": "DOC-1005",
        "avatar": "https://i.pravatar.cc/150?img=15",
        "name": "Dr. David Lee",
        "email": "david.lee@hospivo.com",
        "phone": "+1 9876543214",
        "gender": "Male",
        "department": "Dermatology",
        "specialization": "Dermatologist",
        "qualification": "MBBS, MD",
        "experience": 7,
        "status": "Active",
        "joiningDate": "2024-01-15"
    },
    {
        "id": 6,
        "doctorId": "DOC-1006",
        "avatar": "https://i.pravatar.cc/150?img=16",
        "name": "Dr. Olivia Martin",
        "email": "olivia.martin@hospivo.com",
        "phone": "+1 9876543215",
        "gender": "Female",
        "department": "Gynecology",
        "specialization": "Gynecologist",
        "qualification": "MBBS, MS",
        "experience": 11,
        "status": "Inactive",
        "joiningDate": "2020-08-20"
    },
    {
        "id": 7,
        "doctorId": "DOC-1007",
        "avatar": "https://i.pravatar.cc/150?img=17",
        "name": "Dr. James Anderson",
        "email": "james.anderson@hospivo.com",
        "phone": "+1 9876543216",
        "gender": "Male",
        "department": "ENT",
        "specialization": "ENT Specialist",
        "qualification": "MBBS, MS",
        "experience": 10,
        "status": "Active",
        "joiningDate": "2022-05-11"
    },
    {
        "id": 8,
        "doctorId": "DOC-1008",
        "avatar": "https://i.pravatar.cc/150?img=18",
        "name": "Dr. Isabella Taylor",
        "email": "isabella.taylor@hospivo.com",
        "phone": "+1 9876543217",
        "gender": "Female",
        "department": "Radiology",
        "specialization": "Radiologist",
        "qualification": "MBBS, MD",
        "experience": 13,
        "status": "Active",
        "joiningDate": "2019-11-01"
    },
    {
        "id": 9,
        "doctorId": "DOC-1009",
        "avatar": "https://i.pravatar.cc/150?img=19",
        "name": "Dr. William Harris",
        "email": "william.harris@hospivo.com",
        "phone": "+1 9876543218",
        "gender": "Male",
        "department": "Psychiatry",
        "specialization": "Psychiatrist",
        "qualification": "MBBS, MD",
        "experience": 14,
        "status": "Active",
        "joiningDate": "2021-12-08"
    },
    {
        "id": 10,
        "doctorId": "DOC-1010",
        "avatar": "https://i.pravatar.cc/150?img=20",
        "name": "Dr. Charlotte White",
        "email": "charlotte.white@hospivo.com",
        "phone": "+1 9876543219",
        "gender": "Female",
        "department": "General Medicine",
        "specialization": "Physician",
        "qualification": "MBBS, MD",
        "experience": 6,
        "status": "Active",
        "joiningDate": "2024-02-05"
    }
]

function DashboardPage() {
    const navigate = useNavigate()

    function handleView(doctor: Doctor) {
        console.log(doctor, "/VIEW")
    }

    function handleEdit(doctor: Doctor) {
        console.log(doctor, "/EDIT")
    }

    function handleDelete(doctor: Doctor) {
        console.log(doctor, "/DELETE")
    }

    const columns: ColumnDef<Doctor>[] = [
        {
            accessorKey: "avatar",
            header: "Doctor",
            cell: ({ row }) => {
                const doctor = row.original;

                return (
                    <div className="flex items-center gap-3 min-w-56">
                        <Avatar
                            src={doctor.avatar}
                            alt={doctor.name}
                            size="md"
                        />

                        <div>
                            <p className="font-medium text-slate-800">
                                {doctor.name}
                            </p>

                            <p className="text-xs text-slate-500">
                                {doctor.doctorId}
                            </p>
                        </div>
                    </div>
                );
            },
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "phone",
            header: "Phone",
        },
        {
            accessorKey: "gender",
            header: "Gender",
        },
        {
            accessorKey: "department",
            header: "Department",
        },
        {
            accessorKey: "specialization",
            header: "Specialization",
        },
        {
            accessorKey: "qualification",
            header: "Qualification",
        },
        {
            accessorKey: "experience",
            header: "Experience",
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => (
                <Badge
                    variant={
                        row.original.status === "Active"
                            ? "success"
                            : row.original.status === "On Leave"
                                ? "warning"
                                : "danger"
                    }
                >
                    {row.original.status}
                </Badge>
            ),
        },
        {
            accessorKey: "joiningDate",
            header: "Joining Date",
            cell: ({ row }) =>
                row.original?.joiningDate ? new Date(row.original?.joiningDate).toLocaleDateString() : "-",
        },
        {
            id: "actions",
            header: "Actions",

            cell: ({ row }) => {

                const doctor = row.original;

                return (

                    <div className="flex items-center gap-2">

                        <button
                            onClick={() => handleView(doctor)}
                            className="rounded-lg p-2 hover:bg-slate-100"
                        >
                            <Eye size={18} />
                        </button>

                        <button
                            onClick={() => handleEdit(doctor)}
                            className="rounded-lg p-2 hover:bg-primary-light text-primary"
                        >
                            <Pencil size={18} />
                        </button>

                        <button
                            onClick={() => handleDelete(doctor)}
                            className="rounded-lg p-2 hover:bg-red-100 text-red-500"
                        >
                            <Trash2 size={18} />
                        </button>

                    </div>

                );

            },
        }

    ];
    return (
        <>
            <PageHeader
                title="Dashboard"
                subtitle="Monitor key metrics, recent activities, and overall platform performance."
                breadcrumb={[
                    { label: "Dashboard" },
                ]}
            />
            <DataTable
                data={doctors || []}
                columns={columns}
                loading={false}
                error=""
                emptyComponent={
                    <EmptyState
                        image="/empty/No-Doctor.png"
                        title="No Doctors Found"
                        description="Start by adding your first doctor."
                        buttonText="Add Doctor"
                        onClick={() => navigate("/admin/doctors/create")}
                    />
                }
            />
        </>
    );
}

export default DashboardPage
