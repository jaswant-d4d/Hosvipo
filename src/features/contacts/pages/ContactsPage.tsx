import { PageHeader } from '../../../components/ui'
import EmptyState from '../../../components/ui/EmptyState'

function ContactsPage() {
    return (
        <>
            <PageHeader
                title="Contacts"
                subtitle="Review and manage inquiries, feedback, and support requests submitted through the platform."
                breadcrumb={[
                    { label: "Dashboard", href: "/admin/dashboard" },
                    { label: "Contacts" },
                ]}
            />
            <EmptyState
                image="/empty/No-Records.png"
                title="No Contacts Found"
                description="You haven't created any hospitals yet. Create your first hospital to continue."
            />
        </>
    )
}

export default ContactsPage
