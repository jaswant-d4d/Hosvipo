import { Download, Plus } from "lucide-react"
import { Button, PageHeader } from "../../../components/ui"
import EmptyState from "../../../components/ui/EmptyState"

function AppointmentsPage() {
    return (
        <>
            <PageHeader
                title="Appointments"
                subtitle="Track and manage appointments."

                breadcrumb={[
                    {
                        label: "Dashboard",
                        href: "/admin/dashboard",
                    },
                    {
                        label: "Appointments",
                        href: "/admin/appointments",
                    },
                    {
                        label: "Appointment Details",
                    },
                ]}

                actions={
                    <>
                        <Button variant="outlinePrimary" leftIcon={<Download />} onClick={() => { }}>
                            Export
                        </Button>

                        <Button leftIcon={<Plus />} onClick={() => { }} >
                            Create Appointment
                        </Button>
                    </>
                }
            />
            <EmptyState
                image="/empty/No-Appointments.png"
                title="No Appointments Found"
                description="There are no appointments scheduled. Create a new appointment to get started."
            />
        </>
    )
}

export default AppointmentsPage
