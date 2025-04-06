import {
  IconCash,
  IconShield,
  IconUserBolt,
  IconUserCheck,
  IconUserDollar,
  IconUserEdit,
  IconUserHeart,
  IconUsersGroup,
  IconUserShield,
  IconUsersPlus,
} from '@tabler/icons-react'
import { UserStatus } from './schema'

export const callTypes = new Map<UserStatus, string>([
  ['active', 'bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200'],
  ['inactive', 'bg-neutral-300/40 border-neutral-300'],
  ['invited', 'bg-sky-200/40 text-sky-900 dark:text-sky-100 border-sky-300'],
  [
    'suspended',
    'bg-destructive/10 dark:bg-destructive/50 text-destructive dark:text-primary border-destructive/10',
  ],
])

export const userTypes = [
  {
    label: 'Software Engineer',
    value: 'softwareEngineer',
    icon: IconShield,
  },
  {
    label: 'Admin',
    value: 'admin',
    icon: IconUserShield,
  },
  {
    label: 'Lab Technician',
    value: 'labTechnician',
    icon: IconUserCheck,
  },
  {
    label: 'Doctor',
    value: 'doctor',
    icon: IconUserHeart,
  },
  {
    label: 'Nurse',
    value: 'nurse',
    icon: IconUsersPlus,
  },
  {
    label: 'Biomedical Engineer',
    value: 'biomedicalEngineer',
    icon: IconUserEdit,
  },
  {
    label: 'Pharmacist',
    value: 'pharmacist',
    icon: IconUserBolt,
  },
  {
    label: 'Receptionist',
    value: 'receptionist',
    icon: IconUserDollar,
  }
] as const
