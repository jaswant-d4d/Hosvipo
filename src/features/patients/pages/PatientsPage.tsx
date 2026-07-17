import { useNavigate } from "react-router-dom"
import EmptyState from "../../../components/ui/EmptyState"
import { PageHeader } from "../../../components/ui";

function PatientsPage() {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader
        title="Patients"
        subtitle="View and manage patient records, profiles, and healthcare information."
        breadcrumb={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Patients" },
        ]}
      />
      <EmptyState
        image="/empty/No-Patients.png"
        title="No Patients Found"
        description="There are no patients available. Start by adding your first patient."
        buttonText="Add Patient"
        onClick={() => navigate("/patients/create")}
      />
    </>
  )
}

export default PatientsPage
