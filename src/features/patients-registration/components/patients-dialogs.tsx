import { toast } from '@/hooks/use-toast'
import { ConfirmDialog } from '@/components/confirm-dialog'
import { usePatients } from '../context/patients-context'
import { PatientsImportDialog } from './patients-import-dialog'
import { PatientsMutateDrawer } from './patients-mutate-drawer'

export function PatientsDialogs() {
  const { open, setOpen, currentRow, setCurrentRow } = usePatients()
  return (
    <>
      <PatientsMutateDrawer
        key='patient-create'
        open={open === 'create'}
        onOpenChange={() => setOpen('create')}
      />

      <PatientsImportDialog
        key='patients-import'
        open={open === 'import'}
        onOpenChange={() => setOpen('import')}
      />

      {currentRow && (
        <>
          <PatientsMutateDrawer
            key={`patient-update-${currentRow.shortId}`}
            open={open === 'update'}
            onOpenChange={() => {
              setOpen('update')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            currentRow={currentRow}
          />

          <PatientsMutateDrawer
            key={`patient-detail-${currentRow.shortId}`}
            open={open === 'detail'}
            onOpenChange={() => {
              setOpen('detail')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            currentRow={currentRow}
          />

          <ConfirmDialog
            key='patient-delete'
            destructive
            open={open === 'delete'}
            onOpenChange={() => {
              setOpen('delete')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            handleConfirm={() => {
              setOpen(null)
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
              toast({
                title: 'The following patient has been deleted:',
                description: (
                  <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                    <code className='text-white'>
                      {JSON.stringify(currentRow, null, 2)}
                    </code>
                  </pre>
                ),
              })
            }}
            className='max-w-md'
            title={`Delete this patient: ${currentRow.shortId} ?`}
            desc={
              <>
                You are about to delete a patient with the ID{' '}
                <strong>{currentRow.shortId}</strong>. <br />
                This action cannot be undone.
              </>
            }
            confirmText='Delete'
          />
        </>
      )}
    </>
  )
}
