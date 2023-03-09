import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import * as Dialog from '@radix-ui/react-dialog';
import './Modal.css'

interface ModalProps {
    open: boolean
    name: string
    entourage: string
    attendance: number
    justifiedAbsences: number
    unJustifiedAbsences: number
    state: string
    handleShow: () => void
}


function ModalComponent({open, name, entourage, attendance, justifiedAbsences, unJustifiedAbsences, handleShow, state}:ModalProps) {


  return (
    <div className="modal">
            <Dialog.Root
                open={open}
            >
                <Dialog.Portal>
                    <Dialog.Overlay className='DialogOverlay' />
                    <Dialog.Content className='DialogContent'>
                        <Dialog.Title className='DialogTitle'>
                            Informações do deputado
                        </Dialog.Title>
                        <Table striped bordered hover size='sm'>
                            <thead>
                                <tr>
                                <th>Nome</th>
                                <th>Partido</th>
                                <th>Estado</th>
                                <th>Presenças</th>
                                <th>Faltas justificadas</th>
                                <th>Faltas não justificadas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{name}</td>
                                <td>{entourage}</td>
                                <td>{state}</td>
                                <td>{attendance}</td>
                                <td>{justifiedAbsences}</td>
                                <td>{unJustifiedAbsences}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Dialog.Close asChild>
                            <Button variant='danger' className='close-button' onClick={handleShow}>Fechar</Button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
    </div>
  )
}

export default ModalComponent