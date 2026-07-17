import { PageHeader } from "../../../components/ui"
import EmptyState from "../../../components/ui/EmptyState"

function NotificationsPage() {
  return (
    <>
      <PageHeader
        title="Notifications"
        subtitle="Create, schedule, and monitor notifications sent to hospitals, doctors, and staff."
        breadcrumb={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Notifications" },
        ]}
      />
      <EmptyState
        image="/empty/No-Notifications.png"
        title="No Notifications"
        description="You're all caught up! There are no new notifications."
      />
    </>
  )
}

export default NotificationsPage
