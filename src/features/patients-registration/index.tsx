import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { PatientsDialogs } from './components/patients-dialogs'
import { PatientsPrimaryButtons } from './components/patients-primary-buttons'
import PatientsProvider from './context/patients-context'
import { patients } from './data/patients'

export default function PatientsRegistration() {
  return (
    <PatientsProvider>
      <Header fixed>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-2 flex items-center justify-between space-y-2 flex-wrap gap-x-4'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>
              Patients Registration
            </h2>
            <p className='text-muted-foreground'>
              Here&apos;s a list of your patients!
            </p>
          </div>
          <PatientsPrimaryButtons />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <DataTable data={patients} columns={columns} />
        </div>
      </Main>

      <PatientsDialogs />
    </PatientsProvider>
  )
}
