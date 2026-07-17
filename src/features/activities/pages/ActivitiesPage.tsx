import { PageHeader } from '../../../components/ui'

function ActivitiesPage() {
    return (
        <>
            <PageHeader
                title="Activity Logs"
                subtitle="Track user actions, system events, and administrative activities across the platform."
                breadcrumb={[
                    { label: "Dashboard", href: "/admin/dashboard" },
                    { label: "Activity Logs" },
                ]}
            />
        </>
    )
}

export default ActivitiesPage
