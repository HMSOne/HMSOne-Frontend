import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconNotification,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,
  IconCalendarBolt,
  IconListCheck,
  IconBolt,
  IconEmergencyBed,
  IconBed,
  IconHomeEco,
  IconMicroscope,
  IconHeartHandshake,
  IconRadioactive,
  IconBuildings,
  IconTemplate,
  IconSettingsAutomation,
  IconMicroscopeOff,
  IconBuildingPlus,
  IconReport,
} from '@tabler/icons-react'
import { AudioWaveform, Command, Microscope, HardHat } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'ki2kid',
    email: 'ki2kuroba@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Admins',
      logo: Command,
      plan: 'HMSOne Software',
    },
    {
      name: 'Doctors',
      logo: AudioWaveform,
      plan: 'HMSOne Software',
    },
    {
      name: 'LapTechnicans',
      logo: Microscope,
      plan: 'HMSOne Software',
    },
    {
      name: 'Biomedical Engineers',
      logo: HardHat,
      plan: 'HMSOne Software',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Appointments',
          url: '/appointments',
          icon: IconCalendarBolt,
        },
        {
          title: 'Patients Registration',
          url: '/patients-registration',
          icon: IconListCheck,
        },
        {
          title: 'Clinical Management',
          url: '/clinical-management',
          icon: IconBolt,
        },
        {
          title: 'Emergency',
          url: '/emergency',
          icon: IconEmergencyBed,
        },
        {
          title: 'Operation Theater',
          url: '/operation-theater',
          icon: IconBed,
        },
        {
          title: 'In-Patient Management',
          url: '/in-patient-management',
          icon: IconHomeEco,
        },
        {
          title: 'Laporatory',
          url: '/laporatory',
          icon: IconMicroscope,
        },
        {
          title: 'Blood Bank',
          url: '/blood-bank',
          icon: IconHeartHandshake,
        },
        {
          title: 'Radiology',
          url: '/radiology',
          icon: IconRadioactive,
        },
        {
          title: 'Inventory',
          url: '/inventory',
          icon: IconBuildings,
        },
        {
          title: 'Users',
          url: '/users',
          icon: IconUsers,
        },
      ],
    },
    {
      title: 'Software',
      items: [
        {
          title: 'Setup',
          icon: IconSettingsAutomation,
          items: [
            {
              title: 'Laporatory Setup',
              url: '/setup/laporatory',
              icon: IconMicroscopeOff,
            },
            {
              title: 'Inventory Setup',
              url: '/setup/inventory',
              icon: IconBuildingPlus,
            },
            {
              title: 'Custom Template',
              url: '/setup/custom-template',
              icon: IconTemplate,
            },
          ],
        },
        {
          title: 'Maintenance',
          icon: IconBug,
          items: [
            {
              title: 'Software Reports',
              url: '/maintenance/software-reports',
              icon: IconReport,
            },
          ],
        },
        {
          title: 'Auth',
          icon: IconLockAccess,
          items: [
            {
              title: 'Sign In',
              url: '/sign-in',
            },
            {
              title: 'Sign In (2 Col)',
              url: '/sign-in-2',
            },
            {
              title: 'Sign Up',
              url: '/sign-up',
            },
            {
              title: 'Forgot Password',
              url: '/forgot-password',
            },
            {
              title: 'OTP',
              url: '/otp',
            },
          ],
        },
        {
          title: 'Errors',
          icon: IconBug,
          items: [
            {
              title: 'Unauthorized',
              url: '/401',
              icon: IconLock,
            },
            {
              title: 'Forbidden',
              url: '/403',
              icon: IconUserOff,
            },
            {
              title: 'Not Found',
              url: '/404',
              icon: IconError404,
            },
            {
              title: 'Internal Server Error',
              url: '/500',
              icon: IconServerOff,
            },
            {
              title: 'Maintenance Error',
              url: '/503',
              icon: IconBarrierBlock,
            },
          ],
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Display',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}
