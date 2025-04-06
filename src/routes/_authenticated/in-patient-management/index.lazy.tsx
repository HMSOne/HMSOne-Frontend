import { createLazyFileRoute } from '@tanstack/react-router'
import ComingSoon from '@/components/coming-soon'

export const Route = createLazyFileRoute(
  '/_authenticated/in-patient-management/'
)({
  component: ComingSoon,
})
