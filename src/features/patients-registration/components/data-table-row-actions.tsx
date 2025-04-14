import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Link } from '@tanstack/react-router'
import { Row } from '@tanstack/react-table'
import { IconCalendarBolt, IconTrash } from '@tabler/icons-react'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, // DropdownMenuRadioGroup,
  // DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { usePatients } from '../context/patients-context'
import { doctors } from '../data/doctors'
import { patientSchema } from '../data/schema'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const patient = patientSchema.parse(row.original)

  const { setOpen, setCurrentRow } = usePatients()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
        >
          <DotsHorizontalIcon className='h-4 w-4' />
          <span className='sr-only'>Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-[160px]'>
        <DropdownMenuItem
          onClick={() => {
            setCurrentRow(patient)
            setOpen('update')
          }}
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Transfer</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <ScrollArea className='h-[500px] w-[300px] p-2'>
              {doctors.map((doctor) => (
                <DropdownMenuItem
                  key={doctor.shortId}
                  className='cursor-pointer'
                  onClick={() => {
                    toast({
                      title: 'You submitted the following values:',
                      description: (
                        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                          <code className='text-white'>
                            {JSON.stringify({ ...patient, doctor }, null, 2)}
                          </code>
                        </pre>
                      ),
                    })
                  }}
                >
                  {doctor.user_appreviation} {doctor.first_name}{' '}
                  {doctor.last_name}
                </DropdownMenuItem>
              ))}
            </ScrollArea>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a
            href={`mailto:${patient.email}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            Send an Email
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            to='/patients-registration/add-appointment'
            search={{
              patientId: patient.shortId,
              patientName: patient.fullName,
              patientEmail: patient.email,
              patientContact: patient.contact,
            }}
          >
            Add appointment
          </Link>
          <DropdownMenuShortcut>
            <IconCalendarBolt size={16} />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            setCurrentRow(patient)
            setOpen('delete')
          }}
        >
          Delete
          <DropdownMenuShortcut>
            <IconTrash size={16} />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
