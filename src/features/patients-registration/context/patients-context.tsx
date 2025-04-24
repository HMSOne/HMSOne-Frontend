import React, { useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { Patient } from '../data/schema'

type PatientsDialogType = 'create' | 'update' | 'delete' | 'import' | 'export'

interface PatientsContextType {
  open: PatientsDialogType | null
  setOpen: (str: PatientsDialogType | null) => void
  currentRow: Patient | null
  setCurrentRow: React.Dispatch<React.SetStateAction<Patient | null>>
}

const PatientsContext = React.createContext<PatientsContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export default function PatientsProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<PatientsDialogType>(null)
  const [currentRow, setCurrentRow] = useState<Patient | null>(null)
  return (
    <PatientsContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </PatientsContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePatients = () => {
  const patientsContext = React.useContext(PatientsContext)

  if (!patientsContext) {
    throw new Error('usePatients has to be used within <PatientsContext>')
  }

  return patientsContext
}
