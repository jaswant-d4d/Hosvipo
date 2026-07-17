import { PageHeader } from "../../../components/ui"
import EmptyState from "../../../components/ui/EmptyState"

function HospitalsPage() {
    return (
        <>
            <PageHeader
                title="Hospitals"
                subtitle="Manage hospital registrations, details, and operational status across the platform."
                breadcrumb={[
                    { label: "Dashboard", href: "/admin/dashboard" },
                    { label: "Hospitals" },
                ]}
            />
            <EmptyState
                image="/empty/No-Hospitals.png"
                title="No Hospitals Found"
                description="You haven't created any hospitals yet. Create your first hospital to continue."
            />
        </>
    )
}

export default HospitalsPage
