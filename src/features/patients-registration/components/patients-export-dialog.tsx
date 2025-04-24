import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PatientsExportDialog({ open, onOpenChange }: Props) {
  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        onOpenChange(val)
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Export Patients Data</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          You can export the patients data in CSV format.
        </DialogDescription>
        <DialogFooter className='gap-2 sm:gap-0'>
          <DialogClose asChild>
            <Button variant='outline'>Close</Button>
          </DialogClose>
          <Button variant='secondary'>Download</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
