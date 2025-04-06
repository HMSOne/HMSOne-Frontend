import {
  IconShield,
  IconUserBolt,
  IconUserCheck,
  IconUserDollar,
  IconUserEdit,
  IconUserHeart,
  IconUserShield,
  IconUsersPlus,
} from '@tabler/icons-react'

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
  },
] as const
