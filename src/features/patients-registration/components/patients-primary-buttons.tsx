import { IconDownload, IconPlus, IconUpload } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { usePatients } from '../context/patients-context'

export function PatientsPrimaryButtons() {
  const { setOpen } = usePatients()
  return (
    <div className='flex gap-2'>
      <Button
        variant='outline'
        className='space-x-1'
        onClick={() => setOpen('import')}
      >
        <span>Import</span> <IconDownload size={18} />
      </Button>
      <Button
        variant='outline'
        className='space-x-1'
        onClick={() => {
          setOpen('export')
        }}
      >
        <span>Export</span> <IconUpload size={18} />
      </Button>
      <Button className='space-x-1' onClick={() => setOpen('create')}>
        <span>Create</span> <IconPlus size={18} />
      </Button>
    </div>
  )
}
