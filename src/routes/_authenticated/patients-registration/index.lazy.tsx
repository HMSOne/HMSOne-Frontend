import { createLazyFileRoute } from '@tanstack/react-router'
import PatientsRegistration from '@/features/patients-registration'

export const Route = createLazyFileRoute(
  '/_authenticated/patients-registration/'
)({
  component: PatientsRegistration,
})
