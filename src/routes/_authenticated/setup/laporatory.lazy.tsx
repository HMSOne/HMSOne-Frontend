import { createLazyFileRoute } from '@tanstack/react-router'
import ComingSoon from '@/components/coming-soon'

export const Route = createLazyFileRoute('/_authenticated/setup/laporatory')({
  component: ComingSoon,
})
